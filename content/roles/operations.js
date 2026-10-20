ACADEMY.tracks.operations = [
  {
    id: "ops-use", stage: "use", minutes: 25,
    title: "AI in operational work today",
    summary: "Where AI and automation already help operations teams: triage, knowledge, documents, forecasting and reporting.",
    outcomes: [
      "Recognise the operational tasks AI handles well today",
      "Use AI assistants for SOPs, reporting and analysis",
      "Spot the signals that a team process is ready for AI"
    ],
    sections: [
      { h: "Common operational uses", body: "Operations teams handle high volumes of semi-structured work, which suits AI.", points: [
        "Triage and routing: classifying tickets, emails and requests to the right queue with priority.",
        "Agent assist: suggested answers and next steps for service staff from the knowledge base.",
        "Document processing: extracting data from invoices, orders, forms and claims (intelligent document processing).",
        "Forecasting: demand, volume and staffing forecasts.",
        "Summaries: shift handovers, incident timelines and case histories."
      ] },
      { h: "Your own productivity", body: "Use approved assistants for the writing and analysis that fills an operations leader's week.", points: [
        "Draft and update standard operating procedures (SOPs) from process notes.",
        "Summarise weekly performance data into commentary (check every number).",
        "Analyse complaint or incident themes from free text.",
        "Prepare shift briefings and change communications."
      ] },
      { h: "Signals a process is ready", body: "Look for these in your operation.", points: [
        "High volume and repetitive, with a backlog or long cycle times.",
        "Clear rules or plenty of examples of correct handling.",
        "Information is digital and accessible (not only on paper or in people's heads).",
        "Errors are detectable and recoverable.",
        "A team willing to pilot and give feedback."
      ] },
      { h: "Keep service quality central", body: "Efficiency gains mean little if customers or colleagues suffer.", points: [
        "Track quality and satisfaction alongside handle time.",
        "Keep a clear path to a human for complex or sensitive cases.",
        "Protect vulnerable customers with specific rules and routing."
      ] }
    ],
    scenario: { title: "The backlog of supplier emails", situation: "An accounts payable team receives 3,000 supplier emails a week: invoices, payment queries and statement requests, all into one inbox sorted by hand.", approach: [
      "AI classification and extraction can route emails and pull invoice data automatically, with low-confidence items sent to a person.",
      "Start by measuring today: volume per type, handling time and error rate.",
      "Pilot with one supplier group and compare accuracy and cycle time."
    ] },
    exercise: "List the five highest-volume tasks in your operation. For each, rate volume, rule clarity, data accessibility and error recoverability from 1 to 5.",
    watchouts: ["Do not paste customer or employee personal data into unapproved tools.", "AI-written SOPs must be validated by the people who do the work."],
    quiz: [
      { q: "Which operational task is typically a strong early AI candidate?", o: ["Negotiating a major supplier contract", "Classifying and routing high volumes of service tickets", "Deciding redundancies", "Approving capital budgets"], a: 1, why: "High-volume, example-rich classification is well suited to AI." },
      { q: "What is intelligent document processing?", o: ["Printing documents faster", "Using AI to extract and validate data from documents such as invoices and forms", "Scanning to PDF", "Email filters"], a: 1, why: "IDP combines OCR, AI extraction and validation." },
      { q: "Which signal suggests a process is not yet ready for AI?", o: ["High volume", "Knowledge exists only in people's heads and on paper", "Lots of historical examples", "Errors are easy to detect"], a: 1, why: "AI needs digital, accessible information." },
      { q: "When measuring an AI rollout in service, what should you track besides handle time?", o: ["Nothing else", "Quality and customer satisfaction", "Number of AI vendors", "Server temperature"], a: 1, why: "Speed without quality harms customers and creates rework." },
      { q: "How should vulnerable customers be treated in an AI-assisted service?", o: ["The same as everyone", "With specific rules, routing and access to a human", "Excluded from service", "Only by chatbot"], a: 1, why: "Vulnerable customers need extra protection and human support." }
    ]
  },
  {
    id: "ops-identify", stage: "identify", minutes: 30,
    title: "Choosing between process fixes, RPA, ML and agents",
    summary: "Map a process, find the real bottleneck, and pick the right automation approach with a clear business case.",
    outcomes: [
      "Use process mapping and mining to find automation opportunities",
      "Choose between process change, RPA, AI extraction, ML and agents",
      "Build an operational business case with quality and capacity effects"
    ],
    sections: [
      { h: "Map before you automate", body: "Automating a broken process makes it fail faster.", points: [
        "Map the current process end to end, including exceptions and rework loops.",
        "Use process mining on system logs where available to see what really happens.",
        "Measure volume, cycle time, touch time, error rate and exception rate per step.",
        "Remove waste and fix root causes first."
      ] },
      { h: "Matching approach to work type", body: "Different steps need different tools.", points: [
        "Structured, rule-based steps between systems: workflow software or RPA.",
        "Unstructured inputs (emails, documents): AI classification and extraction, feeding the workflow.",
        "Predictions (demand, risk, likely delay): classic ML.",
        "Knowledge questions from staff or customers: RAG-based assistants.",
        "Multi-step investigations or case handling across systems: agents, with human approval for actions."
      ] },
      { h: "Intelligent automation", body: "The best results usually combine approaches: AI handles judgement on unstructured data, workflow and RPA handle the steps, and people handle exceptions.", points: [
        "Straight-through processing for confident, standard cases.",
        "Human review queues for low confidence, high value or sensitive cases.",
        "Feedback from human decisions improves the AI over time."
      ] },
      { h: "The operational business case", body: "Make the benefits operationally real.", points: [
        "Capacity released (hours) and what it will be used for.",
        "Cycle time and backlog reduction, and their effect on customers or cash flow.",
        "Quality: error and rework reduction.",
        "Costs: licences, run costs, exception handling staff, maintenance.",
        "Risks: what happens when the automation fails, and the fallback process."
      ] }
    ],
    scenario: { title: "Automating the wrong step", situation: "A team planned an RPA bot to re-key order data from emails into the ERP. Process mining showed 40% of orders were later corrected because customers used outdated product codes.", approach: [
      "Fix the root cause: update the customer ordering portal and code list.",
      "Then use AI extraction with validation against the current catalogue, routing mismatches to a person.",
      "RPA alone would have automated the errors."
    ] },
    exercise: "Map one process with its exception paths. Mark each step as remove, simplify, rules/RPA, AI, ML or human. Estimate the effect on cycle time.",
    watchouts: ["RPA bots break when screens change; AI does not fix fragile integrations.", "Exception handling is where the real cost hides."],
    quiz: [
      { q: "What should come before automating a process?", o: ["Buying an RPA licence", "Mapping it and fixing waste and root causes", "Hiring data scientists", "Building an agent"], a: 1, why: "Automation on a broken process scales the problems." },
      { q: "Which approach best fits extracting data from varied supplier invoices?", o: ["Pure RPA screen scraping", "AI document extraction with validation", "A rules engine only", "Manual typing"], a: 1, why: "Varied layouts need AI extraction; validation catches errors." },
      { q: "What does process mining reveal?", o: ["Employee opinions", "How the process actually runs, based on system event logs", "Server performance", "Customer demographics"], a: 1, why: "Event logs show real paths, delays and rework." },
      { q: "In intelligent automation, what should happen to low-confidence cases?", o: ["Auto-approve", "Route to a human review queue", "Delete them", "Retry until confident"], a: 1, why: "Human review protects quality where the AI is unsure." },
      { q: "Which item belongs in an operational AI business case?", o: ["The vendor's stock price", "What released capacity will be used for", "The colour of the dashboard", "Social media mentions"], a: 1, why: "Capacity only creates value when redeployed or removed." }
    ]
  },
  {
    id: "ops-implement", stage: "implement", minutes: 30,
    title: "Rolling out AI in live operations",
    summary: "Pilot and scale AI in a live operation without breaking SLAs: human-in-the-loop design, workforce planning, training and controls.",
    outcomes: [
      "Design human-in-the-loop workflows with confidence thresholds",
      "Run a pilot that protects service levels",
      "Update workforce plans, SOPs and training for the new way of working"
    ],
    sections: [
      { h: "Designing the human role", body: "Decide exactly where people review, approve or handle exceptions.", points: [
        "Set confidence thresholds: above, process automatically; below, send to review.",
        "Start conservative (more human review) and relax thresholds as evidence grows.",
        "Give reviewers the context and time to disagree with the AI.",
        "Sample-check automated cases regularly, not just the flagged ones."
      ] },
      { h: "Pilot without breaking SLAs", body: "Live operations cannot pause while you experiment.", points: [
        "Run in shadow mode first, comparing AI decisions with human decisions.",
        "Pilot with one team, queue or region, with a fallback to the old process.",
        "Agree stop criteria (quality drop, SLA breach) in advance.",
        "Staff the pilot for extra review effort in early weeks."
      ] },
      { h: "Workforce and SOPs", body: "Operational AI changes work patterns.", points: [
        "Update SOPs to include AI steps, review rules and escalation.",
        "Re-plan staffing: fewer routine tasks, more exceptions and complex cases, which take longer each.",
        "Train staff on the tool, on its limits and on how to report problems.",
        "Create new roles where needed: AI operations analyst, automation controller."
      ] },
      { h: "Run controls", body: "Treat AI like any other critical operational system.", points: [
        "Daily or weekly quality sampling with results tracked.",
        "Volume and confidence dashboards to spot unusual patterns.",
        "Clear manual fallback process, practised.",
        "Change management for model or rule updates."
      ] }
    ],
    scenario: { title: "The exception queue explosion", situation: "After AI routing went live, routine tickets dropped by 60%, but the exception queue tripled and SLAs on complex cases were breached because staffing had been cut in advance.", approach: [
      "Exceptions take longer and need experienced staff; workforce plans must reflect the new mix.",
      "Release capacity only after stable performance is proven.",
      "Tune thresholds to balance automation rate and exception load."
    ] },
    exercise: "Draft the updated SOP for one AI-assisted process: AI step, confidence threshold, human review, escalation and fallback.",
    watchouts: ["Do not cut staff before the new process is stable.", "Automation bias grows over time; keep sampling."],
    quiz: [
      { q: "What is a confidence threshold used for?", o: ["Pricing", "Deciding which cases are processed automatically and which go to human review", "Measuring staff confidence", "Server load"], a: 1, why: "Thresholds balance automation and risk." },
      { q: "How should thresholds be set at the start of a rollout?", o: ["As aggressive as possible", "Conservatively, with more human review, relaxed as evidence grows", "Randomly", "By the vendor alone"], a: 1, why: "Starting cautious protects service while evidence builds." },
      { q: "What often happens to exceptions after automation?", o: ["They disappear", "They become a larger share of human work and take longer each", "They are easier", "They are handled by the AI"], a: 1, why: "The remaining work is harder, which affects staffing." },
      { q: "Why sample-check automatically processed cases?", o: ["It is not needed", "To catch silent errors and counter automation bias", "To slow down processing", "For marketing"], a: 1, why: "Errors in confident cases are otherwise invisible." },
      { q: "What should be in place before a live pilot?", o: ["A press release", "Stop criteria and a fallback to the old process", "A bigger budget", "New office space"], a: 1, why: "Predefined stops and fallback protect SLAs." }
    ]
  },
  {
    id: "ops-govern", stage: "govern", minutes: 45, updated: "2026-10-20",
    title: "Running AI safely day to day",
    summary: "Operational controls for AI: monitoring, incident response, vendor management, business continuity and audit readiness.",
    outcomes: [
      "Set up operational monitoring and KPIs for AI services",
      "Handle AI incidents and continuity planning",
      "Manage AI vendors and keep audit evidence",
      "Run a mixed workforce of people, bots and AI agents with clear handoffs, controls and a way to stop any agent",
      "Manage AI usage costs with FinOps practices, and run AI services against SLOs including hallucination rate"
    ],
    sections: [
      { h: "Operational monitoring", body: "Monitor AI services like any critical service, plus quality.", points: [
        "Service KPIs: availability, latency, throughput, backlog.",
        "Quality KPIs: accuracy from sampling, override rate by reviewers, complaint rate.",
        "Drift signals: change in input mix, confidence distribution or automation rate.",
        "Cost KPIs: run cost per transaction."
      ] },
      { h: "Incidents and continuity", body: "Plan for AI failing or misbehaving.", points: [
        "Include AI services in incident management with clear severity levels.",
        "Define the manual fallback and the trigger to switch.",
        "Keep the skills for manual processing alive.",
        "Know the vendor's incident and outage commitments."
      ] },
      { h: "Vendor management", body: "Most operational AI is bought. Manage the vendor relationship with AI-specific terms.", points: [
        "Data use: is your data used to train the vendor's models? Where is it stored?",
        "Model changes: will you be notified before the vendor changes models?",
        "Performance commitments and audit rights.",
        "Exit: data return and transition support."
      ] },
      { h: "Audit readiness", body: "Be ready to show how AI decisions were made and controlled.", points: [
        "Logs of AI decisions, confidence and human overrides.",
        "Sampling results and quality reports.",
        "Change records for thresholds, rules and models.",
        "Training records for staff using the system."
      ] },
      { h: "Orchestrating people, bots and agents", body: "Operations is where agents do real work at volume. Treat the process, not the tool, as the unit you manage. BOAT (Business Orchestration and Automation Technologies, Gartner's term for platforms combining RPA, integration, low-code, process automation and AI agents) describes the platforms built for this.", points: [
        "Map each process step to who does it: a person, a rules-based bot, a system integration or an AI agent, and why.",
        "Design the handoffs: what an agent passes to a human, with what context, and how the human returns it.",
        "One end-to-end case record across people, bots and agents, so you can answer 'what happened to this case?' in one place.",
        "Measure the process end to end: cycle time, SLA, cost per case and quality, not just what each agent did."
      ] },
      { h: "Day-to-day control of AI agents", body: "Your control tower view for operations: every agent you run should be visible, supervised and stoppable.", points: [
        "Agent roster: each agent's owner, the process it serves, its permissions, its risk tier and the human team that backs it up.",
        "Human-in-the-loop queues: approvals and exceptions routed to named teams with SLAs, so escalations do not pile up unseen.",
        "Agent KPIs: task success rate, escalation rate, human override rate, error and retry rate, run cost per case, and loops or runaway runs.",
        "Budgets and rate limits per agent, with alerts at 80% of budget, so one misbehaving agent cannot run up costs or flood a system.",
        "Pause and kill switch: who can stop an agent, how fast, and the manual process that takes over. Test it like a fire drill.",
        "Change control: new prompts, tools, models or permissions for an agent go through the same change process as any production change."
      ] },
      { h: "When agents hand work to other agents", body: "Multi-agent processes can fail in ways single tools do not.", points: [
        "Cascading errors: one agent's wrong output becomes another agent's trusted input. Put validation checks between agents on key data.",
        "Loops: two agents can keep passing work back and forth. Set limits on steps, time and cost per case.",
        "Unclear ownership: every agent in the chain needs an owner, and the end-to-end process needs one accountable owner.",
        "Tracing: you should be able to follow one case across every agent and person that touched it."
      ] },
      { h: "AI FinOps: managing AI usage costs", body: "AI costs are usage-based and can grow fast and unpredictably. FinOps for AI applies cloud cost-management discipline to models, tokens and agents.", points: [
        "Visibility: tag every AI call by team, use case and agent (an AI gateway makes this easy) so cost per case and per team is known.",
        "Unit economics: track cost per transaction, per resolved case or per document, next to the value each delivers.",
        "Budgets and alerts per team and use case, with an owner who acts when spend jumps.",
        "Optimise: right-size models, use caching and batch processing, trim prompts and outputs, and stop idle or low-value use.",
        "Commercials: compare pay-as-you-go with committed spend, watch licence 'shelfware', and review prices as vendors change them.",
        "Review AI cost monthly alongside quality and value, not in isolation."
      ] },
      { h: "Service levels for AI: SLOs and hallucination tracking", body: "Service level objectives (SLOs) set the target for a service; the service level agreement (SLA) is the promise to customers. AI services need quality SLOs alongside the usual ones.", points: [
        "Classic SLOs: availability, latency (for example 95% of responses within 3 seconds), throughput.",
        "Quality SLOs: accuracy from sampling, task success rate, escalation and override rates.",
        "Hallucination rate: the share of sampled answers containing unsupported or false claims, measured on a regular sample with human or automated checks against sources.",
        "Set error budgets: how much below target you tolerate before pausing changes or switching to fallback.",
        "Agree what vendors commit to, since most vendor SLAs cover uptime only, not output quality."
      ] }
    ],
    scenario: { title: "The vendor's silent update", situation: "Overnight, a document-processing vendor upgraded its extraction model. Accuracy on your purchase orders fell from 97% to 89%, and the drop was noticed only when a supplier complained about a wrong payment.", approach: [
      "Contract terms should require advance notice of model changes.",
      "Daily quality sampling would have caught the drop the same day.",
      "An alert on reviewer override rate is a cheap early-warning signal."
    ] },
    exercise: "Define five KPIs for one AI service in your operation, with thresholds and the owner who acts on each.",
    watchouts: ["When everyone forgets the manual process, fallback is impossible.", "Vendor AI features can change behaviour without code changes on your side.", "An escalation queue with no owner or SLA is where agent errors hide."],
    quiz: [
      { q: "Which is a useful early-warning signal of AI quality problems?", o: ["Reviewer override rate rising", "Office temperature", "Number of vendor emails", "Login count"], a: 1, why: "Rising overrides indicate reviewers disagree more with the AI." },
      { q: "Why keep manual processing skills alive?", o: ["Tradition", "So fallback is possible during AI outages or failures", "To slow automation", "For audits only"], a: 1, why: "Continuity depends on a working manual fallback." },
      { q: "Which contract term is AI-specific and important?", o: ["Office hours", "Advance notice of model changes and limits on training with your data", "Invoice format", "Logo usage"], a: 1, why: "Model changes and data use directly affect quality and compliance." },
      { q: "What evidence supports audit of an AI-assisted process?", o: ["Only the final output", "Decision logs, confidence, overrides, sampling and change records", "Staff opinions", "Vendor marketing"], a: 1, why: "Auditors need to see decisions and controls." },
      { q: "How should AI services fit into incident management?", o: ["Separately and informally", "Included with severity levels, fallback triggers and owners", "Only the vendor handles them", "Not at all"], a: 1, why: "AI services are operational services and need the same rigour." },
      { q: "In an orchestrated process with people, bots and AI agents, what should you measure first?", o: ["Each agent's number of actions", "End-to-end process outcomes: cycle time, SLA, cost and quality per case", "How many models are used", "Vendor marketing claims"], a: 1, why: "The process is the unit that delivers value; agent activity metrics are secondary." },
      { q: "Two agents keep passing the same case back and forth and costs spike. Which control prevents this?", o: ["A friendlier prompt", "Limits on steps, time and cost per case, with alerts", "Adding a third agent", "Monthly reporting"], a: 1, why: "Step, time and budget limits stop loops and runaway runs." },
      { q: "Why test an agent's kill switch and manual fallback regularly?", o: ["Auditors like drills", "So an agent can be stopped quickly and work continues safely when it misbehaves", "To slow down automation", "It is not needed if the vendor is reliable"], a: 1, why: "An untested kill switch or forgotten manual process fails when you need it." },
      { q: "What is the first step in AI FinOps?", o: ["Cancelling all AI tools", "Making costs visible by tagging AI usage per team, use case and agent", "Using the largest model", "Annual budgeting only"], a: 1, why: "You cannot manage costs you cannot attribute." },
      { q: "How do you measure the hallucination rate of an AI service?", o: ["Ask the model if it hallucinated", "Regularly sample answers and check claims against sources, with human or automated review", "Count tokens", "Use the vendor's uptime SLA"], a: 1, why: "Sampling and checking against sources gives a real rate to track." }
    ]
  }
];

