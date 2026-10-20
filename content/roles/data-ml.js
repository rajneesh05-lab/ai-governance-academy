ACADEMY.tracks["data-ml"] = [
  {
    id: "dml-use", stage: "use", minutes: 30,
    title: "AI in the data and ML workflow",
    summary: "Use LLMs to speed up exploration, SQL, feature work, labelling and documentation while keeping analysis correct and reproducible.",
    outcomes: [
      "Identify the data tasks where LLM assistance is fast and safe",
      "Use AI for labelling and synthetic data without contaminating evaluation",
      "Keep AI-assisted analysis reproducible and verifiable"
    ],
    sections: [
      { h: "High-value uses", body: "LLMs remove a lot of friction from data work when the output can be checked by running it.", points: [
        "Writing and explaining SQL, pandas or Spark code against a schema you provide.",
        "Profiling unfamiliar datasets and suggesting quality checks.",
        "Drafting feature ideas, data dictionaries and model documentation.",
        "Turning analysis results into plain-language summaries for stakeholders.",
        "Extracting structured fields from text (contracts, tickets, notes) at scale."
      ] },
      { h: "LLMs as labellers", body: "LLMs can label text cheaply and quickly, but labels are only as good as the instructions and checks.", points: [
        "Write a labelling guide as you would for human annotators, with examples of each class and edge cases.",
        "Measure agreement between the LLM and human labels on a sample before scaling.",
        "Keep a human-labelled gold set that the LLM never sees, for honest evaluation.",
        "Watch for systematic errors on minority classes and non-English text."
      ] },
      { h: "Synthetic data, with care", body: "Synthetic data helps with privacy, rare cases and testing, but it can mislead.", points: [
        "Use it to augment rare cases or test pipelines, not to replace real evaluation data.",
        "Check that synthetic records do not reproduce real personal data.",
        "Validate that distributions match the real data on the features that matter."
      ] },
      { h: "Reproducibility rules", body: "An analysis you cannot rerun is an opinion. Make AI-assisted work as reproducible as the rest.", points: [
        "Commit the generated code, not just the result; run it yourself.",
        "Record model, version and prompt for any LLM step that produces data (labels, extractions).",
        "Never let an LLM compute a business number in free text; have it write code that computes it.",
        "Only use approved tools for production or personal data."
      ] }
    ],
    scenario: { title: "The summary with the wrong total", situation: "An analyst pasted a monthly sales table into a chatbot and asked for a summary. The narrative was excellent, but the stated year-to-date total was off by 4% and went into a leadership deck.", approach: [
      "LLMs are unreliable at arithmetic in free text.",
      "Use the LLM to write the aggregation code, run it, and then ask it to narrate the computed figures.",
      "Add a reconciliation check against the source system for any number that goes to leadership."
    ] },
    exercise: "Take a labelling or extraction task you have. Label 100 examples by hand, run an LLM with a written guide, and compute agreement per class. Decide whether it is good enough.",
    watchouts: ["Test-set leakage: never put evaluation data into prompts used to build the system.", "Check your tool's terms before uploading data."],
    quiz: [
      { q: "What is the safest way to get correct numbers from an LLM-assisted analysis?", o: ["Ask the LLM to calculate totals", "Have the LLM write code that computes them, and run it", "Ask two LLMs and average", "Round the numbers"], a: 1, why: "Code is deterministic and reviewable; free-text arithmetic is not reliable." },
      { q: "Before scaling LLM labelling, what should you measure?", o: ["Token cost only", "Agreement with human labels on a sample, per class", "Model size", "Labelling speed"], a: 1, why: "Agreement, especially per class, tells you whether the labels are trustworthy." },
      { q: "Why keep a gold evaluation set the LLM never sees?", o: ["To save money", "To avoid leakage and get an honest measure of quality", "Because LLMs cannot read it", "For legal reasons only"], a: 1, why: "If evaluation data leaks into development, scores become optimistic and misleading." },
      { q: "What is a good use of synthetic data?", o: ["Replacing all real evaluation data", "Augmenting rare cases and testing pipelines", "Proving fairness to regulators", "Avoiding data governance"], a: 1, why: "Synthetic data supplements but should not replace real evaluation." },
      { q: "Which should be recorded for an LLM step that produces labels?", o: ["Nothing, labels are labels", "Model, version and prompt", "Only the date", "The analyst's opinion"], a: 1, why: "Recording the configuration makes labels reproducible and auditable." }
    ]
  },
  {
    id: "dml-identify", stage: "identify", minutes: 35,
    title: "Framing the problem and choosing the approach",
    summary: "Turn a business question into a well-posed ML or GenAI problem, and choose between heuristics, classic ML, foundation models and fine-tuning.",
    outcomes: [
      "Frame a business question as a prediction, generation or retrieval problem with a clear metric",
      "Run a fast baseline before investing in complex models",
      "Decide when fine-tuning, classic ML or a foundation model is justified"
    ],
    sections: [
      { h: "Framing comes first", body: "Most failed ML projects solved the wrong problem well. Agree the framing with the business before touching data.", points: [
        "Decision: what action will change based on the model's output, and who takes it?",
        "Target: what exactly is predicted or generated, at what moment, with what data available at that moment?",
        "Metric: which offline metric best reflects the business outcome (precision at k, recall on the costly class, mean absolute error)?",
        "Cost of errors: is a false positive or a false negative worse, and by how much?"
      ] },
      { h: "Baselines before brilliance", body: "A simple baseline tells you whether ML is worth it and gives a yardstick.", points: [
        "Heuristic or rules baseline from domain experts.",
        "Simple model: logistic regression or gradient-boosted trees on obvious features.",
        "For text: a prompted foundation model with a few examples.",
        "If the baseline already meets the need, ship it and stop."
      ] },
      { h: "Choosing the model family", body: "Match the method to the data and constraints.", points: [
        "Tabular, structured data: gradient-boosted trees remain hard to beat and are explainable.",
        "Text, images and documents: foundation models via prompting or RAG first.",
        "High volume, narrow text task with stable labels: fine-tune a smaller model for cost and latency.",
        "Strict explainability requirements (for example credit decisions): prefer interpretable models and document reasons."
      ] },
      { h: "Feasibility checks", body: "Before committing, confirm the basics.", points: [
        "Is there enough labelled data, and is it representative of the population the model will serve?",
        "Are the features available at prediction time (no leakage from the future)?",
        "Is use of this data lawful and in line with the purpose it was collected for?",
        "Can the result be deployed and monitored in the target system?"
      ] }
    ],
    scenario: { title: "The churn model nobody used", situation: "A team built a highly accurate churn model. Six months later, retention rates had not moved because the sales team had no capacity to act on the weekly list of 5,000 at-risk accounts.", approach: [
      "The framing missed the decision: sales could only contact 200 accounts a week.",
      "The right metric was precision in the top 200 (precision at k), combined with the expected value of intervening.",
      "Framing with the people who act on the output would have changed the model and the success measure."
    ] },
    exercise: "Write a one-page problem framing for a current request: decision, target, metric, error costs, baseline, and data feasibility.",
    watchouts: ["Data available in training but not at prediction time causes leakage and inflated scores.", "Accuracy is rarely the right metric for imbalanced problems."],
    quiz: [
      { q: "What should a problem framing define first?", o: ["The model architecture", "The decision the output will drive and who takes it", "The GPU budget", "The dashboard design"], a: 1, why: "Without a decision and an owner, even an accurate model creates no value." },
      { q: "For a tabular prediction task, which is usually a strong first model?", o: ["A large language model", "Gradient-boosted trees", "A diffusion model", "An agent"], a: 1, why: "Gradient-boosted trees are accurate, fast and explainable on tabular data." },
      { q: "Fraud is 0.5% of transactions. Why is accuracy a poor metric?", o: ["It is hard to calculate", "A model that predicts 'no fraud' always is 99.5% accurate but useless", "Regulators forbid it", "It ignores latency"], a: 1, why: "Imbalanced problems need metrics such as precision, recall or cost-weighted measures." },
      { q: "What is target leakage?", o: ["Data stolen by attackers", "Using information in training that would not be available at prediction time", "Losing labels", "Model drift"], a: 1, why: "Leakage makes offline results look better than real-world performance." },
      { q: "When is fine-tuning a smaller model most justified?", o: ["For questions over changing documents", "For a high-volume, narrow task with stable labels where cost and latency matter", "For every project", "When there is no labelled data"], a: 1, why: "Fine-tuning pays off for stable, narrow, high-volume tasks." }
    ]
  },
  {
    id: "dml-implement", stage: "implement", minutes: 35,
    title: "Evaluation, MLOps and LLMOps",
    summary: "Build the evaluation, deployment and monitoring pipeline that turns a model into a dependable production service.",
    outcomes: [
      "Design an offline and online evaluation strategy, including fairness slices",
      "Use experiment tracking, a model registry and versioned data",
      "Set up monitoring for drift, quality and cost"
    ],
    sections: [
      { h: "Evaluation that predicts production", body: "Offline scores only matter if they reflect how the model will be used.", points: [
        "Split data by time for forecasting and behaviour problems, not randomly.",
        "Report metrics by segment (region, product, customer type, protected attributes where lawful) to reveal hidden failures.",
        "For LLM systems, combine automated checks, rubric-based LLM judges and human review.",
        "Agree thresholds with the business owner before results are known."
      ] },
      { h: "The MLOps backbone", body: "Reproducibility and traceability are what let you ship quickly and pass audits.", points: [
        "Version data, code, configuration and models together.",
        "Track experiments: parameters, metrics, data versions and artefacts.",
        "Promote models through a registry with stages (staging, production) and approvals.",
        "Automate training and evaluation pipelines; avoid notebook-only production models."
      ] },
      { h: "Deploying safely", body: "Release in stages so problems are cheap.", points: [
        "Shadow mode: run the model alongside the current process without acting.",
        "Canary or A/B test with a small share of traffic and clear stop criteria.",
        "Human review of a sample of decisions in early weeks.",
        "Rollback plan to the previous model or rule-based fallback."
      ] },
      { h: "Monitoring in production", body: "Models degrade quietly. Monitor inputs, outputs and outcomes.", points: [
        "Data drift: input distributions shift (new products, new customer types).",
        "Concept drift: the relationship between inputs and outcomes changes.",
        "Quality: delayed ground truth, sampled human review, user feedback.",
        "For LLM systems also track refusal rate, hallucination checks, token cost and latency.",
        "Define alert thresholds and an owner who responds."
      ] }
    ],
    scenario: { title: "The forecast that missed the new store format", situation: "A demand forecasting model performed well for a year, then errors doubled in stores using a new layout. Nobody noticed for two months.", approach: [
      "Segment-level monitoring by store format would have shown the shift early.",
      "Drift alerts on input features (new layout code) would have flagged unseen categories.",
      "A retraining trigger and owner turn monitoring into action."
    ] },
    exercise: "For a model you own, list the three most likely drift sources, the metric that would reveal each, and the alert threshold and owner.",
    watchouts: ["Random splits on time-dependent data overstate performance.", "Monitoring without an owner is just a dashboard."],
    quiz: [
      { q: "Why report evaluation metrics by segment?", o: ["To make reports longer", "To reveal failures hidden in the overall average, including fairness issues", "Because tools require it", "To reduce training time"], a: 1, why: "Aggregates can hide poor performance for specific groups." },
      { q: "What is shadow mode deployment?", o: ["Running a model at night", "Running the new model alongside the current process without acting on its outputs", "Hiding the model from auditors", "Deploying without monitoring"], a: 1, why: "Shadow mode gives real-world evidence with no customer impact." },
      { q: "What is concept drift?", o: ["Input data format changes", "The relationship between inputs and the outcome changes", "The model file is corrupted", "Developers change the code"], a: 1, why: "Concept drift means the world changed, so learned patterns no longer hold." },
      { q: "What does a model registry provide?", o: ["Faster training", "Versioned models with stages, metadata and approvals", "Free GPUs", "Automatic labelling"], a: 1, why: "A registry supports controlled promotion and traceability." },
      { q: "For a forecasting model, how should data be split for evaluation?", o: ["Randomly", "By time, training on the past and testing on later periods", "Alphabetically", "It does not matter"], a: 1, why: "Time-based splits mimic real use and prevent leakage from the future." }
    ]
  },
  {
    id: "dml-govern", stage: "govern", minutes: 30,
    title: "Model risk management and responsible AI",
    summary: "Document, validate and control models so they are fair, explainable, compliant and defensible.",
    outcomes: [
      "Produce model cards and datasheets that satisfy reviewers",
      "Run fairness and explainability analysis proportionate to risk",
      "Support independent validation and the model inventory"
    ],
    sections: [
      { h: "Model documentation", body: "Documentation lets others judge whether a model is fit for purpose.", points: [
        "Model card: intended use, out-of-scope uses, training data, metrics by segment, limitations, ethical considerations.",
        "Datasheet for datasets: origin, collection method, consent and legal basis, known gaps and biases.",
        "Keep both in the repository and update them at each retrain."
      ] },
      { h: "Fairness in practice", body: "Fairness is a design and governance choice, not a single metric.", points: [
        "Identify affected groups and the harms that matter (being wrongly denied, wrongly flagged).",
        "Measure error rates and outcome rates across groups where lawful and possible.",
        "Choose a fairness criterion with the business and legal owners, and document the trade-off.",
        "Mitigate through data, features, thresholds or process (human review), then re-measure."
      ] },
      { h: "Explainability", body: "Different audiences need different explanations.", points: [
        "Global: which features drive the model overall (for example SHAP summaries).",
        "Local: why this specific prediction (top reasons), needed for adverse decisions about people.",
        "For LLM systems: citations to sources and logged reasoning steps or tool calls.",
        "Test that explanations are accurate and understandable to the end user."
      ] },
      { h: "Model risk management", body: "Many organisations, especially in financial services, apply a formal model risk lifecycle.", points: [
        "Inventory: every model registered with owner, purpose, risk tier and status.",
        "Independent validation for higher-risk models before use and periodically.",
        "Change control: material changes trigger re-validation.",
        "Ongoing monitoring reports to the model owner and risk function.",
        "Retirement: decommission models properly and archive evidence."
      ] }
    ],
    scenario: { title: "The screening model and the postcode", situation: "A tenant-screening model did not use ethnicity, but approval rates differed sharply between neighbourhoods. Postcode was acting as a proxy for protected characteristics.", approach: [
      "Removing a protected attribute does not remove bias; proxies remain.",
      "Measure outcomes by group, investigate proxy features, and consider removing or constraining them.",
      "This use case affects access to housing, so it is high risk: it needs documented fairness analysis, explanations for declined applicants and human review."
    ] },
    exercise: "Write a model card for a model you own or know. Include at least one metric by segment and one known limitation.",
    watchouts: ["'We don't use protected attributes' is not evidence of fairness.", "Explanations that are technically correct but meaningless to users do not meet transparency duties."],
    quiz: [
      { q: "What belongs in a model card?", o: ["Only accuracy", "Intended use, data, metrics by segment, limitations and ethical considerations", "The source code", "Marketing claims"], a: 1, why: "Model cards help reviewers judge fitness for purpose and limits." },
      { q: "A model excludes gender but uses job title and shopping history. Could it still be biased by gender?", o: ["No, gender is excluded", "Yes, through proxy features correlated with gender", "Only if the developer intended it", "Only for small datasets"], a: 1, why: "Correlated features can act as proxies, so outcomes must be measured." },
      { q: "When is a local explanation most needed?", o: ["For internal dashboards", "When a decision adversely affects a specific person", "Never", "Only during training"], a: 1, why: "People affected by decisions often have a right to meaningful reasons." },
      { q: "What is the purpose of independent model validation?", o: ["To speed up deployment", "To provide an objective check that a higher-risk model is sound and fit for use", "To replace monitoring", "To write documentation"], a: 1, why: "Independent challenge catches errors the builders miss." },
      { q: "What should happen after a material change to a high-risk model?", o: ["Nothing until the annual review", "Re-validation and updated documentation before use", "Only a code review", "Notify customers"], a: 1, why: "Change control ensures the validated model is the one in production." }
    ]
  }
];

