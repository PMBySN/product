// Product Improvement case studies (batch 1 of 2) — full walkthroughs in Shubham's voice.
// Inspired by The Product Folks product-improvement category; original writing.
// Blocks: p | step{label,x} | sub{x} | note{x} | callout{label,x} | ul{items} | rice{label,rows:[{name,r,i,c,e,score}]}
window.IMPROVE_CASES = [
  {
    slug: "samsung-battery", company: "Samsung", wordmark: "SAMSUNG", brand: "#1428a0", readTime: "7 min read",
    title: "Samsung Galaxy wants to improve the battery life of their wearable device.",
    body: [
      { t: "p", x: "Battery life is the #1 complaint on almost every wearable — so this is a juicy, high-stakes improvement. The trap is to blurt 'add a bigger battery.' I'll resist, and walk the full path instead: understand, target the right users, then prioritise the fixes by real impact." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "The Galaxy smartwatch packs fitness tracking, notifications, health sensors and apps onto a tiny battery. The ask: meaningfully extend battery life without wrecking the design or the features people bought it for." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Current battery life, and the target we're aiming for?", "Which features drain most — display, GPS, heart-rate, always-on?", "How do people actually wear it — 24/7 with sleep tracking, or 9-to-5?", "What have we already tried on hardware and software?", "Which trade-offs are acceptable — thickness, weight, cost?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Extend real-world battery life enough that a typical user goes from anxious daily charging to confident multi-day wear — without giving up the health tracking they bought it for." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Fitness enthusiasts — long GPS-heavy workouts; hate a mid-run death.", "Health monitors — need uninterrupted 24/7 and overnight sleep tracking.", "Everyday users — want convenience; resent nightly charging."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Charging interrupts overnight sleep tracking.", "GPS + always-on display gut the battery on active days.", "No clear sense of what's actually draining power."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Software power-optimisation: smarter background scheduling, adaptive refresh.", "Custom battery-saver modes (dim display, pause sensors on demand).", "Faster + wireless charging so a short top-up buys a full day.", "Smart battery insights + low-power alerts so users self-manage.", "Higher-density battery within the same form factor (longer-term)."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Software power-optimisation", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Custom battery-saver modes", r: 9, i: 7, c: 8, e: 7, score: 72 },
        { name: "Smart insights + low-power alerts", r: 8, i: 6, c: 8, e: 5, score: 67 },
        { name: "Faster / wireless charging", r: 7, i: 6, c: 6, e: 7, score: 36 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Average real-world battery life (hrs) before vs. after.", "Battery-related support tickets and return rate.", "Adoption of battery-saver modes and firmware updates.", "User satisfaction on battery specifically."] },
      { t: "p", x: "Notice we never opened with 'bigger battery' — the highest-RICE win was software, cheaper and faster than any hardware change. That instinct, prioritise impact-per-effort over the obvious, is exactly what interviewers are scoring." }
    ]
  },
  {
    slug: "playstation-ps5", company: "Playstation", wordmark: "PlayStation", brand: "#003791", readTime: "7 min read",
    title: "Playstation wants to enhance the performance and graphics of the PlayStation 5.",
    body: [
      { t: "p", x: "Performance and graphics are the soul of a console — but 'make it faster and prettier' is a trap unless you anchor on which gamers feel the pain most. Let's structure it, segment by segment." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Sony wants the PS5 to feel faster (less lag, shorter load times) and look better (more realistic, immersive graphics) — a smoother, richer play experience end to end." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Are we optimising processing speed, load times, or responsiveness first?", "Hardware constraints — thermals, power draw, cost ceiling?", "What do gamers weigh most: frame rate, resolution, effects?", "Impact on heat, noise, backward compatibility?", "Which tech/partnerships can we lean on (AI upscaling, faster SSD)?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make the PS5 noticeably faster and more beautiful for the games people actually play — without introducing new heat, cost or compatibility problems." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Casual gamers — want it to 'just work,' fast to start.", "Enthusiasts — care about frame rate, backward compatibility, storage.", "Hardcore/competitive — demand smooth high-FPS, low latency.", "Online multiplayer gamers — need stable connectivity, minimal lag."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Long load times and occasional frame drops.", "Storage fills fast; expansion is fiddly.", "Demanding games stutter as heat and fan noise ramp up."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["AI upscaling + smarter memory/SSD streaming for speed and visuals.", "Adaptive performance/quality modes tuned per game.", "Expandable, better-managed storage.", "Improved cooling for sustained performance.", "A deeper dev toolkit so studios squeeze more from the hardware."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "AI upscaling & graphics pipeline", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Adaptive performance modes", r: 9, i: 7, c: 8, e: 7, score: 72 },
        { name: "Storage management & expansion", r: 7, i: 7, c: 7, e: 6, score: 57 },
        { name: "Cooling upgrade", r: 6, i: 6, c: 7, e: 7, score: 36 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Average load time and sustained frame-rate.", "Crash and thermal-throttle incidents.", "Player satisfaction on performance/graphics; attach rate of demanding titles.", "Storage-related support tickets."] },
      { t: "p", x: "By segmenting gamers we found the biggest wins are software (upscaling, adaptive modes) — high impact, no costly redesign. Anchor on who hurts most and the roadmap sorts itself." }
    ]
  },
  {
    slug: "oyo-jaipur", company: "OYO", wordmark: "OYO", brand: "#ee2e24", readTime: "7 min read",
    title: "OYO's customer satisfaction score has dropped by 15% in Jaipur.",
    body: [
      { t: "p", x: "Interesting one — it's an improvement brief wearing an RCA hat. CSAT fell 15% in one city, so before I brainstorm features I'll quickly find WHERE satisfaction broke, then fix that specifically. Precision over a feature dump." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "OYO aggregates budget hotels; guests book expecting a consistent, clean, hassle-free stay. In Jaipur, CSAT just dropped 15% — something in that promise slipped." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Sudden or gradual, and over what window?", "Which part of CSAT fell — cleanliness, check-in, pricing, booking?", "Any new hotels onboarded in Jaipur recently?", "Is a tourist-season surge straining supply?", "Any app/booking change specific to the region?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Find the specific driver of the Jaipur CSAT drop and lift it back — restoring a consistent, trustworthy stay for the guests who felt let down." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Tourists — peak-season, high expectations, review-heavy.", "Business travellers — need reliable check-in and quiet rooms.", "Budget locals — price-sensitive, value consistency."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Check-in denials or surprises at the property — the classic OYO wound.", "Cleanliness or quality below what the app's photos promised.", "Peak-season overbooking and sudden price shocks."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Tighten property audits + mystery checks across Jaipur.", "Enforce check-in guarantees; penalise denials and help guests instantly.", "Better supply planning for tourist-season demand.", "Photo/quality accuracy so expectations match reality.", "Proactive support with fast refunds when things go wrong."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Enforce check-in guarantees", r: 8, i: 9, c: 8, e: 5, score: 115 },
        { name: "Property audits & quality checks", r: 8, i: 8, c: 7, e: 6, score: 75 },
        { name: "Proactive support + fast refunds", r: 7, i: 6, c: 8, e: 5, score: 67 },
        { name: "Peak-season supply planning", r: 7, i: 7, c: 6, e: 7, score: 42 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Jaipur CSAT/NPS recovery.", "Check-in denial rate and complaint themes.", "Refund/resolution time.", "Repeat-booking rate in the city."] },
      { t: "p", x: "When an 'improve X' question hides a metric drop, do a mini-RCA first — fix the actual broken driver, don't scatter generic features. Diagnose, then improve." }
    ]
  },
  {
    slug: "kindle-display", company: "Kindle", wordmark: "kindle", brand: "#232f3e", readTime: "6 min read",
    title: "Kindle wants to enhance the display quality and reading experience of their device.",
    body: [
      { t: "p", x: "Kindle's whole magic is 'disappear into the book.' So improving display and reading experience means removing every tiny friction between eyes and words. Let's structure it around real reading moments." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Amazon's Kindle is an e-ink reader built for long, comfortable reading. The ask: a sharper display and an all-round better reading experience." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Which contexts — bright sun, bedtime, low light?", "Current pain: contrast, refresh, glare, eye strain?", "Hardware limits — cost, battery, weight?", "How do readers use it — long sessions, commutes?", "What have we tried (front-light, higher PPI)?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make reading on Kindle feel as effortless and easy on the eyes as paper — in any lighting, for hours." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Avid readers — long daily sessions; care about eye comfort.", "Commuters — variable light, quick bursts.", "Older readers — need bigger, crisper text."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Glare and weak contrast in bright light.", "Slow page-refresh and ghosting.", "Eye strain at night; fixed light warmth."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Higher-PPI, higher-contrast e-ink for crisp text.", "Adaptive front-light with auto warm/cool tuning.", "Faster refresh to cut ghosting and lag.", "Richer typography controls (fonts, spacing, size).", "Anti-glare coating for sunlight readability."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Typography controls (size, spacing)", r: 9, i: 6, c: 8, e: 4, score: 108 },
        { name: "Adaptive warm/cool front-light", r: 8, i: 8, c: 8, e: 5, score: 102 },
        { name: "Higher-contrast e-ink panel", r: 8, i: 9, c: 7, e: 7, score: 72 },
        { name: "Faster refresh", r: 7, i: 6, c: 7, e: 6, score: 49 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Reading time per session; retention.", "Eye-comfort satisfaction; returns for display.", "Adoption of light + typography settings."] },
      { t: "p", x: "The biggest wins (typography, adaptive light) are software-cheap and beat a pricey new panel. Always scan for the high-impact, low-effort fixes before reaching for expensive hardware." }
    ]
  },
  {
    slug: "lenovo-battery", company: "Lenovo", wordmark: "Lenovo", brand: "#e2231a", readTime: "6 min read",
    title: "Lenovo wants to extend the battery life of their devices to meet customer demand.",
    body: [
      { t: "p", x: "Battery anxiety is universal — for laptops it decides whether people trust the machine away from a plug. Same discipline as any hardware brief: understand, segment, prioritise by impact-per-effort." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Lenovo wants longer real-world battery life across its laptops/tablets, matching what customers now expect from an all-day machine." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Which lines, and current vs. target hours?", "Biggest drains — display, CPU, background apps?", "Usage: office docs, video, or heavy dev workloads?", "Constraints on weight, thickness, cost?", "Which OS/OEM power features are already in use?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver dependable all-day battery on real workloads — so users stop hunting for chargers mid-afternoon." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Business/travel users — all-day meetings, no plug.", "Students — long campus days.", "Creators/devs — heavy, bursty workloads."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Battery dies mid-day on real use, not spec-sheet use.", "Fast drain on video and bright displays.", "Slow charging and a heavy charger to lug around."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Aggressive software power-management + background-app throttling.", "Adaptive display brightness and refresh rate.", "More efficient components + higher-density battery.", "Fast charging (e.g., 50% in ~30 min).", "Clear battery insights + a one-tap saver mode."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Software power-management", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Adaptive display brightness/refresh", r: 9, i: 7, c: 8, e: 6, score: 84 },
        { name: "Fast charging", r: 7, i: 7, c: 7, e: 6, score: 57 },
        { name: "Higher-density battery", r: 7, i: 8, c: 6, e: 8, score: 42 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Real-world battery hours by workload type.", "Battery-related support tickets and returns.", "Fast-charge and saver-mode adoption."] },
      { t: "p", x: "Same lesson as every hardware brief: the flashy fix (bigger battery) is rarely the top-RICE one. Software and display efficiency usually win on impact-per-effort." }
    ]
  },
  {
    slug: "youtube-creators", company: "YouTube", wordmark: "YouTube", brand: "#ff0000", readTime: "7 min read",
    title: "How will you improve YouTube for creators?",
    body: [
      { t: "p", x: "Improving YouTube 'for creators' means backing the people who make the platform worth visiting. Happy, growing creators → more content → more viewers. So I'll hunt for the pains that make creators churn — especially the emerging middle." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "YouTube lets creators upload, grow an audience and earn. The ask: make the creator journey — upload → analytics → monetisation — meaningfully better." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Which creators — new, mid-tier, or top?", "Biggest friction: discovery, editing, analytics, monetisation?", "Web or mobile-first creation?", "What do creators churn over?", "Where are the monetisation gaps vs. TikTok/Reels?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Help creators — especially the emerging middle — grow their audience and income with less friction, so they keep publishing here instead of leaving for rivals." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["New creators — need discovery and easy tools.", "Mid-tier creators — want growth + stable income (most churn-prone).", "Established creators — need advanced analytics + team tools."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Hard to get discovered early (the cold-start problem).", "Analytics are overwhelming, not actionable.", "Income is volatile and opaque.", "Editing/publishing is clunky on mobile."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Onboarding + early-audience boosts for promising new channels.", "Actionable analytics ('do this next'), not just dashboards.", "Diversified, transparent monetisation (tips, memberships, Shorts payouts).", "In-app mobile editing with templates.", "Collaboration/team roles for bigger channels."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Actionable analytics", r: 9, i: 8, c: 7, e: 6, score: 84 },
        { name: "Diversified monetisation", r: 8, i: 9, c: 6, e: 6, score: 72 },
        { name: "Mobile editing suite", r: 8, i: 6, c: 7, e: 6, score: 56 },
        { name: "Early-audience boosts (new)", r: 8, i: 7, c: 6, e: 7, score: 48 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Creator retention (especially new → mid).", "Uploads per creator; time-to-first-1k-subscribers.", "Creator earnings + income stability.", "Analytics feature adoption."] },
      { t: "p", x: "The unlock was serving the mid-tier creator — the segment most likely to churn to rivals. Pick the segment whose happiness compounds for the whole platform, and your improvements get sharp." }
    ]
  },
  {
    slug: "whatsapp-business", company: "WhatsApp", wordmark: "WhatsApp", brand: "#25D366", readTime: "6 min read",
    title: "How can you improve WhatsApp for business accounts?",
    body: [
      { t: "p", x: "WhatsApp Business is where millions of small merchants meet customers. Improving it means letting a shop owner sell and support effortlessly — without needing a tech team behind them." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "WhatsApp Business lets companies message customers, show catalogs and offer support. The ask: make business accounts more powerful and useful." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Which businesses — solo sellers, SMBs, or enterprises?", "Core jobs: catalog, payments, support, marketing?", "Biggest friction today?", "Regional payment/regulatory constraints?", "Where do they leak to rivals (Instagram, standalone tools)?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Let a small business run discovery → chat → sale → support end-to-end inside WhatsApp — simply and trustably." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Solo sellers — want a simple catalog + chat.", "SMBs — need automation and multiple agents.", "Enterprises — need API, CRM and analytics."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Manual replies don't scale; weak automation.", "Catalog + payments feel bolt-on, not seamless.", "No shared inbox for teams.", "Little insight into what actually converts."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Smart quick-replies + chatbots for FAQs.", "Integrated catalog + in-chat payments/checkout.", "Shared team inbox with roles.", "Business analytics (response time, conversion).", "Verified badges + trust signals."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Automation / quick-replies", r: 9, i: 8, c: 8, e: 6, score: 96 },
        { name: "Business analytics", r: 8, i: 6, c: 8, e: 5, score: 77 },
        { name: "In-chat catalog + payments", r: 8, i: 9, c: 7, e: 7, score: 72 },
        { name: "Shared team inbox", r: 7, i: 7, c: 7, e: 6, score: 57 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Businesses activated; % of messages automated.", "In-chat transactions and conversion rate.", "Response time; business-account retention."] },
      { t: "p", x: "Automation topped RICE because it relieves the universal pain (scale) at low effort. When one fix helps the most users with the biggest pain cheaply, it wins — obvious in hindsight, invisible without structure." }
    ]
  },
  {
    slug: "bigbasket-userbase", company: "BigBasket", wordmark: "bigbasket", brand: "#84c225", readTime: "6 min read",
    title: "How will you improve the userbase of BigBasket?",
    body: [
      { t: "p", x: "'Improve the userbase' is a growth question — so I think acquisition, activation and retention, not just features. Where are we losing potential customers, and how do we win and KEEP more of them?" },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "BigBasket is an online grocery platform. The ask: grow the userbase — more new users, better activation, stronger retention." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Grow acquisition, activation or retention first?", "Which cities/segments underperform?", "Where's the funnel leaking — signup, first order, repeat?", "Which competitors pull users (Blinkit, Zepto, Instamart)?", "Delivery-speed expectations vs. our model?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Grow the active userbase by winning first orders and turning them into loyal, repeat grocery habits." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Busy professionals — convenience-first, want speed.", "Families — bulk, scheduled, price-sensitive.", "New-to-online-grocery — need trust and an easy first order."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Quick-commerce rivals win on delivery speed.", "First-order friction (minimums, slots, signup).", "Weak reasons to return every week.", "Stockouts erode trust."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["First-order incentives + frictionless onboarding.", "An express/faster tier to counter quick-commerce.", "Subscriptions + smart reorder to build habit.", "Reliable inventory + smart substitutions.", "Referrals + local marketing in weak cities."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "First-order incentives (activation)", r: 9, i: 7, c: 8, e: 5, score: 101 },
        { name: "Subscriptions + smart reorder", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Referral program", r: 8, i: 6, c: 7, e: 5, score: 67 },
        { name: "Express delivery tier", r: 7, i: 8, c: 6, e: 8, score: 42 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["New users; signup → first-order conversion.", "Repeat rate; subscription adoption.", "Retention/churn by cohort and city."] },
      { t: "p", x: "For growth briefs, split the funnel — acquisition, activation, retention — and attack the leakiest stage. Here, activation (first order) and retention (habit) beat chasing raw signups." }
    ]
  },
  {
    slug: "udemy-50plus", company: "Udemy", wordmark: "Udemy", brand: "#a435f0", readTime: "6 min read",
    title: "How will you improve Udemy for learners above the age of 50?",
    body: [
      { t: "p", x: "Improving Udemy for over-50 learners is a beautiful empathy exercise. This group is motivated but underserved — small, thoughtful changes can transform their experience. Let's design for them specifically, not 'everyone.'" },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Udemy is an online course marketplace. The ask: make it genuinely better for learners aged 50+, who often face different barriers than younger users." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Their goals — hobbies, a second career, staying sharp?", "Comfort with tech and the current UI?", "Pain: navigation, text size, pacing, support?", "Which devices do they use most?", "Where do they drop off?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make Udemy approachable, confidence-building and finish-able for 50+ learners — so they enroll, stay, and complete." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Second-career switchers — goal-driven, need structure.", "Lifelong hobbyists — curiosity-led, relaxed pace.", "Retirees staying sharp — social, patient, value clarity."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Small text, cluttered UI, unfamiliar jargon.", "Overwhelming choice; hard to pick the right course.", "Fast-paced videos with no easy replay/notes.", "Feeling unsupported when stuck."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["An accessible mode: larger text, simpler layout, clear steps.", "Guided recommendations + beginner tracks.", "Adjustable playback, transcripts, easy note-taking.", "Human-friendly support + peer community.", "Encouraging progress cues and gentle reminders."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Accessible UI mode", r: 8, i: 9, c: 8, e: 5, score: 115 },
        { name: "Guided beginner tracks", r: 8, i: 7, c: 7, e: 5, score: 78 },
        { name: "Playback, transcripts & notes", r: 7, i: 7, c: 8, e: 5, score: 78 },
        { name: "Peer community + support", r: 6, i: 7, c: 6, e: 6, score: 42 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["50+ enrollment, activation and completion rates.", "Course completion vs. baseline.", "Support tickets; accessibility-mode adoption.", "Satisfaction/NPS for the segment."] },
      { t: "p", x: "Designing for one specific, underserved segment (not 'everyone') is where product empathy shines — and accessibility wins usually help every user. Aim narrow, benefit broad." }
    ]
  },
  {
    slug: "linkedin-tagging", company: "LinkedIn", wordmark: "Linkedin", brand: "#0a66c2", readTime: "6 min read",
    title: "How will you improve tagging people on LinkedIn?",
    body: [
      { t: "p", x: "Tagging seems tiny, but it's a core social loop — it drives notifications, reach and connection. Improving it well can lift engagement across LinkedIn. Let's treat this small feature with big-picture care, and mind both the tagger and the tagged." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "On LinkedIn, tagging (@mention) lets users reference people in posts and comments — notifying them and pulling them into the conversation. The ask: improve tagging." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Where's tagging used — posts, comments, both?", "Pains — wrong suggestions, spam-tagging, notification overload?", "Mobile vs. desktop behaviour?", "Any misuse (mass-tagging for reach)?", "How does a tag affect the tagged person's experience?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make tagging accurate, respectful and useful — helping the right people join conversations without spam or notification fatigue." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Content creators — tag to boost reach and give credit.", "Networking professionals — tag colleagues and mentions.", "Recipients — want relevant tags, not spam."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Poor tag suggestions (wrong person, slow search).", "Spam/irrelevant tagging for visibility.", "Notification overload for popular users.", "No control over who can tag you."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Smarter, context-aware suggestions (recent, relevant contacts).", "Tagging controls: approve tags, limit who can tag you.", "Anti-spam limits on mass-tagging.", "Batched, relevant notifications for the tagged.", "A 'why tagged' context line to cut confusion."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Smarter tag suggestions", r: 9, i: 7, c: 8, e: 6, score: 84 },
        { name: "Anti-spam mass-tag limits", r: 7, i: 7, c: 7, e: 5, score: 69 },
        { name: "Notification batching", r: 8, i: 6, c: 7, e: 5, score: 67 },
        { name: "Tagging controls (privacy)", r: 7, i: 8, c: 7, e: 6, score: 65 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Tag accuracy (accepted vs. corrected).", "Spam-tag reports; tag-driven engagement.", "Notification opt-outs; recipient satisfaction."] },
      { t: "p", x: "Even a 'small' feature deserves the full method — because tagging touches the tagger AND the tagged. Improving one side while hurting the other isn't an improvement. Serve both." }
    ]
  },
  {
    slug: "instagram-reels", company: "Instagram", wordmark: "Instagram", brand: "#e1306c", readTime: "6 min read",
    title: "How will you improve Reels on Instagram?",
    body: [
      { t: "p", x: "Reels is Instagram's engine against TikTok — so improving it is high-stakes. I'll look at both sides: creators making Reels and viewers consuming them, because the loop only spins if both win." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Reels are short vertical videos surfaced by an algorithm for discovery and entertainment. The ask: improve Reels." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Improve creation, discovery, or both?", "Biggest pain: editing tools, reach, monetisation, relevance?", "How does Reels compete with TikTok today?", "Creator vs. viewer priorities?", "Where do viewers drop off?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make Reels more rewarding to create and more relevant to watch — so both creators and viewers spend more time in the loop." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Creators — want reach, tools and income.", "Casual viewers — want relevant, fresh content.", "Businesses — want discovery and conversions."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Editing tools lag behind TikTok.", "Discovery feels repetitive or irrelevant.", "Weak creator monetisation.", "Hard to find or save favourite Reels."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Better in-app editing (effects, templates, audio).", "Sharper recommendation tuning + 'not interested' controls.", "Creator monetisation (bonuses, gifts, brand tools).", "Save/collections + resume watching.", "Clear analytics for creators."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Save / collections", r: 8, i: 6, c: 8, e: 4, score: 96 },
        { name: "Recommendation tuning", r: 9, i: 8, c: 7, e: 6, score: 84 },
        { name: "In-app editing upgrade", r: 8, i: 7, c: 7, e: 6, score: 65 },
        { name: "Creator monetisation", r: 7, i: 8, c: 6, e: 7, score: 48 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Reels watch time and completion rate.", "Creation rate; creator retention.", "'Not interested'/skip rate (relevance).", "Save and share rate."] },
      { t: "p", x: "Two-sided features need two-sided thinking — a viewer win (better recommendations) and a creator win (tools, money) both feed the loop. Optimise only one side and the flywheel stalls." }
    ]
  },
  {
    slug: "reynolds-pen", company: "Reynolds", wordmark: "Reynolds", brand: "#0033a0", readTime: "6 min read",
    title: "How will you improve the Reynolds blue ballpoint pen?",
    body: [
      { t: "p", x: "A ₹10 pen! People assume there's nothing to improve — which is exactly why it's a great test of product thinking. Even the humblest product has users, pains and priorities. Let's take it seriously." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "The Reynolds blue ballpoint is an everyday writing pen — cheap, ubiquitous, trusted by students and offices. The ask: improve it." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Improve writing quality, comfort, durability, or cost?", "Main users — students, professionals?", "Known complaints — smudging, ink skips, grip?", "Price sensitivity (it must stay cheap)?", "Any environmental considerations?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make the everyday writing experience smoother, cleaner and more comfortable — without pushing the price out of reach." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Students — long writing sessions, exams, tight budget.", "Office workers — quick notes, reliability.", "Left-handers — the smudging pain especially."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Ink skips/blobs and smudging (worst for left-handers).", "Hand fatigue in long sessions.", "Ink runs out unpredictably; can't see the level.", "Caps get lost; tips dry out."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Smoother quick-dry ink (less smudge and skip).", "An ergonomic grip for long writing.", "A visible ink window / low-ink cue.", "Better tip or retractable design to prevent drying.", "A refillable/eco option."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Quick-dry smoother ink", r: 9, i: 8, c: 8, e: 5, score: 115 },
        { name: "Ergonomic grip", r: 8, i: 7, c: 8, e: 5, score: 90 },
        { name: "Visible ink level", r: 7, i: 6, c: 8, e: 4, score: 84 },
        { name: "Refillable / eco option", r: 6, i: 6, c: 6, e: 6, score: 36 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Writing satisfaction; smudge/skip complaints.", "Repeat purchase and market share.", "Sales of new variants; returns."] },
      { t: "p", x: "The lesson of the humble pen: every product, however cheap, has real users with real pains. Structure works at any scale — and it's a favourite interview curveball, so smile when it comes." }
    ]
  },
  {
    slug: "indigo-postbooking", company: "IndiGo", wordmark: "IndiGo", brand: "#002d72", readTime: "6 min read",
    title: "How will you improve the post-booking services of IndiGo?",
    body: [
      { t: "p", x: "Booking is the easy, happy part — the anxiety lives AFTER, when plans change or something goes wrong. Improving IndiGo's post-booking services means calming that anxiety, end to end." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "IndiGo is India's largest low-cost airline. 'Post-booking services' covers everything after purchase: changes, cancellations, web check-in, seat/meal add-ons, refunds and support." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Which post-booking jobs hurt most — changes, refunds, check-in?", "Self-serve vs. call-centre split?", "Common complaints and refund timelines?", "App vs. web vs. airport?", "Constraints from the low-cost, ancillary-revenue model?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make every post-booking action — change, cancel, check-in, add-on, refund — fast, self-serve and stress-free." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Business flyers — frequent changes, need speed.", "Family/leisure travellers — cancellations, refunds, seats together.", "First-time flyers — need guidance and reassurance."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Changing/cancelling is confusing and costly.", "Refunds are slow and opaque.", "Web check-in glitches; clunky seat/meal add-ons.", "Support is hard to reach exactly when it matters."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Frictionless self-serve change/cancel with clear fees.", "A transparent refund tracker + faster processing.", "Smooth web check-in + easy seat/meal management.", "Proactive disruption alerts + rebooking options.", "In-app support with quick escalation."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Web check-in fixes", r: 9, i: 6, c: 8, e: 5, score: 86 },
        { name: "Self-serve change/cancel", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Refund transparency + speed", r: 8, i: 8, c: 7, e: 6, score: 75 },
        { name: "Proactive disruption handling", r: 7, i: 8, c: 6, e: 6, score: 56 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Self-serve completion rate for changes/cancels.", "Refund time; refund-related tickets.", "Web check-in success; support contact rate.", "Post-booking CSAT/NPS."] },
      { t: "p", x: "The insight: satisfaction is won or lost after the sale, when the customer is stressed. Fixing the anxious moments — refunds, changes, disruptions — buys more loyalty than any shiny booking feature." }
    ]
  },
  {
    slug: "philips-bulb", company: "Philips", wordmark: "PHILIPS", brand: "#0066cc", readTime: "6 min read",
    title: "How can you improve the hardware of a Philips bulb as a product manager?",
    body: [
      { t: "p", x: "A light bulb, hardware-only — no app, no feed. Pure product thinking about a physical object people rarely think about. Let's make it genuinely better where it actually counts." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Philips makes LED bulbs for homes and offices. The ask: improve the hardware itself — light quality, lifespan, efficiency and safety." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Improve lifespan, efficiency, light quality, or cost?", "Use context — home, office, outdoor?", "Complaints — flicker, heat, early failure, colour?", "Price and positioning constraints?", "Sustainability/regulatory targets?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver a bulb that lasts longer, lights better and wastes less energy — reliably and safely — at a sensible price." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Households — want warm, reliable, cheap-to-run light.", "Offices — want consistent, glare-free, durable lighting.", "Value buyers — maximum longevity per rupee."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Premature failure and inconsistent lifespan.", "Flicker and heat build-up.", "Poor colour rendering; harsh light.", "Energy cost over time."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Better thermal design (heat sink) for longer life.", "A higher-quality driver to kill flicker.", "Improved LED chips for colour + efficiency.", "Robust build for voltage fluctuations (crucial in India).", "Clear lifespan/efficiency labelling."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Thermal design upgrade", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Flicker-free driver", r: 8, i: 7, c: 8, e: 6, score: 75 },
        { name: "Voltage-surge robustness", r: 8, i: 8, c: 7, e: 6, score: 75 },
        { name: "Higher-CRI LED chips", r: 7, i: 6, c: 7, e: 6, score: 49 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Actual lifespan (hrs) and failure/return rate.", "Energy efficiency (lumens/watt).", "Flicker complaints; light-quality satisfaction.", "Warranty claims."] },
      { t: "p", x: "Hardware-only briefs force you to reason about physics and reliability, not features. Anchor on the real failure modes (heat, flicker, surges) — that's where 'better' actually lives." }
    ]
  },
  {
    slug: "ola-driver", company: "Ola", wordmark: "Ola", brand: "#1a1712", readTime: "7 min read",
    title: "How can you improve Ola from a driver's perspective?",
    body: [
      { t: "p", x: "Most people improve Ola for riders. Flipping to the DRIVER's perspective is the sharp move — drivers are the supply, and unhappy drivers quietly break the whole marketplace. Let's serve the side everyone forgets." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Ola connects riders with drivers. Here we improve the DRIVER experience — earnings, the app, support, and the dignity of the work." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Full-time vs. part-time drivers?", "Biggest pains — earnings, payouts, cancellations, app?", "How responsive is driver support?", "How do earnings compare to rivals?", "Any safety concerns on the job?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make driving with Ola more rewarding and less frustrating — clearer earnings, fair treatment, a smoother app — so drivers stay and complete rides." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Full-time drivers — depend on stable daily income.", "Part-time drivers — want flexibility, easy on/off.", "New drivers — need onboarding and trust."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Opaque, delayed payouts — the classic wound.", "High commissions eating into earnings.", "Rider cancellations wasting time and fuel.", "Poor support; feeling unheard."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Fast, transparent payouts + clear earnings breakdowns.", "Fairer incentives/bonuses for peak completion.", "Cancellation protection + compensation for wasted trips.", "A driver-first support line with fast resolution.", "Better navigation and fewer bad ride assignments."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Fast, transparent payouts", r: 9, i: 9, c: 8, e: 6, score: 108 },
        { name: "Driver-first support upgrade", r: 7, i: 7, c: 7, e: 5, score: 69 },
        { name: "Cancellation protection", r: 8, i: 7, c: 7, e: 6, score: 65 },
        { name: "Fair peak incentives", r: 8, i: 8, c: 6, e: 6, score: 64 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Driver retention and churn.", "Payout time; earnings-clarity satisfaction.", "Ride-completion rate; cancellation losses.", "Driver CSAT/NPS."] },
      { t: "p", x: "Serving the underserved side of a marketplace (drivers) is where real leverage hides — fix supply's pain and the rider experience improves for free. Always ask: whose perspective is everyone ignoring?" }
    ]
  },
  {
    slug: "netflix-watchparty", company: "Netflix", wordmark: "NETFLIX", brand: "#e50914", readTime: "6 min read",
    title: "How will you improve Netflix Watch Party?",
    body: [
      { t: "p", x: "Watch Party is social viewing — friends watching the same thing together, apart. So I improve the togetherness, not just the video. Both the host and the guests need to feel genuinely connected." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Netflix Watch Party lets people sync playback and chat/react while watching remotely together. The ask: improve it." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Who uses it — long-distance friends, families, couples?", "Focus: sync, chat, voice/video, or deciding what to watch?", "Pains — setup friction, sync drift, awkward chat?", "Device mix (TV, mobile, laptop)?", "Where do sessions drop off?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make watching together remotely feel effortless and genuinely social — easy to start, perfectly synced, fun to react to." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Long-distance friends/couples — want closeness.", "Families across cities — want simple setup.", "Fan groups — want big synced watch-alongs."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Fiddly setup and invites.", "Playback drifts out of sync.", "Chat feels bolted-on; no voice/reactions.", "Hard to agree on what to watch."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["One-tap create + shareable invite links.", "A rock-solid sync engine.", "Live reactions + optional voice/video.", "A group 'what to watch' picker/vote.", "Cross-device (TV + phone as second screen)."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "One-tap setup + invites", r: 9, i: 7, c: 8, e: 5, score: 101 },
        { name: "Reliable sync engine", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Group watch picker", r: 7, i: 6, c: 7, e: 5, score: 59 },
        { name: "Live reactions + voice", r: 7, i: 8, c: 6, e: 6, score: 56 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Watch parties started; invite acceptance rate.", "Session length; sync-error rate.", "Reactions/chat per session; repeat use."] },
      { t: "p", x: "For social features, improve the connection, not just the content. The top win (frictionless setup) is what gets people INTO the shared moment — everything else only matters once they're there." }
    ]
  },
  {
    slug: "ms-authenticator", company: "Authenticator", wordmark: "Authenticator", brand: "#0078d4", readTime: "6 min read",
    title: "How can you improve Microsoft Authenticator?",
    body: [
      { t: "p", x: "Authenticator lives in a tense moment — you're locked out and need in NOW. Improving it means removing friction and fear from that exact moment, without ever weakening security. A delicate balance." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Microsoft Authenticator handles 2FA and passwordless sign-in via push approvals and codes. The ask: improve it." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Consumers, or enterprise/IT-managed users?", "Pains — push delays, account recovery, multi-account clutter?", "Passwordless vs. code usage?", "How good is backup/restore today?", "Which security constraints can't we loosen?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make signing in fast, reliable and reassuring — while keeping security airtight." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Everyday users — want quick, painless approvals.", "People with many accounts — need organisation.", "Enterprise/IT admins — need control + recovery."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Push notifications delayed or missed.", "Account recovery after phone loss is scary and hard.", "Many accounts get cluttered and confusing.", "Setting up on a new device is painful."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Faster, more reliable push delivery + fallback codes.", "Smooth, secure cloud backup + restore.", "Search, folders and clear labels for accounts.", "A guided device-migration flow.", "Clear approve/deny context (which app, where, when)."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Reliable push + fallback codes", r: 9, i: 9, c: 7, e: 6, score: 95 },
        { name: "Secure backup / restore", r: 8, i: 8, c: 7, e: 6, score: 75 },
        { name: "Account organisation", r: 7, i: 6, c: 8, e: 5, score: 67 },
        { name: "Guided device migration", r: 7, i: 7, c: 7, e: 6, score: 57 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Sign-in success rate; push latency.", "Recovery success rate; lockout tickets.", "Time to set up a new device."] },
      { t: "p", x: "Security tools live in high-stress moments. The best improvements shave fear and friction from those moments without touching safety — reliability first, always." }
    ]
  },
  {
    slug: "hotstar-ipl", company: "Hotstar", wordmark: "Hotstar", brand: "#1f80e0", readTime: "6 min read",
    title: "How can you improve the IPL viewing experience on Hotstar?",
    body: [
      { t: "p", x: "IPL on Hotstar is millions of passionate fans, one live match, zero tolerance for buffering. Improving the viewing experience means nailing reliability at record scale AND the fun around the game." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Disney+ Hotstar streams live IPL cricket to a massive concurrent audience. The ask: improve the IPL viewing experience." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Live match, highlights, or both?", "Pains — buffering, latency behind TV, discovery, interactivity?", "Device mix (mobile-heavy in India)?", "Free vs. paid tiers?", "Peak-concurrency constraints?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver a smooth, low-latency, engaging IPL stream that holds up at record concurrency — and makes watching more fun than TV." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Die-hard fans — want flawless live, low latency.", "Casual/social viewers — want highlights and key moments.", "Data-conscious mobile users — want quality control."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Buffering and quality drops at peak.", "Stream lags behind live TV (spoilers from neighbours cheering).", "Data burn with no easy quality toggle.", "A flat, passive experience."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Adaptive streaming + CDN scaling for peak concurrency.", "A low-latency mode to close the TV gap.", "Data-saver quality controls.", "An interactive layer (live stats, polls, watch-along).", "Smart highlights + key-moment jump."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Adaptive streaming + scaling", r: 9, i: 9, c: 7, e: 7, score: 81 },
        { name: "Data-saver quality controls", r: 8, i: 6, c: 8, e: 5, score: 77 },
        { name: "Low-latency mode", r: 8, i: 8, c: 6, e: 7, score: 55 },
        { name: "Interactive layer", r: 7, i: 7, c: 6, e: 6, score: 49 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Buffering ratio + peak concurrency handled.", "Latency vs. broadcast.", "Watch time; interactive-feature engagement.", "Churn during big matches."] },
      { t: "p", x: "At massive scale, reliability IS the feature — buffering at the climax loses fans instantly. Nail the stream first, then layer the fun. Order matters." }
    ]
  },
  {
    slug: "github-newuser", company: "GitHub", wordmark: "GitHub", brand: "#1a1712", readTime: "6 min read",
    title: "How will you improve GitHub for a new user?",
    body: [
      { t: "p", x: "GitHub is intimidating on day one — power everywhere, hand-holding nowhere. Improving it for new users means turning that first-hour overwhelm into a first win. Onboarding is the whole game here." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "GitHub hosts code, version control and collaboration for developers. The ask: improve the experience for a brand-new user." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["New to GitHub, or new to coding entirely?", "First goal — host a project, contribute, or learn?", "Where do newbies get stuck (git, PRs, terminology)?", "Web, desktop, or CLI?", "Where's the onboarding drop-off?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Get a new user from sign-up to a first real success — a repo created or a first contribution — fast and confidently." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Coding students — learning the ropes.", "New professional devs — know code, new to the GitHub flow.", "Non-dev collaborators — docs, design, PM."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Jargon overload (fork, PR, branch, merge).", "Git basics feel like a cliff.", "An empty, confusing first screen.", "Hard to find a first thing to do."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Guided onboarding with a first-repo / first-commit path.", "In-context glossary + tooltips for jargon.", "Beginner-friendly GUI flows (less terminal).", "Curated 'good first issue' discovery for contributing.", "An interactive git tutorial baked in."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Guided first-repo onboarding", r: 9, i: 8, c: 8, e: 5, score: 115 },
        { name: "In-context glossary / tooltips", r: 8, i: 6, c: 8, e: 4, score: 96 },
        { name: "'Good first issue' discovery", r: 7, i: 7, c: 7, e: 5, score: 69 },
        { name: "Interactive git tutorial", r: 7, i: 7, c: 6, e: 6, score: 49 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Sign-up → first-repo / first-commit rate.", "Time to first success.", "New-user 30-day retention.", "Onboarding drop-off points."] },
      { t: "p", x: "For any powerful tool, the new-user job is 'first win, fast.' Cut jargon and guide to one success — retention follows the moment someone thinks 'oh, I can do this.'" }
    ]
  },
  {
    slug: "flipkart-smallbiz", company: "Flipkart", wordmark: "Flipkart", brand: "#2874f0", readTime: "6 min read",
    title: "How will you improve Flipkart for small businesses?",
    body: [
      { t: "p", x: "Flipkart for small businesses is a supply-side improvement — help sellers succeed and the whole marketplace gets richer selection. Let's back the small seller who wears every hat." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Flipkart's marketplace lets sellers list and sell to millions. The ask: improve it for small businesses." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["First-time sellers or established SMBs?", "Pains — onboarding, fees, logistics, visibility, payments?", "Which categories?", "How tech-savvy are these sellers?", "Where do sellers churn?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make it easy and profitable for a small business to onboard, get seen, sell and get paid — so they thrive and stay." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["First-time online sellers — need hand-holding.", "Growing SMBs — need scale tools + visibility.", "Regional/vernacular sellers — need language + local support."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Complex onboarding and catalog listing.", "Confusing fees and slow payments.", "Hard to get visibility against big brands.", "Logistics and returns headaches."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Simplified, vernacular onboarding + bulk-listing tools.", "Transparent fees + faster settlements.", "Fair discovery/ads for small sellers.", "Logistics + returns support and insights.", "Seller education + growth dashboards."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Simplified vernacular onboarding", r: 8, i: 8, c: 8, e: 5, score: 102 },
        { name: "Transparent fees + fast payments", r: 8, i: 8, c: 7, e: 6, score: 75 },
        { name: "Seller growth dashboards", r: 7, i: 6, c: 7, e: 5, score: 59 },
        { name: "Fair discovery for small sellers", r: 7, i: 8, c: 6, e: 7, score: 48 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Seller signup → first-listing → first-sale.", "Active sellers; seller retention.", "Settlement time; seller CSAT.", "GMV from small sellers."] },
      { t: "p", x: "Marketplaces win by nurturing supply. For small sellers, remove the scary first steps — onboarding, fees, payments — and thriving sellers create the selection buyers love." }
    ]
  },
  {
    slug: "facebook-marketplace", company: "Marketplace", wordmark: "Marketplace", brand: "#1877f2", readTime: "6 min read",
    title: "How will you improve Facebook Marketplace?",
    body: [
      { t: "p", x: "Facebook Marketplace is local buying/selling built on trust between strangers. Improving it means reducing friction AND fear — scams and flaky buyers are the real enemies here." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Facebook Marketplace lets people buy and sell locally within their community. The ask: improve it." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Buyers, sellers, or both?", "Pains — scams, spam, no-shows, search, payments?", "Local pickup vs. shipping?", "Categories (furniture, electronics, cars)?", "Where does trust break down?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make local buying and selling safer, faster and more trustworthy — fewer scams, fewer no-shows, easier matches." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Casual sellers — declutter, want a quick sale.", "Bargain buyers — want deals and safety.", "Small resellers — high volume, need tools."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Scams and sketchy buyers/sellers.", "Flaky no-shows and lowballing.", "Weak search/filters; stale listings.", "No safe payment or handoff."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Verified profiles + ratings/reviews for trust.", "Scam detection + easy reporting.", "Better search, filters and freshness signals.", "Optional secure payments + shipping.", "Safe-meetup guidance (verified public spots)."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Better search & filters", r: 9, i: 6, c: 8, e: 5, score: 86 },
        { name: "Verified profiles + ratings", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Scam detection + reporting", r: 8, i: 8, c: 7, e: 6, score: 75 },
        { name: "Secure payments / shipping", r: 7, i: 7, c: 6, e: 7, score: 42 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Successful transactions; time-to-sell.", "Scam/report rate; blocked bad actors.", "Search → message → deal conversion.", "Buyer/seller trust satisfaction."] },
      { t: "p", x: "Peer-to-peer marketplaces run on trust. The biggest wins attack the trust-killers — scams, no-shows — and the discovery friction. Fix fear and findability, and volume follows." }
    ]
  },
  {
    slug: "discord-newusers", company: "Discord", wordmark: "Discord", brand: "#5865f2", readTime: "6 min read",
    title: "How can you improve Discord for new users?",
    body: [
      { t: "p", x: "Discord is magic once you're in a good server — but bewildering on arrival. Improving it for new users means turning 'what is all this?' into 'I found my people' fast." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Discord is community chat via servers, channels, voice and text. The ask: improve the new-user experience." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["New to Discord entirely, or joining a specific server?", "Goal — gaming, community, study, work?", "Pains — overwhelming UI, finding servers, roles/permissions?", "Mobile or desktop first?", "Where do new users bounce?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Get a new user from install to belonging — into a relevant, active server and their first conversation — quickly and without confusion." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Gamers — want to join friends/communities.", "Hobby/community seekers — want to find their niche.", "Study/work groups — want simple, focused spaces."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Overwhelming, unfamiliar interface.", "Hard to discover good servers.", "Confusing channels, roles and permissions.", "Arriving with no one to talk to."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Guided onboarding by interest → relevant server suggestions.", "Better server discovery/search.", "A simplified first-run UI with progressive disclosure.", "Icebreaker/intro channels to spark first chats.", "Gentle explanations of roles and channels."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Guided first-run onboarding", r: 8, i: 8, c: 8, e: 5, score: 102 },
        { name: "Interest-based server discovery", r: 9, i: 8, c: 7, e: 6, score: 84 },
        { name: "Icebreaker / intro prompts", r: 7, i: 7, c: 7, e: 5, score: 69 },
        { name: "Simplified progressive UI", r: 8, i: 6, c: 7, e: 6, score: 56 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Install → join-a-server → first-message rate.", "Time to first conversation.", "New-user 7/30-day retention.", "Servers joined per new user."] },
      { t: "p", x: "Community products live or die on 'did I find my people?' Guide new users to a relevant, active place and one first message — belonging is the activation moment." }
    ]
  },
  {
    slug: "oneplus-camera", company: "OnePlus", wordmark: "OnePlus", brand: "#eb0029", readTime: "6 min read",
    title: "OnePlus wants to improve the camera performance of the OnePlus 12.",
    body: [
      { t: "p", x: "Phone cameras are where flagships are won or lost today. Improving the OnePlus 12 camera means both the image quality (hardware + software) AND the shooting experience. Let's balance both." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "The OnePlus 12 is a flagship phone; the ask is to improve its camera — image quality and the capture experience." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Which conditions — low light, portrait, zoom, video?", "Hardware (sensor/lens) or software (processing) focus?", "Complaints vs. rivals (Samsung, Apple, Pixel)?", "Casual shooters vs. enthusiasts?", "Constraints — cost, thermals, app speed?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver consistently great photos and video across conditions, with a fast, delightful camera app that rivals the best flagships." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Casual shooters — want point-and-shoot brilliance.", "Content creators — want video + control.", "Photography enthusiasts — want pro modes + detail."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Inconsistent low-light and night shots.", "Over-processing / unnatural colours.", "Slow shutter or app lag; missed moments.", "Video stabilisation and quality gaps."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Better computational photography (night, HDR) tuning.", "Natural, consistent colour science.", "A faster capture pipeline (less shutter lag).", "Improved video stabilisation + modes.", "Sensor/lens upgrades where they matter (longer-term)."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Computational photography tuning", r: 9, i: 9, c: 7, e: 6, score: 95 },
        { name: "Consistent colour science", r: 8, i: 8, c: 7, e: 5, score: 90 },
        { name: "Faster capture pipeline", r: 8, i: 7, c: 7, e: 5, score: 78 },
        { name: "Video stabilisation upgrade", r: 7, i: 7, c: 6, e: 6, score: 49 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Photo/video quality ratings + blind comparisons.", "Camera-app open → capture time.", "Camera-related reviews vs. rivals.", "Camera usage + share rate."] },
      { t: "p", x: "In flagship cameras, software (computational photography, colour) often beats new glass on impact-per-effort. Tune the pipeline before you re-engineer the sensor." }
    ]
  },
  {
    slug: "spotify-ads", company: "Spotify", wordmark: "Spotify", brand: "#1db954", readTime: "6 min read",
    title: "How will you improve ads on Spotify?",
    body: [
      { t: "p", x: "Ads on Spotify are a tightrope — they fund free music but annoy free users, and they must not scare people off (or away from upgrading). Improving ads means making them less painful AND more effective. Two masters to serve." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Spotify's free tier is ad-supported — audio and display ads between songs. The ask: improve ads." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Improve the ad experience, ad effectiveness, or upgrade conversion?", "Pains — repetition, irrelevance, volume/interruption?", "Free vs. Premium funnel goals?", "Audio vs. display ads?", "Advertiser needs too?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make ads less annoying and more relevant for listeners, more effective for advertisers, and a gentle nudge toward Premium — without driving free users away." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Free listeners — tolerate ads for free music.", "Potential upgraders — on the fence about Premium.", "Advertisers — want reach + performance."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["The same ads on repeat (fatigue).", "Irrelevant ads.", "Jarring volume and interruptions.", "No sense of control."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Frequency capping + variety to kill repetition.", "Better targeting/relevance (mood, genre).", "Rewarded ads (watch one → an ad-free block).", "Smoother volume + fewer mid-song breaks.", "Clear, well-timed Premium nudges."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Frequency capping + variety", r: 9, i: 8, c: 8, e: 5, score: 115 },
        { name: "Smart Premium nudges", r: 8, i: 7, c: 6, e: 5, score: 67 },
        { name: "Relevance / targeting", r: 8, i: 7, c: 7, e: 6, score: 65 },
        { name: "Rewarded ads", r: 7, i: 7, c: 6, e: 6, score: 49 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Ad-driven churn / skips to Premium.", "Ad relevance + completion; repetition complaints.", "Free → Premium conversion.", "Advertiser performance (CTR, recall)."] },
      { t: "p", x: "Ad experiences serve two customers — listener and advertiser — plus the upgrade funnel. The top win (frequency capping) helps all three by killing the fatigue everyone hates." }
    ]
  },
  {
    slug: "swiggy-delivery", company: "Swiggy", wordmark: "Swiggy", brand: "#fc8019", readTime: "6 min read",
    title: "How can we improve Swiggy's delivery services?",
    body: [
      { t: "p", x: "Swiggy's delivery is the moment of truth — hot food, on time, or a lost customer. Improving delivery means speed and reliability for eaters AND a fair deal for the riders who make it happen." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Swiggy delivers food from restaurants to customers via delivery partners. The ask: improve delivery services." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Focus: speed, reliability, cost, or rider experience?", "Pains — late deliveries, cold food, wrong orders, tracking?", "Peak-time vs. normal performance?", "Rider-side pains too?", "City-density differences?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver food faster, hotter and more reliably for customers — while keeping riders efficient and fairly treated." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Hungry customers — want fast, hot, correct orders.", "Delivery partners — want efficient routes + fair pay.", "Restaurants — want smooth handoffs."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Late deliveries and cold food at peak.", "Inaccurate ETAs and tracking.", "Batching that hurts freshness and time.", "Rider inefficiency and unfair loads."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Smarter routing + demand-based rider allocation.", "Accurate, live ETAs and tracking.", "Food-safe packaging + smarter batching rules.", "Rider tools: efficient routes, fair incentives.", "Restaurant prep-time syncing to cut idle waits."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Smarter routing / allocation", r: 9, i: 9, c: 7, e: 6, score: 95 },
        { name: "Accurate live ETAs", r: 9, i: 6, c: 8, e: 5, score: 86 },
        { name: "Prep-time syncing", r: 7, i: 7, c: 7, e: 6, score: 57 },
        { name: "Rider efficiency tools", r: 7, i: 8, c: 6, e: 6, score: 56 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Average delivery time + on-time rate.", "Food-temperature/quality complaints.", "ETA accuracy; order-accuracy rate.", "Rider earnings/efficiency; customer CSAT."] },
      { t: "p", x: "Delivery quality is a two-sided win: efficient routing helps customers (faster) AND riders (more trips). Look for fixes that serve both sides of the marketplace at once." }
    ]
  },
  {
    slug: "godrej-nightvision", company: "Godrej", wordmark: "Godrej", brand: "#0a7d3e", readTime: "6 min read",
    title: "Godrej home security cameras want to enhance night-vision capabilities.",
    body: [
      { t: "p", x: "A security camera that fails at night fails at its one job — most break-ins happen in the dark. Improving Godrej's night vision is about trust exactly when it matters most." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Godrej home security cameras monitor homes; the ask is to enhance night vision — clear footage in low or no light." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Indoor, outdoor, or both?", "Current night range/clarity vs. target?", "Pains — grainy IR, no colour, blind spots, glare?", "Constraints — cost, power, storage/bandwidth?", "Connectivity + storage setup?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver clear, reliable night footage — enough to actually identify people and events in the dark — at a sensible price." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Homeowners — want peace of mind + clear alerts.", "Small shops — want deterrence + usable evidence.", "Renters — want easy, affordable setup."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Grainy, low-detail IR footage.", "No colour at night (hard to identify anyone).", "IR glare/wash-out up close.", "Missed events and poor motion detection at night."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Better IR sensors + optics for range and clarity.", "Colour night vision (low-light sensor + smart lighting).", "AI denoising + image enhancement.", "Smarter night motion detection + alerts.", "Glare control + adjustable IR zones."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "AI denoising / enhancement", r: 8, i: 8, c: 7, e: 5, score: 90 },
        { name: "Smarter night motion detection", r: 8, i: 7, c: 7, e: 5, score: 78 },
        { name: "Colour night vision", r: 8, i: 9, c: 6, e: 7, score: 62 },
        { name: "Improved IR optics", r: 7, i: 8, c: 7, e: 7, score: 56 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Night footage clarity / identification rate.", "False-alarm rate at night.", "Event-capture rate; return/complaint rate.", "Satisfaction on night vision."] },
      { t: "p", x: "When a product has one critical job (see in the dark), improvements must serve that job first. And note — AI enhancement (software) often beats pricier optics on impact-per-effort." }
    ]
  },
  {
    slug: "fitbit-heartrate", company: "Fitbit", wordmark: "fitbit", brand: "#00b0b9", readTime: "6 min read",
    title: "Fitbit wants to improve the accuracy of their heart-rate monitoring.",
    body: [
      { t: "p", x: "For a health wearable, accuracy is trust — a wrong heart rate isn't just annoying, it's a broken promise. Improving Fitbit's HR accuracy means getting the science right across real bodies and activities." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Fitbit tracks heart rate optically (PPG) at the wrist for fitness and health. The ask: improve heart-rate accuracy." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Rest, exercise, or specific activities (HIIT, cycling)?", "Accuracy gaps by skin tone, wrist size, motion?", "Hardware (sensor) or algorithm focus?", "How is accuracy validated today?", "Constraints — battery, cost, comfort?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver heart-rate readings that stay accurate across activities, body types and skin tones — so users trust the data." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Fitness users — need accuracy during hard workouts.", "Health-conscious users — rely on resting-HR trends.", "Medical-adjacent users — track for conditions."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Inaccuracy during high-motion exercise.", "Bias across skin tones (a PPG limitation).", "Loose-fit errors; cold-weather drops.", "Lag catching rapid HR changes."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["A better sensor array (multi-wavelength, more LEDs).", "Improved motion-artifact-cancelling algorithms.", "Skin-tone-robust signal processing.", "Fit detection + placement guidance.", "Sensor fusion (accelerometer) for context."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Fit detection + guidance", r: 9, i: 6, c: 8, e: 4, score: 108 },
        { name: "Motion-artifact algorithms", r: 8, i: 9, c: 7, e: 5, score: 101 },
        { name: "Skin-tone-robust processing", r: 8, i: 8, c: 6, e: 6, score: 64 },
        { name: "Multi-wavelength sensor", r: 7, i: 8, c: 6, e: 8, score: 42 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["HR accuracy vs. chest-strap/ECG reference (by activity + skin tone).", "Error rate during high-motion.", "Fit-error alerts; user trust in the data.", "Health-feature engagement."] },
      { t: "p", x: "For health tech, accuracy IS the product and it must hold for EVERYONE — testing across skin tones and activities isn't optional. The cheap win here (fit guidance) removes a huge error source instantly." }
    ]
  },
  {
    slug: "amazon-alexa", company: "Amazon Alexa", wordmark: "alexa", brand: "#00caff", readTime: "6 min read",
    title: "Amazon Alexa wants to deliver superior sound quality to compete with market leaders.",
    body: [
      { t: "p", x: "Alexa is smart, but to compete with premium speakers it needs to sound as good as it thinks. Improving Alexa's sound quality is about hardware acoustics AND smart software tuning. Let's structure it." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Amazon's Alexa (Echo) is a voice assistant + smart speaker. The ask: deliver superior sound to compete with audio leaders (Sonos, Apple, Bose)." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Which Echo tier(s)?", "Music, calls, or voice responses — which matters most?", "Pains — thin bass, muddy mids, distortion at volume?", "Hardware or software (tuning) focus?", "Price/positioning constraints?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Make Alexa speakers sound rich and room-filling enough to win music lovers — not just answer questions — at their price point." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Music lovers — want real audio quality.", "Smart-home users — want good sound + assistant.", "Multi-room users — want synced, balanced audio."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Thin bass / muddy mids on smaller Echos.", "Distortion at high volume.", "Poor room adaptation.", "Multi-room sync and balance issues."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Better drivers/acoustic design per tier.", "Adaptive room-tuning (auto-EQ to the space).", "Smarter DSP for clarity + distortion control.", "Improved multi-room sync.", "Personalised EQ presets."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Adaptive room-tuning (auto-EQ)", r: 8, i: 8, c: 7, e: 5, score: 90 },
        { name: "Smarter DSP / clarity", r: 8, i: 7, c: 7, e: 5, score: 78 },
        { name: "Better drivers / acoustics", r: 7, i: 9, c: 7, e: 8, score: 55 },
        { name: "Multi-room sync", r: 6, i: 7, c: 7, e: 6, score: 49 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Sound-quality ratings + blind A/B vs. rivals.", "Music playback time per device.", "Distortion/complaint reports.", "Audio-tier upgrade/attach rate."] },
      { t: "p", x: "To move a smart speaker upmarket, software acoustics (room-tuning, DSP) deliver big perceived gains cheaply — tune before you re-engineer the drivers." }
    ]
  },
  {
    slug: "boat-anc", company: "boAt", wordmark: "boAt", brand: "#e11b22", readTime: "6 min read",
    title: "boAt wants to improve the performance of their active noise cancellation.",
    body: [
      { t: "p", x: "Active noise cancellation is boAt's ticket to the premium tier — but ANC is hard, and bad ANC (pressure, hiss, weak cancellation) is worse than none. Improving it is a precise engineering + tuning challenge." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "boAt makes audio wearables; the ask is to improve the active noise cancellation on their earbuds/headphones." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Earbuds, over-ear, or both?", "Pains — weak cancellation, hiss, ear pressure, wind?", "Which environments (commute, office, flights)?", "Hardware (mics) or software (algorithm) focus?", "Price constraints (boAt is value-positioned)?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver noticeably stronger, more comfortable noise cancellation across everyday environments — without hiss or pressure — at boAt's accessible price." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Commuters — want to kill traffic/transit noise.", "WFH/office users — want focus.", "Travellers — want flight/train quiet."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Weak or inconsistent cancellation.", "Audible hiss or ear pressure.", "Struggles with wind and sudden noises.", "ANC drains battery fast."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["A better mic array + placement (feed-forward/back ANC).", "Improved adaptive ANC algorithms.", "Comfort tuning to reduce pressure and hiss.", "A wind-noise reduction mode.", "Power-efficient ANC processing."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Adaptive ANC algorithm", r: 8, i: 9, c: 7, e: 6, score: 84 },
        { name: "Comfort / hiss tuning", r: 8, i: 7, c: 7, e: 5, score: 78 },
        { name: "Wind-noise mode", r: 7, i: 6, c: 7, e: 5, score: 59 },
        { name: "Better mic array", r: 7, i: 8, c: 6, e: 7, score: 48 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Measured noise-reduction (dB) by frequency/environment.", "Hiss/pressure complaints.", "ANC battery drain.", "ANC satisfaction vs. rivals."] },
      { t: "p", x: "ANC is unforgiving — a weak or hissy implementation hurts the brand. The adaptive-algorithm win (software) lifts real-world performance most for the least cost. Tune smart." }
    ]
  },
  {
    slug: "stratasys-printer", company: "Stratasys", wordmark: "Stratasys", brand: "#e4002b", readTime: "6 min read",
    title: "A 3D printer manufacturer, Stratasys, wants to improve print quality and precision.",
    body: [
      { t: "p", x: "For a professional 3D printer, print quality and precision ARE the product — a failed or rough print wastes hours and material. Improving Stratasys means nailing reliability and fidelity for demanding users." },
      { t: "step", label: "STEP 1", x: "Describe the product" },
      { t: "p", x: "Stratasys makes professional/industrial 3D printers. The ask: improve print quality and precision." },
      { t: "step", label: "STEP 2", x: "Clarifying questions I'd ask" },
      { t: "ul", items: ["Which printer line and materials?", "Pains — layer lines, warping, failed prints, tolerance?", "Users — prototyping, manufacturing, medical?", "Hardware, firmware, or slicing-software focus?", "Speed vs. quality trade-offs acceptable?"] },
      { t: "step", label: "STEP 3", x: "Define the goal" },
      { t: "callout", label: "The goal", x: "Deliver consistently high-fidelity, dimensionally accurate prints with fewer failures — so professionals trust it for production, not just prototypes." },
      { t: "step", label: "STEP 4", x: "Who am I solving for?" },
      { t: "ul", items: ["Prototyping engineers — want fast, accurate iterations.", "Manufacturers — want repeatable, tight tolerances.", "Medical/dental — want precision + material reliability."] },
      { t: "step", label: "STEP 5", x: "Their pain points" },
      { t: "ul", items: ["Visible layer lines / rough surfaces.", "Warping and failed prints wasting time and material.", "Dimensional inaccuracy vs. CAD.", "Inconsistent results between runs."] },
      { t: "step", label: "STEP 6", x: "Solutions" },
      { t: "ul", items: ["Finer resolution (better motion control, smaller layers).", "Improved thermal management to cut warping.", "Smarter slicing software + auto-calibration.", "Closed-loop sensors for in-print correction.", "Material profiles tuned for accuracy."] },
      { t: "step", label: "STEP 7", x: "Prioritise with RICE" },
      { t: "rice", label: "Reach × Impact × Confidence ÷ Effort", rows: [
        { name: "Smarter slicing + auto-calibration", r: 8, i: 8, c: 7, e: 5, score: 90 },
        { name: "Thermal management (warp control)", r: 8, i: 8, c: 7, e: 6, score: 75 },
        { name: "Closed-loop in-print correction", r: 7, i: 9, c: 6, e: 7, score: 54 },
        { name: "Finer-resolution hardware", r: 7, i: 8, c: 6, e: 8, score: 42 }
      ] },
      { t: "step", label: "STEP 8", x: "Metrics to watch" },
      { t: "ul", items: ["Surface finish + dimensional accuracy vs. CAD.", "Print-failure / scrap rate.", "Run-to-run consistency.", "Material waste; user satisfaction."] },
      { t: "p", x: "For pro hardware, reliability and fidelity beat flashy specs — a printer people trust not to fail is worth more than a faster one that ruins prints. Software (slicing, calibration) is the cheapest path to big quality gains." }
    ]
  }
];
