ACADEMY.tracks["data-ml"] = [
  {
    id: "dml-use", stage: "use",
    title: "AI in the data and ML workflow",
    summary: "Use LLMs to speed up exploration, SQL, feature work, labelling and documentation while keeping analysis correct and reproducible.",
    outcomes: [
      "Identify the data tasks where LLM assistance is fast and safe",
      "Use AI for labelling and synthetic data without contaminating evaluation",
      "Keep AI-assisted analysis reproducible and verifiable"
    ],
    sections: [
      { h: "High-value uses", body: "LLMs remove a lot of friction from data work when the output can be checked by running it.\n\nThe rule that keeps this safe: the LLM writes code, the code computes numbers. An assistant that writes a SQL query you can read and rerun is reproducible and checkable. An assistant that reads a table and reports a total is neither, and is often subtly wrong.", example: "Asked 'Which regions grew fastest last quarter?', an analyst has the assistant draft the SQL against the documented sales mart, reads the joins and filters, runs it, and checks one region's figure against the finance dashboard. The narrative is then written from the query result, not from the model's reading of the data.", points: [
        "Writing and explaining SQL, pandas or Spark code against a schema you provide.",
        "Profiling unfamiliar datasets and suggesting quality checks.",
        "Drafting feature ideas, data dictionaries and model documentation.",
        "Turning analysis results into plain-language summaries for stakeholders.",
        "Extracting structured fields from text (contracts, tickets, notes) at scale."
      ] },
      { h: "LLMs as labellers", body: "LLMs can label text cheaply and quickly, but labels are only as good as the instructions and checks.\n\nA practical pattern is to have the LLM label everything, have people label a random sample of a few hundred items, and compare. Where agreement is high, the LLM labels can be used; where it is low, the guide or the categories need work, or those classes need human labelling.", points: [
        "Write a labelling guide as you would for human annotators, with examples of each class and edge cases.",
        "Measure agreement between the LLM and human labels on a sample before scaling.",
        "Keep a human-labelled gold set that the LLM never sees, for honest evaluation.",
        "Watch for systematic errors on minority classes and non-English text."
      ] },
      { h: "Synthetic data, with care", body: "Synthetic data helps with privacy, rare cases and testing, but it can mislead.\n\nA useful test before sharing synthetic data: try to find a real person in it. Check for exact or near-exact matches with real records, especially for rare combinations (a very old customer in a small town with an unusual product). Rare records are the ones most easily re-identified.", points: [
        "Use it to augment rare cases or test pipelines, not to replace real evaluation data.",
        "Check that synthetic records do not reproduce real personal data.",
        "Validate that distributions match the real data on the features that matter."
      ] },
      { h: "Reproducibility rules", body: "An analysis you cannot rerun is an opinion. Make AI-assisted work as reproducible as the rest.\n\nReproducibility is also your protection when something goes wrong. If a figure in a board pack is challenged, you need to show the query, the data snapshot and the code that produced it. 'The assistant said so' is not an audit trail.", example: "An analyst keeps each AI-assisted analysis in a notebook with the prompt used, the generated SQL, the date of the data snapshot and the output. When finance questions a churn figure two months later, the analysis is rerun in five minutes and the difference is traced to a late data correction.", points: [
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
    howto: {"title": "Using an LLM to label a dataset", "steps": [{"h": "Write the labelling guide", "body": "Definitions, examples and edge cases for each label, as you would give a human annotator."}, {"h": "Build a gold set", "body": "Have two people label 200 to 500 items independently and resolve disagreements. Measure their agreement; the LLM cannot be expected to beat it."}, {"h": "Run the LLM on the gold set", "body": "Use the guide as the prompt and structured output for the label. Measure agreement with the gold labels per class."}, {"h": "Fix the weak classes", "body": "Improve definitions and examples, merge confusing classes, or route those cases to people."}, {"h": "Label at scale and sample", "body": "Record model, version and prompt. Keep sampling a few percent for human review over time."}]},
    decide: {"title": "Who should compute what?", "cols": ["Task", "Use"], "rows": [["Totals, averages, growth rates, any business number", "Code or SQL that the LLM drafts and you run"], ["Explaining what a query or notebook does", "The LLM directly"], ["Writing a narrative from results", "The LLM, from the computed results, with numbers checked"], ["Labelling text at volume", "The LLM, validated against a human gold set"], ["Generating test or synthetic data", "The LLM or a synthetic data tool, checked for leakage of real records"]]},
    checklist: {"title": "AI-assisted analysis checklist", "items": ["Every number in the output was computed by code I can rerun.", "The generated code is committed with the analysis.", "Model, version and prompt are recorded for any LLM-produced data.", "LLM labels were checked against a human gold set, per class.", "Personal or confidential data only went into approved tools."]},
    cases: [{"title": "Thousands of COVID cases lost in a spreadsheet pipeline (England, 2020)", "body": "Nearly 16,000 positive COVID-19 test results went unreported for about a week in England because a data pipeline used an old spreadsheet file format with a row limit, silently cutting off records. Contact tracing for those cases was delayed.", "lesson": "Data workflows fail silently. Code, row counts and reconciliation checks catch what a quick visual check misses, whether a person or an AI built the pipeline."}],
    exercise: "Take a labelling or extraction task you have. Label 100 examples by hand, run an LLM with a written guide, and compute agreement per class. Decide whether it is good enough.",
    watchouts: ["Test-set leakage: never put evaluation data into prompts used to build the system.", "Check your tool's terms before uploading data."],
    quiz: [
      { q: "What is the safest way to get correct numbers from an LLM-assisted analysis?", o: ["Ask the LLM to calculate totals", "Have the LLM write code that computes them, and run it", "Ask two LLMs and average", "Round the numbers"], a: 1, why: "Code is deterministic and reviewable; free-text arithmetic is not reliable." },
      { q: "Before scaling LLM labelling, what should you measure?", o: ["Token cost only", "Agreement with human labels on a sample, per class", "Model size", "Labelling speed"], a: 1, why: "Agreement, especially per class, tells you whether the labels are trustworthy." },
      { q: "Why keep a gold evaluation set the LLM never sees?", o: ["To save money", "To avoid leakage and get an honest measure of quality", "Because LLMs cannot read it", "For legal reasons only"], a: 1, why: "If evaluation data leaks into development, scores become optimistic and misleading." },
      { q: "What is a good use of synthetic data?", o: ["Replacing all real evaluation data", "Augmenting rare cases and testing pipelines", "Proving fairness to regulators", "Avoiding data governance"], a: 1, why: "Synthetic data supplements but should not replace real evaluation." },
      { q: "Which should be recorded for an LLM step that produces labels?", o: ["Nothing, labels are labels", "Model, version and prompt", "Only the date", "The analyst's opinion"], a: 1, why: "Recording the configuration makes labels reproducible and auditable." },
      {"q": "What is the safest way to get a quarterly total with AI help?", "o": ["Paste the table and ask the model for the total", "Have the model write SQL, review and run it, and check a figure against a trusted source", "Ask two chatbots and average the answers", "Ask for the total in a table format"], "a": 1, "why": "The model writes code; the code computes numbers. That is reproducible and checkable."},
      {"q": "Your LLM labeller agrees with humans 95% overall but 60% on one class. What should you do?", "o": ["Use all the labels", "Improve the guide for that class, merge it, or route it to people", "Delete that class from the data", "Switch to a bigger model and skip checking"], "a": 1, "why": "Overall agreement hides weak classes. Fix or route the class that the LLM labels poorly."}
    ]
  },
  {
    id: "dml-identify", stage: "identify",
    title: "Framing the problem and choosing the approach",
    summary: "Turn a business question into a well-posed ML or GenAI problem, and choose between heuristics, classic ML, foundation models and fine-tuning.",
    outcomes: [
      "Frame a business question as a prediction, generation or retrieval problem with a clear metric",
      "Run a fast baseline before investing in complex models",
      "Decide when fine-tuning, classic ML or a foundation model is justified"
    ],
    sections: [
      { h: "Framing comes first", body: "Most failed ML projects solved the wrong problem well. Agree the framing with the business before touching data.\n\nWrite the framing on one page and get the decision owner to sign it. Teams skip this because it feels slow, then spend months optimising a metric nobody acts on.", example: "Framing for a collections model: Decision: which overdue accounts the team calls this week (capacity 400 calls). Target: probability of paying within 30 days if not called. Metric: amount recovered in the top 400, not overall AUC. Cost of errors: calling someone who would have paid wastes a call; missing someone who will not pay costs the balance.", points: [
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
      { h: "Choosing the model family", body: "Match the method to the data and constraints.\n\nFoundation models have changed the default for text and documents: a prompted model with a good evaluation set is now often the baseline to beat, and training your own model is the exception that needs justifying. For tabular prediction the old advice still holds: gradient-boosted trees remain hard to beat.", points: [
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
    howto: {"title": "From business question to a framed ML problem", "steps": [{"h": "Name the decision", "body": "Which action, by whom, how often and with what capacity. No decision, no model."}, {"h": "Define the target precisely", "body": "What is predicted, over what time window, from what point in time. Write down how the label is created."}, {"h": "Check for leakage", "body": "Make sure every feature is available at prediction time, and nothing in the features is a consequence of the outcome."}, {"h": "Pick a metric that matches the decision", "body": "For a top-N call list, precision or value in the top N matters more than overall accuracy."}, {"h": "Build the baseline", "body": "Rules from experts, then a simple model or a prompted foundation model. Compare on the same holdout."}, {"h": "Agree the go threshold", "body": "With the decision owner: how much better than the baseline is worth building and running?"}]},
    decide: {"title": "Which approach?", "cols": ["If you have…", "Start with…"], "rows": [["Tabular data with labels and a clear target", "Gradient-boosted trees against a rules baseline"], ["Text or documents and few labels", "A prompted foundation model with an evaluation set"], ["High-volume narrow text task with stable labels", "A small fine-tuned or classic model, distilled if needed"], ["Strict explainability or regulatory needs", "Interpretable models, or explainability tested with users"], ["No reliable labels and no clear decision", "Go back to framing before modelling"]]},
    cases: [{"title": "A health algorithm that used cost as a proxy for need (2019)", "body": "A widely used US care-management algorithm predicted future healthcare costs to decide who got extra support. Because less money had historically been spent on Black patients with the same level of need, the model under-referred them. Researchers estimated that fixing the target would substantially increase the share of Black patients flagged for extra help.", "lesson": "The choice of target is a fairness decision. A proxy that looks neutral can carry historical inequity straight into the model."}, {"title": "Hundreds of COVID-19 models, very few usable (2021)", "body": "A systematic review of machine learning models for diagnosing or predicting COVID-19 from chest images found that none of the studies it examined in depth were fit for clinical use, mostly because of biased data, leakage and weak evaluation.", "lesson": "Framing, data quality and honest evaluation matter more than model sophistication."}],
    checklist: {"title": "Before you start modelling", "items": ["The decision, owner and capacity are written down and signed off.", "The target and label creation are precisely defined.", "All features are available at prediction time; leakage checked.", "The metric reflects the decision, not just a generic score.", "A baseline exists and the go threshold is agreed.", "Data use is lawful and consistent with how it was collected."]},
    exercise: "Write a one-page problem framing for a current request: decision, target, metric, error costs, baseline, and data feasibility.",
    watchouts: ["Data available in training but not at prediction time causes leakage and inflated scores.", "Accuracy is rarely the right metric for imbalanced problems."],
    quiz: [
      { q: "What should a problem framing define first?", o: ["The model architecture", "The decision the output will drive and who takes it", "The GPU budget", "The dashboard design"], a: 1, why: "Without a decision and an owner, even an accurate model creates no value." },
      { q: "For a tabular prediction task, which is usually a strong first model?", o: ["A large language model", "Gradient-boosted trees", "A diffusion model", "An agent"], a: 1, why: "Gradient-boosted trees are accurate, fast and explainable on tabular data." },
      { q: "Fraud is 0.5% of transactions. Why is accuracy a poor metric?", o: ["It is hard to calculate", "A model that predicts 'no fraud' always is 99.5% accurate but useless", "Regulators forbid it", "It ignores latency"], a: 1, why: "Imbalanced problems need metrics such as precision, recall or cost-weighted measures." },
      { q: "What is target leakage?", o: ["Data stolen by attackers", "Using information in training that would not be available at prediction time", "Losing labels", "Model drift"], a: 1, why: "Leakage makes offline results look better than real-world performance." },
      { q: "When is fine-tuning a smaller model most justified?", o: ["For questions over changing documents", "For a high-volume, narrow task with stable labels where cost and latency matter", "For every project", "When there is no labelled data"], a: 1, why: "Fine-tuning pays off for stable, narrow, high-volume tasks." },
      {"q": "A model will pick the 400 accounts to call each week. Which metric best reflects the decision?", "o": ["Overall accuracy", "Value recovered or precision in the top 400", "Training loss", "Number of features"], "a": 1, "why": "The metric should mirror the decision: the quality of the top 400 matters, not performance across everyone."},
      {"q": "Why can predicting healthcare cost be an unfair proxy for health need?", "o": ["Cost data is always missing", "Historical spending differs between groups with the same need, so the model inherits that inequity", "Cost is too hard to predict", "It is illegal to use cost data"], "a": 1, "why": "As the 2019 care-management study showed, a neutral-looking target can encode historical bias."}
    ]
  },
  {
    id: "dml-implement", stage: "implement", updated: "2026-10-20",
    title: "Evaluation, MLOps and LLMOps",
    summary: "Build the evaluation, deployment and monitoring pipeline that turns a model into a dependable production service.",
    outcomes: [
      "Design an offline and online evaluation strategy, including fairness slices",
      "Use experiment tracking, a model registry and versioned data",
      "Set up monitoring for drift, quality and cost",
      "Build data lineage, provenance and contracts, measure RAG quality and make models cheaper with distillation and quantisation"
    ],
    sections: [
      { h: "Evaluation that predicts production", body: "Offline scores only matter if they reflect how the model will be used.\n\nThe most common reason a model disappoints in production is that the evaluation did not look like production: random splits on time-dependent data, a test set from one site used elsewhere, or labels that leak the answer.", example: "A sepsis prediction model sold to many US hospitals was reported to perform well by its vendor. An independent 2021 evaluation at one health system found it missed about two thirds of sepsis cases and raised many false alarms. External validation on your own population is not optional.", points: [
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
      ] },
      { h: "Data lineage, provenance and data contracts", body: "Trustworthy AI needs to know where data came from, what happened to it and who depends on it.", points: [
        "Provenance: the origin of each dataset or document, its collection method, licence and legal basis, recorded at ingestion.",
        "Lineage: how data flows and is transformed from source to features, training sets, embeddings and model outputs. Lineage tools let you trace a bad prediction back to its source data.",
        "Data contracts: agreed schemas, quality rules and change notice between data producers and consumers, so an upstream change cannot silently break a model.",
        "Version datasets used for training and evaluation, and link each model version to the exact data versions it used.",
        "Lineage and provenance are evidence for regulators and auditors, and make deletion requests and licence questions answerable."
      ] },
      { h: "RAG quality from the data side", body: "Most RAG failures are retrieval failures. Measure retrieval and generation separately.", points: [
        "Chunking: split documents along their structure (sections, headings, tables) with overlap where needed, and keep metadata such as source, date and access rights.",
        "Retrieval: use hybrid search (keyword plus vector) and a reranker, a model that reorders retrieved passages by relevance before they reach the LLM.",
        "Retrieval metrics: recall and precision of the right passages for a labelled question set.",
        "Groundedness (or faithfulness): is every claim in the answer supported by the retrieved passages? Answer relevance: does it address the question?",
        "Keep the index fresh: re-index changed documents and remove deleted or expired ones."
      ] },
      { h: "Smaller, cheaper models: distillation and quantisation", body: "Production cost and latency often matter more than the last point of accuracy.", points: [
        "Distillation: train a smaller 'student' model to imitate a larger 'teacher' model on your task. Check the provider's terms allow using its outputs this way.",
        "Quantisation: store model weights at lower precision (for example 8-bit or 4-bit instead of 16-bit), cutting memory and cost, usually with a small quality loss.",
        "Always re-run your evaluation set after distilling or quantising, including segment-level and safety checks.",
        "Treat a distilled or quantised model as a new model version in the inventory."
      ] }
    ],
    scenario: { title: "The forecast that missed the new store format", situation: "A demand forecasting model performed well for a year, then errors doubled in stores using a new layout. Nobody noticed for two months.", approach: [
      "Segment-level monitoring by store format would have shown the shift early.",
      "Drift alerts on input features (new layout code) would have flagged unseen categories.",
      "A retraining trigger and owner turn monitoring into action."
    ] },
    howto: {"title": "Setting up monitoring for a model going live", "steps": [{"h": "Pick what to watch", "body": "Input distributions for key features, output distributions, latency, errors, and the business outcome when ground truth arrives."}, {"h": "Set baselines", "body": "Use the validation period as the reference for drift measures such as population stability index."}, {"h": "Define thresholds and owners", "body": "What level of drift or quality drop triggers an alert, and who responds within what time."}, {"h": "Plan for delayed labels", "body": "If outcomes take weeks, sample cases for human review now and track proxies until labels arrive."}, {"h": "Write the response playbook", "body": "Investigate, roll back to the previous model or rules, retrain, or narrow the model's use."}, {"h": "Review monthly", "body": "Report quality, drift, incidents and cost to the model owner."}]},
    decide: {"title": "Release strategy by risk", "cols": ["If the model…", "Release with…"], "rows": [["Replaces an existing model or rule with similar risk", "Shadow mode, then canary, compare against the incumbent"], ["Makes decisions about people or money", "Shadow mode, human review of a sample, staged rollout, fast rollback"], ["Is an LLM feature with free-text output", "Evaluation gate in CI, small percentage rollout, sampled human ratings"], ["Is a distilled or quantised version", "Full re-evaluation as a new model before any traffic"]]},
    cases: [{"title": "A pricing algorithm meets a changing market (Zillow Offers, 2021)", "body": "Zillow used algorithmic valuations to buy homes directly. As the housing market shifted in 2021, the company found it had overpaid for many homes, took large write-downs, closed the home-buying business and cut about a quarter of its staff.", "lesson": "Models trained on one market regime can fail fast when it changes. Monitor drift and limit exposure while confidence is low."}],
    checklist: {"title": "Production readiness for a model", "items": ["Evaluation used time-based or site-based splits that match production use.", "Metrics are reported by segment against agreed thresholds.", "Data, code, config and model are versioned and linked in the registry.", "Release plan uses shadow or canary mode with a tested rollback.", "Drift, quality and outcome monitoring have thresholds and an owner.", "Lineage and provenance for training data are recorded."]},
    exercise: "For a model you own, list the three most likely drift sources, the metric that would reveal each, and the alert threshold and owner.",
    watchouts: ["Random splits on time-dependent data overstate performance.", "Monitoring without an owner is just a dashboard."],
    quiz: [
      { q: "Why report evaluation metrics by segment?", o: ["To make reports longer", "To reveal failures hidden in the overall average, including fairness issues", "Because tools require it", "To reduce training time"], a: 1, why: "Aggregates can hide poor performance for specific groups." },
      { q: "What is shadow mode deployment?", o: ["Running a model at night", "Running the new model alongside the current process without acting on its outputs", "Hiding the model from auditors", "Deploying without monitoring"], a: 1, why: "Shadow mode gives real-world evidence with no customer impact." },
      { q: "What is concept drift?", o: ["Input data format changes", "The relationship between inputs and the outcome changes", "The model file is corrupted", "Developers change the code"], a: 1, why: "Concept drift means the world changed, so learned patterns no longer hold." },
      { q: "What does a model registry provide?", o: ["Faster training", "Versioned models with stages, metadata and approvals", "Free GPUs", "Automatic labelling"], a: 1, why: "A registry supports controlled promotion and traceability." },
      { q: "For a forecasting model, how should data be split for evaluation?", o: ["Randomly", "By time, training on the past and testing on later periods", "Alphabetically", "It does not matter"], a: 1, why: "Time-based splits mimic real use and prevent leakage from the future." },
      { q: "What does data lineage let you do?", o: ["Make data load faster", "Trace how data moved and changed from source to model output, back to its origin", "Delete all old data", "Avoid documentation"], a: 1, why: "Lineage connects outputs to sources, which helps debugging, audit and deletion requests." },
      { q: "A RAG answer contains a claim not found in any retrieved passage. Which metric captures this?", o: ["Latency", "Groundedness (faithfulness)", "Token count", "Recall of the training set"], a: 1, why: "Groundedness measures whether claims are supported by retrieved context." },
      { q: "What should you do after quantising a model?", o: ["Ship it, quantisation never changes quality", "Re-run evaluations, including segment and safety checks, and register it as a new version", "Delete the original", "Only test latency"], a: 1, why: "Lower precision can change behaviour, so it must be re-evaluated." },
      {"q": "A vendor model performed well in its own studies. What should you do before relying on it?", "o": ["Trust the vendor's paper", "Validate it on your own population and data", "Use it for half the cases", "Ask the vendor for a discount"], "a": 1, "why": "Performance often drops on new populations; the 2021 external validation of a sepsis model showed this sharply."},
      {"q": "Ground truth for your model arrives 60 days after prediction. How do you monitor quality meanwhile?", "o": ["Wait 60 days", "Track input and output drift and sample cases for human review as early signals", "Assume it is fine", "Retrain every day"], "a": 1, "why": "Drift and sampled human review give early warning while labels are delayed."}
    ]
  },
  {
    id: "dml-govern", stage: "govern", updated: "2026-10-20",
    title: "Model risk management and responsible AI",
    summary: "Document, validate and control models so they are fair, explainable, compliant and defensible.",
    outcomes: [
      "Produce model cards and datasheets that satisfy reviewers",
      "Run fairness and explainability analysis proportionate to risk",
      "Support independent validation and the model inventory",
      "Evaluate and monitor AI agents and multi-agent systems, and bring them into the model inventory"
    ],
    sections: [
      { h: "Model documentation", body: "Documentation lets others judge whether a model is fit for purpose.", points: [
        "Model card: intended use, out-of-scope uses, training data, metrics by segment, limitations, ethical considerations.",
        "Datasheet for datasets: origin, collection method, consent and legal basis, known gaps and biases.",
        "Keep both in the repository and update them at each retrain."
      ] },
      { h: "Fairness in practice", body: "Fairness is a design and governance choice, not a single metric.\n\nRemoving a protected attribute does not remove bias: other features (postcode, school, gaps in employment) can act as proxies. You usually need the protected attribute, held securely, to measure whether outcomes differ between groups at all.", points: [
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
      ] },
      { h: "Evaluating and monitoring agents", body: "An agent is a model plus prompts, tools and a loop, so evaluate the whole system, not just the model.", points: [
        "Task success: did the agent complete the goal correctly, end to end, on a representative evaluation set?",
        "Trajectory quality: did it choose the right tools with the right arguments, in a sensible number of steps, without unsafe actions along the way?",
        "Safety tests: prompt injection through documents and tool results, attempts to exceed permissions, and refusal of disallowed tasks.",
        "For multi-agent systems, test each agent alone and the full system together; errors compound across handoffs.",
        "Run agent evaluations in CI on every change to model, prompt, tool or data source, and compare against the last release.",
        "In production, monitor success, escalation and override rates, steps and cost per task, and drift in the kinds of tasks agents receive. Feed these into the control tower dashboards."
      ] },
      { h: "Agents in model risk management", body: "Bring agents into the same lifecycle as models, with the extra facts that come from their ability to act.", points: [
        "Register each agent in the model or AI inventory, linked to the models it uses and the agent registry entry.",
        "Extend the model card into an agent card: tools and permissions, autonomy level, human approval points, evaluation results and known failure modes.",
        "Validation for higher-risk agents covers the system's behaviour, not just model accuracy.",
        "A change to a tool, permission or underlying model is a material change that triggers re-evaluation."
      ] },
      { h: "Privacy-enhancing techniques", body: "Several techniques let you learn from data while exposing less of it. None is a silver bullet; each needs expert design.", points: [
        "De-identification: remove or mask direct identifiers. Pseudonymised data is still personal data under GDPR, and re-identification is often easier than it looks.",
        "Differential privacy: adds carefully calibrated noise to results or training so no individual's data can be inferred, with a measurable privacy budget.",
        "Federated learning: trains models where the data lives (devices or sites) and shares only model updates, not raw data.",
        "Synthetic data: useful for testing and sharing, but must be checked for memorised real records and for whether it preserves the patterns that matter.",
        "Record which techniques were used, and their parameters, in the datasheet and impact assessment."
      ] }
    ],
    scenario: { title: "The screening model and the postcode", situation: "A tenant-screening model did not use ethnicity, but approval rates differed sharply between neighbourhoods. Postcode was acting as a proxy for protected characteristics.", approach: [
      "Removing a protected attribute does not remove bias; proxies remain.",
      "Measure outcomes by group, investigate proxy features, and consider removing or constraining them.",
      "This use case affects access to housing, so it is high risk: it needs documented fairness analysis, explanations for declined applicants and human review."
    ] },
    howto: {"title": "Running a fairness assessment", "steps": [{"h": "Identify affected groups and harms", "body": "Who could be treated worse, and what would it cost them: a missed opportunity, a wrongful flag, a higher price?"}, {"h": "Get the data to measure it", "body": "Obtain protected attributes or reliable proxies lawfully, store them separately, and use them only for testing."}, {"h": "Measure outcomes and errors by group", "body": "Selection rates, false positive and false negative rates, and calibration, with confidence intervals."}, {"h": "Choose the criterion with the business and legal", "body": "Different fairness definitions conflict; record which one you chose and why."}, {"h": "Mitigate and re-test", "body": "Through data, features, thresholds or process. Check overall performance and fairness again."}, {"h": "Document and monitor", "body": "Record results in the model card and repeat the measurement in production."}]},
    cases: [{"title": "A risk model that targeted families for fraud checks (Netherlands, 2013 to 2021)", "body": "The Dutch tax authority used risk classification, including a self-learning model, to flag childcare benefit claims for fraud checks. Factors including dual nationality fed into risk scores. Tens of thousands of families were wrongly treated as fraudsters and many were pushed into debt. The data protection authority fined the tax authority and the government resigned in 2021.", "lesson": "Models that affect people's rights need fairness testing, explainability, human review and an appeal route. The harm can be enormous and slow to surface."}],
    checklist: {"title": "Model governance evidence", "items": ["The model is in the inventory with owner, purpose and risk tier.", "Model card and datasheet are current.", "Fairness was measured by group, the criterion chosen is documented, and results are monitored.", "Explanations were tested with the people who use them.", "Higher-risk models were independently validated.", "Change control and retirement steps are defined."]},
    decide: {"title": "Which documentation and review for which model?", "cols": ["If the model…", "You need…"], "rows": [["Is an internal analysis aid with human review", "Model card, registry entry, basic monitoring"], ["Affects customers, prices or eligibility", "Model card, fairness assessment, explainability for staff, change control"], ["Makes or materially influences decisions about people's rights", "All of the above plus independent validation, DPIA, appeal route and regular revalidation"], ["Is an agent with tools and permissions", "Agent card: tools, permissions, approval points, trajectory evaluations and kill switch"], ["Is bought from a vendor", "Vendor documentation, your own validation on your population, contract rights to audit"]]},
    exercise: "Write a model card for a model you own or know. Include at least one metric by segment and one known limitation.",
    watchouts: ["'We don't use protected attributes' is not evidence of fairness.", "Explanations that are technically correct but meaningless to users do not meet transparency duties.", "Testing each agent alone does not show how errors compound when agents work together."],
    quiz: [
      { q: "What belongs in a model card?", o: ["Only accuracy", "Intended use, data, metrics by segment, limitations and ethical considerations", "The source code", "Marketing claims"], a: 1, why: "Model cards help reviewers judge fitness for purpose and limits." },
      { q: "A model excludes gender but uses job title and shopping history. Could it still be biased by gender?", o: ["No, gender is excluded", "Yes, through proxy features correlated with gender", "Only if the developer intended it", "Only for small datasets"], a: 1, why: "Correlated features can act as proxies, so outcomes must be measured." },
      { q: "When is a local explanation most needed?", o: ["For internal dashboards", "When a decision adversely affects a specific person", "Never", "Only during training"], a: 1, why: "People affected by decisions often have a right to meaningful reasons." },
      { q: "What is the purpose of independent model validation?", o: ["To speed up deployment", "To provide an objective check that a higher-risk model is sound and fit for use", "To replace monitoring", "To write documentation"], a: 1, why: "Independent challenge catches errors the builders miss." },
      { q: "What should happen after a material change to a high-risk model?", o: ["Nothing until the annual review", "Re-validation and updated documentation before use", "Only a code review", "Notify customers"], a: 1, why: "Change control ensures the validated model is the one in production." },
      { q: "What does trajectory evaluation of an agent check?", o: ["Only the final answer's wording", "Whether the agent used the right tools, with the right arguments, in sensible steps and without unsafe actions", "The model's training loss", "How fast the GPU runs"], a: 1, why: "Agents can reach a right answer by an unsafe path, so the steps matter too." },
      { q: "A team adds a new tool to a live agent. What should happen?", o: ["Nothing, the model is unchanged", "Treat it as a material change: re-run evaluations and update the agent card and inventory", "Only update the README", "Wait for the annual review"], a: 1, why: "New tools change what the agent can do, so they change its risk." },
      { q: "What does differential privacy provide?", o: ["Encryption of the database", "A mathematical limit on how much any one person's data can be inferred from results or a trained model", "Removal of names only", "Faster training"], a: 1, why: "It adds calibrated noise with a measurable privacy budget." },
      {"q": "Why might you need the protected attribute even though the model does not use it?", "o": ["To improve accuracy", "To measure whether outcomes differ between groups, since proxies can carry bias", "Regulators require it as a feature", "To speed up training"], "a": 1, "why": "Without the attribute, held securely for testing, you cannot tell whether proxies produce unfair outcomes."},
      {"q": "What did the Dutch childcare benefits case show?", "o": ["Fraud models always work", "Risk models affecting people's rights can cause severe harm without fairness testing, explanation and appeal", "Only private companies face AI risk", "Nationality is a good fraud signal"], "a": 1, "why": "Families were wrongly flagged at scale, with fines and a government resignation as consequences."}
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
