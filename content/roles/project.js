ACADEMY.tracks.project = [
  {
    id: "prj-use", stage: "use",
    title: "AI for planning, tracking and reporting",
    summary: "Use AI assistants to plan, track risks, write status reports and run meetings, while keeping the plan grounded in reality.",
    outcomes: [
      "Use AI to draft plans, RAID logs, status reports and meeting outputs",
      "Ground AI outputs in project data rather than generic assumptions",
      "Know what must stay human: commitments, estimates and stakeholder judgement"
    ],
    sections: [
      { h: "Everyday wins", body: "Project management is full of structured writing and synthesis, which AI does well.", points: [
        "First-draft work breakdown structures and plans from a scope statement.",
        "Meeting summaries with decisions, actions, owners and dates.",
        "Status reports tailored to sponsors, teams and steering committees.",
        "Risk brainstorming: 'what could go wrong with this plan?' to widen your RAID log.",
        "Drafting change requests, lessons learned and communications."
      ] },
      { h: "Ground it in your data", body: "Generic plans are easy to generate and dangerous to trust.", points: [
        "Give the assistant your actual scope, constraints, team capacity and dependencies.",
        "Use AI features inside your project tool (Jira, Azure DevOps, Asana, Smartsheet and others) so outputs reflect live data.",
        "Ask it to flag assumptions and missing information instead of filling gaps silently."
      ] },
      { h: "What stays human", body: "AI can draft; you commit.", points: [
        "Estimates and dates: validate with the people doing the work.",
        "Commitments to sponsors and customers.",
        "Reading the room: politics, morale, unspoken risks.",
        "Decisions about people, performance and resourcing."
      ] },
      { h: "Meeting tools and consent", body: "AI note-takers are useful and need care.", points: [
        "Tell participants and follow your organisation's consent rules, especially with external parties.",
        "Check summaries for misattributed decisions before circulating.",
        "Store recordings and transcripts according to retention policy."
      ] }
    ],
    scenario: { title: "The plan that looked finished", situation: "A project manager generated a detailed 40-task plan for an ERP integration in five minutes and shared it with the sponsor. Two weeks in, the team pointed out that data migration, which takes months, was a single two-day task.", approach: [
      "AI produced a plausible generic plan without knowledge of the legacy data.",
      "Use AI for the first draft, then run a planning session with the team to challenge every estimate.",
      "Mark AI-drafted plans as drafts until validated."
    ] },
    exercise: "Take your last status report. Ask an approved assistant to rewrite it for an executive audience in five bullets with clear asks. Compare, then decide what you would keep.",
    watchouts: ["AI summaries can attribute decisions to the wrong person; check before sending.", "Do not paste confidential contract or personnel details into unapproved tools."],
    quiz: [
      { q: "What is the main risk of an AI-generated project plan?", o: ["It is too short", "It looks complete but uses generic assumptions, not your project's reality", "It cannot be exported", "It uses the wrong font"], a: 1, why: "Plausible generic plans hide real constraints until it is too late." },
      { q: "Which task should stay firmly with the project manager?", o: ["Formatting the status report", "Committing dates and scope to the sponsor", "Summarising meeting notes", "Drafting a risk list"], a: 1, why: "Commitments carry accountability and need human judgement." },
      { q: "Before using an AI note-taker with a supplier, what should you do?", o: ["Nothing", "Inform participants and follow consent and retention rules", "Turn off your camera", "Use a personal account"], a: 1, why: "Recording others requires transparency and compliance with policy." },
      { q: "How can you make AI status reports more accurate?", o: ["Use more adjectives", "Generate them from live project data and ask the AI to flag assumptions", "Write them less often", "Use a larger model"], a: 1, why: "Grounding in real data and surfacing assumptions improves accuracy." },
      { q: "A good use of AI in risk management is to:", o: ["Accept all risks it proposes", "Widen the risk brainstorm, then assess with the team", "Replace the risk owner", "Close risks automatically"], a: 1, why: "AI helps generate ideas; assessment and ownership stay with people." }
    ]
  },
  {
    id: "prj-identify", stage: "identify",
    title: "Scoping AI projects realistically",
    summary: "Shape AI initiatives with the right phases, team, data dependencies and success criteria so they can actually deliver.",
    outcomes: [
      "Explain why AI projects need an experiment-first structure",
      "Scope data, evaluation and change management as first-class work",
      "Set go/no-go criteria for proof of concept, pilot and scale"
    ],
    sections: [
      { h: "Why AI projects are different", body: "AI work has more uncertainty than typical software. The question 'will it work well enough?' is only answered by experiment.", points: [
        "Quality is uncertain until tested on real data.",
        "Data access and quality often take longer than modelling.",
        "Success depends on users changing how they work.",
        "Governance approvals sit on the critical path."
      ] },
      { h: "Phase it: PoC, pilot, scale", body: "Each phase answers a different question and has its own exit criteria.", points: [
        "Proof of concept (2 to 6 weeks): can the AI do the task well enough on real examples? Exit: quality threshold met on an agreed evaluation set.",
        "Pilot (1 to 3 months): does it deliver value in the real workflow with real users? Exit: adoption and outcome metrics, no unresolved high risks.",
        "Scale: can we run it reliably, securely and economically for everyone? Exit: operational readiness, monitoring, support and cost model."
      ] },
      { h: "Scope the hidden work", body: "These items are routinely missing from AI project plans.", points: [
        "Data access agreements, cleaning and labelling.",
        "Building the evaluation set and running evaluations repeatedly.",
        "Risk assessment, privacy impact assessment, security review and approvals.",
        "Integration with existing systems and identity and access control.",
        "Training, process redesign and change management.",
        "Ongoing monitoring and model or prompt maintenance."
      ] },
      { h: "The team you need", body: "AI projects need a broader team than a typical IT project.", points: [
        "Business owner who owns the outcome and the risk.",
        "Domain experts to define correct outputs and review results.",
        "Engineers and data or ML specialists.",
        "Risk, privacy, security and legal reviewers with booked time.",
        "Change and training lead for adoption."
      ] }
    ],
    scenario: { title: "The pilot that never ended", situation: "A contract-review AI pilot ran for nine months. Users liked it, but nobody had defined what success meant, so there was never a decision to scale or stop.", approach: [
      "Define pilot exit criteria up front: for example, 30% reduction in review time, at least 95% clause detection on the evaluation set, and 70% weekly active use.",
      "Book a decision meeting at the end of the pilot with the sponsor.",
      "Stop or pivot when criteria are not met. That is a success of governance, not a failure."
    ] },
    exercise: "Write go/no-go criteria for the PoC, pilot and scale phases of an AI initiative you know.",
    watchouts: ["'Pilot purgatory' wastes budget and goodwill.", "Approvals booked at the end become the critical path."],
    quiz: [
      { q: "What question should a proof of concept answer?", o: ["Can we roll out to all users?", "Can the AI do the task well enough on real examples?", "What is the annual budget?", "Who will support it?"], a: 1, why: "The PoC tests technical feasibility and quality." },
      { q: "Which work is most often missing from AI project plans?", o: ["Kick-off meeting", "Evaluation set building, data access and governance approvals", "Status reporting", "Team lunches"], a: 1, why: "These hidden tasks frequently become the critical path." },
      { q: "What prevents 'pilot purgatory'?", o: ["Longer pilots", "Agreed exit criteria and a scheduled go/no-go decision", "More users", "A bigger model"], a: 1, why: "Clear criteria force a decision to scale, pivot or stop." },
      { q: "Who should define what a correct AI output looks like?", o: ["The vendor", "Domain experts with the business owner", "The project manager alone", "The AI itself"], a: 1, why: "Domain experts know what good looks like in the work." },
      { q: "Why do AI projects need an experiment-first structure?", o: ["To delay delivery", "Because quality is uncertain until tested on real data", "Because of regulation only", "To reduce documentation"], a: 1, why: "Experiments reduce uncertainty before major investment." }
    ]
  },
  {
    id: "prj-implement", stage: "implement", updated: "2026-10-20",
    title: "Delivering AI with evaluation gates",
    summary: "Run AI delivery with iteration loops, quality gates, adoption work and clear handover to operations.",
    outcomes: [
      "Build evaluation gates into the delivery cadence",
      "Track AI-specific delivery metrics and risks",
      "Hand over to operations with monitoring, support and ownership in place",
      "Plan AI running costs and SLOs into delivery and handover"
    ],
    sections: [
      { h: "Iteration loops", body: "AI quality improves through repeated cycles of change and evaluation.", points: [
        "Each sprint: change prompts, data or models; run the evaluation set; review failures with domain experts.",
        "Track evaluation scores over time on the project dashboard alongside burndown.",
        "Time-box improvement: if scores plateau below threshold, escalate for a scope or approach decision."
      ] },
      { h: "Quality and governance gates", body: "Make the gates explicit in the plan, with owners and evidence.", points: [
        "Design gate: use case registered, risk tier agreed, data approved.",
        "Build gate: evaluation thresholds met, security review done.",
        "Release gate: launch review approved, monitoring and rollback ready, users trained.",
        "Post-launch gate: 30 to 90 day review of quality, adoption and incidents."
      ] },
      { h: "Adoption is part of delivery", body: "An unused AI tool is a failed project.", points: [
        "Redesign the process around the tool: who reviews, who approves, what changes.",
        "Train users on both how to use it and when not to trust it.",
        "Recruit champions and gather feedback in the first weeks.",
        "Measure adoption and outcomes, not just go-live."
      ] },
      { h: "Handover to run", body: "Plan the transition from project to product or service.", points: [
        "Named service owner and support model.",
        "Monitoring dashboards, alerts and response playbooks.",
        "Budget for running costs (tokens, licences, compute) and maintenance.",
        "Change process for prompt, model and data updates.",
        "Documentation: system card, runbook and user guides."
      ] },
      { h: "AI costs in delivery", body: "AI projects carry usage-based running costs that grow with adoption. Plan them like any other budget line.", points: [
        "Estimate running costs early: volumes x tokens x price, plus licences, hosting and monitoring, at pilot and at full scale.",
        "Include evaluation runs and testing in the budget; they consume tokens too.",
        "Set a cost budget and alert for the pilot, and report spend at each stage gate.",
        "Record cost per case in the business case review so leaders can compare value with cost."
      ] },
      { h: "SLOs at handover", body: "Define how the AI service will be judged before handing it to the run team.", points: [
        "Agree service level objectives for availability, latency and quality (accuracy, task success, hallucination rate) with the business owner.",
        "Confirm monitoring, sampling and alerts are in place for each SLO.",
        "Document the error budget and what happens when it is used up (pause changes, fall back, escalate).",
        "Hand over the cost budget, FinOps owner and monthly review with the service."
      ] }
    ],
    scenario: { title: "Go-live without an owner", situation: "An invoice-matching AI went live on time. Three months later, accuracy had dropped after a supplier changed invoice formats, and no team owned fixing it because the project had closed.", approach: [
      "Handover needs a named service owner and budget before closure.",
      "Monitoring with alerts would have shown the drop within days.",
      "A post-launch review gate at 30 to 90 days catches these gaps."
    ] },
    exercise: "Add four AI gates (design, build, release, post-launch) to your project plan with owners and the evidence each needs.",
    watchouts: ["Do not report 'green' on schedule while quality is red.", "Running costs of AI can surprise finance; forecast them early."],
    quiz: [
      { q: "What should happen each AI sprint?", o: ["Only feature development", "Changes are evaluated against the evaluation set and failures reviewed", "A demo to customers", "Nothing different"], a: 1, why: "Evaluation every iteration shows whether quality is improving." },
      { q: "What evidence is typically needed at a release gate?", o: ["Team velocity", "Launch approval, monitoring and rollback ready, users trained", "Office booked for launch party", "Vendor logo"], a: 1, why: "Release requires proven readiness to operate safely." },
      { q: "Why is adoption part of AI delivery?", o: ["It is not", "Because value only comes when people change how they work", "For marketing", "To satisfy auditors"], a: 1, why: "Benefits depend on use, so adoption must be planned and measured." },
      { q: "What must be in place before an AI project closes?", o: ["A celebration", "A service owner, monitoring, support and running budget", "A new project", "Removal of documentation"], a: 1, why: "Without ownership, AI systems degrade unnoticed." },
      { q: "Evaluation scores plateau below the threshold. What should the PM do?", o: ["Lower the threshold quietly", "Escalate for a decision on scope, approach or timeline", "Keep iterating indefinitely", "Launch anyway"], a: 1, why: "Transparent escalation keeps decisions with the accountable owner." },
      { q: "When should AI running costs be estimated in a project?", o: ["After go-live", "Early, at pilot and full-scale volumes, and reported at each stage gate", "Only if finance asks", "Never, they are negligible"], a: 1, why: "Usage costs grow with adoption and must be planned." },
      { q: "What should be agreed before handing an AI service to the run team?", o: ["Only the go-live date", "SLOs for availability, latency and quality, with monitoring and an error budget", "The model's parameter count", "A press release"], a: 1, why: "Clear SLOs let the run team know when the service is failing." }
    ]
  },
  {
    id: "prj-govern", stage: "govern",
    title: "Governance evidence and stakeholder control",
    summary: "Keep AI initiatives auditable: RAID for AI, decision logs, evidence packs and steering committee reporting.",
    outcomes: [
      "Maintain an AI-specific RAID log",
      "Assemble the evidence pack governance and audit need",
      "Report AI risk and quality clearly to steering committees"
    ],
    sections: [
      { h: "AI in the RAID log", body: "Add AI-specific risks so they are owned and tracked like any other.", points: [
        "Quality risk: evaluation thresholds not met for some segments.",
        "Data risk: access delayed, quality poor, or legal basis unclear.",
        "Vendor risk: model changes, price changes, terms on data use.",
        "Adoption risk: users do not trust or use the tool.",
        "Regulatory risk: the use case may be high risk or need transparency measures."
      ] },
      { h: "Decision log", body: "Record key AI decisions with who decided, why and on what evidence.", points: [
        "Choice of model and vendor.",
        "Accepted quality thresholds and known limitations.",
        "Risk acceptance decisions and their owners.",
        "Scope changes made because of AI performance."
      ] },
      { h: "Evidence pack", body: "Collect evidence as you go rather than reconstructing it for audit.", points: [
        "Use case intake and risk assessment.",
        "Data protection impact assessment where required.",
        "Evaluation results per release.",
        "Security and red-team reviews.",
        "Approvals and sign-offs with dates.",
        "Training records and user guidance."
      ] },
      { h: "Steering committee reporting", body: "Show the facts that matter for AI decisions.", points: [
        "Quality trend against threshold, not just 'on track'.",
        "Open high risks and decisions needed.",
        "Adoption and benefit realisation once live.",
        "Incidents and how they were handled."
      ] }
    ],
    scenario: { title: "The audit request", situation: "Internal audit asks why an AI claims triage tool was approved, what tests it passed and who accepted the residual risk. The project closed a year ago.", approach: [
      "With an evidence pack and decision log, this takes an hour.",
      "Without them, it takes weeks of interviews and may result in an adverse finding.",
      "Build evidence capture into the project's definition of done."
    ] },
    exercise: "Create an AI section in your RAID log with at least one risk in each of the five categories above, each with an owner.",
    watchouts: ["Risk acceptance must be made by someone with authority, not by the project team by default.", "Evidence stored in personal folders is lost evidence."],
    quiz: [
      { q: "Which item belongs in a decision log for an AI project?", o: ["Daily stand-up notes", "Accepted quality thresholds and who approved them", "Team birthdays", "Email signatures"], a: 1, why: "Thresholds and approvals are key decisions auditors look for." },
      { q: "When should the evidence pack be assembled?", o: ["When auditors ask", "Continuously during the project", "Only at launch", "Never"], a: 1, why: "Capturing evidence as you go is reliable and cheap." },
      { q: "What is the most useful AI metric for a steering committee?", o: ["Lines of code", "Quality trend against the agreed threshold", "Number of meetings", "Model parameter count"], a: 1, why: "Quality against threshold shows whether the AI is fit to launch." },
      { q: "Who should accept a residual AI risk?", o: ["Whoever is available", "A person with the authority defined in the governance model", "The vendor", "The newest team member"], a: 1, why: "Risk acceptance needs appropriate authority and accountability." },
      { q: "A vendor announces it will retire the model version you use. Where should this go?", o: ["Nowhere", "The RAID log as a vendor risk with an owner and plan", "A personal note", "The marketing plan"], a: 1, why: "Vendor model changes affect quality and need managed response." }
    ]
  }
];

