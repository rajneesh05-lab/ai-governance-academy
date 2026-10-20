ACADEMY.tracks.leader = [
  {
    id: "ldr-use", stage: "use", minutes: 20,
    title: "Personal AI fluency for leaders",
    summary: "Use AI yourself for briefing, decision preparation and communication, and role-model the behaviours you want in your organisation.",
    outcomes: [
      "Use AI to prepare for decisions, meetings and communications",
      "Ask the right questions of AI outputs and of teams presenting AI work",
      "Role-model safe and effective AI use"
    ],
    sections: [
      { h: "Why hands-on use matters", body: "Leaders who use AI themselves make better investment and risk decisions. Personal experience calibrates your sense of what is easy, hard and hype.", points: [
        "You learn the real strengths: speed of synthesis, drafting and perspective-taking.",
        "You see the real weaknesses: confident errors, generic thinking and missing context.",
        "Your teams follow what you do more than what you say."
      ] },
      { h: "High-value uses for leaders", body: "Focus on preparation and thinking, not on outsourcing judgement.", points: [
        "Summarise board papers and long reports, then ask for the three questions you should challenge.",
        "Prepare for a difficult conversation by asking the AI to argue the other side.",
        "Draft communications and test them for different audiences.",
        "Stress-test a strategy: 'What would a competitor do in response? What assumptions are weakest?'",
        "Learn a new topic quickly, with sources you then check."
      ] },
      { h: "Questions to ask any AI output", body: "A short set of questions keeps you in control.", points: [
        "What is the source for this claim?",
        "What would change this conclusion?",
        "What is missing that someone in the room would know?",
        "Would I put my name to this if it were wrong?"
      ] },
      { h: "Role-modelling", body: "Visible, responsible use sets the culture.", points: [
        "Share how you use AI, and where you chose not to.",
        "Use approved tools only; leaders using shadow AI undermine policy.",
        "Reward teams for responsible experimentation, including stopping things that do not work."
      ] }
    ],
    scenario: { title: "The board summary", situation: "An executive asked an assistant to summarise a 90-page acquisition due diligence report before a board meeting. The summary was excellent but omitted a pending regulatory investigation buried in an appendix.", approach: [
      "Summaries compress; important exceptions can be dropped.",
      "Ask specifically: 'List all legal, regulatory and litigation matters mentioned anywhere, with page numbers.'",
      "Use AI to prepare, and still read the sections that carry the decision."
    ] },
    exercise: "Before your next major meeting, use an approved assistant to summarise the papers and generate five challenge questions. Afterwards, note which questions were useful.",
    watchouts: ["Board and M&A materials are highly confidential: approved tools only.", "AI is a sparring partner, not a decision-maker."],
    quiz: [
      { q: "Why should leaders use AI tools personally?", o: ["To replace their teams", "To calibrate their judgement about what AI can and cannot do", "To save on licences", "Because it is mandatory"], a: 1, why: "Hands-on experience improves investment and risk decisions." },
      { q: "What is a good leader prompt before a board meeting?", o: ["'Make the decision for me'", "'List the legal, regulatory and financial risks mentioned anywhere, with page references'", "'Write a joke for the opening'", "'Summarise in one word'"], a: 1, why: "Targeted prompts with references reduce the risk of missed exceptions." },
      { q: "What does using unapproved AI tools as a leader signal?", o: ["Innovation", "That policy does not really apply, undermining governance", "Efficiency", "Nothing"], a: 1, why: "Leaders' behaviour sets the norm for everyone." },
      { q: "Which question best tests an AI-generated recommendation?", o: ["Is it well formatted?", "What assumption, if wrong, would change this conclusion?", "Is it long enough?", "Which model wrote it?"], a: 1, why: "Testing assumptions exposes the weakest parts of the reasoning." },
      { q: "What should leaders reward around AI?", o: ["Only big wins", "Responsible experimentation, including stopping what does not work", "Using AI as much as possible", "Avoiding AI entirely"], a: 1, why: "Learning cultures need safe experimentation and honest stopping." }
    ]
  },
  {
    id: "ldr-identify", stage: "identify", minutes: 30,
    title: "Where AI creates value: strategy and portfolio",
    summary: "Set an AI ambition, choose where to play, and run a portfolio of use cases that balances value, feasibility and risk.",
    outcomes: [
      "Distinguish productivity, process transformation and new-value plays",
      "Prioritise a portfolio of AI use cases with clear value cases",
      "Ask the questions that expose weak AI business cases"
    ],
    sections: [
      { h: "Three kinds of AI value", body: "Be clear about which kind of value you are pursuing, because each needs a different approach and timeline.", points: [
        "Personal productivity: assistants for everyone. Broad, fast, modest gains per person; value depends on adoption and redeploying saved time.",
        "Process transformation: redesign specific workflows (claims, onboarding, customer service) with AI. Larger, measurable gains; needs process and change investment.",
        "New value: new products, services or business models enabled by AI. Highest upside and uncertainty."
      ] },
      { h: "Building the portfolio", body: "Manage AI as a portfolio, not a collection of pet projects.", points: [
        "Source ideas from the business problems that matter most to your strategy.",
        "Score on value, feasibility, data readiness, risk and strategic fit.",
        "Fund in stages: small bets for PoCs, larger investments only after evidence.",
        "Kill or pivot projects that miss exit criteria; recycle the budget.",
        "Balance quick wins that build confidence with a few bigger transformation bets."
      ] },
      { h: "Testing a business case", body: "AI business cases often overstate benefits and understate costs.", points: [
        "Is the benefit measured against today's baseline, with a real metric?",
        "Does 'time saved' translate into capacity used, cost removed or revenue gained?",
        "Are running costs included: licences, tokens, compute, monitoring, support and retraining?",
        "Are change management and governance costs included?",
        "What happens to the case if adoption is half the forecast?"
      ] },
      { h: "Build capability, not just projects", body: "Lasting advantage comes from capability.", points: [
        "Data foundations: accessible, governed, good-quality data.",
        "Platforms: shared, approved AI tools and patterns so teams do not reinvent.",
        "Skills: role-based training (like this academy) and communities of practice.",
        "Governance: a clear, proportionate process that speeds up good projects."
      ] }
    ],
    scenario: { title: "The 10% productivity promise", situation: "A business case claims a copilot licence for 5,000 staff will save 10% of time, worth tens of millions. Six months after rollout, active use is 35% and no costs have fallen.", approach: [
      "Time saved per person is not value until it is redeployed or removed.",
      "Tie the rollout to specific workflows and metrics (cases handled, cycle time).",
      "License in waves based on adoption and measured outcomes."
    ] },
    exercise: "List your organisation's or unit's top five strategic priorities. For each, name one AI use case and classify it as productivity, transformation or new value.",
    watchouts: ["Copying competitors' AI announcements is not a strategy.", "Spreading budget across 100 pilots usually produces 100 pilots."],
    quiz: [
      { q: "Which kind of AI value usually needs the most process and change investment?", o: ["Personal productivity", "Process transformation", "Buying licences", "Hackathons"], a: 1, why: "Transformation redesigns workflows, which requires change management." },
      { q: "When does 'time saved' become real business value?", o: ["Immediately", "When it is redeployed to valuable work, removes cost or increases revenue", "When reported in a survey", "Never"], a: 1, why: "Value requires a change in output, cost or revenue." },
      { q: "What is a sound way to fund AI initiatives?", o: ["Large upfront budgets for every idea", "Stage-gated funding that grows with evidence", "Fund only vendor proposals", "Equal funding for all teams"], a: 1, why: "Staged funding limits waste and backs proven ideas." },
      { q: "Which cost is most often missing from AI business cases?", o: ["Office space", "Ongoing running, monitoring and change costs", "Pens and paper", "Travel"], a: 1, why: "Run costs and change effort are frequently underestimated." },
      { q: "What builds lasting AI advantage beyond individual projects?", o: ["More press releases", "Data foundations, shared platforms, skills and proportionate governance", "Hiring one AI expert", "Buying the largest model"], a: 1, why: "Capabilities compound across projects." }
    ]
  },
  {
    id: "ldr-implement", stage: "implement", minutes: 25,
    title: "Leading AI adoption and change",
    summary: "Drive real adoption: operating model, workforce impact, communication, incentives and measuring what matters.",
    outcomes: [
      "Choose an AI operating model (central, federated or hub-and-spoke)",
      "Lead the people side: roles, skills, concerns and incentives",
      "Track adoption and outcomes, not activity"
    ],
    sections: [
      { h: "Operating model", body: "Decide how AI expertise, platforms and governance are organised.", points: [
        "Centralised: a central AI team builds for everyone. Strong control, can become a bottleneck.",
        "Federated: business units build their own. Fast, risk of duplication and inconsistent controls.",
        "Hub-and-spoke (most common): a central hub sets platforms, standards and governance; business spokes own use cases and outcomes."
      ] },
      { h: "The people side", body: "AI changes tasks first, then roles. People's concerns are real and deserve honest answers.", points: [
        "Be clear about intentions: how productivity gains will be used and how roles may change.",
        "Invest in reskilling for affected roles before changes land.",
        "Involve front-line staff in redesigning workflows; they know where AI helps.",
        "Consult works councils, unions or employee representatives where required."
      ] },
      { h: "Communicate and incentivise", body: "Adoption follows clarity and incentives.", points: [
        "Explain what is allowed, encouraged and prohibited in plain language.",
        "Share stories of real teams using AI well, with numbers.",
        "Align targets and performance goals with the new way of working.",
        "Remove friction: easy access to approved tools and help."
      ] },
      { h: "Measure what matters", body: "Licences assigned and prompts sent are activity, not value.", points: [
        "Adoption: weekly active users by team, depth of use.",
        "Outcomes: cycle time, quality, customer satisfaction, cost per transaction, revenue.",
        "Risk: incidents, policy breaches, shadow AI levels.",
        "Review quarterly; reallocate investment to what works."
      ] }
    ],
    scenario: { title: "Silent resistance", situation: "A customer service AI assistant was rolled out to 800 agents. Usage dropped after week two. Interviews revealed agents feared the data would be used to cut headcount, and the assistant slowed them down on complex calls.", approach: [
      "Address the fear directly with a clear statement on how gains will be used.",
      "Fix the workflow problem with agents' input: use the assistant for after-call summaries first, where it clearly helps.",
      "Track outcomes per team and celebrate agent-led improvements."
    ] },
    exercise: "Write a one-paragraph message to your team explaining what AI will and will not change for them this year, and how you will support them.",
    watchouts: ["Silence on workforce impact is filled with rumours.", "Mandating AI use without fixing workflows produces box-ticking."],
    quiz: [
      { q: "What is the hub-and-spoke AI operating model?", o: ["Every team builds anything independently", "A central hub sets platforms, standards and governance while business units own use cases", "Only IT can use AI", "Outsourcing all AI"], a: 1, why: "It balances control and speed, which is why it is common." },
      { q: "Which is an outcome metric rather than activity?", o: ["Licences assigned", "Reduction in case cycle time", "Number of prompts", "Training sessions held"], a: 1, why: "Outcome metrics show business change." },
      { q: "How should leaders handle staff concerns about AI and jobs?", o: ["Avoid the topic", "Be clear about intentions, invest in reskilling and involve staff", "Promise nothing will change", "Let managers decide individually"], a: 1, why: "Honesty and support build trust and adoption." },
      { q: "Usage of a new AI tool drops after launch. What should you do first?", o: ["Mandate usage", "Find out why from users and fix workflow or trust issues", "Buy a different tool", "Cancel the project"], a: 1, why: "Understanding the cause leads to an effective fix." },
      { q: "Where may formal consultation be required before AI changes roles?", o: ["Never", "With works councils, unions or employee representatives under local law", "Only with shareholders", "Only with vendors"], a: 1, why: "Many jurisdictions require consultation on significant workplace changes." }
    ]
  },
  {
    id: "ldr-govern", stage: "govern", minutes: 30,
    title: "Accountability, risk appetite and oversight",
    summary: "Set the governance structure, risk appetite and board oversight that let AI scale safely.",
    outcomes: [
      "Define accountability for AI across the three lines",
      "Set an AI risk appetite and policy principles",
      "Ask the oversight questions boards and regulators expect"
    ],
    sections: [
      { h: "Accountability structure", body: "Someone must own every AI system and its outcomes.", points: [
        "Executive sponsor for AI and a governance forum (for example an AI council) with decision rights.",
        "First line: business owners accountable for each AI use case and its risks.",
        "Second line: risk, compliance, privacy and security set standards and challenge.",
        "Third line: internal audit gives independent assurance.",
        "Clear escalation: which risks need which level of approval."
      ] },
      { h: "Risk appetite and principles", body: "Leaders set the boundaries teams innovate within.", points: [
        "Where AI may act autonomously, where a human must decide, and where AI must not be used.",
        "Tolerance for errors by use case type (internal drafting vs customer decisions).",
        "Principles such as fairness, transparency, accountability, privacy, safety and security, translated into policy and controls.",
        "Alignment with recognised frameworks: NIST AI RMF, ISO/IEC 42001 and applicable law such as the EU AI Act."
      ] },
      { h: "Oversight questions", body: "Boards and regulators increasingly ask these questions. You should be able to answer them.", points: [
        "Do we have a complete inventory of AI systems, including vendor AI?",
        "Which are high risk, and how are they controlled and monitored?",
        "Who is accountable for each, and when were they last reviewed?",
        "What incidents have occurred and what did we learn?",
        "Are our people trained for the AI they use?"
      ] },
      { h: "Proportionate governance speeds things up", body: "Good governance is a fast lane for low-risk work and a careful lane for high-risk work.", points: [
        "Pre-approved tools and patterns for common low-risk uses.",
        "Clear, quick triage so teams know their tier in days, not months.",
        "Reusable evidence and templates.",
        "Measure governance cycle time and fix bottlenecks."
      ] }
    ],
    scenario: { title: "Shadow AI discovered", situation: "An internal audit finds 40 AI tools in use across the company, only six of them approved, including one processing customer data under a personal credit card.", approach: [
      "Treat it as a demand signal: people need tools the approved list does not offer.",
      "Immediate: contain the high-risk case and assess any data exposure.",
      "Structural: a fast approval route, an expanded approved catalogue, a clear policy and an inventory process."
    ] },
    exercise: "Draft three statements of AI risk appetite for your area: one for internal productivity, one for customer-facing AI, and one for decisions about people.",
    watchouts: ["Governance that only says no drives AI underground.", "Vendor AI features switched on by default are part of your inventory too."],
    quiz: [
      { q: "In the three lines model, who is accountable for an AI use case's risks day to day?", o: ["Internal audit", "The first-line business owner", "The vendor", "The board directly"], a: 1, why: "The first line owns and manages the risks of its activities." },
      { q: "What should an AI risk appetite define?", o: ["The brand colours", "Where AI may act alone, where humans decide, and where AI must not be used", "The IT budget", "Office locations"], a: 1, why: "Risk appetite sets boundaries for innovation." },
      { q: "Which question is a board most likely to expect you to answer?", o: ["Which model has the most parameters?", "Do we have a complete AI inventory and know which systems are high risk?", "Which programming language we use", "How many prompts staff send"], a: 1, why: "Inventory and risk visibility are the basis of oversight." },
      { q: "How should leadership respond to widespread shadow AI?", o: ["Ban all AI", "Contain risks, then provide fast approval and better approved tools", "Ignore it", "Discipline everyone"], a: 1, why: "Shadow AI shows unmet demand; safe alternatives reduce risk." },
      { q: "What makes governance proportionate?", o: ["The same process for every use", "Lighter controls for low risk and stronger controls for high risk", "No controls", "Only legal review"], a: 1, why: "Proportionality speeds low-risk work and protects high-risk areas." }
    ]
  }
];

