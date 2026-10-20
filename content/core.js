// Shared course structure: roles, learning stages, and the Foundations track every role takes first.
// Role tracks live in content/roles/*.js, the glossary in content/glossary.js.
window.ACADEMY = {
  stages: {
    foundation: { label: "Foundations", blurb: "Shared vocabulary and judgement every role needs." },
    use: { label: "Use AI in your work", blurb: "Where AI helps in your day-to-day work today, and how to use it well." },
    identify: { label: "Identify the right solution", blurb: "Decide whether AI fits a problem, and which kind of AI." },
    implement: { label: "Implement", blurb: "Take a chosen solution from idea to a working, adopted result." },
    govern: { label: "Control and governance", blurb: "Keep AI safe, compliant, accountable and under control after launch." }
  },

  roles: [
    { id: "developer", name: "Developer", who: "Software, platform and integration engineers who build or integrate AI features.", focus: "Coding with AI assistants safely, choosing between prompts, RAG, fine-tuning and agents, shipping LLM features to production, and securing them." },
    { id: "data-ml", name: "Data & ML Engineer", who: "Data scientists, ML engineers and analytics engineers who build, evaluate or operate models.", focus: "Using AI to speed up data work, choosing the right modelling approach, building evaluation and MLOps pipelines, and model risk controls." },
    { id: "product", name: "Product Manager", who: "Product owners and product managers who decide what AI features to build and why.", focus: "Using AI in discovery and delivery, finding AI opportunities worth building, writing AI requirements and evals, and launching responsibly." },
    { id: "project", name: "Project / Delivery Manager", who: "Project, program and delivery managers who run AI initiatives or use AI to run projects.", focus: "Using AI to plan and report, scoping AI projects realistically, running delivery with evaluation gates, and keeping evidence for governance." },
    { id: "leader", name: "Business Leader", who: "Executives, directors and senior managers who set direction, fund AI and own the risk.", focus: "Personal AI fluency, picking where AI creates value, leading adoption and change, and setting accountability and risk appetite." },
    { id: "operations", name: "Operations Leader", who: "Leaders of service, shared services, supply chain, IT operations or back-office teams.", focus: "AI and automation in operational workflows, choosing between RPA, ML and agents, rolling out with people and SLAs in mind, and running AI safely day to day." },
    { id: "risk", name: "Risk, Compliance & Legal", who: "Risk managers, compliance officers, privacy, security, audit and legal professionals.", focus: "Using AI in assurance work, assessing proposed use cases, building a proportionate control framework, and regulation and audit." },
    { id: "business", name: "Business Function Professional", who: "People in HR, finance, sales, marketing, customer service and other functions who use AI tools daily.", focus: "Getting real value from AI assistants, spotting good use cases in your team, rolling out a tool well, and using AI responsibly with company data." }
  ],

  // Older role labels saved by earlier versions of the academy.
  legacyRoles: {
    "Project Manager": "project",
    "Product Manager": "product",
    "Executive / Business Leader": "leader",
    "AI / ML Engineer or Data Scientist": "data-ml",
    "Software / Platform Engineer": "developer",
    "Risk / Compliance / Legal": "risk",
    "Operations / Other": "operations"
  },

  tracks: {},
  templates: {},
  glossary: [],

  foundations: [
    {
      id: "f1", stage: "foundation", minutes: 20,
      title: "AI in plain English",
      summary: "What AI, machine learning, generative AI, LLMs and agents actually are, what they are good at, and where they fail.",
      outcomes: [
        "Explain the difference between rules, machine learning, generative AI and agents",
        "Describe why AI output is probabilistic and what that means for checking it",
        "Recognise the common failure modes: hallucination, bias, drift and prompt injection"
      ],
      sections: [
        { h: "A simple map of the AI family", body: "AI is a broad label. In practice you will meet four kinds of system, and each behaves differently.", points: [
          "Rules and automation: if-this-then-that logic written by people, including RPA bots. Predictable, but brittle when inputs vary.",
          "Machine learning (ML): a model learns patterns from historical data to predict or classify, for example fraud scores, demand forecasts or churn risk. Good at one narrow task with lots of examples.",
          "Generative AI (GenAI): models that produce new text, images, code or audio. Large language models (LLMs) such as GPT, Claude, Gemini or Llama are the best known.",
          "Agents: an LLM that can plan steps and use tools, such as searching, calling APIs or updating records, to complete a goal with less human direction."
        ] },
        { h: "How an LLM really works", body: "An LLM predicts the next piece of text (a token) based on patterns learned from huge amounts of training data and on the instructions and context you give it in the prompt. It does not look facts up unless it is connected to a source, and it has no built-in sense of truth.", points: [
          "Output is probabilistic: the same question can produce different answers.",
          "The context window is the working memory for one conversation. Anything outside it, such as your company policies, is unknown unless you provide it or connect it (retrieval).",
          "Knowledge has a cut-off date unless the model is connected to search or your own data.",
          "Fluent and confident is not the same as correct."
        ] },
        { h: "What AI is good at, and what it is not", body: "Use AI where a fast first draft, a summary, a classification or a pattern is valuable and a person can check the result. Be careful where exactness, accountability or fresh facts matter.", points: [
          "Strong: drafting, summarising, rewriting for an audience, extracting fields from documents, classifying, translating, brainstorming, explaining code, answering questions over provided documents.",
          "Weak: precise arithmetic without tools, citing sources it was not given, knowing recent events, decisions that need legal accountability, anything where an error is costly and cannot be checked."
        ] },
        { h: "Failure modes everyone should recognise", body: "Most AI incidents come from a handful of predictable failure modes. Knowing their names helps you spot them early.", points: [
          "Hallucination: a plausible but invented answer, reference or number.",
          "Bias: outputs that treat groups unfairly because of skewed training data or design.",
          "Drift: a model's performance degrades as the real world changes away from its training data.",
          "Prompt injection: hidden instructions in a document, email or web page that hijack an AI system.",
          "Data leakage: confidential data pasted into an unapproved tool, or exposed by an AI system to the wrong user."
        ] }
      ],
      scenario: { title: "The confident wrong answer", situation: "A colleague asks a public chatbot for the notice period in your company's contractor agreement. It answers '30 days' with a convincing explanation. The real contract says 60 days.", approach: [
        "The model had never seen your contract, so it produced a typical-sounding answer.",
        "The fix is grounding: give the model the actual document (in an approved tool) and ask it to quote the clause.",
        "The habit to build: for facts that matter, ask for the source and check it."
      ] },
      exercise: "Pick one task you did this week. Write down which of the four kinds of system (rules, ML, GenAI, agent) could help with it, and what could go wrong if it made a mistake.",
      watchouts: ["Never treat AI output as verified fact without checking the source.", "Do not paste confidential, personal or client data into tools your organisation has not approved."],
      quiz: [
        { q: "A bank wants to score each card transaction for fraud risk using years of labelled history. Which kind of AI fits best?", o: ["A generative AI chatbot", "A classic machine learning model", "An RPA bot", "An autonomous agent"], a: 1, why: "A narrow prediction task with plenty of labelled historical data is the classic ML use case." },
        { q: "Why can the same prompt give different answers from an LLM?", o: ["The model is broken", "LLM output is probabilistic: it samples likely next tokens", "The internet changed between requests", "Someone retrained the model"], a: 1, why: "LLMs generate text by sampling from probabilities, so variation is normal and must be designed for." },
        { q: "An LLM gives a precise figure from your internal policy that it was never shown. What is the most likely explanation?", o: ["It searched your intranet", "It remembered your policy from training", "It hallucinated a plausible answer", "It used a hidden database"], a: 2, why: "Without access to the document, the model generates a typical-sounding answer. That is hallucination." },
        { q: "What is prompt injection?", o: ["Typing prompts too quickly", "Hidden instructions in content that hijack an AI system", "Adding more examples to a prompt", "A way to train a model faster"], a: 1, why: "Prompt injection is malicious or accidental instructions embedded in data the AI reads, such as emails or web pages." },
        { q: "Which task is AI generally least suited to without extra controls?", o: ["Summarising a long report", "Drafting a first version of an email", "Making a final, legally binding decision about a person", "Classifying support tickets by topic"], a: 2, why: "High-stakes decisions about people need human accountability, explanation and controls; AI can support but should not decide alone." }
      ]
    },
    {
      id: "f2", stage: "foundation", minutes: 20,
      title: "Choosing the right kind of AI",
      summary: "A practical ladder for matching problems to solutions, from no AI at all to agents, and the build, buy or configure decision.",
      outcomes: [
        "Use the solution ladder to pick the simplest approach that works",
        "Know when the answer is 'not AI'",
        "Explain prompting, RAG, fine-tuning and agents in one sentence each"
      ],
      sections: [
        { h: "Start with the problem, not the technology", body: "Good AI projects start with a specific pain: a slow process, a costly error, a bottleneck or an unmet customer need. Write the problem as a measurable outcome before you discuss models.", points: [
          "Who has the problem, how often, and what does it cost today?",
          "What would 'good' look like, in numbers?",
          "What happens when the solution is wrong, and who would notice?"
        ] },
        { h: "The solution ladder", body: "Climb only as high as you need. Each step up adds capability, but also cost, risk and governance effort.", points: [
          "0. Fix the process or use plain software: many 'AI' problems are really missing data, unclear ownership or a missing form.",
          "1. Rules or RPA: stable, structured, repetitive steps.",
          "2. An off-the-shelf AI assistant or AI feature in a tool you already own: drafting, summarising, meeting notes.",
          "3. Prompted LLM in a workflow: a well-designed prompt applied to a defined task, such as classifying emails.",
          "4. Retrieval-augmented generation (RAG): the LLM answers using your own documents, retrieved at question time.",
          "5. Classic ML or fine-tuning: training on your data for a narrow, high-volume task where prompts are not enough.",
          "6. Agents: the AI plans and takes actions across tools. Most powerful, and needs the strongest controls."
        ] },
        { h: "Build, buy or configure", body: "Most organisations should buy or configure before they build. Build when the capability is a real differentiator or when no product meets your data, security or quality needs.", points: [
          "Buy: a vendor product with AI built in. Fastest; check data use, security and exit terms.",
          "Configure: use a platform (copilots, low-code AI builders, a model API with your prompts and data).",
          "Build: your own pipelines, models or agents. Most control, most responsibility."
        ] },
        { h: "When the answer is 'not AI'", body: "Say no, or not yet, when any of these are true.", points: [
          "You cannot define what a correct output looks like, so you cannot test it.",
          "Errors are costly, hard to detect, and there is no realistic human check.",
          "The data you would need is unavailable, poor quality or not lawful to use.",
          "A simpler fix (process, rule, form, report) solves most of the problem."
        ] }
      ],
      scenario: { title: "The chatbot that should have been a form", situation: "A team asks for an AI chatbot because staff keep emailing HR the same five questions about leave. Analysis shows the questions are about a single policy page that is hard to find.", approach: [
        "Step 0 on the ladder: improve the policy page and link it from the leave form.",
        "If volume stays high, step 2: use the AI assistant already in the HR system, grounded on the policy.",
        "A custom chatbot would add cost and risk without solving the root cause."
      ] },
      exercise: "Take one AI idea from your team. Place it on the solution ladder, and write one sentence on why the step below would not be enough.",
      watchouts: ["'Let's use agents' is not a requirement. Start low on the ladder.", "Vendor demos show best cases; ask for results on your own data."],
      quiz: [
        { q: "What is retrieval-augmented generation (RAG)?", o: ["Training a new model from scratch", "Letting an LLM answer using relevant documents retrieved at question time", "A type of RPA bot", "Removing bias from training data"], a: 1, why: "RAG retrieves relevant passages from your sources and gives them to the model as context for the answer." },
        { q: "Which situation most clearly calls for an agent rather than a prompted LLM?", o: ["Summarising a meeting transcript", "Classifying incoming emails into five categories", "Investigating an order issue by checking three systems, then drafting and filing a resolution", "Translating a product description"], a: 2, why: "Agents are for multi-step goals that need planning and tool use across systems." },
        { q: "A process is stable, rule-based and uses structured data from one system. What is the best first option?", o: ["Rules or RPA", "Fine-tune an LLM", "Build an agent", "Buy a chatbot"], a: 0, why: "Stable, structured, rule-based work suits deterministic automation, which is cheaper and easier to control." },
        { q: "When should you say 'not AI' or 'not yet'?", o: ["When the project is small", "When you cannot define or test what a correct output looks like", "When the team is new to AI", "When a vendor offers a discount"], a: 1, why: "If you cannot define correct output, you cannot evaluate, monitor or govern the solution." },
        { q: "What is usually the right default between build, buy and configure?", o: ["Always build for control", "Buy or configure first; build when it is a real differentiator or no product fits", "Always buy the cheapest tool", "Wait until the technology matures"], a: 1, why: "Buying or configuring is faster and cheaper; building is justified by differentiation or unmet requirements." }
      ]
    },
    {
      id: "f3", stage: "foundation", minutes: 25,
      title: "Responsible use and governance essentials",
      summary: "The rules every employee must follow with AI: data handling, approved tools, human oversight, risk tiers and the main regulations.",
      outcomes: [
        "Apply data classification rules before using any AI tool",
        "Explain human-in-the-loop and when it is required",
        "Name the main frameworks: EU AI Act, NIST AI RMF and ISO/IEC 42001"
      ],
      sections: [
        { h: "Your data responsibilities", body: "Every AI tool is a place where data goes. Before you paste, upload or connect anything, check its classification and the tool's approval status.", points: [
          "Public data: generally fine in approved tools.",
          "Internal data: approved enterprise tools only, where the vendor contract says your data is not used for training.",
          "Confidential, client or personal data: only in tools explicitly approved for that class, and only the minimum needed.",
          "Secrets such as passwords, keys and access tokens: never."
        ] },
        { h: "Human oversight, done properly", body: "Human-in-the-loop means a person reviews and can change or stop an AI output before it has an effect. It only works if the person has the time, information and authority to disagree.", points: [
          "Human-in-the-loop: a person approves each output (for example, before an email is sent).",
          "Human-on-the-loop: AI acts and a person monitors and can intervene.",
          "Human-out-of-the-loop: fully automated. Only for low-risk, well-tested tasks.",
          "Beware automation bias: people tend to over-trust AI and rubber-stamp it."
        ] },
        { h: "Risk tiers: proportionate control", body: "Not every use of AI needs a committee. Most organisations sort use cases into tiers and apply controls in proportion.", points: [
          "Low: personal productivity with approved tools (drafting, summarising). Follow the acceptable use policy.",
          "Medium: AI inside a team process or customer-facing content with human review. Register it, test it, name an owner.",
          "High: AI that affects people's rights, safety, money, employment or access to services, or that acts autonomously. Full risk assessment, approval, monitoring and audit trail.",
          "Prohibited: uses your policy or the law forbids, such as manipulative techniques or social scoring."
        ] },
        { h: "The regulatory landscape in one page", body: "Rules are evolving, so treat this as orientation and ask your legal or compliance team for what applies to you.", points: [
          "EU AI Act: a risk-based law. It bans some practices, sets strict duties for high-risk systems (for example in hiring, credit or critical infrastructure), adds transparency duties such as telling people they are talking to AI, and covers general-purpose AI models. Obligations are phased in over several years.",
          "NIST AI Risk Management Framework (AI RMF): a voluntary US framework organised as Govern, Map, Measure and Manage.",
          "ISO/IEC 42001: an international, certifiable standard for an AI management system, similar in style to ISO 27001 for security.",
          "Existing laws still apply: privacy (such as GDPR), consumer protection, anti-discrimination, employment, IP and sector rules."
        ] },
        { h: "When something goes wrong", body: "AI incidents include harmful or wrong outputs reaching customers, data leaks, biased decisions and tools behaving unexpectedly. Report early: fast reporting turns incidents into lessons rather than crises.", points: [
          "Stop or pause the use if harm is ongoing.",
          "Capture evidence: inputs, outputs, time, tool and version.",
          "Report through your incident or risk channel and inform the use case owner."
        ] }
      ],
      scenario: { title: "The helpful upload", situation: "A team member uploads a spreadsheet of customer complaints, including names and phone numbers, to a free online AI tool to get a summary of themes for a presentation.", approach: [
        "Personal data went to an unapproved tool whose terms may allow training on inputs. That is a data incident.",
        "Better: remove personal fields first and use the company-approved assistant.",
        "Report it, even if it feels minor. The privacy team can assess whether any notification is needed."
      ] },
      exercise: "Find your organisation's AI acceptable use policy and list of approved tools. Write down which data classes you may use in each tool you use.",
      watchouts: ["Approval of a tool is not approval of every use of that tool.", "If you are unsure whether a use is high risk, ask before you build, not after you launch."],
      quiz: [
        { q: "You want an AI summary of a document containing customer names and account numbers. What should you do first?", o: ["Use any popular chatbot", "Check the data classification and use only a tool approved for that data, with the minimum data needed", "Email it to a colleague to summarise", "Paste it in parts so no single prompt has everything"], a: 1, why: "Data classification and tool approval decide where data may go; splitting it up does not change that." },
        { q: "What makes human-in-the-loop oversight meaningful?", o: ["A person clicks 'approve' on every output", "The reviewer has the time, information and authority to change or stop the output", "The AI explains itself in detail", "Two AI models check each other"], a: 1, why: "Oversight without time, context or authority becomes rubber-stamping (automation bias)." },
        { q: "Which use case is most likely high risk?", o: ["Drafting internal meeting notes", "Ranking job applicants for interview", "Rewriting a marketing slogan", "Summarising a public news article"], a: 1, why: "AI used in employment decisions affects people's rights and is treated as high risk under the EU AI Act and most policies." },
        { q: "The NIST AI RMF is organised into which four functions?", o: ["Plan, Do, Check, Act", "Govern, Map, Measure, Manage", "Identify, Protect, Detect, Respond", "Design, Build, Test, Deploy"], a: 1, why: "NIST AI RMF uses Govern, Map, Measure and Manage." },
        { q: "An AI tool sent a customer an incorrect refund amount. What is the right first response?", o: ["Quietly fix the prompt", "Pause if harm is ongoing, capture evidence and report through the incident channel", "Wait to see if the customer complains", "Switch to a different AI vendor"], a: 1, why: "Containment, evidence and reporting come first; fixes follow root-cause analysis." }
      ]
    }
  ],

  // Templates every role can use, shown under each role's own templates.
  sharedTemplates: [
    {
      id: "use-case-intake", title: "AI use case intake form",
      purpose: "Register a proposed AI use case so it can be triaged into the right risk tier.",
      when: "Before any build, purchase or pilot that goes beyond personal productivity.",
      sections: [
        { h: "Summary", fields: ["Use case name", "Business owner (name, role)", "Problem being solved, in one sentence", "Who benefits and how often"] },
        { h: "Solution", fields: ["Type: assistant / prompted workflow / RAG / ML model / agent / vendor feature", "Tool, vendor or model", "Does the AI take actions or only suggest? (suggest / act with approval / act alone)"] },
        { h: "Data", fields: ["Data used (sources and classification)", "Personal data involved? (yes/no, which categories)", "Will data leave our environment? Where to?"] },
        { h: "Impact and risk", fields: ["Who is affected by outputs (employees, customers, public)", "Could an error affect rights, safety, money, employment or access to services?", "What happens if the output is wrong, and how would we notice?", "Proposed risk tier (low / medium / high)"] },
        { h: "Controls and success", fields: ["Human oversight approach", "How quality will be measured", "Success metric and target", "Planned review date"] }
      ]
    },
    {
      id: "ai-incident-report", title: "AI incident report",
      purpose: "Capture what happened when an AI system behaves unexpectedly or causes harm.",
      when: "As soon as an AI-related issue is noticed, even if impact seems small.",
      sections: [
        { h: "What happened", fields: ["Date and time noticed", "System or tool and version", "Description of the output or behaviour", "Inputs that led to it (attach if safe)"] },
        { h: "Impact", fields: ["Who or what was affected", "Was personal or confidential data involved?", "Is harm ongoing?", "Immediate containment taken"] },
        { h: "Follow-up", fields: ["Owner of the investigation", "Root cause (once known)", "Fix and preventive controls", "Lessons to share"] }
      ]
    }
  ]
};
