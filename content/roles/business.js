ACADEMY.tracks.business = [
  {
    id: "biz-use", stage: "use",
    title: "Getting real value from AI assistants",
    summary: "Practical prompting and everyday uses of AI assistants in HR, finance, sales, marketing, service and other business functions.",
    outcomes: [
      "Write prompts that produce useful, specific results",
      "Apply AI to common tasks in your function",
      "Check AI output efficiently before you use it"
    ],
    sections: [
      { h: "A simple prompt recipe", body: "Most disappointing AI results come from vague requests. Use this recipe.\n\nThink of the assistant as a capable new colleague on their first day: smart, fast, and knowing nothing about your company, your customer or what you want. The more you would need to brief a person, the more you need to brief the AI.", example: "Weak: 'Write an email to a customer about a delay.' Strong: 'You are helping a customer success manager. Write a short, warm email to Priya at Acme Ltd telling her the data migration will finish on 14 March, not 7 March, because their source files arrived late. Apologise for the inconvenience without admitting fault, offer a 20-minute call this week, and keep it under 120 words.'", points: [
        "Role and goal: 'You are helping me write a job advert for a senior accountant to attract experienced candidates.'",
        "Context: paste or attach the relevant material (in an approved tool), and say who the audience is.",
        "Task and format: 'Write 250 words with three bullet points on benefits, in a warm but professional tone.'",
        "Constraints: 'Use only the information provided. Mark anything you are unsure about.'",
        "Iterate: ask for changes rather than starting again."
      ] },
      { h: "Uses by function", body: "Every function has repetitive writing, reading and analysis work.\n\nThe common thread is first drafts of routine writing, summaries of long material, and turning information from one shape into another (notes into an email, a report into slides, a policy into FAQs). The judgement about what to send, to whom and when stays with you.", points: [
        "HR: job adverts, interview question banks, policy FAQs, training materials. (Not candidate scoring without approval.)",
        "Finance: variance commentary drafts, policy queries, spreadsheet formulas, summarising contracts.",
        "Sales: account research from public sources, call preparation, proposal drafts, follow-up emails.",
        "Marketing: campaign ideas, copy variations, content repurposing, audience research summaries.",
        "Customer service: reply drafts, knowledge article updates, complaint theme analysis."
      ] },
      { h: "Check before you use", body: "You own anything you send or publish. A quick check catches most problems.\n\nAI makes three kinds of mistake you must catch: invented facts (a figure, a name, a policy that does not exist), wrong tone (too casual, too certain, too salesy), and accidental commitments (a discount, a deadline, an apology that admits liability).", points: [
        "Facts, numbers, names and dates: verify against the source.",
        "Tone and appropriateness for the audience.",
        "Anything that sounds like a commitment, a price or legal wording.",
        "For external content: brand guidelines and any disclosure rules."
      ] },
      { h: "Data do's and don'ts", body: "The most common AI mistake in business functions is data in the wrong place.", points: [
        "Do use your organisation's approved AI tools.",
        "Do remove personal and confidential details you do not need.",
        "Don't paste employee records, customer lists, salary data or unreleased financials into consumer AI tools.",
        "Don't use AI to make decisions about individuals (hiring, pay, credit, discipline) without an approved process."
      ] }
    ],
    scenario: { title: "The generic job advert", situation: "An HR partner asked an assistant to 'write a job advert for a data analyst'. The result was generic and listed requirements the role does not need, which could put off good candidates.", approach: [
      "Give context: the team, the real responsibilities, must-have versus nice-to-have skills, company values and inclusive language guidelines.",
      "Ask for a draft, then a review against inclusive-language guidance.",
      "Check the final text with the hiring manager."
    ] },
    howto: {"title": "Getting a good result in three rounds", "steps": [{"h": "Round 1: brief it properly", "body": "Role and goal, the material it needs, the task and format, and constraints. Use the recipe above."}, {"h": "Round 2: steer, do not restart", "body": "Tell it what to change: 'Shorter. Less formal. Move the deadline to the first line. Remove the second paragraph.'"}, {"h": "Round 3: ask it to check itself, then check it yourself", "body": "'List any facts or commitments in this text that I should verify.' Then verify them."}, {"h": "Save what worked", "body": "If the prompt will be useful again, save it in your team's prompt library with notes."}]},
    decide: {"title": "Good first uses by function", "cols": ["Function", "Try this first"], "rows": [["HR", "Turn a role profile into an inclusive job advert; draft interview questions from competencies"], ["Finance", "Draft variance commentary from the numbers you provide; explain a policy in plain language"], ["Sales", "Prepare for a call from public company information; draft follow-ups from your notes"], ["Marketing", "Generate copy variations for testing; repurpose a webinar into a blog post"], ["Customer service", "Draft replies from the knowledge base; summarise long complaint threads"], ["Any team", "Turn meeting notes into actions; summarise long documents; rewrite for a different audience"]]},
    cases: [{"title": "AI-written articles needing corrections (CNET, 2023)", "body": "A technology news site quietly published dozens of AI-assisted personal finance explainers. After errors were spotted, a review led to corrections on more than half of the 77 articles, including basic mistakes about interest calculations, and the site paused the programme.", "lesson": "Fluent text can hide simple factual errors. Anything published needs a real check by someone who knows the subject."}],
    checklist: {"title": "Before you send or publish AI-assisted work", "items": ["I used an approved tool and no sensitive data I should not have.", "Every fact, number, name and date is checked.", "The tone suits the audience and the moment.", "There are no promises, prices, deadlines or admissions I did not intend.", "External content meets brand guidelines and disclosure rules."]},
    exercise: "Pick a task you do every week. Write a prompt using the recipe (role and goal, context, task and format, constraints) and compare the result with your usual approach.",
    watchouts: ["Consumer AI tools may use your inputs for training.", "AI can produce biased content, especially about people; review carefully."],
    quiz: [
      { q: "Which prompt is likely to give the most useful result?", o: ["'Write an email'", "'Write a 150-word email to a customer whose delivery is late, apologising, giving the new date of 12 May, in a warm tone'", "'Be creative'", "'Email please'"], a: 1, why: "Specific context, task, format and tone produce useful output." },
      { q: "Which HR use of AI needs an approved process before use?", o: ["Drafting a job advert", "Scoring candidates for shortlisting", "Writing interview questions", "Summarising a policy"], a: 1, why: "Decisions about people are high risk and need governance." },
      { q: "What should you always verify in AI output before sending it?", o: ["Font choice", "Facts, numbers, names, dates and commitments", "Word count only", "Nothing if it reads well"], a: 1, why: "You are accountable for what you send." },
      { q: "Where should employee salary data be processed with AI?", o: ["Any free chatbot", "Only in tools approved for that data class, if at all", "Personal email", "A public forum"], a: 1, why: "Salary data is confidential personal data." },
      { q: "What is the best response to a disappointing first AI answer?", o: ["Give up", "Iterate: add context and ask for specific changes", "Use a different language", "Copy it anyway"], a: 1, why: "Iteration with added context usually improves results quickly." },
      {"q": "Which prompt will give the best customer email?", "o": ["'Write an email about a delay'", "A prompt giving the role, the customer, the new date and reason, the tone, what to offer, and a length limit", "'Make it good'", "'Write like a professional'"], "a": 1, "why": "Specific context, task, tone and constraints let the assistant produce something close to usable."},
      {"q": "Which AI mistake can create legal or financial problems in a customer email?", "o": ["Using bullet points", "An accidental commitment such as a discount, deadline or admission of fault", "A short subject line", "Using the customer's first name"], "a": 1, "why": "Check for unintended commitments before anything goes to a customer."}
    ]
  },
  {
    id: "biz-identify", stage: "identify",
    title: "Spotting good AI use cases in your team",
    summary: "Find the tasks in your team where AI helps most, estimate the benefit, and pick a tool that is already approved.",
    outcomes: [
      "Run a simple task audit to find AI opportunities",
      "Estimate time saved and quality impact honestly",
      "Choose between features in existing tools, approved assistants and requesting something new"
    ],
    sections: [
      { h: "The task audit", body: "List your team's recurring tasks and score them.\n\nDo the audit as a team in one hour: everyone lists their recurring tasks on sticky notes, then the team scores them together. The best candidates are usually boring: weekly reports, standard letters, meeting follow-ups, the same questions answered again and again.", example: "A procurement team lists 25 recurring tasks. Top scorers: summarising supplier proposals against the evaluation criteria (weekly, 3 hours, clear standard, errors caught at panel review) and drafting standard clarification questions (daily, 30 minutes). Ruled out: scoring suppliers (a decision with legal and fairness implications).", points: [
        "How often is it done, and how long does it take?",
        "Is it mostly reading, writing, summarising, searching or reformatting?",
        "Is there a clear standard for a good result?",
        "How bad is an error, and would it be caught?",
        "Does it involve sensitive data?"
      ] },
      { h: "Good and poor candidates", body: "Patterns that help you decide.", points: [
        "Good: drafting standard documents, summarising long material, answering repetitive internal questions from a knowledge base, reformatting data, first-pass analysis of feedback.",
        "Poor: decisions about individuals, tasks needing exact numbers without checking, relationship-critical conversations, tasks with no clear right answer."
      ] },
      { h: "Use what you already have", body: "Many tools you already use have AI built in. Start there.", points: [
        "Check the AI features in your office suite, CRM, HR or finance system.",
        "Use the organisation's approved general assistant for drafting and analysis.",
        "Request a new tool only if the need is clear and the existing options cannot meet it."
      ] },
      { h: "Estimate the benefit honestly", body: "Be realistic so expectations are met.\n\nA simple worked estimate: a task done 20 times a month that takes 45 minutes, where AI cuts it to 15 minutes plus 10 minutes of checking, saves about 400 minutes (nearly 7 hours) a month. That is real, but only if the team decides what the 7 hours will be used for.", points: [
        "Time saved per task x frequency, minus time spent checking.",
        "Quality improvements: consistency, fewer errors, faster responses.",
        "What will the team do with the time saved?"
      ] }
    ],
    scenario: { title: "The finance month-end commentary", situation: "A finance team spends two days each month writing variance commentary for 30 cost centres. The numbers come from the ledger; the commentary explains the movements.", approach: [
      "Good candidate: frequent, text-heavy, with a clear standard and expert review.",
      "Approach: the approved assistant drafts commentary from the variance report and budget-holder notes; analysts check and refine.",
      "Benefit: perhaps a day saved per month, plus more consistent commentary. Numbers stay sourced from the ledger."
    ] },
    howto: {"title": "Running a one-hour task audit with your team", "steps": [{"h": "List tasks (15 minutes)", "body": "Everyone writes down recurring tasks with frequency and time taken."}, {"h": "Score them (20 minutes)", "body": "Reading or writing heavy? Clear standard for good? Errors caught? Sensitive data? Use a 1 to 3 scale."}, {"h": "Rule out the risky ones (10 minutes)", "body": "Remove decisions about people, legally binding outputs and tasks needing data no approved tool may hold."}, {"h": "Pick two (10 minutes)", "body": "The highest scorers with willing volunteers."}, {"h": "Check tools (5 minutes)", "body": "Which approved tool already does this? Plan a short pilot."}]},
    decide: {"title": "Good candidate or not?", "cols": ["If the task…", "Then…"], "rows": [["Is frequent, text-heavy and has a clear 'good' standard", "Strong candidate"], ["Produces something a person reviews before it matters", "Strong candidate"], ["Decides something about an individual (hiring, pay, performance)", "Not a candidate for AI decisions; AI may help with wording only"], ["Needs exact, current facts the AI cannot see", "Only with grounding in the right source, and checks"], ["Involves data no approved tool may hold", "Not until a suitable tool is approved"]]},
    checklist: {"title": "Choosing your team's first AI uses", "items": ["Tasks are listed with frequency and time taken.", "Candidates have a clear standard for a good result.", "Decisions about individuals are excluded.", "Data needs fit an approved tool.", "The benefit estimate includes checking time.", "We know what we will do with time saved."]},
    exercise: "Do a task audit of your team's ten most common tasks. Pick the top two AI candidates and estimate time saved after checking time.",
    watchouts: ["Do not count time saved before subtracting review time.", "Requests for new tools need a clear problem, not just interest."],
    quiz: [
      { q: "Which task is the best AI candidate?", o: ["Deciding an employee's pay rise", "Drafting monthly variance commentary that experts then review", "Negotiating with a key client", "Approving a loan"], a: 1, why: "It is frequent, text-heavy, has a standard and expert review." },
      { q: "What should you check before requesting a new AI tool?", o: ["Whether existing approved tools or built-in features can meet the need", "The vendor's logo", "Whether colleagues like AI", "Nothing"], a: 0, why: "Existing approved tools are faster and already governed." },
      { q: "How should time saved be estimated?", o: ["Assume 50%", "Time saved per task x frequency, minus checking time", "Ask the vendor", "Count prompts"], a: 1, why: "Checking time is a real cost and must be included." },
      { q: "Why are decisions about individuals poor candidates for casual AI use?", o: ["They are too easy", "They carry high risk of unfair or unlawful outcomes and need governance", "AI cannot read names", "They are rare"], a: 1, why: "These are high-risk uses with legal implications." },
      { q: "Which question belongs in a task audit?", o: ["What is the team's favourite colour?", "How bad is an error, and would it be caught?", "Who has the newest laptop?", "Which AI is most popular?"], a: 1, why: "Error impact and detectability determine suitability." },
      {"q": "A task takes 45 minutes, 20 times a month. AI cuts it to 15 minutes plus 10 minutes of checking. Roughly how much time is saved per month?", "o": ["About 2 hours", "About 7 hours", "About 15 hours", "No time"], "a": 1, "why": "20 x (45 - 25) = 400 minutes, nearly 7 hours, once checking time is included."},
      {"q": "Which task should not be handed to AI to decide?", "o": ["Summarising supplier proposals", "Scoring suppliers or job candidates", "Drafting meeting follow-ups", "Rewriting a policy as FAQs"], "a": 1, "why": "Decisions about suppliers or people carry legal and fairness implications and need human judgement."}
    ]
  },
  {
    id: "biz-implement", stage: "implement",
    title: "Rolling out AI in your team",
    summary: "Introduce AI into team workflows: pilot, share prompts, set team norms and measure the effect.",
    outcomes: [
      "Run a lightweight team pilot",
      "Build a shared prompt library and team norms",
      "Measure benefit and decide whether to continue"
    ],
    sections: [
      { h: "A lightweight pilot", body: "Small, structured pilots build evidence and confidence.\n\nMeasure before you start, even roughly. Ask volunteers to time the task for two weeks and keep a few examples of normal output. Without a 'before', the pilot ends with opinions rather than evidence.", example: "A customer service team pilots AI-drafted replies with four volunteers for five weeks. Before: 9 minutes per complex email, 6% sent back by quality review. After: 5 minutes, 5% sent back. Two volunteers found it unhelpful for complaints about billing errors, so the team keeps using it for everything else and writes billing replies by hand.", points: [
        "Pick one or two tasks and a few volunteers.",
        "Measure the before: time and quality.",
        "Run for four to six weeks with a weekly check-in.",
        "Compare and decide: adopt, adjust or stop."
      ] },
      { h: "Shared prompts and examples", body: "Good prompts are team assets.", points: [
        "Keep a shared library of prompts that work, with example outputs.",
        "Include instructions on what to check before using the result.",
        "Update prompts as the team learns."
      ] },
      { h: "Team norms", body: "Agree how the team uses AI.\n\nWrite the norms on one page and revisit them after the pilot. Norms make it safe to use AI openly, which is how good practice spreads and problems get reported.", points: [
        "Which tasks AI is used for, and which it is not.",
        "Review expectations before anything goes to customers or leadership.",
        "When to disclose AI use, internally and externally.",
        "How to raise concerns or report problems."
      ] },
      { h: "Support and skills", body: "Adoption needs ongoing help.", points: [
        "Pair confident users with newer users.",
        "Short demos in team meetings.",
        "Recognise good practice, including reporting mistakes."
      ] }
    ],
    scenario: { title: "The prompt that lived in one inbox", situation: "One marketing specialist built an excellent prompt for turning webinars into blog posts, cutting the task from a day to two hours. Nobody else knew, and when they went on leave, the team reverted to the old way.", approach: [
      "Capture working prompts in a shared library with examples and checks.",
      "Demo it in a team meeting.",
      "Make it part of the documented process."
    ] },
    howto: {"title": "Running a six-week team pilot", "steps": [{"h": "Week 0: set up", "body": "Pick one or two tasks and three to six volunteers. Measure time and quality now. Agree what success looks like."}, {"h": "Week 1: learn together", "body": "Share a starter prompt, show a demo, agree the check before use."}, {"h": "Weeks 2 to 5: use and log", "body": "Volunteers use it on real work and note time taken, edits needed and problems."}, {"h": "Weekly 15-minute check-in", "body": "What worked, what did not, which prompts to update."}, {"h": "Week 6: decide", "body": "Compare with the before. Adopt, adjust or stop, and write down why."}, {"h": "Share", "body": "Put the prompts and norms in the team library and tell other teams what you learned."}]},
    checklist: {"title": "Team AI roll-out", "items": ["Baseline time and quality measured before the pilot.", "Success criteria agreed up front.", "Shared prompt library with checking notes.", "Team norms written: uses, reviews, disclosure, reporting.", "Decision to adopt, adjust or stop based on evidence.", "Lessons shared beyond the team."]},
    exercise: "Start a shared prompt library for your team with three prompts, each with an example output and a 'what to check' note.",
    watchouts: ["Pilots without a before measurement cannot show benefit.", "Norms that are not written down are not norms."],
    quiz: [
      { q: "What must you measure before a team AI pilot?", o: ["Nothing", "Baseline time and quality for the task", "Number of AI tools on the market", "Team morale only"], a: 1, why: "Without a baseline, benefit cannot be shown." },
      { q: "What makes a prompt library useful?", o: ["Many untested prompts", "Tested prompts with example outputs and checks", "Only very long prompts", "Prompts kept private"], a: 1, why: "Proven prompts with guidance spread good practice." },
      { q: "Which belongs in team AI norms?", o: ["Review expectations before content goes to customers", "Lunch preferences", "Desk allocation", "Holiday dates"], a: 0, why: "Norms set quality and accountability expectations." },
      { q: "How long is a sensible lightweight pilot?", o: ["One day", "Four to six weeks with weekly check-ins", "Two years", "No time limit"], a: 1, why: "Long enough for evidence, short enough to decide quickly." },
      { q: "What should happen at the end of a pilot?", o: ["Keep going indefinitely", "Decide to adopt, adjust or stop based on evidence", "Buy more tools", "Forget it"], a: 1, why: "A clear decision prevents drift." },
      {"q": "Why measure the task before starting a pilot?", "o": ["It is required by law", "Without a baseline, the pilot ends with opinions instead of evidence", "To slow volunteers down", "To impress managers"], "a": 1, "why": "A before-and-after comparison shows whether AI really helps."},
      {"q": "A pilot shows AI helps on most emails but not billing complaints. What is a sensible outcome?", "o": ["Stop the whole pilot", "Adopt it for the cases where it helps and keep billing complaints manual", "Force its use on billing complaints", "Ignore the finding"], "a": 1, "why": "Scoping AI to where it works is a good, evidence-based decision."}
    ]
  },
  {
    id: "biz-govern", stage: "govern", updated: "2026-10-20",
    title: "Using AI responsibly with company data",
    summary: "Your responsibilities: data protection, fairness, transparency, IP and reporting problems.",
    outcomes: [
      "Apply data protection rules to everyday AI use",
      "Recognise fairness, transparency and IP issues in your function",
      "Know how to report AI issues"
    ],
    sections: [
      { h: "Data protection in practice", body: "Most AI risks in business functions are data risks.", points: [
        "Know your data classes and which tools each may go into.",
        "Minimise: share only what the task needs.",
        "Personal data needs a valid purpose; using it with AI must fit that purpose.",
        "Delete or avoid storing AI conversations containing sensitive data where possible."
      ] },
      { h: "Fairness and people decisions", body: "AI can repeat or amplify bias.\n\nThis matters even when you are only drafting. AI-written job adverts, performance feedback or customer communications can carry stereotypes in word choice or assumptions. Read anything about people with that lens before it goes out.", points: [
        "Review AI-written content about people for stereotypes and exclusionary language.",
        "Do not use AI to screen, score or rank people without an approved, assessed process.",
        "Be alert to proxies: postcode, school or gaps in employment can stand in for protected characteristics."
      ] },
      { h: "Transparency and IP", body: "Be honest about AI use and respectful of others' rights.", points: [
        "Disclose AI involvement where policy, law or the audience expects it (for example AI-generated images in marketing, or customer chatbots).",
        "Do not ask AI to copy a competitor's or artist's protected work or style for commercial use without legal advice.",
        "Check rights before using AI-generated images, music or text externally.",
        "Do not upload third-party documents if the terms prohibit it."
      ] },
      { h: "Speak up", body: "Reporting problems is part of using AI well.", points: [
        "Report data mistakes, harmful outputs or suspicious behaviour quickly.",
        "Raise concerns about AI uses you think are unfair or unsafe.",
        "Share lessons with your team."
      ] },
      { h: "Spotting and labelling AI-generated media", body: "Fake images, voices and videos are now cheap to make. Be careful with what you share and clear about what you create.", points: [
        "Label AI-generated images, audio and video you publish, following your company's policy.",
        "Keep content credentials (C2PA metadata) intact where your tools support them.",
        "Be sceptical of urgent requests by voice or video, such as a 'CEO' asking for a payment. Verify through a known channel.",
        "Watermark detectors and 'AI detectors' for text are unreliable; never accuse someone based on them alone."
      ] }
    ],
    scenario: { title: "The marketing image", situation: "A marketing team used an image generator to create a campaign visual 'in the style of' a famous living illustrator. The illustrator's agent complained publicly.", approach: [
      "Imitating a living artist's distinctive style commercially creates legal and reputational risk.",
      "Use original prompts and approved image tools, and follow brand and legal guidance.",
      "Follow disclosure rules for AI-generated imagery where they apply."
    ] },
    decide: {"title": "Can I use AI for this?", "cols": ["If you want to…", "Then…"], "rows": [["Summarise a public report", "Yes, in an approved tool"], ["Draft an email using internal information", "Yes, in an approved enterprise tool"], ["Analyse a spreadsheet with customer names", "Only in a tool approved for personal data, or remove the names first"], ["Screen, rank or score job applicants or employees", "No, not without a formal, approved high-risk process"], ["Create an image 'in the style of' a living artist", "No; it risks IP and reputational harm"], ["Act on an urgent payment request by voice or video", "Verify through a separate, known channel first"]]},
    cases: [{"title": "A lawsuit over AI screening of job applicants (Mobley v. Workday, ongoing)", "body": "A job seeker who was rejected for many roles sued Workday, alleging its AI screening tools discriminated on age, race and disability. In 2025 a US federal court allowed the age discrimination claim to proceed as a nationwide collective action.", "lesson": "Using AI to screen people carries legal risk for employers and vendors. Do not use AI to rank or reject people outside an approved process."}],
    checklist: {"title": "Responsible AI in your daily work", "items": ["I know which tools are approved for which data.", "I share only what the task needs.", "I do not use AI to decide about individuals.", "I disclose AI use where policy, law or trust requires.", "I check rights before using AI-generated images or third-party material.", "I report problems and near misses."]},
    exercise: "Review the last three times you used AI at work. For each, note the data class used, the tool, and whether the use fitted policy.",
    watchouts: ["'Everyone does it' is not a policy.", "Deleting a mistake is not the same as reporting it."],
    quiz: [
      { q: "What does data minimisation mean when using AI?", o: ["Using small fonts", "Sharing only the data the task needs", "Using fewer tools", "Shorter prompts only"], a: 1, why: "Minimisation reduces exposure if something goes wrong." },
      { q: "Which could act as a proxy for a protected characteristic?", o: ["Job title only", "Postcode or gaps in employment history", "Favourite colour", "Email font"], a: 1, why: "Proxies can lead to indirect discrimination." },
      { q: "When should you disclose AI involvement?", o: ["Never", "Where policy, law or the audience expects it", "Only if asked twice", "Only internally"], a: 1, why: "Transparency builds trust and may be legally required." },
      { q: "You notice an AI tool produced an offensive output in a customer email draft you did not send. What should you do?", o: ["Delete it and move on", "Report it so the issue can be fixed", "Send it anyway", "Post it on social media"], a: 1, why: "Reporting helps prevent the problem reaching customers." },
      { q: "What is a risk of generating images 'in the style of' a living artist for a campaign?", o: ["None", "Legal and reputational risk", "Images will be too small", "Higher printing costs"], a: 1, why: "It may infringe rights or cause reputational harm." },
      { q: "You receive a video call from your 'CFO' urgently asking for a payment to a new supplier. What should you do?", o: ["Pay quickly, it looks like them", "Verify through a known, separate channel before acting", "Ask an AI detector", "Forward it to the supplier"], a: 1, why: "Deepfake voice and video fraud is real; verify independently." },
      {"q": "You need themes from a spreadsheet of customer complaints with names and phone numbers. What should you do?", "o": ["Paste it into any chatbot", "Remove the personal details first or use a tool approved for personal data", "Email it to a friend with a better tool", "Split it into smaller pastes"], "a": 1, "why": "Minimise personal data and use approved tools; splitting the data does not change the risk."},
      {"q": "What does the Workday lawsuit illustrate?", "o": ["AI screening is risk-free", "Using AI to screen job applicants can create discrimination liability", "Only small companies are affected", "Lawsuits cannot involve AI vendors"], "a": 1, "why": "AI screening of people is high risk and can lead to legal claims."}
    ]
  }
];

