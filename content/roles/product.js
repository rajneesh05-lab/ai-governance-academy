ACADEMY.tracks.product = [
  {
    id: "pm-use", stage: "use", minutes: 25,
    title: "AI in the product manager's week",
    summary: "Use AI to speed up discovery, research synthesis, specs and communication while keeping judgement and customer truth in your hands.",
    outcomes: [
      "Apply AI to research synthesis, competitive scans, specs and stakeholder updates",
      "Prototype ideas quickly with AI tools to test them with users",
      "Avoid the traps: fabricated insights, leaked roadmaps and generic strategy"
    ],
    sections: [
      { h: "Where AI saves a PM real time", body: "Use AI for the heavy lifting around your judgement, not for the judgement itself.", points: [
        "Synthesising interview notes, survey free text and support tickets into themes, with quotes as evidence.",
        "Drafting PRDs, user stories and acceptance criteria from your notes.",
        "Competitive and market scans from public sources, with links you verify.",
        "Turning one update into versions for executives, engineers and customers.",
        "Writing SQL or analysis prompts to answer quick product data questions (and checking the results)."
      ] },
      { h: "Prototype to learn faster", body: "AI app builders and coding assistants let PMs build clickable or working prototypes in hours.", points: [
        "Use prototypes to test value and usability with real users before engineering commits.",
        "Label prototypes clearly as throwaway; they are not production code.",
        "Use test or synthetic data in prototypes, not real customer data."
      ] },
      { h: "Keep the customer truth", body: "AI makes it easy to produce confident insight that nobody actually said.", points: [
        "Ask for themes with supporting quotes and counts, and check a sample against the source.",
        "Watch for over-generalisation: three loud customers are not a segment.",
        "Never substitute AI-generated 'personas' for talking to customers."
      ] },
      { h: "Data and confidentiality", body: "PM documents are full of sensitive material.", points: [
        "Roadmaps, pricing, unreleased features and customer names are confidential: approved tools only.",
        "Remove personal data from research notes unless your tool is approved for it.",
        "Check recording and transcription consent before using AI meeting tools with customers."
      ] }
    ],
    scenario: { title: "The theme nobody mentioned", situation: "A PM asked an assistant to summarise 40 interview transcripts. The summary listed 'strong demand for an offline mode' as a top theme. On checking, only two customers mentioned it, once each.", approach: [
      "Ask for counts and verbatim quotes per theme, then verify a sample.",
      "Tag transcripts by segment so themes can be weighted by who said them.",
      "Use the AI summary as a first pass that you validate, not as the finding."
    ] },
    exercise: "Run your next research synthesis with AI. Ask for themes with counts and quotes, then check five quotes against the transcripts. Note what the AI got wrong.",
    watchouts: ["Do not paste unreleased roadmap or pricing into consumer AI tools.", "AI-written strategy tends to be generic. Your context and choices make it specific."],
    quiz: [
      { q: "How should you validate an AI research synthesis?", o: ["Trust it if it reads well", "Ask for counts and quotes per theme and check a sample against the source", "Ask another AI", "Share it and wait for objections"], a: 1, why: "Evidence and spot checks catch invented or inflated themes." },
      { q: "What is the main purpose of an AI-built PM prototype?", o: ["To ship to production faster", "To test value and usability with users before engineering commits", "To replace designers", "To avoid writing specs"], a: 1, why: "Prototypes are for learning; production code needs engineering standards." },
      { q: "Which item should never go into an unapproved AI tool?", o: ["A public competitor's pricing page", "Your unreleased roadmap and customer names", "A generic user story format", "Public documentation"], a: 1, why: "Roadmaps and customer data are confidential." },
      { q: "What is a risk of AI-generated personas?", o: ["They are too detailed", "They replace real customer contact with plausible fiction", "They cost too much", "They are illegal"], a: 1, why: "Personas must be grounded in real research to be useful." },
      { q: "Before using an AI note-taker in a customer call, what must you check?", o: ["The tool's colour scheme", "Consent and whether the tool is approved for customer data", "The call length", "Nothing"], a: 1, why: "Recording and processing customer conversations needs consent and an approved tool." }
    ]
  },
  {
    id: "pm-identify", stage: "identify", minutes: 30,
    title: "Finding AI opportunities worth building",
    summary: "Spot problems where AI creates real user value, size them honestly, and decide build, buy or partner.",
    outcomes: [
      "Generate AI opportunities from user problems rather than technology",
      "Score opportunities on value, feasibility, risk and data readiness",
      "Write a crisp AI opportunity brief"
    ],
    sections: [
      { h: "Problem-first opportunity spotting", body: "Strong AI features remove effort, uncertainty or waiting from a user's job. Look for these signals in your research.", points: [
        "Users read, write or search large amounts of text to get something done.",
        "Users make the same judgement repeatedly with lots of examples to learn from.",
        "Users wait for a human expert for answers that are mostly routine.",
        "Users abandon a task because setup or configuration is too complex.",
        "Avoid 'AI for AI's sake' features such as a generic chatbot bolted onto the product."
      ] },
      { h: "Scoring opportunities", body: "Score each idea on five dimensions so trade-offs are visible.", points: [
        "User value: frequency x pain x willingness to pay or adopt.",
        "Feasibility: can today's models do this well enough? Test with 20 real examples in a prompt playground.",
        "Data readiness: do we have the data, rights to use it, and access at run time?",
        "Risk: what harm does a wrong answer cause, and to whom? Does it fall into a regulated area?",
        "Cost to serve: token or compute cost per user at scale versus price."
      ] },
      { h: "Accuracy, tolerance and UX", body: "Whether AI quality is 'good enough' depends on the experience design.", points: [
        "Suggest, do not decide: drafts and recommendations tolerate errors better than automatic actions.",
        "Easy correction: users can edit or undo.",
        "Visible confidence and sources: users can judge when to trust.",
        "Graceful failure: the product still works when the AI does not."
      ] },
      { h: "Build, buy or partner", body: "Decide where to differentiate.", points: [
        "Build when the AI capability is core to your product's value and uses your unique data.",
        "Buy or partner for commodity capabilities (transcription, translation, OCR).",
        "Consider the model provider dependency: pricing, terms, regional availability and switching cost."
      ] }
    ],
    scenario: { title: "Two ideas, one slot", situation: "A B2B invoicing product has room for one AI feature this quarter: (A) a chatbot that answers any question about the product, or (B) automatic extraction of line items from uploaded supplier invoices, which users type in by hand today.", approach: [
      "B solves a frequent, painful, measurable task (minutes per invoice), with clear correctness and easy review.",
      "A is generic, hard to evaluate, and duplicates existing help content.",
      "B wins on value, feasibility and measurability. Design it as 'extract and confirm' so users review fields before posting."
    ] },
    exercise: "List three AI ideas for your product. Score each on value, feasibility, data readiness, risk and cost to serve (1 to 5). Test the top one with 20 real examples in a prompt playground.",
    watchouts: ["A great demo on five examples says little about quality across thousands.", "Features that decide for users carry far more risk than features that suggest."],
    quiz: [
      { q: "Which is the strongest signal of a good AI opportunity?", o: ["Competitors announced AI features", "Users repeatedly do a high-effort text or judgement task with clear correct outcomes", "The CEO wants a chatbot", "A vendor offered a free trial"], a: 1, why: "Frequent, painful, checkable tasks deliver measurable value." },
      { q: "What is the fastest way to test feasibility of an AI feature idea?", o: ["Build the full feature", "Run 20 to 50 real examples through a model in a playground and judge the results", "Read benchmark leaderboards", "Ask the vendor"], a: 1, why: "Real examples give a quick, honest read on whether the model can do the job." },
      { q: "Which UX pattern makes imperfect AI accuracy most acceptable?", o: ["Fully automatic actions", "Suggest and let the user confirm or edit", "Hiding that AI is used", "Removing undo"], a: 1, why: "Review and correction let users catch errors before they matter." },
      { q: "When should you build an AI capability rather than buy it?", o: ["Always, for control", "When it is core to your product's value and uses your unique data", "When it is commodity transcription", "When budget is low"], a: 1, why: "Build where you differentiate; buy commodities." },
      { q: "Which belongs in 'cost to serve' for an AI feature?", o: ["Office rent", "Model token or compute cost per user at expected usage", "Marketing budget", "Salaries of the sales team"], a: 1, why: "AI features have variable run costs that affect margins." }
    ]
  },
  {
    id: "pm-implement", stage: "implement", minutes: 35,
    title: "Specifying, testing and launching AI features",
    summary: "Write AI-ready requirements, define evaluation criteria with your team, and launch in stages with the right metrics.",
    outcomes: [
      "Write an AI PRD with behaviours, quality bar and failure handling",
      "Co-own an evaluation set and acceptance thresholds with engineering",
      "Plan a staged launch with product and quality metrics"
    ],
    sections: [
      { h: "What changes in an AI PRD", body: "Traditional specs describe exact behaviour. AI specs describe intended behaviour, quality thresholds and what happens when the AI is wrong.", points: [
        "Job to be done and the user's success criteria.",
        "Example inputs and ideal outputs, including hard and adversarial cases.",
        "Quality bar as numbers: for example '95% of extracted totals correct; 0 actions without confirmation'.",
        "Behaviour when uncertain: ask, abstain, or hand off to a human.",
        "Out-of-scope requests and how to decline them.",
        "Data the feature uses, and what it must never reveal."
      ] },
      { h: "Evaluations are the acceptance criteria", body: "The evaluation set is where product intent becomes testable. PMs should own what is in it.", points: [
        "Curate 50 to 200 real, representative cases with expected outputs or grading guidance.",
        "Include segments that matter (customer tiers, languages, edge cases).",
        "Agree the thresholds that block launch before you see the results.",
        "Review failures together each sprint; add new failure cases to the set."
      ] },
      { h: "Staged launch", body: "Expose AI features gradually and learn at each step.", points: [
        "Internal dogfooding, then a small beta with willing customers.",
        "Feature flags and the ability to turn the AI off per customer.",
        "Clear AI labelling and feedback controls in the UI.",
        "Customer communication about what the AI does and its limits."
      ] },
      { h: "Metrics after launch", body: "Track whether the feature is used, useful and safe.", points: [
        "Adoption: share of eligible users who try it and come back.",
        "Usefulness: acceptance rate of suggestions, edit distance, time saved, task completion.",
        "Quality: sampled human ratings, error reports, groundedness checks.",
        "Cost: cost per active user against pricing.",
        "Safety: incidents, complaints, harmful output rate."
      ] }
    ],
    scenario: { title: "Launch blocked by its own eval", situation: "An AI reply-suggestion feature scored 92% acceptable overall on the evaluation set, above the 90% bar. Split by language, Spanish replies scored only 71%, and 30% of target customers write in Spanish.", approach: [
      "Segment thresholds in the PRD made this a clear no-go for Spanish-language customers.",
      "Options: launch for English only, improve prompts and examples for Spanish, or use a stronger model for those requests.",
      "The PM decides the scope trade-off with evidence instead of guesswork."
    ] },
    exercise: "Draft the 'Quality bar' and 'When the AI is wrong' sections of a PRD for an AI feature, including at least one segment-specific threshold.",
    watchouts: ["'It should be accurate' is not a requirement.", "Do not launch to everyone at once without a kill switch."],
    quiz: [
      { q: "What is the biggest difference between an AI PRD and a traditional PRD?", o: ["It is longer", "It defines quality thresholds and behaviour when the AI is wrong or uncertain", "It has no user stories", "It is written by engineers"], a: 1, why: "Probabilistic behaviour needs explicit quality bars and failure handling." },
      { q: "Who should own the content of the evaluation set?", o: ["Only engineers", "The PM together with engineering and domain experts", "The vendor", "Nobody"], a: 1, why: "The evaluation set encodes product intent, so the PM must shape it." },
      { q: "When should launch-blocking thresholds be agreed?", o: ["After seeing results", "Before seeing results", "After launch", "Never"], a: 1, why: "Agreeing first prevents moving the goalposts." },
      { q: "Which metric best indicates an AI suggestion feature is useful?", o: ["Number of model calls", "Acceptance rate and edits needed", "Page views", "Token count"], a: 1, why: "Acceptance and edit distance show whether suggestions help users." },
      { q: "Why use feature flags for AI features?", o: ["For A/B colour tests", "To roll out gradually and turn the AI off quickly per customer", "To hide bugs", "To reduce cost"], a: 1, why: "Flags allow staged launches and fast containment." }
    ]
  },
  {
    id: "pm-govern", stage: "govern", minutes: 40, updated: "2026-10-20",
    title: "Responsible AI product decisions",
    summary: "Own the product side of AI governance: risk tiering, transparency, user controls, regulatory duties and the launch review.",
    outcomes: [
      "Classify a feature's risk tier and know the governance steps that follow",
      "Design transparency and user control into the product",
      "Prepare for the AI launch review with the right evidence",
      "Design content provenance and accessibility into AI features"
    ],
    sections: [
      { h: "The PM's governance responsibilities", body: "The PM is usually the business owner of an AI feature, which means accountability for its use and impact.", points: [
        "Register the feature in the AI inventory and propose a risk tier.",
        "Involve legal, privacy, security and responsible AI reviewers early, at discovery not launch.",
        "Make sure the intended use and out-of-scope uses are documented and enforced in product.",
        "Own the post-launch review of quality, incidents and complaints."
      ] },
      { h: "Regulated and high-risk territory", body: "Some uses trigger strict obligations. Know them before you commit to a roadmap.", points: [
        "Decisions about employment, credit, insurance, education, essential services, or biometric identification are likely high risk under the EU AI Act and similar rules.",
        "Chatbots and AI-generated content often carry transparency duties: users must know they are dealing with AI, and synthetic media may need labelling.",
        "Personal data use needs a lawful basis, purpose limitation and, for high-risk processing, a data protection impact assessment (DPIA).",
        "Customer contracts may restrict how you use their data, including for model improvement."
      ] },
      { h: "Transparency and control by design", body: "Trust comes from users understanding and steering the AI.", points: [
        "Label AI-generated content and AI interactions clearly.",
        "Show sources or reasons where decisions or answers matter.",
        "Let users correct, undo, opt out, or reach a human.",
        "Give admins controls over whether AI features and data sharing are enabled."
      ] },
      { h: "The launch review", body: "Arrive with evidence, not assurances.", points: [
        "Use case description, risk tier and intended users.",
        "Evaluation results including segments, safety and red-team tests.",
        "Privacy and security sign-offs, data flow and vendor terms.",
        "Human oversight design, monitoring plan, incident and rollback plan.",
        "Customer communications and documentation."
      ] },
      { h: "Content provenance: watermarking and content credentials", body: "As AI-generated media becomes indistinguishable from real media, products need ways to show where content came from.", points: [
        "Watermarking embeds a signal in AI-generated images, audio, video or text that detection tools can find. Some survive editing, many do not; none is perfect.",
        "Content credentials (the C2PA standard) attach signed metadata to media recording how it was made and edited, including AI involvement.",
        "If your product generates media, consider adding watermarks and content credentials, and preserving credentials on upload rather than stripping them.",
        "The EU AI Act requires providers of generative AI to mark synthetic content in a machine-readable way, and deployers to disclose deepfakes.",
        "Labels shown to users matter as much as hidden signals: make AI-generated content obvious where it could mislead."
      ] },
      { h: "Accessible AI features", body: "AI can make products far more accessible, and can also create new barriers.", points: [
        "Opportunities: captions and transcripts, image descriptions, simpler-language rewrites, voice interfaces and summarisation.",
        "Check AI-generated alt text and captions for accuracy; wrong descriptions are worse than none for people relying on them.",
        "Chat and voice interfaces must work with screen readers and keyboards, and offer a non-AI route for people who need it.",
        "Include disabled users in research and testing, and evaluate quality for their use cases and speech patterns.",
        "Accessibility law (for example the European Accessibility Act) applies to AI features as to any other."
      ] }
    ],
    scenario: { title: "The candidate ranking feature", situation: "Your HR software team wants to add 'AI candidate ranking' to help recruiters shortlist. Early tests show recruiters love it.", approach: [
      "Ranking candidates affects employment decisions, so it is high risk in the EU and under many policies.",
      "Obligations can include risk management, data governance, documentation, human oversight, accuracy and transparency to customers, and bias testing.",
      "Options: proceed with a full high-risk programme, or reframe the feature to lower-risk assistance (summarising CVs against criteria the recruiter sets, without ranking)."
    ] },
    exercise: "Fill in the AI use case intake form for a feature on your roadmap and propose a risk tier. List which reviewers you need and when.",
    watchouts: ["Customer enthusiasm does not reduce regulatory risk.", "Hiding AI involvement erodes trust and may breach transparency rules."],
    quiz: [
      { q: "When should legal, privacy and responsible AI reviewers be involved?", o: ["At launch", "During discovery, before roadmap commitment", "After the first incident", "Only for vendor features"], a: 1, why: "Early review shapes the design and avoids late surprises." },
      { q: "Which feature is most likely high risk under the EU AI Act?", o: ["Autocomplete in a text editor", "AI ranking of job applicants", "Image background removal", "Spelling correction"], a: 1, why: "AI used in recruitment decisions is listed as high risk." },
      { q: "What is a common transparency duty for chatbots?", o: ["Showing the model's code", "Telling users they are interacting with AI", "Publishing training data", "Using a human voice"], a: 1, why: "Users should know when they are dealing with an AI system." },
      { q: "What best demonstrates readiness at an AI launch review?", o: ["A confident demo", "Evidence: evaluations by segment, sign-offs, oversight and monitoring plans", "Positive beta quotes", "A launch date"], a: 1, why: "Governance decisions are made on evidence." },
      { q: "What is a good product control for AI features in B2B software?", o: ["No settings, to keep it simple", "Admin controls to enable or disable AI features and data sharing", "Always-on AI with no opt-out", "Hidden AI usage"], a: 1, why: "Admin controls let customers meet their own policies." },
      { q: "What are content credentials (C2PA)?", o: ["A login method", "Signed metadata attached to media recording how it was created and edited, including AI use", "A model licence", "A type of watermark that cannot be removed"], a: 1, why: "C2PA content credentials record provenance in tamper-evident metadata." },
      { q: "Your product adds AI-generated image descriptions for screen reader users. What matters most?", o: ["That they are long", "That they are accurate, tested with the people who rely on them", "That they use creative language", "That they are optional for sighted users only"], a: 1, why: "Inaccurate descriptions mislead the very people they are meant to help." }
    ]
  }
];

