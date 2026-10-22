ACADEMY.tracks.leader = [
  {
    id: "ldr-use", stage: "use",
    title: "Personal AI fluency for leaders",
    summary: "Use AI yourself for briefing, decision preparation and communication, and role-model the behaviours you want in your organisation.",
    outcomes: [
      "Use AI to prepare for decisions, meetings and communications",
      "Ask the right questions of AI outputs and of teams presenting AI work",
      "Role-model safe and effective AI use"
    ],
    sections: [
      { h: "Why hands-on use matters", body: "Leaders who use AI themselves make better investment and risk decisions. Personal experience calibrates your sense of what is easy, hard and hype.\n\nAn hour a week of real use is enough. Pick tasks you actually do (preparing for a meeting, reading a long paper, drafting a message) and use the approved tool for them. Within a month you will have a far better sense of where AI helps your organisation than any vendor briefing gives you.", points: [
        "You learn the real strengths: speed of synthesis, drafting and perspective-taking.",
        "You see the real weaknesses: confident errors, generic thinking and missing context.",
        "Your teams follow what you do more than what you say."
      ] },
      { h: "High-value uses for leaders", body: "Focus on preparation and thinking, not on outsourcing judgement.\n\nThe best leadership use of AI is as a sparring partner before a decision, not as the author of the decision. Ask it to argue the other side, find the weakest assumption, or say what a sceptical board member would ask. You stay the one who decides.", example: "Before an investment committee, a COO gives an approved assistant the proposal and asks: 'List the five assumptions this case depends on most, what evidence supports each, and what would happen to the return if each were 20% worse.' Two assumptions turn out to rest on a single vendor slide. The COO asks for real data before the meeting.", points: [
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
      { h: "Role-modelling", body: "Visible, responsible use sets the culture.\n\nWhat leaders say about AI in passing matters. 'I used it to prepare, then checked the numbers myself' teaches good practice. 'The AI says we should' teaches the opposite.", points: [
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
    howto: {"title": "A leader's routine for AI-assisted reading", "steps": [{"h": "Use an approved tool", "body": "Board papers and deal documents are among the most sensitive data you hold."}, {"h": "Ask for structure with page references", "body": "Key findings, risks, open questions and recommendations, each with the page or section it came from."}, {"h": "Read the risk and finance sections yourself", "body": "Summaries most often soften caveats and drop conditions. Check what the summary says about the parts that matter most."}, {"h": "Ask what was left out", "body": "'What material risks or dissenting views in the document are not in your summary?'"}, {"h": "Note what you relied on", "body": "If a decision rests on a point, know whether you read it or the AI did."}]},
    cases: [{"title": "A consultancy refunds a government after AI errors in a report (Deloitte Australia, 2025)", "body": "A report Deloitte prepared for an Australian government department was found to contain fabricated references and a misattributed court quote. A revised version disclosed that generative AI had been used, and the firm agreed to refund part of its fee.", "lesson": "Leaders sign off on work that may be AI-assisted. Ask how it was checked, especially references and quotes."}, {"title": "A deepfake video call costs a company 25 million dollars (Arup, 2024)", "body": "An employee of the engineering firm Arup in Hong Kong joined a video call with what appeared to be the CFO and colleagues, all of them deepfakes, and was instructed to make transfers totalling about 25 million US dollars.", "lesson": "AI raises the stakes for verification. Leaders should back controls such as call-back checks for payments, even when the request seems to come from the top."}],
    checklist: {"title": "Leader's AI habits", "items": ["I use AI myself, in approved tools, and talk openly about how.", "For decisions, I check sources and read the critical sections myself.", "I use AI to challenge my thinking, not to make the call.", "I ask how AI-assisted work put in front of me was checked.", "I support verification controls even when they slow requests from senior people."]},
    decide: {"title": "What to use AI for as a leader", "cols": ["Task", "Approach"], "rows": [["Reading long papers before a meeting", "AI summary with page references; read the critical sections yourself"], ["Preparing for a hard conversation", "Ask AI to play the other side and list likely objections"], ["Drafting all-staff communications", "AI drafts; you rewrite the key message in your own voice"], ["Testing a strategy", "Ask for the strongest counter-arguments and weakest assumptions"], ["Decisions about people", "Human judgement; AI only to organise information you already have"]]},
    exercise: "Before your next major meeting, use an approved assistant to summarise the papers and generate five challenge questions. Afterwards, note which questions were useful.",
    watchouts: ["Board and M&A materials are highly confidential: approved tools only.", "AI is a sparring partner, not a decision-maker."],
    quiz: [
      { q: "Why should leaders use AI tools personally?", o: ["To replace their teams", "To calibrate their judgement about what AI can and cannot do", "To save on licences", "Because it is mandatory"], a: 1, why: "Hands-on experience improves investment and risk decisions." },
      { q: "What is a good leader prompt before a board meeting?", o: ["'Make the decision for me'", "'List the legal, regulatory and financial risks mentioned anywhere, with page references'", "'Write a joke for the opening'", "'Summarise in one word'"], a: 1, why: "Targeted prompts with references reduce the risk of missed exceptions." },
      { q: "What does using unapproved AI tools as a leader signal?", o: ["Innovation", "That policy does not really apply, undermining governance", "Efficiency", "Nothing"], a: 1, why: "Leaders' behaviour sets the norm for everyone." },
      { q: "Which question best tests an AI-generated recommendation?", o: ["Is it well formatted?", "What assumption, if wrong, would change this conclusion?", "Is it long enough?", "Which model wrote it?"], a: 1, why: "Testing assumptions exposes the weakest parts of the reasoning." },
      { q: "What should leaders reward around AI?", o: ["Only big wins", "Responsible experimentation, including stopping what does not work", "Using AI as much as possible", "Avoiding AI entirely"], a: 1, why: "Learning cultures need safe experimentation and honest stopping." },
      {"q": "What is the most valuable way for a leader to use AI before a major decision?", "o": ["Ask it to make the decision", "Use it to challenge assumptions and surface the weakest points, then decide yourself", "Ask it to write the board resolution", "Avoid it for important topics"], "a": 1, "why": "AI is a strong sparring partner; accountability for the decision stays with you."},
      {"q": "Which control best protects against deepfake payment requests from 'executives'?", "o": ["Trusting video calls", "Independent call-back verification for payments, whoever asks", "Asking the caller to switch on their camera", "Using a larger AI model"], "a": 1, "why": "Video and voice can be faked convincingly, as the Arup case showed; out-of-band verification still works."}
    ]
  },
  {
    id: "ldr-identify", stage: "identify", updated: "2026-10-20",
    title: "Where AI creates value: strategy and portfolio",
    summary: "Set an AI ambition, choose where to play, and run a portfolio of use cases that balances value, feasibility and risk.",
    outcomes: [
      "Distinguish productivity, process transformation and new-value plays",
      "Prioritise a portfolio of AI use cases with clear value cases",
      "Ask the questions that expose weak AI business cases",
      "Track AI value from business case to realised benefit, and manage vendor lock-in and sovereignty"
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
      { h: "Testing a business case", body: "AI business cases often overstate benefits and understate costs.\n\nThe most common flaw is counting time saved as money saved. If a copilot saves each person 30 minutes a day but nothing changes in how work is planned, the time is absorbed and no cost or output changes. Ask the sponsor to name what the released capacity will do, and how you will see it.", example: "Two cases claim the same 10% time saving. Case A: 'Staff will be more productive.' Case B: 'The claims team will absorb 15% volume growth next year without hiring the eight planned roles; we will track claims per handler monthly.' Only Case B can be held to account.", points: [
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
      ] },
      { h: "Measuring AI ROI and value realisation", body: "Most AI business cases forecast value; few organisations check whether it arrived. Value realisation means tracking benefits from approval to delivery, and acting on what you find.", points: [
        "Agree the baseline before launch: today's cycle time, cost per case, error rate or revenue, measured the same way you will measure after.",
        "Separate activity (licences, prompts, active users) from outcomes (hours released, cost removed, revenue gained, quality improved).",
        "Time saved is only value when it is redeployed or removed: name what people will do with the released time, or which costs fall.",
        "Count the full cost: licences, usage (tokens and compute), integration, change, support, governance and the people running it.",
        "Review realised value against the business case at 3, 6 and 12 months, and stop, fix or scale each initiative on the evidence.",
        "Give each initiative a benefits owner in the business, not in IT or the AI team."
      ] },
      { h: "Vendor lock-in and AI sovereignty", body: "AI models, prices and providers change quickly. Strategic choices today can limit your options for years.", points: [
        "Lock-in comes from proprietary platforms, agents and prompts tuned to one model, data held in a vendor's format, and contracts with long commitments.",
        "Keep options open: abstract models behind a gateway or interface, keep your data and evaluation sets portable, and test a second model for key use cases.",
        "AI sovereignty is control over where AI runs, where data is stored and processed, and which legal jurisdiction applies. It matters most for public sector, regulated and critical-infrastructure work.",
        "Sovereignty options include regional cloud hosting, sovereign cloud offerings, and self-hosted open-weight models, each with cost and capability trade-offs.",
        "Ask: if this vendor doubled prices, changed terms or withdrew the model, how long would it take us to switch?"
      ] }
    ],
    scenario: { title: "The 10% productivity promise", situation: "A business case claims a copilot licence for 5,000 staff will save 10% of time, worth tens of millions. Six months after rollout, active use is 35% and no costs have fallen.", approach: [
      "Time saved per person is not value until it is redeployed or removed.",
      "Tie the rollout to specific workflows and metrics (cases handled, cycle time).",
      "License in waves based on adoption and measured outcomes."
    ] },
    howto: {"title": "Running a quarterly AI portfolio review", "steps": [{"h": "List every funded initiative", "body": "Stage, owner, spend to date, and the exit criteria for the current stage."}, {"h": "Compare realised against forecast value", "body": "Using the baseline agreed at launch, not new anecdotes."}, {"h": "Check risk and readiness", "body": "Risk tier, open issues, governance status, data dependencies."}, {"h": "Decide each one", "body": "Scale, continue, pivot or stop. Stopping on evidence is a success of the process."}, {"h": "Rebalance", "body": "Move money from what is not working to what is, and keep a mix of quick wins and strategic bets."}, {"h": "Report", "body": "Share the portfolio view with the executive team and board, including what was stopped and why."}]},
    decide: {"title": "Which kind of value, which approach?", "cols": ["If you want…", "Then focus on…"], "rows": [["Broad productivity across the workforce", "Approved assistants, training and champions; measure adoption and time redeployed"], ["Step change in a specific process", "End-to-end process redesign with a business owner, not a tool roll-out"], ["New products or revenue", "Small, staged bets with customer evidence and clear kill criteria"], ["Lower long-term dependency risk", "Model abstraction, data portability and exit terms in contracts"]]},
    checklist: {"title": "Testing an AI business case", "items": ["The baseline is measured, not estimated.", "Time saved is tied to a named use of the released capacity.", "Full costs are included: licences, usage, integration, evaluation, change and governance.", "There is a downside case at half the expected adoption.", "A benefits owner will report realised value against the forecast.", "Lock-in and exit costs are understood."]},
    cases: [{"title": "An AI startup's collapse (Builder.ai, 2025)", "body": "Builder.ai, a heavily funded startup that marketed AI-driven app building, entered insolvency in 2025 after its revenue figures were found to be overstated. Reports also questioned how much of its 'AI' work had been done by human developers.", "lesson": "Due diligence on AI vendors should test the claims: what the AI actually does, on your data, and whether the company is financially sound."}],
    exercise: "List your organisation's or unit's top five strategic priorities. For each, name one AI use case and classify it as productivity, transformation or new value.",
    watchouts: ["Copying competitors' AI announcements is not a strategy.", "Spreading budget across 100 pilots usually produces 100 pilots.", "A business case that is never checked after approval teaches nothing."],
    quiz: [
      { q: "Which kind of AI value usually needs the most process and change investment?", o: ["Personal productivity", "Process transformation", "Buying licences", "Hackathons"], a: 1, why: "Transformation redesigns workflows, which requires change management." },
      { q: "When does 'time saved' become real business value?", o: ["Immediately", "When it is redeployed to valuable work, removes cost or increases revenue", "When reported in a survey", "Never"], a: 1, why: "Value requires a change in output, cost or revenue." },
      { q: "What is a sound way to fund AI initiatives?", o: ["Large upfront budgets for every idea", "Stage-gated funding that grows with evidence", "Fund only vendor proposals", "Equal funding for all teams"], a: 1, why: "Staged funding limits waste and backs proven ideas." },
      { q: "Which cost is most often missing from AI business cases?", o: ["Office space", "Ongoing running, monitoring and change costs", "Pens and paper", "Travel"], a: 1, why: "Run costs and change effort are frequently underestimated." },
      { q: "What builds lasting AI advantage beyond individual projects?", o: ["More press releases", "Data foundations, shared platforms, skills and proportionate governance", "Hiring one AI expert", "Buying the largest model"], a: 1, why: "Capabilities compound across projects." },
      { q: "A copilot rollout saves staff 30 minutes a day, but no costs fall and no new work is done. What is the realised value?", o: ["The full value of the time saved", "Little or none until the released time is redeployed or costs are removed", "It cannot be measured", "Double the forecast"], a: 1, why: "Time saved becomes value only when it is used for something else or removes cost." },
      { q: "Which step most reduces AI vendor lock-in?", o: ["Signing a five-year exclusive contract", "Abstracting models behind an interface and keeping data and evaluation sets portable", "Using only one model for everything", "Building agents only in one vendor's proprietary tool"], a: 1, why: "Portability of data, evaluations and model access keeps switching costs low." },
      {"q": "A business case says AI will save 10% of staff time. What makes it credible?", "o": ["A vendor quote", "A named use of the released capacity and a measure you will track", "A larger percentage", "Executive enthusiasm"], "a": 1, "why": "Time saved only becomes value when it is redeployed to something measurable."},
      {"q": "What is a good outcome of a portfolio review?", "o": ["Every project continues", "Some initiatives are stopped on evidence and money moves to what works", "All budgets increase", "Reviews are skipped when projects are popular"], "a": 1, "why": "Stopping on evidence and reallocating is how a portfolio creates value."}
    ]
  },
  {
    id: "ldr-implement", stage: "implement", updated: "2026-10-20",
    title: "Leading AI adoption and change",
    summary: "Drive real adoption: operating model, workforce impact, communication, incentives and measuring what matters.",
    outcomes: [
      "Choose an AI operating model (central, federated or hub-and-spoke)",
      "Lead the people side: roles, skills, concerns and incentives",
      "Track adoption and outcomes, not activity",
      "Set up an AI centre of excellence, a champions network and a reskilling plan"
    ],
    sections: [
      { h: "Operating model", body: "Decide how AI expertise, platforms and governance are organised.", points: [
        "Centralised: a central AI team builds for everyone. Strong control, can become a bottleneck.",
        "Federated: business units build their own. Fast, risk of duplication and inconsistent controls.",
        "Hub-and-spoke (most common): a central hub sets platforms, standards and governance; business spokes own use cases and outcomes."
      ] },
      { h: "The people side", body: "AI changes tasks first, then roles. People's concerns are real and deserve honest answers.\n\nSilence from leaders is filled by the worst assumptions. Saying clearly what AI is for, what it is not for, and how people will be supported is the single most effective adoption step, and it costs nothing.", example: "When IKEA introduced an AI bot to handle routine customer queries, it retrained thousands of call-centre staff as remote interior design advisers, a new service line. The message to staff was about new work, not fewer people.", points: [
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
      ] },
      { h: "AI centre of excellence and champions", body: "In a hub-and-spoke model, the hub is often called an AI centre of excellence (CoE). Champions carry it into every team.", points: [
        "The CoE owns shared platforms and patterns, standards, the use case pipeline, reusable components, training and the link to governance.",
        "Keep it small and enabling: its success is measured by what business teams deliver, not by what it builds itself.",
        "AI champions are respected people in each team, given time (for example 10% of their week), training and early access, who help colleagues and feed back what works.",
        "Run a community of practice: show-and-tell sessions, a shared prompt and use case library, and a channel for questions.",
        "Review the CoE's remit as maturity grows; many shift from building to enabling and assuring."
      ] },
      { h: "Reskilling the workforce", body: "AI changes tasks before it changes roles. Plan skills ahead of the change.", points: [
        "Map which tasks in each role AI will take over, assist or leave unchanged, and what new skills the role needs (reviewing AI output, judgement, exception handling).",
        "Provide role-based training, like this academy, plus hands-on practice with the approved tools.",
        "Create pathways for people whose roles shrink, into roles that grow, such as AI operations, quality review or customer roles.",
        "Track skills and training completion as part of AI adoption reporting.",
        "The EU AI Act requires organisations that provide or deploy AI to take measures to ensure staff have sufficient AI literacy."
      ] }
    ],
    scenario: { title: "Silent resistance", situation: "A customer service AI assistant was rolled out to 800 agents. Usage dropped after week two. Interviews revealed agents feared the data would be used to cut headcount, and the assistant slowed them down on complex calls.", approach: [
      "Address the fear directly with a clear statement on how gains will be used.",
      "Fix the workflow problem with agents' input: use the assistant for after-call summaries first, where it clearly helps.",
      "Track outcomes per team and celebrate agent-led improvements."
    ] },
    howto: {"title": "Launching an AI adoption programme", "steps": [{"h": "Say what it is for", "body": "A short message from the top on purpose, boundaries and how people will be supported."}, {"h": "Make the safe path the easy path", "body": "Approved tools available to all, single sign-on, clear guidance on data."}, {"h": "Train by role", "body": "Basics for everyone, role paths for depth, and time in the working week to learn."}, {"h": "Recruit champions", "body": "Respected people in each team who share real examples and collect problems."}, {"h": "Redesign a few processes properly", "body": "Pick two or three where AI changes the work, involve the people who do it, and measure outcomes."}, {"h": "Measure and adjust", "body": "Adoption depth, outcomes and risk signals, reviewed quarterly, with investment following results."}]},
    cases: [{"title": "An 'AI-first' memo meets its audience (Duolingo, 2025)", "body": "Duolingo's CEO shared an internal memo saying the company would become 'AI-first' and gradually stop using contractors for work AI could handle. It drew strong public and employee criticism, and the CEO later clarified that no full-time employees were being replaced and that the company would keep hiring.", "lesson": "How you communicate AI's impact on work matters as much as the strategy. Lead with purpose, support and specifics."}],
    checklist: {"title": "Leading adoption", "items": ["Purpose, boundaries and support for people are communicated from the top.", "Approved tools are easy to access; shadow AI has a better alternative.", "Role-based training has time set aside for it.", "Employee representatives are consulted where required.", "Champions and a community of practice are active.", "We measure outcomes, not licences."]},
    decide: {"title": "Which operating model?", "cols": ["If your organisation…", "Consider…"], "rows": [["Is early, with little AI expertise", "Centralised: a small team builds first use cases and sets standards"], ["Has strong, independent business units with their own tech teams", "Federated, with shared guardrails and platforms"], ["Wants scale with consistency (most organisations)", "Hub-and-spoke: central CoE for platforms and governance, champions in each unit"], ["Has many teams building agents", "Add a control tower and an agent registry to the hub"]]},
    exercise: "Write a one-paragraph message to your team explaining what AI will and will not change for them this year, and how you will support them.",
    watchouts: ["Silence on workforce impact is filled with rumours.", "Mandating AI use without fixing workflows produces box-ticking."],
    quiz: [
      { q: "What is the hub-and-spoke AI operating model?", o: ["Every team builds anything independently", "A central hub sets platforms, standards and governance while business units own use cases", "Only IT can use AI", "Outsourcing all AI"], a: 1, why: "It balances control and speed, which is why it is common." },
      { q: "Which is an outcome metric rather than activity?", o: ["Licences assigned", "Reduction in case cycle time", "Number of prompts", "Training sessions held"], a: 1, why: "Outcome metrics show business change." },
      { q: "How should leaders handle staff concerns about AI and jobs?", o: ["Avoid the topic", "Be clear about intentions, invest in reskilling and involve staff", "Promise nothing will change", "Let managers decide individually"], a: 1, why: "Honesty and support build trust and adoption." },
      { q: "Usage of a new AI tool drops after launch. What should you do first?", o: ["Mandate usage", "Find out why from users and fix workflow or trust issues", "Buy a different tool", "Cancel the project"], a: 1, why: "Understanding the cause leads to an effective fix." },
      { q: "Where may formal consultation be required before AI changes roles?", o: ["Never", "With works councils, unions or employee representatives under local law", "Only with shareholders", "Only with vendors"], a: 1, why: "Many jurisdictions require consultation on significant workplace changes." },
      { q: "What is the main job of an AI centre of excellence in a hub-and-spoke model?", o: ["To build every AI solution itself", "To provide shared platforms, standards, training and support so business teams can deliver", "To approve every prompt", "To replace the risk function"], a: 1, why: "A CoE enables the spokes; it should not become a bottleneck." },
      { q: "What makes an AI champions network work?", o: ["Champions with no extra time", "Respected people in each team, given time, training and a community", "Only senior executives as champions", "A one-off launch email"], a: 1, why: "Champions need time and support to help their colleagues." },
      {"q": "What is the most effective early step for AI adoption?", "o": ["Buying more licences", "Clear communication of purpose, boundaries and how people will be supported", "Mandating usage targets", "Keeping plans confidential"], "a": 1, "why": "Clarity reduces fear and shadow use, and sets the conditions for real adoption."},
      {"q": "What did the IKEA example show about workforce impact?", "o": ["AI always cuts jobs", "Released capacity can be redeployed into new services through reskilling", "Call centres cannot use AI", "Reskilling is too slow"], "a": 1, "why": "Planning new work for people whose tasks change turns AI into growth rather than only cost-cutting."}
    ]
  },
  {
    id: "ldr-govern", stage: "govern", updated: "2026-10-20",
    title: "Accountability, risk appetite and oversight",
    summary: "Set the governance structure, risk appetite and board oversight that let AI scale safely.",
    outcomes: [
      "Define accountability for AI across the three lines",
      "Set an AI risk appetite and policy principles",
      "Ask the oversight questions boards and regulators expect",
      "Set up an agent control tower and the enterprise controls every AI agent must meet"
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
      { h: "Oversight questions", body: "Boards and regulators increasingly ask these questions. You should be able to answer them.\n\nDirectors' duties apply to AI as to any material risk. A board that cannot answer these questions, or that only hears about AI as an opportunity, is not overseeing it. Ask for an AI risk report at least twice a year, with the inventory, high-risk systems, incidents and training coverage.", points: [
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
      ] },
      { h: "From AI tools to a fleet of AI agents", body: "AI agents do not just answer questions; they take actions in your systems. Once several teams build or buy agents, you are managing a digital workforce, and it needs the same basics as a human one: a register, an owner, permissions, supervision and a way to stop it.", points: [
        "Agent sprawl is the new shadow AI: agents built in low-code tools, switched on in vendor software (CRM, ITSM, HR, ERP suites) and written by engineering teams, each with its own access.",
        "Multi-agent systems split work across agents, for example an orchestrator agent that hands tasks to research, drafting and booking agents. Errors and permissions can cascade from one agent to the next.",
        "Agents act through tools and APIs using credentials. Whoever controls those credentials controls what the agent can do.",
        "Decide early which processes may have agents acting alone, which need a human approval step, and which are off-limits. This is your risk appetite applied to autonomy."
      ] },
      { h: "BOAT: orchestrating people, bots, systems and agents", body: "BOAT stands for Business Orchestration and Automation Technologies, a market category Gartner introduced in 2025. It reflects RPA, integration platforms (iPaaS), low-code app builders, process automation and AI agents converging into platforms that run an end-to-end process across all of them.", points: [
        "The idea: instead of a separate bot tool, integration tool and agent tool, one orchestration layer decides which step is done by a person, a rules-based bot, a system API or an AI agent, and keeps the end-to-end record.",
        "Why it matters to you: it is where process ownership, SLAs, exception queues and audit trails for automated work can be managed in one place, rather than per tool.",
        "Questions to ask a BOAT or automation vendor: Can it orchestrate agents from other vendors? Does it give every agent an identity and an owner? Can we see and stop any run? Does it keep a complete audit trail and cost per process?",
        "Avoid buying the category name. Start from two or three processes you want to orchestrate end to end and test vendors against them."
      ] },
      { h: "The agent control tower", body: "An agent control tower is a single management layer, a mix of platform, process and team, that gives you visibility and control over every AI agent in the organisation, whichever vendor or team built it. Several vendors now sell products under names like 'AI control tower' or 'agent command center'; the capability matters more than the label.", points: [
        "See: a live register of every agent, its owner, purpose, risk tier, the systems it can touch and whether it is active.",
        "Control: policies applied centrally, such as allowed tools, data limits, approval steps and spending caps, rather than reinvented by each team.",
        "Watch: dashboards of activity, success rates, escalations to humans, incidents and cost per agent and per process.",
        "Stop: the ability to pause or switch off one agent, an agent type or all agents quickly, and to fall back to a manual process.",
        "Own it: give the control tower a named owner (often the CIO or COO organisation, with risk as second line) and connect it to the AI council's decisions."
      ] },
      { h: "Enterprise controls every agent should meet", body: "Make these the minimum standard before an agent goes live. Scale the strength of each control to the agent's risk tier.", points: [
        "Registry and inventory: no agent runs in production unless it is registered with an accountable owner.",
        "Identity and permissions: each agent has its own identity (never a shared or personal account) and only the access its task needs.",
        "Guardrails: limits on what it may say and do, checked in code, such as allowed actions, data it may not share, and topics it must refuse.",
        "Human-in-the-loop: people approve irreversible, high-value or customer-affecting actions, with clear thresholds.",
        "Observability: every run is traced, so you can see what the agent was asked, what it decided and which tools it used.",
        "Cost controls: budgets and rate limits per agent, with alerts before they are exceeded.",
        "Kill switch: tested ability to stop an agent at once, with a manual fallback.",
        "Audit trail: tamper-resistant logs kept long enough to answer regulators, auditors and customers."
      ] },
      { h: "Sustainability: the energy and carbon cost of AI", body: "Training and running large models uses significant electricity and water. Customers, investors and sustainability reporting rules increasingly ask about it.", points: [
        "Most of your footprint comes from usage (inference) at scale, not training, unless you train large models yourself.",
        "Choose the smallest model that does the job well; large or reasoning models can use many times more compute per request.",
        "Ask vendors for energy, carbon and water data for the services you use, and for the regions they run in.",
        "Include AI in your sustainability reporting scope where material.",
        "Avoid AI for tasks a simple rule or search does equally well."
      ] }
    ],
    scenario: { title: "Shadow AI discovered", situation: "An internal audit finds 40 AI tools in use across the company, only six of them approved, including one processing customer data under a personal credit card.", approach: [
      "Treat it as a demand signal: people need tools the approved list does not offer.",
      "Immediate: contain the high-risk case and assess any data exposure.",
      "Structural: a fast approval route, an expanded approved catalogue, a clear policy and an inventory process."
    ] },
    howto: {"title": "Standing up AI governance in 90 days", "steps": [{"h": "Weeks 1 to 2: name accountability", "body": "Executive sponsor, governance forum, and first, second and third line roles."}, {"h": "Weeks 2 to 4: publish the basics", "body": "Acceptable use policy, approved tools, data rules and how to register a use case."}, {"h": "Weeks 3 to 6: build the inventory", "body": "Find existing AI, including vendor features and shadow tools. Assign owners and tiers."}, {"h": "Weeks 5 to 8: set risk appetite", "body": "Where AI may act alone, error tolerances by use type, and prohibited uses, agreed by the executive team."}, {"h": "Weeks 6 to 10: proportionate review", "body": "Fast lane for low risk, full review for high risk, with target turnaround times."}, {"h": "Weeks 8 to 12: report and train", "body": "First board report, role-based training under way, and an incident route everyone knows."}]},
    cases: [{"title": "AI-written articles with fake authors (Sports Illustrated, 2023)", "body": "A magazine publisher was found to have published product reviews under invented author names with AI-generated headshots. The content was attributed to a third-party partner. The publisher removed the content, and its chief executive was dismissed weeks later.", "lesson": "Transparency failures become leadership failures. Know where AI-generated content is published under your brand and how it is labelled."}, {"title": "An automated debt scheme found unlawful (Robodebt, Australia, 2016 to 2020)", "body": "The Australian government used automated income averaging to raise welfare debts with little human review. It was found unlawful, the government settled a class action worth about 1.8 billion Australian dollars, and a royal commission in 2023 called it a crude and cruel mechanism.", "lesson": "Automated decisions about people need a lawful basis, human review and challenge routes. The board-level cost of getting this wrong is enormous."}],
    checklist: {"title": "Board-level AI oversight", "items": ["There is a complete AI inventory with owners and risk tiers.", "Risk appetite for AI is written and approved.", "High-risk systems are listed with their controls and last review.", "AI incidents and lessons are reported to the board.", "Training coverage for staff using AI is tracked.", "Agents are registered, have identities, and can be stopped."]},
    decide: {"title": "Setting risk appetite by use type", "cols": ["Use type", "Typical appetite"], "rows": [["Internal drafting and summarising", "Open: approved tools, staff check outputs"], ["Customer-facing content with human review", "Moderate: testing, labelling, sampling"], ["Automated customer interactions", "Cautious: grounding, limits on topics, route to a human, monitoring"], ["Decisions affecting people's rights or money", "Low: human decision, full assessment, audit trail"], ["Agents acting in core systems", "Low until proven: tight permissions, approvals, kill switch"], ["Prohibited practices", "Zero"]]},
    exercise: "Draft three statements of AI risk appetite for your area: one for internal productivity, one for customer-facing AI, and one for decisions about people.",
    watchouts: ["Governance that only says no drives AI underground.", "Vendor AI features switched on by default are part of your inventory too.", "An agent that can act with a shared or personal account cannot be properly controlled or audited."],
    quiz: [
      { q: "In the three lines model, who is accountable for an AI use case's risks day to day?", o: ["Internal audit", "The first-line business owner", "The vendor", "The board directly"], a: 1, why: "The first line owns and manages the risks of its activities." },
      { q: "What should an AI risk appetite define?", o: ["The brand colours", "Where AI may act alone, where humans decide, and where AI must not be used", "The IT budget", "Office locations"], a: 1, why: "Risk appetite sets boundaries for innovation." },
      { q: "Which question is a board most likely to expect you to answer?", o: ["Which model has the most parameters?", "Do we have a complete AI inventory and know which systems are high risk?", "Which programming language we use", "How many prompts staff send"], a: 1, why: "Inventory and risk visibility are the basis of oversight." },
      { q: "How should leadership respond to widespread shadow AI?", o: ["Ban all AI", "Contain risks, then provide fast approval and better approved tools", "Ignore it", "Discipline everyone"], a: 1, why: "Shadow AI shows unmet demand; safe alternatives reduce risk." },
      { q: "What makes governance proportionate?", o: ["The same process for every use", "Lighter controls for low risk and stronger controls for high risk", "No controls", "Only legal review"], a: 1, why: "Proportionality speeds low-risk work and protects high-risk areas." },
      { q: "What is the main purpose of an agent control tower?", o: ["To make agents run faster", "To give one place to see, control, monitor and stop every AI agent, whoever built it", "To replace the AI council", "To train new models"], a: 1, why: "A control tower provides central visibility and control across agents from all teams and vendors." },
      { q: "In Gartner's terminology, what does BOAT refer to?", o: ["A type of large language model", "Business Orchestration and Automation Technologies: platforms that orchestrate people, bots, systems and AI agents across end-to-end processes", "A board oversight framework", "A cloud hosting option"], a: 1, why: "BOAT is the converging category of RPA, integration, low-code, process automation and agent orchestration." },
      { q: "Which should be a minimum requirement before any AI agent goes live?", o: ["It uses the newest model", "It is registered with an owner, has its own scoped identity, is logged and can be switched off", "It has a friendly name", "It was built by the central AI team"], a: 1, why: "Registry, identity, observability and a kill switch are baseline enterprise controls for agents." },
      { q: "What usually drives most of an organisation's AI energy footprint?", o: ["Training its own frontier models", "Running AI at scale (inference), especially with larger models than needed", "Staff reading AI news", "Printing AI outputs"], a: 1, why: "For most organisations, usage dominates; right-sizing models reduces it." },
      {"q": "What should a board receive regularly about AI?", "o": ["Only success stories", "A risk report with inventory, high-risk systems, incidents and training coverage", "The list of prompts used", "Vendor marketing material"], "a": 1, "why": "Oversight needs the facts about where AI is used, how it is controlled and what has gone wrong."},
      {"q": "What was the core failure in Australia's Robodebt scheme?", "o": ["It used the wrong programming language", "Automated decisions about people without a lawful basis, adequate human review or fair challenge", "It was too slow", "It used generative AI"], "a": 1, "why": "Automated decisions affecting people's rights need lawful design, oversight and appeal routes."}
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
  },
  {
    id: "ldr-agent-control-tower", title: "Agent control tower charter",
    purpose: "Set up central oversight of AI agents across the organisation: scope, ownership, minimum controls and reporting.",
    when: "When more than a handful of agents are planned or in use, or before buying an agent or orchestration platform.",
    sections: [
      { h: "Scope", fields: ["Which agents are in scope (built, bought, embedded in vendor software)", "Processes where agents may act alone, need approval, or are not allowed"] },
      { h: "Ownership", fields: ["Control tower owner", "Role of risk, security and audit", "How agent owners are named and what they are accountable for"] },
      { h: "Minimum controls by risk tier", fields: ["Registry and owner", "Identity and permissions", "Guardrails", "Human approval thresholds", "Observability and audit logs", "Budgets and rate limits", "Kill switch and fallback tested"] },
      { h: "Platform", fields: ["Orchestration / BOAT platform and agent platforms in use", "Can it manage agents from other vendors?", "Gaps and roadmap"] },
      { h: "Reporting", fields: ["Agents by risk tier and status", "Incidents, escalations and stops", "Cost and value per agent", "Decisions needed from the AI council"] }
    ]
  },
  {
    id: "ldr-value-tracker", title: "AI value realisation tracker",
    purpose: "Track whether an AI initiative delivers the value its business case promised.",
    when: "At approval, then at 3, 6 and 12 months after launch.",
    sections: [
      { h: "Baseline", fields: ["Initiative and benefits owner", "Metric(s) and baseline value", "How and where it is measured"] },
      { h: "Forecast", fields: ["Benefit forecast in the business case", "Full cost forecast (licences, usage, change, support, governance)"] },
      { h: "Realised", fields: ["Adoption at review", "Measured outcome at review", "Released time and how it was used", "Actual costs"] },
      { h: "Decision", fields: ["Scale, fix or stop", "Actions and owner", "Next review date"] }
    ]
  }
];