ACADEMY.templates.business = [
  {
    id: "biz-prompt-card", title: "Prompt recipe card",
    purpose: "Write a strong prompt for a recurring task and share it with your team.",
    when: "Whenever you find a prompt worth reusing.",
    sections: [
      { h: "Prompt", fields: ["Role and goal", "Context to provide", "Task and output format", "Constraints"] },
      { h: "Use", fields: ["Approved tool to use", "Data allowed", "What to check before using the output", "Example output (link)"] }
    ]
  },
  {
    id: "biz-task-audit", title: "Team AI task audit",
    purpose: "Find the best AI opportunities in your team's work.",
    when: "Before starting a team AI pilot.",
    sections: [
      { h: "For each task", fields: ["Task", "Frequency and time per task", "Type (read / write / summarise / search / reformat / decide)", "Clear standard for good? (yes/no)", "Impact of an error", "Sensitive data? (class)", "AI suitability (high / medium / low)"] },
      { h: "Selection", fields: ["Top two candidates", "Tool to use", "Estimated net time saved"] }
    ]
  },
  {
    id: "biz-team-norms", title: "Team AI norms",
    purpose: "Agree how your team uses AI.",
    when: "At the start of AI adoption, reviewed quarterly.",
    sections: [
      { h: "Use", fields: ["Tasks we use AI for", "Tasks we do not use AI for", "Approved tools"] },
      { h: "Quality", fields: ["Review before external or leadership use", "Disclosure expectations"] },
      { h: "Safety", fields: ["Data rules", "How to report a problem", "Who to ask for help"] }
    ]
  }
];
