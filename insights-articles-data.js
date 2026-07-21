// Full written lessons for "The lessons I learned the hard way" (Personal Insights).
// Rendered by Insight.dc.html. Block types: p, sub, step, note, callout, ul, journey, answer, quote.
// Voice: Shubham — warm, energetic, motivational, practical. Add/edit freely; the page reads by slug.
window.INSIGHT_ARTICLES = [
  {
    slug: "guesstimates-mindset",
    num: "2", title: "Cracking guesstimates", readTime: "8 MIN READ", tag: "THE MINDSET", accent: "#ff5a3c",
    body: [
      { t: "p", x: "Here's the secret nobody says out loud: guesstimates aren't a maths test. They're a thinking-out-loud test. The interviewer doesn't care whether your final number is right — they care whether your brain is a place they'd trust to run a product. So breathe. You've got this." },
      { t: "callout", label: "The real question behind the question", x: "\"Can you take something huge and scary, break it into pieces you can actually reason about, and stay calm while doing it?\" Nail that, and the number takes care of itself." },
      { t: "step", label: "STEP 1", x: "Restate, then carve the boundary" },
      { t: "p", x: "Say the question back in your own words and lock the scope out loud. \"Number of chai cups sold in Mumbai in a day — I'll assume the metro area, a normal weekday, and cups sold by vendors, not made at home.\" You just turned a foggy question into a fenced field. That fence is 40% of the score." },
      { t: "step", label: "STEP 2", x: "Pick your engine: top-down or bottom-up" },
      { t: "journey", label: "The two roads to any number", steps: ["Population / total pool", "Segment by behaviour", "Rate per segment", "Multiply up", "Sanity-check"] },
      { t: "ul", items: [
        "Top-down: start from a giant number (city population) and slice down with fractions.",
        "Bottom-up: start from one unit (one vendor, one store) and scale up.",
        "When stuck, do both and see if they meet in the middle — that's your credibility flex."
      ] },
      { t: "note", x: "Round to friendly numbers. 20 million, not 19.7. You're building a model, not filing taxes — clean numbers keep your head clear and your interviewer following along." },
      { t: "step", label: "STEP 3", x: "Say your assumptions like you mean them" },
      { t: "p", x: "Every assumption is a tiny promise: \"I'm assuming 1 in 3 adults drinks chai outside daily.\" State it, own it, move on. If it's wrong, the interviewer will nudge you — and now you're having a conversation, which is exactly where you want to be." },
      { t: "step", label: "STEP 4", x: "Land it, then pressure-test it" },
      { t: "p", x: "Multiply through, state your number with a straight spine, then immediately stress it: \"If I've overestimated daily drinkers, halve it and we're still in the millions.\" That last move — checking your own work — is what separates a candidate from a colleague." },
      { t: "answer", label: "What you just proved", x: "You can tame chaos." },
      { t: "p", x: "That's the whole game. Want the full worked library — 25 real guesstimates solved end to end? It's waiting for you in the Guesstimates resource. Go get reps in. Every one you solve makes the next feel smaller." }
    ]
  },
  {
    slug: "rca-mindset",
    num: "3", title: "Writing a killer RCA", readTime: "10 MIN READ", tag: "THE METHOD", accent: "#c6f24e",
    body: [
      { t: "p", x: "\"The metric dropped 15%. Why?\" This question breaks people not because it's hard, but because they panic and start guessing. You won't. Because you're going to bring a map, and a map turns a scary forest into a walk." },
      { t: "callout", label: "The one belief that changes everything", x: "A metric never drops for one reason in a vacuum. It drops because something changed — in the user, the product, or the world. Your only job is to find what changed. That's it. That's the whole thing." },
      { t: "step", label: "STEP 1", x: "Clarify before you theorise" },
      { t: "ul", items: [
        "Which metric exactly, and how is it defined?",
        "How big is the drop, and over what window — sudden cliff or slow slide?",
        "Everyone, or one segment / region / platform?",
        "Anything change on our side — a release, a pricing tweak, a campaign?"
      ] },
      { t: "note", x: "A sudden cliff screams 'something broke or shipped'. A slow slide whispers 'behaviour or competition'. The shape of the drop is your first clue — read it like a detective reads a room." },
      { t: "step", label: "STEP 2", x: "Split the world into clean buckets" },
      { t: "journey", label: "Where problems hide", steps: ["Internal (us)", "External (world)", "User (them)", "Data (the metric itself)"] },
      { t: "p", x: "Internal: a bug, a bad release, a broken funnel step. External: a competitor, a season, a policy. User: changed needs or trust. Data: maybe nothing dropped at all and the tracking broke. Walk each bucket out loud — you'll rarely miss the real cause when you're this structured." },
      { t: "step", label: "STEP 3", x: "Narrow with the funnel" },
      { t: "p", x: "Walk the user journey step by step and ask where the leak is. Sign-ups fine but activations down? The leak is post-signup. This is how you go from 'the metric dropped' to 'checkout step 3 broke for Android users after Tuesday's release.' Specific is powerful." },
      { t: "callout", label: "Say this and watch them lean in", x: "\"Let me isolate the drop before I explain it.\" Isolation first, story second. Amateurs jump to a story; you earn the story." },
      { t: "answer", label: "The skill you're really building", x: "Calm under a scary question." },
      { t: "p", x: "Want 14 real RCAs worked out as full detective stories? They're in the RCA resource — go pull one apart. The messier it looks, the better it feels when you crack it. And you will." }
    ]
  },
  {
    slug: "interview-loop",
    num: "4", title: "Acing the PM interview loop", readTime: "15 MIN READ", tag: "THE CHECKLIST", accent: "#2f9e44",
    body: [
      { t: "p", x: "The loop feels like a gauntlet designed to expose you. Reframe it: it's a series of small, learnable games, and each one is testing exactly one thing. Once you know what each round is really asking, the fear drains out and the fun rushes in. Let's decode it." },
      { t: "step", label: "ROUND 1", x: "Product sense — do you have taste?" },
      { t: "p", x: "\"Design an X for Y.\" They're not testing your creativity. They're testing whether you start from the user, pick a real pain, and prioritise. Structure over sparkle, every time." },
      { t: "journey", label: "The product-sense spine", steps: ["Clarify", "Pick a user", "Find the pain", "Solutions", "Prioritise", "Metric"] },
      { t: "step", label: "ROUND 2", x: "Execution — can you keep the ship moving?" },
      { t: "ul", items: [
        "Metrics: define the North Star and its guardrails.",
        "RCA: something dropped — find what changed.",
        "Trade-offs: given a goal, what do you ship and what do you cut?",
        "The signal they want: you make decisions with incomplete data and say why."
      ] },
      { t: "note", x: "In execution rounds, always name the metric you'd move. A PM who ties every decision back to a number sounds senior, instantly." },
      { t: "step", label: "ROUND 3", x: "Behavioural — are you someone people want beside them?" },
      { t: "p", x: "\"Tell me about a time…\" Use STAR (Situation, Task, Action, Result) but lead with the result so they know why the story matters. And be honest about the messy ones — owning a failure with what you learned beats a shiny win every single time." },
      { t: "callout", label: "The mindset shift that fixes everything", x: "Stop trying to prove you're smart. Start trying to be the colleague they wish they already had. Warmth plus structure beats brilliance plus ego — in the room and on the job." },
      { t: "step", label: "THE WEEK BEFORE", x: "Your calm-down checklist" },
      { t: "ul", items: [
        "Do 5 product-sense and 5 execution reps out loud, on a timer.",
        "Write 6 STAR stories you can flex to any question.",
        "Prepare 3 genuine questions for them — curiosity reads as confidence.",
        "Sleep. A rested brain structures; a tired one rambles."
      ] },
      { t: "answer", label: "Remember this walking in", x: "You're interviewing them too." },
      { t: "p", x: "You're not begging for a seat. You're checking if this is a team worth your one and only career. Walk in as a peer. That posture alone changes how they hear every word you say. Go be brilliant — you're readier than you think." }
    ]
  },
  {
    slug: "saying-no",
    num: "5", title: "The mistake that taught me to say no", readTime: "6 MIN READ", tag: "ON FOCUS", accent: "#5b2fe0",
    body: [
      { t: "p", x: "Early on, I thought a great PM was a yes-machine. Sales wanted a feature — yes. A big client wanted a tweak — yes. My CEO had an idea — of course, yes. I felt useful, generous, unstoppable. I was actually sinking my own roadmap, one polite yes at a time." },
      { t: "callout", label: "The moment it clicked", x: "We shipped 11 things that quarter. Users noticed zero of them. I'd been busy, not effective — and busy is the most convincing disguise failure ever wears." },
      { t: "step", label: "THE COST", x: "What every yes was quietly spending" },
      { t: "journey", label: "The hidden price of yes", steps: ["Say yes", "Split focus", "Everything ships late", "Nothing lands", "Trust erodes"] },
      { t: "p", x: "Saying yes to everything isn't kindness. It's a decision to do everything a little bit badly. Every yes to a small thing is a silent no to the big thing that actually matters." },
      { t: "step", label: "THE FIX", x: "The one question that saved me" },
      { t: "callout", label: "Ask this before every yes", x: "\"If I say yes to this, what am I saying no to?\" Make the trade-off visible — to yourself and to them — and the right answer usually announces itself." },
      { t: "ul", items: [
        "Say no to the task, but yes to the goal behind it: 'Not this feature — but let's solve the real problem it's chasing.'",
        "Anchor the no to the roadmap, not to your opinion. It's not personal; it's priority.",
        "A clear no today buys a great yes later. People respect a PM with a spine."
      ] },
      { t: "note", x: "The best PMs I know aren't the ones who do the most. They're the ones who protect the few things that matter and let the rest go — on purpose." },
      { t: "answer", label: "What saying no really is", x: "Respect for the mission." },
      { t: "p", x: "You're not here to be liked for being agreeable. You're here to make something that matters. Guard your focus like it's the rarest thing you own — because it is. You just got a little sharper. Keep going." }
    ]
  },
  {
    slug: "first-90-days",
    num: "6", title: "What nobody tells you about your first 90 days", readTime: "7 MIN READ", tag: "STARTING STRONG", accent: "#ff5a3c",
    body: [
      { t: "p", x: "You'll walk in on day one desperate to prove you belong. Every instinct will scream 'ship something, fast!' Fight it. The PMs who win the long game spend their first 90 days doing something that feels uncomfortably quiet: listening." },
      { t: "callout", label: "The truth nobody hands you", x: "In your first 90 days, your credibility is built by the quality of your questions, not the quantity of your output. Curiosity is your superpower — spend it lavishly." },
      { t: "step", label: "DAYS 1–30", x: "Absorb everything, decide nothing" },
      { t: "ul", items: [
        "Meet every engineer, designer and stakeholder — ask what's broken and what's sacred.",
        "Read the last 6 months of decisions, docs and post-mortems.",
        "Use the product like your angriest user would. Feel the pain first-hand.",
        "Write down every 'why do we do it this way?' — don't fix yet, just collect."
      ] },
      { t: "step", label: "DAYS 31–60", x: "Find the pattern, earn small trust" },
      { t: "journey", label: "The trust curve", steps: ["Listen", "Spot the pattern", "Ship one small win", "Get believed", "Earn the big call"] },
      { t: "p", x: "Now pick one small, obviously-broken thing and fix it beautifully. Not the moonshot — the papercut everyone's annoyed by. A tiny, clean win tells the team: this person listens and delivers. That's the currency you'll spend later." },
      { t: "step", label: "DAYS 61–90", x: "Point at the mountain" },
      { t: "p", x: "Only now, with context earned and trust banked, do you propose the bigger bet. And because you listened first, it won't sound like an outsider's guess — it'll sound like the thing everyone already felt but couldn't name." },
      { t: "note", x: "Shipping fast on day 5 to look impressive is the most expensive mistake a new PM makes. You spend trust you haven't earned yet, and it's brutal to win back." },
      { t: "answer", label: "Your real first-90 goal", x: "Become believable." },
      { t: "p", x: "Do this and by month four you won't be 'the new PM' — you'll be the one people bring problems to. That's the whole game, and you're already playing it right." }
    ]
  },
  {
    slug: "features-to-outcomes",
    num: "7", title: "From features to outcomes", readTime: "6 MIN READ", tag: "MINDSET", accent: "#c6f24e",
    body: [
      { t: "p", x: "There was a version of me that measured my worth in features shipped. My roadmap was a to-do list. My standup update was a body count. I felt productive right up until someone asked, 'Okay… but did any of it help anyone?' I didn't have an answer. That question changed my career." },
      { t: "callout", label: "The shift in one line", x: "Stop counting what you build. Start counting what changes because you built it. Features are the cost; outcomes are the point." },
      { t: "step", label: "THE OLD WAY", x: "Output thinking" },
      { t: "journey", label: "The output trap", steps: ["Build feature", "Ship it", "Move to next", "Repeat", "Wonder why nothing improves"] },
      { t: "step", label: "THE NEW WAY", x: "Outcome thinking" },
      { t: "journey", label: "The outcome loop", steps: ["Pick a problem", "Set a target metric", "Build the smallest fix", "Measure", "Learn & adjust"] },
      { t: "p", x: "See the difference? The output loop ends at 'ship.' The outcome loop ends at 'did it move the number?' — and if it didn't, you learn something instead of just moving on. One makes you busy; the other makes you dangerous." },
      { t: "ul", items: [
        "Reframe every roadmap item as a problem, not a feature: not 'add filters' but 'help users find the right item in under 10 seconds.'",
        "Attach one metric to every bet before you build it.",
        "Kill features that shipped but didn't move anything. Sunk cost is not a strategy."
      ] },
      { t: "note", x: "Leaders don't ask 'what did you ship?' They ask 'what changed?' Train yourself to answer the second question and you'll always sound a level above." },
      { t: "answer", label: "The version of you that wins", x: "The one who moves numbers." },
      { t: "p", x: "Outcomes over output isn't a slogan — it's the line between a feature factory and a real product leader. You just stepped over it. Don't step back." }
    ]
  },
  {
    slug: "managing-up",
    num: "8", title: "Managing up without losing yourself", readTime: "8 MIN READ", tag: "STAKEHOLDERS", accent: "#5b2fe0",
    body: [
      { t: "p", x: "Managing up gets a bad name — people hear 'sucking up.' It's the opposite. Done right, it's how you keep leadership informed and aligned so they trust your judgement enough to get out of your way. And it's how you protect your team from chaos rolling downhill." },
      { t: "callout", label: "The reframe", x: "Managing up isn't about pleasing your boss. It's about making it easy for your boss to say yes to the right things — and to trust you with the hard ones." },
      { t: "step", label: "PRINCIPLE 1", x: "No surprises, ever" },
      { t: "p", x: "The fastest way to lose a leader's trust is to let them get blindsided. Bad news travels up early, from you, framed with a plan. 'Here's what slipped, here's why, here's what I'm doing about it.' Delivered like that, a problem becomes proof you're in control." },
      { t: "step", label: "PRINCIPLE 2", x: "Speak their language" },
      { t: "ul", items: [
        "Translate features into business impact — revenue, retention, risk.",
        "Bring decisions, not just updates: 'I recommend A, here's the trade-off, I need your call by Friday.'",
        "Keep it short. A leader's attention is the scarcest resource in the building."
      ] },
      { t: "step", label: "PRINCIPLE 3", x: "Disagree — with respect and a spine" },
      { t: "journey", label: "How to push back well", steps: ["Acknowledge their goal", "Share your data", "State your view plainly", "Offer a path", "Commit once decided"] },
      { t: "note", x: "'Disagree and commit' is a superpower. Fight hard for your view in the room; once the call is made, get fully behind it. Leaders remember who they can rely on when it's decided." },
      { t: "callout", label: "Where the 'without losing yourself' comes in", x: "You can be aligned and still be honest. If you only ever echo the room, you're not managing up — you're disappearing. Your judgement is why you were hired. Use it." },
      { t: "answer", label: "The goal of managing up", x: "Earned autonomy." },
      { t: "p", x: "Do this well and you get the rarest gift in any company: leaders who trust you to run. That's freedom — and you just learned how to earn it." }
    ]
  },
  {
    slug: "i-dont-know",
    num: "9", title: "Why 'I don't know' is a superpower", readTime: "5 MIN READ", tag: "CRAFT", accent: "#ff5a3c",
    body: [
      { t: "p", x: "Junior me thought admitting 'I don't know' would get me found out. So I bluffed. I filled silences with confident nonsense. And every single time, someone in the room quietly clocked it. Nothing erodes trust faster than a person who can't tell what they don't know." },
      { t: "callout", label: "The counterintuitive truth", x: "The most senior people in the room say 'I don't know' the most. Not because they know less — because they've stopped needing to look smart, and started needing to be right." },
      { t: "step", label: "THE UPGRADE", x: "Turn the gap into a next step" },
      { t: "p", x: "'I don't know' on its own is a dead end. 'I don't know — here's how I'd find out' is leadership. The magic isn't in the admission; it's in the move that follows it." },
      { t: "journey", label: "The confident-uncertainty move", steps: ["Admit the gap", "Frame the question", "Name how you'd learn", "Give a timeline", "Follow up"] },
      { t: "ul", items: [
        "'I don't have that number — I'll pull it and get back to you by end of day.'",
        "'I'm not sure that's the real cause — let me isolate it before I answer.'",
        "'Great question, I hadn't considered it — let me think properly and follow up.'"
      ] },
      { t: "note", x: "Saying 'I don't know' well makes people trust the things you DO say with certainty. It's the honesty tax that buys your credibility." },
      { t: "answer", label: "What honesty about uncertainty signals", x: "Security, not weakness." },
      { t: "p", x: "The confidence to admit the edge of your knowledge — and turn it into the next question — is exactly what separates senior PMs from performers. You don't have to know everything. You just have to be someone people can believe. Start today." }
    ]
  },
  {
    slug: "flopped-launch",
    num: "10", title: "The launch that flopped, and what it gave me", readTime: "7 MIN READ", tag: "FAILURE", accent: "#c6f24e",
    body: [
      { t: "p", x: "We spent four months on it. Cross-team, late nights, a real bet. Launch day came. We hit the button. And… nothing. A trickle of usage, a graph that flatlined by week two. I felt like I'd let everyone down. It turned out to be the most useful thing that ever happened to me." },
      { t: "callout", label: "The reframe that saved me", x: "A launch doesn't fail. It teaches — brutally, expensively, and unforgettably. The only real failure is refusing to read the lesson it's handing you." },
      { t: "step", label: "THE POST-MORTEM", x: "Five things the flop showed me" },
      { t: "ul", items: [
        "We fell in love with the solution, not the problem. Classic, and fatal.",
        "We never validated demand — we assumed it. Assumption is the mother of flops.",
        "We shipped big when we should have shipped small and learned.",
        "We measured 'done', not 'used'. Wrong finish line entirely.",
        "We didn't tell the story — users didn't understand why it existed."
      ] },
      { t: "step", label: "THE REBUILD", x: "How I work now because of it" },
      { t: "journey", label: "From flop-proof to fearless", steps: ["Validate the problem", "Ship the smallest test", "Watch real usage", "Double down or kill", "Tell the story"] },
      { t: "note", x: "I now run a pre-mortem before every big bet: 'Imagine this flopped — why?' The answers, heard before launch instead of after, are worth their weight in gold." },
      { t: "callout", label: "What I'd tell the version of me on that launch day", x: "This isn't the end of your story. It's the chapter that makes you good. Pick your head up." },
      { t: "answer", label: "What a flop really is", x: "Tuition for mastery." },
      { t: "p", x: "You'll have a flop. Maybe several. Let them sting, then let them teach. The PM who's failed and learned is worth ten who've only ever coasted. You're building something failure can't take away — judgement." }
    ]
  },
  {
    slug: "influence-without-authority",
    num: "11", title: "Influence without authority", readTime: "8 MIN READ", tag: "LEADERSHIP", accent: "#5b2fe0",
    body: [
      { t: "p", x: "Here's the strange truth of product management: you're responsible for the outcome, but you can't order anyone to do anything. Engineers don't report to you. Designers don't. Neither does sales or marketing. And yet somehow you have to move them all in one direction. So how?" },
      { t: "callout", label: "The whole secret", x: "You don't move people with power. You move them with trust, clarity, and a story worth believing. Authority commands; influence inspires — and inspiration outlasts every org chart." },
      { t: "step", label: "LEVER 1", x: "Trust — the currency of everything" },
      { t: "ul", items: [
        "Do what you said you'd do, every time. Reliability compounds.",
        "Give credit loudly, take blame quietly.",
        "Understand each person's world before you ask anything of them."
      ] },
      { t: "step", label: "LEVER 2", x: "Clarity — remove the friction of confusion" },
      { t: "p", x: "People don't resist work; they resist ambiguity. When you can explain why this matters, who it's for, and what winning looks like in one clean paragraph, teams move themselves. Half of influence is just being the clearest person in the room." },
      { t: "step", label: "LEVER 3", x: "The story — make them want it" },
      { t: "journey", label: "The influence loop", steps: ["Understand them", "Frame the why", "Co-create the how", "Give the credit", "Trust deepens"] },
      { t: "note", x: "'Co-create the how' is the quiet magic. People fight plans done TO them and champion plans done WITH them. Bring the problem, not just the solution, and let them own a piece." },
      { t: "callout", label: "The mindset", x: "Stop wishing you had more authority. The PMs with real power never needed the title — they earned the following. That's a deeper kind of leadership, and it travels with you everywhere." },
      { t: "answer", label: "What influence really is", x: "Leadership people choose." },
      { t: "p", x: "Authority makes people comply. Influence makes them commit. Learn to move a room with zero formal power and there's no team on earth you can't lead. You're building the rarest skill in the building — keep at it." }
    ]
  },
  {
    slug: "quiet-habits",
    num: "12", title: "The quiet habits that made me better", readTime: "6 MIN READ", tag: "HABITS", accent: "#ff5a3c",
    body: [
      { t: "p", x: "Nobody gets great from one big leap. They get great from small, boring, repeated things that compound quietly in the background until one day people ask how you got so sharp. Here are the unglamorous rituals that changed me more than any framework ever did." },
      { t: "callout", label: "The principle underneath all of them", x: "Talent is loud and rare. Habits are quiet and available to everyone. The habits win — every single time, over a long enough line." },
      { t: "step", label: "HABIT 1", x: "The written decision log" },
      { t: "p", x: "Every meaningful decision, I write down: what I decided, why, and what I expected to happen. Months later I read it back. Sometimes I was right; often I wasn't — and seeing the gap between my prediction and reality is the fastest way I've ever found to build judgement." },
      { t: "step", label: "HABIT 2", x: "Weekly user calls — no exceptions" },
      { t: "ul", items: [
        "One real conversation with a real user, every week.",
        "No agenda to sell — just 'show me how you actually use this.'",
        "One hour a week that quietly makes every roadmap call sharper."
      ] },
      { t: "step", label: "HABIT 3", x: "The 'why' journal" },
      { t: "journey", label: "The compounding loop", steps: ["Log the decision", "Talk to a user", "Ask why weekly", "Review monthly", "Judgement compounds"] },
      { t: "p", x: "Once a week I write down one thing I don't understand about my product, my users, or my market — and I go chase the answer. Curiosity, scheduled. Over a year, those little chases add up to an understanding no crash course can buy." },
      { t: "note", x: "None of these are impressive on any single day. That's the point. Compounding always looks unimpressive right up until it looks like magic." },
      { t: "answer", label: "The real secret to getting better", x: "Small things, repeated." },
      { t: "p", x: "Pick one of these and start this week. Not all three — one. Let it become automatic, then add the next. A year from now you'll be a PM your current self would be proud of. That journey starts with the next quiet, boring, powerful rep. Take it." }
    ]
  }
];