ACADEMY.templates["data-ml"] = [
  {
    id: "dml-problem-framing", title: "ML problem framing canvas",
    purpose: "Agree the decision, target, metric and feasibility before modelling.",
    when: "At project start, with the business owner.",
    sections: [
      { h: "Decision", fields: ["Decision or action driven by the output", "Who acts on it, and their capacity", "Current process and baseline performance"] },
      { h: "Target and metric", fields: ["Exact target definition and prediction time", "Primary offline metric", "Business KPI it should move", "Cost of false positives vs false negatives"] },
      { h: "Data", fields: ["Data sources and owners", "Features available at prediction time", "Label source and quality", "Legal basis and purpose compatibility"] },
      { h: "Plan", fields: ["Baseline approach", "Success threshold", "Deployment target", "Monitoring approach"] }
    ]
  },
  {
    id: "dml-model-card", title: "Model card",
    purpose: "Document a model for users, reviewers and auditors.",
    when: "Before first deployment and at every retrain.",
    sections: [
      { h: "Model details", fields: ["Name, version, owner", "Model type and training date", "Intended use", "Out-of-scope uses"] },
      { h: "Data", fields: ["Training data sources and period", "Evaluation data", "Preprocessing", "Known gaps or biases"] },
      { h: "Performance", fields: ["Overall metrics", "Metrics by segment", "Fairness analysis", "Thresholds and rationale"] },
      { h: "Limitations and controls", fields: ["Known limitations", "Explainability approach", "Human oversight", "Monitoring and retraining triggers"] }
    ]
  },
  {
    id: "dml-monitoring-plan", title: "Model monitoring plan",
    purpose: "Define what is monitored, thresholds and who responds.",
    when: "Before production release.",
    sections: [
      { h: "Signals", fields: ["Input drift metrics", "Output distribution metrics", "Ground-truth quality metrics and delay", "LLM-specific: refusal rate, groundedness, cost, latency"] },
      { h: "Thresholds and response", fields: ["Alert thresholds per signal", "Owner and on-call route", "Retraining or rollback triggers", "Escalation to risk owner"] },
      { h: "Reporting", fields: ["Dashboard location", "Review cadence", "Report recipients"] }
    ]
  }
];