ACADEMY.templates.leader = [
  {
    id: "ldr-strategy-onepager", title: "AI strategy on a page",
    purpose: "Summarise your AI ambition, priorities, enablers and guardrails.",
    when: "Annual planning and when resetting direction.",
    sections: [
      { h: "Ambition", fields: ["What AI will help us achieve in 2 to 3 years", "How we will measure it"] },
      { h: "Priorities", fields: ["Productivity plays", "Process transformation plays", "New value plays"] },
      { h: "Enablers", fields: ["Data", "Platforms and partners", "Skills and talent", "Operating model"] },
      { h: "Guardrails", fields: ["Risk appetite statements", "Principles", "Governance forum and decision rights"] }
    ]
  },
  {
    id: "ldr-business-case", title: "AI business case challenge checklist",
    purpose: "Test AI investment proposals before approving them.",
    when: "Before approving funding for any AI initiative.",
    sections: [
      { h: "Value", fields: ["Baseline metric and source", "How time saved becomes value", "Benefit if adoption is 50% of forecast"] },
      { h: "Cost", fields: ["Build and licence costs", "Running costs (tokens, compute, support)", "Change, training and governance costs"] },
      { h: "Risk and evidence", fields: ["Risk tier and key risks", "Evidence so far (PoC results)", "Exit criteria for next stage"] }
    ]
  },
  {
    id: "ldr-board-report", title: "Board AI oversight report",
    purpose: "Give the board a clear view of AI value, risk and governance.",
    when: "Quarterly or as agreed with the board.",
    sections: [
      { h: "Portfolio", fields: ["Number of AI systems by risk tier", "Major initiatives and status", "Value delivered against plan"] },
      { h: "Risk", fields: ["High-risk systems and control status", "Incidents and lessons", "Regulatory developments and readiness"] },
      { h: "Capability", fields: ["Training completion", "Governance cycle time", "Decisions requested from the board"] }
    ]
  }
];