ACADEMY.templates.project = [
  {
    id: "prj-charter", title: "AI project charter",
    purpose: "Set scope, phases, team and success criteria for an AI initiative.",
    when: "At initiation, approved by the sponsor.",
    sections: [
      { h: "Purpose", fields: ["Business problem and outcome", "Sponsor and business owner", "In scope / out of scope"] },
      { h: "Approach", fields: ["Solution type", "Phases: PoC, pilot, scale with dates", "Exit criteria per phase"] },
      { h: "Team", fields: ["Domain experts", "Engineering and data", "Risk, privacy, security, legal reviewers", "Change and training lead"] },
      { h: "Constraints", fields: ["Data dependencies", "Governance gates", "Budget including running costs", "Key risks"] }
    ]
  },
  {
    id: "prj-raid-ai", title: "AI RAID log extension",
    purpose: "Track AI-specific risks, assumptions, issues and dependencies.",
    when: "Throughout delivery; reviewed weekly.",
    sections: [
      { h: "Risks", fields: ["Quality", "Data", "Vendor and model", "Adoption", "Regulatory"] },
      { h: "Assumptions", fields: ["Data availability", "Model capability", "User behaviour"] },
      { h: "Issues and dependencies", fields: ["Open issues with owners", "Dependencies on approvals and other teams"] }
    ]
  },
  {
    id: "prj-gate-review", title: "AI stage gate review",
    purpose: "Record the go/no-go decision at each phase gate.",
    when: "At the end of PoC, pilot and before scale.",
    sections: [
      { h: "Evidence", fields: ["Exit criteria and results", "Evaluation summary", "Open risks and mitigations", "Approvals obtained"] },
      { h: "Decision", fields: ["Go / pivot / stop", "Conditions", "Decision maker and date", "Next phase plan"] }
    ]
  }
];