ACADEMY.templates.product = [
  {
    id: "pm-ai-prd", title: "AI feature PRD",
    purpose: "Specify an AI-powered feature with testable quality and failure behaviour.",
    when: "Before engineering commits to build.",
    sections: [
      { h: "Problem and outcome", fields: ["User and job to be done", "Problem evidence (research, data)", "Success metric and target", "Non-goals"] },
      { h: "Behaviour", fields: ["What the AI does (suggest / act with confirmation / act alone)", "Example inputs and ideal outputs (link to eval set)", "Behaviour when uncertain", "Out-of-scope requests and responses"] },
      { h: "Quality bar", fields: ["Primary quality metric and launch threshold", "Segment thresholds (language, customer tier, etc.)", "Safety requirements (never do / never reveal)", "Latency and cost per use limits"] },
      { h: "Experience", fields: ["AI labelling and transparency", "Sources or reasons shown", "Edit, undo, feedback and human handoff", "Admin controls"] },
      { h: "Governance", fields: ["Risk tier", "Data used and approvals", "Reviewers and dates", "Launch stages and kill switch"] }
    ]
  },
  {
    id: "pm-opportunity-canvas", title: "AI opportunity scoring canvas",
    purpose: "Compare AI ideas on value, feasibility, data readiness, risk and cost.",
    when: "During quarterly planning or discovery.",
    sections: [
      { h: "Idea", fields: ["Idea name", "User problem", "Current workaround and its cost"] },
      { h: "Scores (1 to 5)", fields: ["User value (frequency x pain)", "Feasibility (playground test result)", "Data readiness and rights", "Risk (harm if wrong, regulation)", "Cost to serve"] },
      { h: "Decision", fields: ["Build / buy / partner / not now", "Key assumption to test next", "Owner and date"] }
    ]
  },
  {
    id: "pm-launch-checklist", title: "AI launch readiness checklist",
    purpose: "Confirm a feature is ready for each launch stage.",
    when: "Before dogfood, beta and general availability.",
    sections: [
      { h: "Quality", fields: ["Evaluation results meet thresholds (incl. segments)", "Red-team and safety tests done", "Known limitations documented"] },
      { h: "Governance", fields: ["Inventory entry and risk tier confirmed", "Privacy, security and legal sign-offs", "Vendor and data terms checked"] },
      { h: "Operations", fields: ["Monitoring dashboards and alerts live", "Feature flag and kill switch tested", "Support team briefed with escalation path", "Incident owner named"] },
      { h: "Customers", fields: ["AI labelling in the UI", "Help docs and release notes", "Admin controls documented"] }
    ]
  }
];
