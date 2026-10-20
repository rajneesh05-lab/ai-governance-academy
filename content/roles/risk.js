ACADEMY.tracks.risk = [
  {
    id: "rsk-use", stage: "use", minutes: 25,
    title: "AI in risk, compliance and legal work",
    summary: "Use AI to accelerate policy analysis, contract review, control testing and regulatory horizon scanning, with professional standards intact.",
    outcomes: [
      "Apply AI to research, review and monitoring tasks in assurance work",
      "Maintain professional duties: confidentiality, privilege and verification",
      "Recognise when AI output needs expert sign-off"
    ],
    sections: [
      { h: "Useful applications", body: "Assurance work involves reading and comparing large amounts of text, which AI accelerates.", points: [
        "First-pass contract review: extracting clauses, comparing against playbooks and flagging deviations.",
        "Policy gap analysis: comparing internal policies against regulations or standards.",
        "Regulatory horizon scanning: summarising new rules and consultations, with links to sources.",
        "Control testing support: sampling, reviewing evidence documents and drafting findings.",
        "Drafting first versions of policies, training content and board papers."
      ] },
      { h: "Professional duties still apply", body: "Using AI does not change your obligations.", points: [
        "Confidentiality and legal privilege: use only approved tools with appropriate contractual protections.",
        "Verification: check every legal citation and quotation; AI has fabricated case law in real court filings.",
        "Competence: understand the tool's limits well enough to supervise it.",
        "Disclosure: follow court, regulator or client rules on AI use."
      ] },
      { h: "Good practice patterns", body: "Structure AI use to make review efficient.", points: [
        "Ask for answers with exact quotations and section references from provided documents.",
        "Use checklists or playbooks as the standard the AI compares against.",
        "Have the AI list what it could not determine.",
        "Record AI use in working papers where your methodology requires it."
      ] },
      { h: "Where human expertise is essential", body: "Some judgements must stay with qualified professionals.", points: [
        "Legal advice and interpretation of ambiguous law.",
        "Risk acceptance and materiality judgements.",
        "Regulatory submissions and attestations.",
        "Investigations and disciplinary findings."
      ] }
    ],
    scenario: { title: "The cited case that did not exist", situation: "A lawyer used a general chatbot to find precedents for a brief. Two of the five cases cited were fabricated, complete with plausible names and citations. The court sanctioned the firm.", approach: [
      "General chatbots generate plausible citations; they are not legal databases.",
      "Use legal research tools grounded in verified case law, and check every citation in the primary source.",
      "Firm policy should require verification and sign-off for any AI-assisted filing."
    ] },
    exercise: "Run one policy or contract against a checklist using an approved AI tool. Record how long verification took and what the AI missed or misread.",
    watchouts: ["Privileged material in an unapproved tool may risk waiving privilege.", "AI summaries of regulations are not legal interpretations."],
    quiz: [
      { q: "What must you do with legal citations produced by an AI tool?", o: ["Use them if formatted correctly", "Verify each one in the primary source", "Ask the AI if they are real", "Remove the page numbers"], a: 1, why: "AI can fabricate citations; primary-source verification is required." },
      { q: "Which task is most suitable for AI support in compliance?", o: ["Signing a regulatory attestation", "First-pass gap analysis of a policy against a standard", "Deciding a disciplinary outcome", "Accepting a material risk"], a: 1, why: "Gap analysis is review support; the others need accountable human judgement." },
      { q: "What is a risk of putting privileged material into an unapproved tool?", o: ["Slower responses", "Breaching confidentiality and potentially risking privilege", "Higher cost", "None"], a: 1, why: "Disclosure to third parties can undermine confidentiality and privilege." },
      { q: "How can you make AI contract review easier to verify?", o: ["Ask for a short opinion", "Ask for exact quotations and clause references against a playbook", "Use a larger model", "Skip unusual clauses"], a: 1, why: "References and a standard make review fast and reliable." },
      { q: "Does using AI change a professional's duty of competence?", o: ["Yes, it removes it", "No, you must understand the tool's limits well enough to supervise it", "Only for junior staff", "Only in court"], a: 1, why: "Professionals remain responsible for their work product." }
    ]
  },
  {
    id: "rsk-identify", stage: "identify", minutes: 35,
    title: "Assessing AI use cases",
    summary: "Triage and assess proposed AI use cases for risk: classification, impact assessment and the questions that matter.",
    outcomes: [
      "Triage use cases into risk tiers quickly and consistently",
      "Run an AI impact assessment covering people, data, security and compliance",
      "Identify when a use case is prohibited or high risk under law or policy"
    ],
    sections: [
      { h: "Fast, consistent triage", body: "Most use cases are low risk. A short triage keeps reviewers' time for those that matter.", points: [
        "Does the AI make or materially influence decisions about people (employment, credit, insurance, education, access to services)?",
        "Does it act autonomously on systems, money or customers?",
        "Does it process special category personal data or biometric data?",
        "Is it customer-facing, or does it produce public content?",
        "Is it in a regulated activity or safety-critical context?",
        "Any 'yes' raises the tier; triage should take minutes, not weeks."
      ] },
      { h: "The AI impact assessment", body: "For medium and high-risk use cases, assess systematically.", points: [
        "Purpose and context: intended use, users, affected people, alternatives considered.",
        "Data: sources, legal basis, minimisation, quality, retention, cross-border transfer.",
        "Model and vendor: provenance, evaluation evidence, known limitations, contract terms.",
        "Harms: accuracy, bias and discrimination, safety, privacy, security, manipulation, explainability.",
        "Controls: oversight, testing, monitoring, transparency, redress.",
        "Residual risk and who accepts it."
      ] },
      { h: "Regulatory classification", body: "Check the use case against applicable law. The EU AI Act is the most comprehensive example.", points: [
        "Prohibited practices include, among others, social scoring, manipulative or exploitative techniques, untargeted scraping of facial images, and emotion recognition in workplaces and schools (with limited exceptions).",
        "High-risk areas include biometrics, critical infrastructure, education, employment, essential services and credit, law enforcement, migration and justice, plus AI used as a safety component of regulated products.",
        "Limited-risk transparency duties: chatbots, deepfakes and some AI-generated content.",
        "Role matters: duties differ for providers (who develop or place AI on the market) and deployers (who use it).",
        "Also consider GDPR (including rules on solely automated decisions), sector regulation and anti-discrimination law."
      ] },
      { h: "Good assessment questions", body: "These questions surface the issues quickly.", points: [
        "What happens to a person if the AI is wrong, and how would they find out?",
        "Who can override the AI, and do they actually do so?",
        "How was performance tested, on what data, and for which groups?",
        "What would we tell a regulator or journalist about this use?"
      ] }
    ],
    scenario: { title: "Emotion analysis in call centres", situation: "Operations proposes using AI to analyse agents' voices for stress and emotion during calls, to support wellbeing and performance management.", approach: [
      "Emotion recognition in the workplace is prohibited under the EU AI Act except for medical or safety reasons.",
      "Even outside the EU, it raises significant privacy, employment and accuracy concerns.",
      "Alternative: analyse call topics and handle times (not emotions) for workload balancing, with employee consultation."
    ] },
    exercise: "Triage three AI use cases from your organisation using the six triage questions. Record the tier and the reason.",
    watchouts: ["A vendor's 'compliant' claim does not transfer your obligations as a deployer.", "Assessments that take months push teams to shadow AI."],
    quiz: [
      { q: "Which use case is prohibited under the EU AI Act?", o: ["A chatbot answering product questions", "Emotion recognition of employees at work for performance management", "Invoice data extraction", "Spam filtering"], a: 1, why: "Workplace emotion recognition is prohibited except for medical or safety reasons." },
      { q: "Which area is listed as high risk under the EU AI Act?", o: ["Video game AI", "AI used to evaluate creditworthiness of individuals", "Spell checkers", "Email sorting"], a: 1, why: "Access to essential services, including credit, is a high-risk area." },
      { q: "What is the purpose of triage before assessment?", o: ["To slow projects", "To focus reviewer time on higher-risk use cases quickly and consistently", "To approve everything", "To replace assessment"], a: 1, why: "Proportionality depends on fast, consistent triage." },
      { q: "A company uses a vendor's AI hiring tool. Under the EU AI Act, it is most likely the:", o: ["Provider", "Deployer", "Importer", "Notified body"], a: 1, why: "An organisation using an AI system under its authority is a deployer, with its own obligations." },
      { q: "Which question best surfaces harm to individuals?", o: ["Which model is used?", "What happens to a person if the AI is wrong, and how would they find out?", "How fast is it?", "How much does it cost?"], a: 1, why: "It focuses on impact, detectability and redress." }
    ]
  },
  {
    id: "rsk-implement", stage: "implement", minutes: 30,
    title: "Building the AI control framework",
    summary: "Design proportionate AI policies and controls, integrate them into existing frameworks, and make them work in practice.",
    outcomes: [
      "Build an AI policy set and control library mapped to frameworks",
      "Integrate AI into existing risk, privacy, security and third-party processes",
      "Design controls that teams can actually follow"
    ],
    sections: [
      { h: "Policy set", body: "Keep it short, clear and layered.", points: [
        "AI acceptable use policy for all staff: approved tools, data rules, disclosure, prohibited uses.",
        "AI governance policy: roles, risk tiers, approvals, inventory, monitoring and incident handling.",
        "Standards for builders: evaluation, documentation, security and change management.",
        "Procurement requirements for AI vendors."
      ] },
      { h: "Control library", body: "Map controls to a recognised framework so coverage is visible and audit-friendly.", points: [
        "NIST AI RMF functions (Govern, Map, Measure, Manage) as an organising structure.",
        "ISO/IEC 42001 for a certifiable AI management system; ISO/IEC 23894 for AI risk management guidance.",
        "Example controls: AI inventory, risk assessment before deployment, evaluation thresholds, human oversight, logging, monitoring, incident response, vendor assessment, training.",
        "For each control: owner, frequency, evidence and test procedure."
      ] },
      { h: "Integrate, do not duplicate", body: "AI risk touches existing processes. Extend them rather than building a parallel bureaucracy.", points: [
        "Privacy: extend DPIAs with AI-specific questions.",
        "Security: add LLM threats to threat modelling and penetration testing.",
        "Third-party risk: add AI questions to vendor due diligence.",
        "Model risk: extend existing model risk management to GenAI.",
        "Change management: AI changes trigger re-assessment."
      ] },
      { h: "Making it work", body: "Controls fail when they are slow, unclear or disconnected from how teams work.", points: [
        "Single intake form and one place to find guidance.",
        "Pre-approved patterns and tools for common low-risk uses.",
        "Embedded risk partners in major AI programmes.",
        "Measure cycle time and satisfaction with the governance process."
      ] }
    ],
    scenario: { title: "Five reviews, one chatbot", situation: "A team building an internal HR chatbot went through separate privacy, security, legal, procurement and AI ethics reviews, each with its own form. It took five months, and the team considered using an unapproved tool instead.", approach: [
      "Consolidate into one intake and a coordinated review with shared evidence.",
      "Use risk tiering: an internal, grounded HR assistant is typically medium risk.",
      "Set service levels for each tier's review time."
    ] },
    exercise: "Take five AI controls your organisation has or needs. For each, define the owner, frequency, evidence and how you would test it.",
    watchouts: ["Policies nobody reads do not control anything.", "Do not create AI processes that bypass existing privacy and security obligations."],
    quiz: [
      { q: "Which standard provides a certifiable AI management system?", o: ["ISO 9001", "ISO/IEC 42001", "PCI DSS", "SOC 1"], a: 1, why: "ISO/IEC 42001 specifies requirements for an AI management system." },
      { q: "What is the best way to handle AI privacy risk in existing processes?", o: ["Create a separate AI privacy team", "Extend DPIAs with AI-specific questions", "Ignore privacy for AI", "Leave it to vendors"], a: 1, why: "Integration avoids duplication and gaps." },
      { q: "What should every control in the library have?", o: ["A logo", "Owner, frequency, evidence and test procedure", "A vendor", "A budget code"], a: 1, why: "These make controls operable and auditable." },
      { q: "What is a sign that governance is too heavy?", o: ["Teams consider unapproved tools to avoid it", "High-risk cases get reviewed", "Policies exist", "Training is available"], a: 0, why: "Slow governance drives shadow AI, increasing risk." },
      { q: "What belongs in an AI acceptable use policy for all staff?", o: ["Model training methods", "Approved tools, data rules, disclosure expectations and prohibited uses", "Vendor pricing", "Server specifications"], a: 1, why: "Staff need practical rules for everyday AI use." }
    ]
  },
  {
    id: "rsk-govern", stage: "govern", minutes: 30,
    title: "Assurance, monitoring and audit of AI",
    summary: "Provide ongoing assurance over AI: inventory, monitoring, testing, regulatory readiness and audit.",
    outcomes: [
      "Maintain a reliable AI inventory, including vendor AI",
      "Plan second-line monitoring and third-line audit of AI",
      "Track regulatory obligations and prepare for supervisory scrutiny"
    ],
    sections: [
      { h: "The AI inventory", body: "You cannot govern what you cannot see.", points: [
        "Record every AI system: owner, purpose, risk tier, vendor or internal, data, status, last review.",
        "Find hidden AI: vendor features switched on in existing software, browser extensions, team-built automations.",
        "Use procurement, expense, network and software asset data to discover shadow AI.",
        "Reconcile the inventory at least quarterly."
      ] },
      { h: "Ongoing monitoring", body: "Second-line oversight checks that controls keep working.", points: [
        "Key risk indicators: incidents, overrides, complaints, drift alerts, overdue reviews.",
        "Periodic reassessment of high-risk systems.",
        "Thematic reviews (for example, all customer-facing chatbots).",
        "Reporting to risk committees with trends and actions."
      ] },
      { h: "Auditing AI", body: "Internal audit provides independent assurance.", points: [
        "Governance audit: is the framework designed well and followed?",
        "System audit: for a specific AI system, are risks identified, controls effective and evidence complete?",
        "Testing: re-perform evaluations on samples, check access controls, review logs and overrides.",
        "Skills: audit teams need AI literacy or access to specialists."
      ] },
      { h: "Regulatory readiness", body: "Track obligations as they evolve.", points: [
        "Maintain an obligations register mapping laws to systems and controls.",
        "Follow phased deadlines (for example under the EU AI Act) and guidance from regulators.",
        "Prepare to explain to supervisors: inventory, risk classification, controls, incidents and training.",
        "Report serious incidents where law requires."
      ] }
    ],
    scenario: { title: "The AI feature nobody registered", situation: "A CRM vendor enabled AI-generated customer emails and lead scoring by default in a routine update. Sales teams started using them. Months later, a complaint revealed lead scores influenced which customers got discounts.", approach: [
      "Vendor updates are a major source of unregistered AI.",
      "Third-party risk processes should require notice of new AI features, and admins should review release notes.",
      "Assess the lead scoring for fairness and transparency, and register it in the inventory."
    ] },
    exercise: "Draft five key risk indicators for AI in your organisation, with thresholds and reporting lines.",
    watchouts: ["An inventory that only lists projects the AI team built misses most AI.", "Audit without technical testing gives false comfort for complex systems."],
    quiz: [
      { q: "What is a common source of unregistered AI?", o: ["Board papers", "AI features enabled in existing vendor software", "Office furniture", "Printers"], a: 1, why: "Vendors add AI features through updates, often enabled by default." },
      { q: "Which is a useful key risk indicator for AI?", o: ["Number of AI news articles", "Human override rate or AI-related complaints", "Office attendance", "Laptop age"], a: 1, why: "These indicate quality and harm trends." },
      { q: "What does a system-level AI audit typically include?", o: ["Only interviews", "Testing evaluations, access controls, logs, overrides and evidence", "Reading marketing materials", "Counting users"], a: 1, why: "Effective audit tests controls with evidence." },
      { q: "What is an obligations register?", o: ["A list of vendors", "A mapping of legal and regulatory obligations to systems and controls", "A staff rota", "An incident log"], a: 1, why: "It shows how each obligation is met." },
      { q: "How often should the AI inventory be reconciled?", o: ["Never", "Regularly, at least quarterly", "Only at audit time", "Every five years"], a: 1, why: "AI use changes quickly; regular reconciliation keeps it accurate." }
    ]
  }
];