ACADEMY.templates.operations = [
  {
    id: "ops-process-assessment", title: "Process automation assessment",
    purpose: "Assess a process for AI and automation and choose the approach per step.",
    when: "Before proposing automation for a process.",
    sections: [
      { h: "Baseline", fields: ["Process name and owner", "Volume per week", "Cycle time and touch time", "Error and rework rate", "Exception rate"] },
      { h: "Step analysis", fields: ["Steps to remove or simplify", "Steps for workflow or RPA", "Steps for AI extraction or classification", "Steps needing human judgement"] },
      { h: "Case", fields: ["Capacity released and its planned use", "Quality and customer impact", "Costs", "Fallback process"] }
    ]
  },
  {
    id: "ops-hitl-sop", title: "AI-assisted SOP template",
    purpose: "Document a standard operating procedure that includes AI steps and human review.",
    when: "Before go-live of any AI-assisted process.",
    sections: [
      { h: "Process", fields: ["Purpose and scope", "Systems involved", "Roles"] },
      { h: "AI step", fields: ["What the AI does", "Confidence threshold", "What goes to human review"] },
      { h: "Human review", fields: ["Reviewer checks", "How to override and record reasons", "Escalation route"] },
      { h: "Fallback", fields: ["Trigger to switch to manual", "Manual procedure", "Who decides"] }
    ]
  },
  {
    id: "ops-ai-kpi", title: "AI service KPI scorecard",
    purpose: "Monitor an AI-enabled operational service weekly.",
    when: "From pilot onwards.",
    sections: [
      { h: "Service", fields: ["Availability", "Throughput and backlog", "SLA attainment"] },
      { h: "Quality", fields: ["Sampled accuracy", "Override rate", "Complaints and escalations"] },
      { h: "Efficiency and risk", fields: ["Automation rate", "Cost per transaction", "Incidents", "Open actions"] }
    ]
  },
  {
    id: "ops-agent-runbook", title: "AI agent operating runbook",
    purpose: "Run an AI agent in an operational process with clear ownership, KPIs, escalation and a tested way to stop it.",
    when: "Before an agent goes live in an operational process, and at each review.",
    sections: [
      { h: "Agent and process", fields: ["Agent name and owner", "Process and steps it performs", "Human team that backs it up", "Other agents or bots it hands work to"] },
      { h: "Permissions and limits", fields: ["Systems and actions allowed", "Actions needing human approval and thresholds", "Budget, rate and step limits"] },
      { h: "KPIs and alerts", fields: ["Task success and escalation rate", "Override and error rate", "Cost per case", "Alert thresholds and who acts"] },
      { h: "Stop and fallback", fields: ["Who can pause or stop the agent", "How to stop it (steps)", "Manual fallback process", "Date last tested"] }
    ]
  },
  {
    id: "ops-ai-finops-review", title: "AI cost (FinOps) review",
    purpose: "Review AI spend against value each month and agree optimisation actions.",
    when: "Monthly for each team or use case with material AI spend.",
    sections: [
      { h: "Spend", fields: ["Spend this month and trend", "Spend by use case, team and agent", "Budget and variance"] },
      { h: "Unit economics", fields: ["Cost per case or transaction", "Value per case", "Quality at that cost"] },
      { h: "Optimisation", fields: ["Model right-sizing opportunities", "Caching and batching", "Unused licences", "Prompt and output trimming"] },
      { h: "Actions", fields: ["Actions and owners", "Expected saving", "Next review date"] }
    ]
  }
];
