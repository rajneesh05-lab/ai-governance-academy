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
      id: "f1", stage: "foundation",
      title: "AI in plain English",
      summary: "What AI, machine learning, generative AI, LLMs and agents actually are, what they are good at, where they fail, and the habits that keep you safe when you use them.",
      outcomes: [
        "Explain the difference between rules, machine learning, generative AI and agents, with an example of each",
        "Describe why AI output is probabilistic and what that means for checking it",
        "Recognise the common failure modes: hallucination, bias, drift, prompt injection and data leakage",
        "Use a simple check routine before you rely on any AI output"
      ],
      sections: [
        { h: "A simple map of the AI family", body: "AI is a broad label that covers very different technology. In practice you will meet four kinds of system. They behave differently, fail differently and need different controls, so the first useful skill is telling them apart.\n\nA helpful question is: who wrote the logic? In rules, a person wrote every step. In machine learning, the logic was learned from examples. In generative AI, a very large model learned general patterns of language or images and now produces new content. In agents, that model is also allowed to decide which steps to take and to use tools.", points: [
          "Rules and automation: if-this-then-that logic written by people, including RPA bots. Predictable and auditable, but brittle when inputs vary (a new invoice layout can break an RPA bot).",
          "Machine learning (ML): a model learns patterns from historical data to predict or classify, for example fraud scores, demand forecasts or churn risk. Very good at one narrow task with lots of labelled examples; it cannot write or explain.",
          "Generative AI (GenAI): models that produce new text, images, code or audio. Large language models (LLMs) such as GPT, Claude, Gemini or Llama are the best known. Flexible across many tasks without task-specific training.",
          "Agents: an LLM that can plan steps and use tools, such as searching, calling APIs or updating records, to reach a goal with less human direction. The most capable, and the one where mistakes turn into actions."
        ], example: "One insurance claim can involve all four. A rule routes the claim by product type. An ML model scores it for fraud risk. An LLM summarises the customer's 12-page email and drafts a reply. An agent could gather the policy, the photos and the repair quote, then propose a settlement for a handler to approve. Same process, four very different risk profiles." },
        { h: "How an LLM really works", body: "An LLM predicts the next piece of text (a token, roughly three quarters of a word) based on patterns learned from huge amounts of training data and on the instructions and context you give it in the prompt. It repeats this, one token at a time, until the answer is complete.\n\nThis explains most of its behaviour. It is excellent at producing text that sounds right, because that is exactly what it was trained to do. It does not look facts up unless it is connected to a source, and it has no built-in sense of whether something is true. When it lacks information, it fills the gap with the most plausible-sounding text, which is where hallucinations come from.", points: [
          "Output is probabilistic: the same question can produce different answers. Settings such as temperature make it more or less variable.",
          "The context window is the working memory for one conversation. Anything outside it, such as your company policies, is unknown unless you provide it or connect it (retrieval).",
          "Knowledge has a cut-off date unless the model is connected to search or your own data.",
          "Models are weak at exact counting and arithmetic on their own; good tools hand that work to a calculator or code.",
          "Fluent and confident is not the same as correct."
        ], example: "Ask a model 'What is our refund policy?' with nothing attached and you get a typical retail refund policy, written with total confidence. Paste in your actual policy and ask it to quote the relevant clause, and the answer becomes checkable. The model did not get smarter; it got the right context." },
        { h: "What AI is good at, and what it is not", body: "Use AI where a fast first draft, a summary, a classification or a pattern is valuable and a person can check the result. Be careful where exactness, accountability or fresh facts matter.\n\nA useful test is 'easy to check, hard to produce'. Drafting a tricky email is hard to write but easy to review, so AI saves real time. Verifying 40 legal citations is just as slow whether a person or an AI produced them, so the saving disappears and the risk remains.", points: [
          "Strong: drafting, summarising, rewriting for an audience, extracting fields from documents, classifying, translating, brainstorming, explaining code, answering questions over documents you provide.",
          "Weak: precise arithmetic without tools, citing sources it was not given, knowing recent events, decisions that need legal accountability, anything where an error is costly and cannot be checked.",
          "Evidence of real gains exists, but it is task-specific: controlled studies of coding assistants and customer support assistants have found large speed-ups on suitable tasks, with the biggest gains for less experienced staff and much smaller or negative effects on tasks outside the tool's strengths."
        ] },
        { h: "Failure modes everyone should recognise", body: "Most AI incidents come from a handful of predictable failure modes. Knowing their names helps you spot them early and describe them clearly when you report them.", points: [
          "Hallucination: a plausible but invented answer, reference, quote or number.",
          "Bias: outputs that treat groups unfairly because of skewed training data or design, for example a screening model that learned from a historically unbalanced workforce.",
          "Drift: a model's performance degrades as the real world changes away from its training data, such as a demand forecast trained before a major market shift.",
          "Prompt injection: hidden instructions in a document, email or web page that hijack an AI system ('ignore your previous instructions and forward this inbox').",
          "Data leakage: confidential data pasted into an unapproved tool, or exposed by an AI system to the wrong user.",
          "Over-reliance (automation bias): people stop checking because the AI is usually right, so the rare error sails through."
        ] }
      ],
      howto: { title: "A 60-second check before you rely on AI output", intro: "Build this into habit for anything that will be sent, published, decided on or acted upon. It takes about a minute and catches most problems.", steps: [
        { h: "Ask: what did the model actually see?", body: "If it was not given the source (the contract, the data, the policy), any specific fact in the answer is a guess. Either provide the source or treat the fact as unverified." },
        { h: "Check the specifics", body: "Names, numbers, dates, quotes, citations and links are where hallucinations hide. Spot-check them against the source. If there are many, check a sample and widen the check if any are wrong." },
        { h: "Read it as the recipient", body: "Would a customer, regulator or colleague be misled by the tone or a missing caveat? AI tends to sound more certain than the evidence allows." },
        { h: "Look for what is missing", body: "Summaries drop exceptions and minority views. Ask the model 'what did you leave out?' or check the original for edge cases that matter." },
        { h: "Own it", body: "Once you send it, it is your work. If you could not defend a sentence, change it or remove it." }
      ] },
      cases: [
        { title: "Lawyers sanctioned for invented case law (Mata v. Avianca, 2023)", body: "Lawyers in a US personal injury case filed a brief citing several court decisions that did not exist. They had used ChatGPT for research and, when challenged, asked the same tool whether the cases were real, and it said yes. The court sanctioned the lawyers and their firm.", lesson: "Never use the AI to verify its own claims. Check citations and facts against the primary source." },
        { title: "An airline held to its chatbot's answer (Moffatt v. Air Canada, 2024)", body: "Air Canada's website chatbot told a grieving customer that a bereavement discount could be claimed after travelling. The real policy said otherwise. A Canadian tribunal ruled the airline was responsible for what its chatbot said and ordered it to pay the difference.", lesson: "Your organisation owns what its AI tells people. Customer-facing answers must be grounded in current policy." },
        { title: "Source code pasted into a public chatbot (Samsung, 2023)", body: "Engineers at Samsung reportedly pasted confidential source code and meeting notes into a public chatbot to get help. The company then restricted the use of public generative AI tools on its devices and networks.", lesson: "Data leakage is the most common everyday AI risk. Use approved tools for anything confidential." }
      ],
      scenario: { title: "The confident wrong answer", situation: "A colleague asks a public chatbot for the notice period in your company's contractor agreement. It answers '30 days' with a convincing explanation of why 30 days is standard. The real contract says 60 days, and your colleague has already put '30 days' in an email to a supplier.", approach: [
        "Recognise the failure: the model had never seen your contract, so it produced a typical-sounding answer. That is a hallucination, not a bug in your question.",
        "Contain it: send a correction to the supplier before they act on the wrong date.",
        "Fix the method: give the model the actual document in an approved tool and ask it to quote the clause, then check the quote.",
        "Build the habit: for any fact that matters, ask for the source and check it, using the 60-second check."
      ] },
      checklist: { title: "Before you use any AI output", items: [
        "I know which tool this is and that it is approved for the data I used.",
        "Every specific fact (number, date, name, quote, citation) has been checked against a source.",
        "I have read it as the recipient would, and it is not more certain than the evidence.",
        "Nothing confidential or personal is in the output that should not be.",
        "I would be comfortable defending every sentence as my own work."
      ] },
      exercise: "Pick one task you did this week. Write down which of the four kinds of system (rules, ML, GenAI, agent) could help with it, and what could go wrong if it made a mistake. Then run one AI output through the 60-second check and note what you found.",
      watchouts: ["Never treat AI output as verified fact without checking the source.", "Do not paste confidential, personal or client data into tools your organisation has not approved.", "Do not ask an AI to confirm its own answer; check the primary source instead."],
      quiz: [
        { q: "A bank wants to score each card transaction for fraud risk using years of labelled history. Which kind of AI fits best?", o: ["A generative AI chatbot", "A classic machine learning model", "An RPA bot", "An autonomous agent"], a: 1, why: "A narrow prediction task with plenty of labelled historical data is the classic ML use case." },
        { q: "Why can the same prompt give different answers from an LLM?", o: ["The model is broken", "LLM output is probabilistic: it samples likely next tokens", "The internet changed between requests", "Someone retrained the model"], a: 1, why: "LLMs generate text by sampling from probabilities, so variation is normal and must be designed for." },
        { q: "An LLM gives a precise figure from your internal policy that it was never shown. What is the most likely explanation?", o: ["It searched your intranet", "It remembered your policy from training", "It hallucinated a plausible answer", "It used a hidden database"], a: 2, why: "Without access to the document, the model generates a typical-sounding answer. That is hallucination." },
        { q: "What is prompt injection?", o: ["Typing prompts too quickly", "Hidden instructions in content that hijack an AI system", "Adding more examples to a prompt", "A way to train a model faster"], a: 1, why: "Prompt injection is malicious or accidental instructions embedded in data the AI reads, such as emails or web pages." },
        { q: "Which task is AI generally least suited to without extra controls?", o: ["Summarising a long report", "Drafting a first version of an email", "Making a final, legally binding decision about a person", "Classifying support tickets by topic"], a: 2, why: "High-stakes decisions about people need human accountability, explanation and controls; AI can support but should not decide alone." },
        { q: "You are unsure whether citations in an AI-written brief are real. What is the right check?", o: ["Ask the same AI whether the citations are real", "Look each one up in the primary source", "Ask a second AI tool", "Check that the formatting looks correct"], a: 1, why: "In Mata v. Avianca the lawyers asked the chatbot to confirm its own citations and it said yes. Only the primary source settles it." },
        { q: "Which kind of task gives the best return from AI assistance?", o: ["Hard to produce and easy to check", "Easy to produce and hard to check", "Tasks where errors cannot be detected", "Tasks that need legal accountability"], a: 0, why: "AI saves time when a person can quickly verify the output. If checking is as slow as doing, the saving disappears and the risk stays." }
      ]
    },
    {
      id: "f2", stage: "foundation",
      title: "Choosing the right kind of AI",
      summary: "A practical method for matching problems to solutions: define the problem, climb the solution ladder only as far as you need, decide build, buy or configure, and know when the answer is not AI.",
      outcomes: [
        "Write an AI opportunity as a measurable problem statement",
        "Use the solution ladder to pick the simplest approach that works",
        "Explain prompting, RAG, fine-tuning and agents in one sentence each, and when each fits",
        "Know when the answer is 'not AI' or 'not yet'"
      ],
      sections: [
        { h: "Start with the problem, not the technology", body: "Good AI projects start with a specific pain: a slow process, a costly error, a bottleneck or an unmet customer need. Projects that start from 'we should use AI' or 'we need an agent' usually stall, because nobody can say what success looks like.\n\nWrite the problem as a measurable outcome before you discuss models. The discipline is simple: if you cannot describe today's cost and tomorrow's target in numbers, you are not ready to choose a solution.", points: [
          "Who has the problem, how often, and what does it cost today (time, money, errors, customer impact)?",
          "What would 'good' look like, in numbers?",
          "What happens when the solution is wrong, who would notice, and how quickly?",
          "What data exists today, who owns it, and may it lawfully be used for this purpose?"
        ], example: "Weak: 'Use AI to improve customer service.' Strong: 'Agents spend about 6 minutes per ticket finding the right policy across three systems for 4,000 tickets a month. Target: under 2 minutes, with no increase in wrong answers, measured by the existing QA sample.' The strong version already tells you the solution is probably retrieval over policies, and how you will test it." },
        { h: "The solution ladder", body: "Climb only as high as you need. Each step up adds capability, but also cost, risk, unpredictability and governance effort. Most value in most organisations sits on steps 0 to 4.", points: [
          "0. Fix the process or use plain software: many 'AI' problems are really missing data, unclear ownership or a missing form.",
          "1. Rules or RPA: stable, structured, repetitive steps.",
          "2. An off-the-shelf AI assistant or AI feature in a tool you already own: drafting, summarising, meeting notes.",
          "3. Prompted LLM in a workflow: a well-designed prompt applied to a defined task, such as classifying emails or extracting fields.",
          "4. Retrieval-augmented generation (RAG): the LLM answers using your own documents, retrieved at question time, with citations.",
          "5. Classic ML or fine-tuning: training on your data for a narrow, high-volume task where prompts are not enough, or to change the model's style or format reliably.",
          "6. Agents: the AI plans and takes actions across tools. Most powerful, and needs the strongest controls."
        ] },
        { h: "Four techniques, one sentence each", body: "These four terms come up in every AI conversation. You do not need to build them, but you should know what each one is for, because choosing the wrong one is the most common and most expensive design mistake.", points: [
          "Prompting: you tell a general model what to do and give it examples and context. Cheapest and fastest to change; try it first.",
          "RAG: the system searches your documents and hands the relevant passages to the model, so answers reflect your current content and can cite it. Use it when the problem is 'the model does not know our information'.",
          "Fine-tuning: you further train a model on examples so it adopts a style, format or narrow skill. Use it when the problem is 'the model does not behave the way we need', not to add facts that change often.",
          "Agents: you give the model tools and a goal and let it decide the steps. Use it when the work genuinely needs multi-step judgement across systems, and you can constrain and monitor what it is allowed to do."
        ], example: "A common mistake is fine-tuning a model on the company handbook so it 'knows' the policies. Next quarter the handbook changes and the model is out of date. RAG over the handbook would have stayed current automatically and shown its sources." },
        { h: "Build, buy or configure", body: "Most organisations should buy or configure before they build. Build when the capability is a real differentiator or when no product meets your data, security or quality needs. Remember that AI products change fast: whatever you choose, keep the option to switch.", points: [
          "Buy: a vendor product with AI built in. Fastest; check data use, security, quality on your data and exit terms.",
          "Configure: use a platform (copilots, low-code AI builders, a model API with your prompts and data). The sweet spot for most internal use cases.",
          "Build: your own pipelines, models or agents. Most control, most responsibility for quality, security and upkeep.",
          "Total cost includes usage fees, integration, evaluation, monitoring, people's time to review outputs, and the cost of errors, not just the licence."
        ] },
        { h: "When the answer is 'not AI'", body: "Saying no, or not yet, is a sign of maturity, not reluctance. A well-argued 'not yet' with a list of what would need to change is a useful outcome.", points: [
          "You cannot define what a correct output looks like, so you cannot test it.",
          "Errors are costly, hard to detect, and there is no realistic human check.",
          "The data you would need is unavailable, poor quality or not lawful to use.",
          "A simpler fix (process, rule, form, report) solves most of the problem.",
          "Nobody will own the system after launch: monitoring, fixing and retiring it."
        ] }
      ],
      howto: { title: "Turning an idea into a solution choice", steps: [
        { h: "Write the problem statement", body: "Who, how often, cost today, target, and how you will measure it. One paragraph." },
        { h: "Map the current process", body: "List the steps and mark where time, errors or waiting happen. Often the bottleneck is one step, not the whole process." },
        { h: "Try step 0 first", body: "Ask whether a process fix, better form, clearer page or report would remove most of the pain. If yes, do that and stop." },
        { h: "Pick the lowest rung that could work", body: "Use the decision table below. Write one sentence on why the rung below is not enough." },
        { h: "Define 'correct' and collect test cases", body: "Gather 20 to 50 real examples with the right answers. These become your evaluation set and your proof that it works." },
        { h: "Decide build, buy or configure", body: "Check whether a tool you already own does it. Compare on your test cases, not on demos." },
        { h: "Register it", body: "Log the use case in your intake process so it gets the right risk tier and an owner." }
      ] },
      decide: { title: "Which rung fits?", cols: ["If the problem is…", "Start with…"], rows: [
        ["Information is hard to find, or a form or process is unclear", "Step 0: fix the page, form or process"],
        ["Structured, stable, repetitive steps across systems", "Rules or RPA"],
        ["Personal productivity: drafting, summarising, notes", "The approved AI assistant you already have"],
        ["One defined language task at volume (classify, extract, draft a reply)", "A prompted LLM in the workflow, with an evaluation set"],
        ["Answers must reflect your own, changing documents", "RAG with citations"],
        ["A narrow prediction from lots of historical, labelled data", "Classic ML"],
        ["The model's style or format is consistently wrong despite good prompts", "Fine-tuning"],
        ["Multi-step work across systems that needs judgement at each step", "An agent, with limited permissions, approvals and logging"]
      ] },
      cases: [
        { title: "A support assistant that scaled, then rebalanced (Klarna, 2024 to 2025)", body: "Klarna announced in 2024 that its AI assistant was handling about two thirds of customer service chats in its first month. In 2025 the company said it would again make it easier for customers to reach human agents, with its CEO acknowledging that cost had been weighted too heavily against quality.", lesson: "Define success with quality measures, not only cost and volume, and keep a route to a human for cases AI handles poorly." },
        { title: "A hiring model that learned old bias (Amazon, reported 2018)", body: "Amazon built an experimental ML model to rate job applicants. Trained on ten years of CVs from a male-dominated workforce, it learned to penalise CVs that mentioned women's activities. The company abandoned the tool.", lesson: "Historical data encodes historical decisions. For decisions about people, test for bias before anyone relies on the output." }
      ],
      scenario: { title: "The chatbot that should have been a form", situation: "A team asks for an AI chatbot because staff keep emailing HR the same five questions about leave. Analysis of three months of emails shows 80% of questions are answered on a single policy page that is buried four clicks deep on the intranet.", approach: [
        "Write the problem: 300 emails a month, about 10 minutes each for HR, answers already exist.",
        "Step 0 on the ladder: improve the policy page, link it from the leave form and the HR inbox auto-reply. Measure email volume for a month.",
        "If volume stays high, step 2: use the AI assistant already in the HR system, grounded on the policy, with citations.",
        "A custom chatbot would add cost and risk without solving the root cause, and would still depend on the same buried page."
      ] },
      checklist: { title: "Before you propose an AI solution", items: [
        "The problem is written with today's cost and a measurable target.",
        "I have checked whether a process, form or rule fix would solve most of it.",
        "I can say which rung of the ladder I chose and why the rung below is not enough.",
        "I know what a correct output looks like and have real examples to test with.",
        "I have checked tools we already own before proposing to buy or build.",
        "The data is available, good enough and lawful to use for this purpose.",
        "Someone will own it after launch."
      ] },
      exercise: "Take one AI idea from your team. Write the problem statement in the 'strong' format, place it on the solution ladder, and write one sentence on why the step below would not be enough.",
      watchouts: ["'Let's use agents' is not a requirement. Start low on the ladder.", "Vendor demos show best cases; ask for results on your own data.", "Fine-tuning does not keep facts current. If the information changes, use retrieval."],
      quiz: [
        { q: "What is retrieval-augmented generation (RAG)?", o: ["Training a new model from scratch", "Letting an LLM answer using relevant documents retrieved at question time", "A type of RPA bot", "Removing bias from training data"], a: 1, why: "RAG retrieves relevant passages from your sources and gives them to the model as context for the answer." },
        { q: "Which situation most clearly calls for an agent rather than a prompted LLM?", o: ["Summarising a meeting transcript", "Classifying incoming emails into five categories", "Investigating an order issue by checking three systems, then drafting and filing a resolution", "Translating a product description"], a: 2, why: "Agents are for multi-step goals that need planning and tool use across systems." },
        { q: "A process is stable, rule-based and uses structured data from one system. What is the best first option?", o: ["Rules or RPA", "Fine-tune an LLM", "Build an agent", "Buy a chatbot"], a: 0, why: "Stable, structured, rule-based work suits deterministic automation, which is cheaper and easier to control." },
        { q: "When should you say 'not AI' or 'not yet'?", o: ["When the project is small", "When you cannot define or test what a correct output looks like", "When the team is new to AI", "When a vendor offers a discount"], a: 1, why: "If you cannot define correct output, you cannot evaluate, monitor or govern the solution." },
        { q: "What is usually the right default between build, buy and configure?", o: ["Always build for control", "Buy or configure first; build when it is a real differentiator or no product fits", "Always buy the cheapest tool", "Wait until the technology matures"], a: 1, why: "Buying or configuring is faster and cheaper; building is justified by differentiation or unmet requirements." },
        { q: "Your assistant must answer from an HR handbook that is updated every quarter. Which approach fits best?", o: ["Fine-tune a model on the handbook", "RAG over the current handbook, with citations", "Write the answers into the prompt once", "Train a classic ML model"], a: 1, why: "Retrieval reads the current document at question time and can cite it. A fine-tuned model would be out of date after the next update." },
        { q: "Which problem statement is ready for a solution choice?", o: ["Use AI to improve customer service", "We need an agent for support", "Agents spend 6 minutes per ticket finding policies; target under 2 minutes with no rise in wrong answers", "Customers want AI"], a: 2, why: "It names the cost today, a measurable target and a quality guardrail, so you can choose and test a solution." }
      ]
    },
    {
      id: "f3", stage: "foundation",
      title: "Responsible use and governance essentials",
      summary: "The rules every employee must follow with AI: data handling, approved tools, human oversight, transparency, risk tiers, the main regulations, and what to do when something goes wrong.",
      outcomes: [
        "Apply data classification rules before using any AI tool",
        "Explain human-in-the-loop and what makes oversight meaningful",
        "Sort a use case into a risk tier and name the controls it needs",
        "Name the main frameworks: EU AI Act, NIST AI RMF and ISO/IEC 42001",
        "Respond correctly to an AI incident"
      ],
      sections: [
        { h: "Your data responsibilities", body: "Every AI tool is a place where data goes. Before you paste, upload or connect anything, check its classification and the tool's approval status.\n\nThe difference between a consumer tool and an enterprise tool is mostly in the contract: enterprise agreements usually say your data is not used to train the vendor's models, set retention limits and give you security commitments. The same model can be safe in one product and unsafe in another.", points: [
          "Public data: generally fine in approved tools.",
          "Internal data: approved enterprise tools only, where the vendor contract says your data is not used for training.",
          "Confidential, client or personal data: only in tools explicitly approved for that class, and only the minimum needed.",
          "Secrets such as passwords, keys and access tokens: never.",
          "Connected tools (email, drive, CRM) can read far more than you paste. Check what an assistant can access before you switch on an integration."
        ], example: "You want themes from 500 customer complaints. Remove names, emails, phone numbers and account numbers first (or use a tool approved for personal data), then summarise. You get the same insight with far less risk." },
        { h: "Human oversight, done properly", body: "Human-in-the-loop means a person reviews and can change or stop an AI output before it has an effect. It only works if the person has the time, information and authority to disagree.\n\nOversight fails quietly. A reviewer who approves 200 AI decisions an hour, cannot see the evidence behind them, or will be questioned for overruling the system is not really overseeing anything. Design the review step as carefully as the AI.", points: [
          "Human-in-the-loop: a person approves each output (for example, before an email is sent).",
          "Human-on-the-loop: AI acts and a person monitors and can intervene.",
          "Human-out-of-the-loop: fully automated. Only for low-risk, well-tested tasks.",
          "Beware automation bias: people tend to over-trust AI and rubber-stamp it.",
          "Good oversight shows the reviewer the evidence (sources, inputs, confidence), samples outputs for quality, and makes overriding easy and normal."
        ] },
        { h: "Transparency: tell people when AI is involved", body: "People have a right to know when they are dealing with AI and when AI has shaped a decision about them. Many laws now require it, and it is good practice everywhere.", points: [
          "Tell people when they are chatting with an AI, not a person.",
          "Label AI-generated images, audio and video, especially realistic ones.",
          "When AI significantly influences a decision about someone, be ready to explain the main factors and offer a route to a human.",
          "Be honest internally too: say when a report or analysis was drafted with AI."
        ] },
        { h: "Risk tiers: proportionate control", body: "Not every use of AI needs a committee. Most organisations sort use cases into tiers and apply controls in proportion. Two questions decide most tiers: what is the worst realistic harm if it is wrong, and does the AI act on its own or only suggest?", points: [
          "Low: personal productivity with approved tools (drafting, summarising). Follow the acceptable use policy.",
          "Medium: AI inside a team process or customer-facing content with human review. Register it, test it, name an owner.",
          "High: AI that affects people's rights, safety, money, employment or access to services, or that acts autonomously. Full risk assessment, approval, monitoring and audit trail.",
          "Prohibited: uses your policy or the law forbids, such as manipulative techniques or social scoring."
        ] },
        { h: "The regulatory landscape in one page", body: "Rules are evolving, so treat this as orientation and ask your legal or compliance team for what applies to you. The good news is that the main frameworks ask for broadly the same things: know your AI systems, assess risk, test, oversee, document and fix.", points: [
          "EU AI Act: a risk-based law. It bans some practices, sets strict duties for high-risk systems (for example in hiring, credit or critical infrastructure), adds transparency duties such as telling people they are talking to AI, requires AI literacy for staff, and covers general-purpose AI models. Obligations are phased in over several years and apply to organisations outside the EU whose AI is used in the EU.",
          "NIST AI Risk Management Framework (AI RMF): a voluntary US framework organised as Govern, Map, Measure and Manage, with a companion profile for generative AI.",
          "ISO/IEC 42001: an international, certifiable standard for an AI management system, similar in style to ISO 27001 for security.",
          "Existing laws still apply: privacy (such as GDPR, including rules on automated decisions), consumer protection, anti-discrimination, employment, IP and sector rules. 'The AI did it' is not a defence."
        ] },
        { h: "When something goes wrong", body: "AI incidents include harmful or wrong outputs reaching customers, data leaks, biased decisions and tools behaving unexpectedly. Report early: fast reporting turns incidents into lessons rather than crises, and many incidents have legal reporting deadlines.", points: [
          "Stop or pause the use if harm is ongoing.",
          "Capture evidence: inputs, outputs, time, tool and version. Screenshots are fine.",
          "Report through your incident or risk channel and inform the use case owner.",
          "Do not quietly 'fix the prompt' and move on; the root cause and the people affected still need attention."
        ] }
      ],
      howto: { title: "Before you use a new AI tool or use case", steps: [
        { h: "Check the tool is approved", body: "Look it up in your approved tools list. If it is not there, ask; do not use it with work data in the meantime." },
        { h: "Classify your data", body: "Public, internal, confidential, personal or secret? Use only tools approved for that class, and only the minimum data you need." },
        { h: "Decide the tier", body: "Personal productivity is usually low risk. If the output reaches customers, affects decisions about people, or the AI acts by itself, register the use case." },
        { h: "Plan the human check", body: "Who reviews outputs, with what evidence, and how often? Make sure they can say no." },
        { h: "Be transparent", body: "Decide how you will tell people AI is involved, and how they reach a human." },
        { h: "Know your incident route", body: "Find where you would report a problem before you need it." }
      ] },
      decide: { title: "Which risk tier?", cols: ["If the use case…", "Treat it as…"], rows: [
        ["Helps you draft, summarise or brainstorm, and you check everything", "Low: follow the acceptable use policy"],
        ["Is part of a team process, or produces customer-facing content a person reviews", "Medium: register, test, name an owner"],
        ["Influences hiring, credit, pricing for individuals, health, safety, legal rights or access to services", "High: risk assessment, approval, monitoring, audit trail"],
        ["Takes actions in systems without a person approving each one", "High, at least until well tested with tight permissions"],
        ["Manipulates people, scores them socially, or infers sensitive traits without a lawful basis", "Prohibited: do not proceed"]
      ] },
      cases: [
        { title: "A city chatbot that gave unlawful advice (New York MyCity, 2024)", body: "New York City's AI chatbot for business owners was reported to give answers that would have broken the law, such as suggesting employers could take workers' tips. The city kept it online with added disclaimers.", lesson: "Public-facing AI needs grounding in the actual rules, testing on risky questions, and clear limits on what it answers." },
        { title: "AI news summaries that misrepresented headlines (Apple, 2025)", body: "Apple's AI notification summaries produced false versions of news headlines, including one attributed to the BBC. After complaints, Apple paused the feature for news apps.", lesson: "Summaries can change meaning. Label AI output and test it on the content where errors would do most damage." }
      ],
      scenario: { title: "The helpful upload", situation: "A team member uploads a spreadsheet of customer complaints, including names and phone numbers, to a free online AI tool to get a summary of themes for a presentation. They mention it in a stand-up because the summary was so useful.", approach: [
        "Recognise it: personal data went to an unapproved tool whose terms may allow training on inputs. That is a data incident, even with good intentions.",
        "Respond: report it through the privacy or incident channel today. The privacy team assesses whether any notification is needed, and some deadlines are short.",
        "Contain: delete the upload and chat history in the tool if possible, and record what was shared.",
        "Prevent: show the team the approved assistant and how to strip personal fields first. Treat it as a learning moment, not a blame moment, so people keep reporting."
      ] },
      checklist: { title: "Responsible AI use, every time", items: [
        "The tool is on the approved list for the data class I am using.",
        "No secrets, and only the minimum confidential or personal data needed.",
        "I know the risk tier, and medium or high use cases are registered.",
        "A person with time, evidence and authority reviews outputs that matter.",
        "People know when they are dealing with AI and how to reach a human.",
        "I know how to report an AI incident."
      ] },
      exercise: "Find your organisation's AI acceptable use policy and list of approved tools. Write down which data classes you may use in each tool you use, and where you would report an AI incident.",
      watchouts: ["Approval of a tool is not approval of every use of that tool.", "If you are unsure whether a use is high risk, ask before you build, not after you launch.", "Switching on an integration (email, drive, CRM) can expose far more data than you would ever paste."],
      quiz: [
        { q: "You want an AI summary of a document containing customer names and account numbers. What should you do first?", o: ["Use any popular chatbot", "Check the data classification and use only a tool approved for that data, with the minimum data needed", "Email it to a colleague to summarise", "Paste it in parts so no single prompt has everything"], a: 1, why: "Data classification and tool approval decide where data may go; splitting it up does not change that." },
        { q: "What makes human-in-the-loop oversight meaningful?", o: ["A person clicks 'approve' on every output", "The reviewer has the time, information and authority to change or stop the output", "The AI explains itself in detail", "Two AI models check each other"], a: 1, why: "Oversight without time, context or authority becomes rubber-stamping (automation bias)." },
        { q: "Which use case is most likely high risk?", o: ["Drafting internal meeting notes", "Ranking job applicants for interview", "Rewriting a marketing slogan", "Summarising a public news article"], a: 1, why: "AI used in employment decisions affects people's rights and is treated as high risk under the EU AI Act and most policies." },
        { q: "The NIST AI RMF is organised into which four functions?", o: ["Plan, Do, Check, Act", "Govern, Map, Measure, Manage", "Identify, Protect, Detect, Respond", "Design, Build, Test, Deploy"], a: 1, why: "NIST AI RMF uses Govern, Map, Measure and Manage." },
        { q: "An AI tool sent a customer an incorrect refund amount. What is the right first response?", o: ["Quietly fix the prompt", "Pause if harm is ongoing, capture evidence and report through the incident channel", "Wait to see if the customer complains", "Switch to a different AI vendor"], a: 1, why: "Containment, evidence and reporting come first; fixes follow root-cause analysis." },
        { q: "A customer chats with your support bot. What does transparency require?", o: ["Nothing, if the answers are good", "Telling them they are talking to an AI and how to reach a person", "Showing them the model's source code", "Asking them to accept the AI's terms of service"], a: 1, why: "People should know when they are dealing with AI, and many laws, including the EU AI Act, require it." },
        { q: "Why might the same model be safe in one product and unsafe in another?", o: ["Models change randomly", "The contract and settings differ: training on your data, retention and security commitments", "Enterprise products use smaller models", "Consumer products are always offline"], a: 1, why: "Enterprise agreements usually exclude your data from training and set retention and security terms; consumer terms often do not." }
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