ACADEMY.templates.risk = [
  {
    id: "rsk-impact-assessment", title: "AI impact assessment",
    purpose: "Assess risks and controls for a medium or high-risk AI use case.",
    when: "After triage indicates medium or high risk, before deployment.",
    sections: [
      { h: "Context", fields: ["Use case and owner", "Intended use and users", "Affected people", "Alternatives considered"] },
      { h: "Classification", fields: ["Internal risk tier", "EU AI Act category (prohibited / high / limited / minimal)", "Provider or deployer role", "Other applicable laws"] },
      { h: "Risk analysis", fields: ["Accuracy and reliability", "Bias and discrimination", "Privacy and data protection", "Security", "Transparency and explainability", "Safety and other harms"] },
      { h: "Controls", fields: ["Human oversight", "Testing and evaluation evidence", "Monitoring", "Transparency to affected people", "Redress and complaints"] },
      { h: "Decision", fields: ["Residual risk rating", "Conditions", "Risk acceptor and date", "Review date"] }
    ]
  },
  {
    id: "rsk-acceptable-use", title: "AI acceptable use policy outline",
    purpose: "A plain-language outline for an all-staff AI policy.",
    when: "When creating or refreshing the AI policy.",
    sections: [
      { h: "Scope and principles", fields: ["Who and what the policy covers", "Principles"] },
      { h: "Rules", fields: ["Approved tools and how to request new ones", "Data allowed per tool", "Prohibited uses", "Verification and disclosure expectations"] },
      { h: "Support", fields: ["Where to get help", "How to report incidents", "Training requirements", "Consequences of breach"] }
    ]
  },
  {
    id: "rsk-vendor-questionnaire", title: "AI vendor due diligence questionnaire",
    purpose: "Assess AI vendors and AI features in purchased software.",
    when: "During procurement and at renewal.",
    sections: [
      { h: "Model and data", fields: ["Models used and providers", "Is customer data used for training?", "Data location and retention", "Sub-processors"] },
      { h: "Quality and safety", fields: ["Evaluation evidence", "Bias testing", "Security testing and red-teaming", "Known limitations"] },
      { h: "Governance", fields: ["Notification of model changes", "Incident notification", "Audit rights", "Regulatory compliance claims and evidence", "Exit and data return"] }
    ]
  }
];
