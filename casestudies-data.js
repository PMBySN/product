// Root Cause Analysis case studies — full, detailed walkthroughs in Shubham's voice.
// Single source of truth for the RCA grid + the CaseStudy page (admin-editable later).
// Block types: p | step{label,x} | sub{x} | note{x} | callout{label,x} | ul{items} | qa{items:[{q,a}]} | journey{label,steps}
window.RCA_CASES = [
  {
    slug: "zomato", company: "Zomato", wordmark: "zomato", brand: "#ef4f5f", readTime: "11 min read",
    title: "Zomato's average restaurant rating dropped 10% in Pune",
    body: [
      { t: "p", x: "Okay. A 10% rating drop in one city. Read that headline and your stomach drops — feels like the whole product is on fire. It isn't. A rating is just a feeling turned into a number, and feelings have causes. Our job is to calmly walk backwards from the number to the cause. Grab a chai — let's do this properly, together." },
      { t: "step", label: "STEP 1", x: "Clarify the problem" },
      { t: "p", x: "Before I touch a single dashboard, I make sure I even understand the number. Ninety percent of a great RCA is asking boringly precise questions up front. Watch how each answer quietly shrinks the problem." },
      { t: "qa", items: [
        { q: "Let me play it back: if we average every restaurant rating visible on Zomato in Pune, that average is down 10%?", a: "Yes." },
        { q: "How is that average built — mean of all visible restaurant ratings, and each restaurant's rating is the mean of every customer rating since it was onboarded?", a: "Exactly that." },
        { q: "Has the way we calculate it changed recently?", a: "No changes to the method." },
        { q: "Is this happening in other cities, or only Pune?", a: "Only Pune." },
        { q: "Sudden or gradual — and 10% compared to what window?", a: "Sudden. Past month vs. the month before." },
        { q: "Is every user segment dropping, or a specific one?", a: "Mostly users without Zomato Gold." },
        { q: "All restaurant types, or some?", a: "All types." },
        { q: "Dine-in, delivery, or both?", a: "Delivery specifically." },
        { q: "Any recent change to the rating system itself?", a: "None." }
      ] },
      { t: "note", x: "Feel that? We walked in with 'Zomato is failing' and we're already standing on 'non-Gold delivery users in Pune, this month, gave lower ratings.' Same data, a tenth the size. That's the entire magic of clarifying — you shrink a monster into something you can actually chase." },
      { t: "step", label: "STEP 2", x: "Identify possible causes" },
      { t: "p", x: "Now I lay out every suspect — external and internal — then use what I just learned to knock them down fast." },
      { t: "sub", x: "External factors" },
      { t: "qa", items: [
        { q: "New competition in Pune pulling people away?", a: "Some — a new local tiffin delivery app has appeared." },
        { q: "Any big event hurting restaurant service — a festival, a disaster?", a: "Nothing like that." },
        { q: "Negative press or a sentiment shift?", a: "Nothing on our radar." },
        { q: "Regulatory changes affecting restaurants?", a: "None recent." },
        { q: "Seasonal swing or economic downturn?", a: "Nothing significant." }
      ] },
      { t: "sub", x: "Internal factors — product" },
      { t: "qa", items: [
        { q: "Any recent app updates or feature changes?", a: "Minor updates, nothing that should touch ratings." },
        { q: "Did we add a batch of new low-rated restaurants in Pune?", a: "No real change to the restaurant list." },
        { q: "Any change to the rating flow that makes reviewing harder?", a: "No." },
        { q: "Did we pull back any popular discounts or offers?", a: "Yes — a delivery discount code that worked across major Pune restaurants was retracted for non-Gold users." }
      ] },
      { t: "p", x: "There it is — a little flare in the dark. Before I chase it, let me confirm the review flow itself is untouched, so I'm not hunting a UX ghost." },
      { t: "journey", label: "User journey — rating a delivery order", steps: ["Order delivered", "Prompt to rate (or app → profile → order history)", "Pick restaurant → 'Review order'", "Rate out of 5 stars", "Add review + photo (optional)", "Submit"] },
      { t: "qa", items: [
        { q: "That flow's unchanged?", a: "Correct, unchanged." }
      ] },
      { t: "sub", x: "Internal factors — tech & backend" },
      { t: "qa", items: [
        { q: "Any bugs or a spike in support tickets?", a: "Nothing significant." },
        { q: "Can the drop be traced to a device, OS, or app version?", a: "No, it's consistent everywhere." },
        { q: "Are all UI elements on the review screen rendering fine?", a: "Yes." },
        { q: "Any backend changes — migrations, database updates?", a: "None." }
      ] },
      { t: "sub", x: "Operational" },
      { t: "qa", items: [
        { q: "Order-volume spike, or fewer delivery riders in Pune?", a: "No operational change." },
        { q: "Any decline in customer-service quality?", a: "No." },
        { q: "Missed delivery-time or availability expectations?", a: "Nothing reported." },
        { q: "So — could pulling the discount for non-Gold users, plus the new competitor, have soured how people rate?", a: "Very possible. Offers strongly shape perceived value and satisfaction." }
      ] },
      { t: "callout", label: "The root cause", x: "We took away a discount people loved, and a cheaper rival appeared next door. 'Value for money' collapsed for non-Gold delivery users — and a frustrated wallet leaves a frustrated rating, even when the food was perfectly fine." },
      { t: "step", label: "STEP 3", x: "Analyze the causes" },
      { t: "sub", x: "Retraction of the discount code" },
      { t: "ul", items: ["Data: compare code usage, order frequency and average ratings for non-Gold users before vs. after the retraction.", "Feedback: read complaints tied to the lost discount; look for the overlap with negative reviews.", "Trend: check whether the ratings dip lines up in time with the day the code died."] },
      { t: "sub", x: "Arrival of the new competitor" },
      { t: "ul", items: ["Market: size the tiffin app's share in Pune and study what it offers that we don't.", "Satisfaction: compare CSAT and ratings between us and them.", "Promos: map their offers against our now-thinner ones."] },
      { t: "step", label: "STEP 4", x: "Plan & implement solutions" },
      { t: "ul", items: ["Reintroduce an incentive for non-Gold users — the same code, or a smarter tiered offer — and communicate it loudly to rebuild trust.", "Run a sharp competitive analysis and targeted campaigns highlighting what makes us better.", "Partner with restaurants to hold service standards high, so the experience backs up the marketing."] },
      { t: "step", label: "STEP 5", x: "Monitor & measure" },
      { t: "p", x: "A fix you don't measure is just a wish. Here's my dashboard:" },
      { t: "ul", items: ["Redemption rate — how many issued codes actually get used (is the offer appealing and reachable?).", "Order lift — orders before vs. after the offer returns.", "Conversion rate — of users who see the offer, how many buy.", "CSAT surveys — a regular pulse on satisfaction.", "Competitive benchmarking — keep score against the tiffin app and adjust."] },
      { t: "p", x: "And breathe. What looked like a five-alarm fire was one retracted coupon and one hungry competitor. You just reasoned your way there, step by step — and that's exactly the muscle interviewers are testing for." }
    ]
  },
  {
    slug: "urban-company", company: "Urban Company", wordmark: "Urban Co.", brand: "#1f1f1f", readTime: "11 min read",
    title: "Urban Company's service completion rate fell 18% in Bengaluru",
    body: [
      { t: "p", x: "Service completion down 18%, and it's bleeding across regions. Big, ugly, board-meeting-grade number. But 'completion rate' is just jobs-finished over jobs-booked — so somewhere, booked jobs are quietly dying. Let's find the exact spot they die." },
      { t: "step", label: "STEP 1", x: "Clarify the problem" },
      { t: "p", x: "First, I make the fuzzy number painfully specific. Every answer here is a door closing on a wrong path." },
      { t: "qa", items: [
        { q: "Playing it back: overall service completion is down 18%?", a: "Yes." },
        { q: "Across both website and app orders?", a: "Both platforms." },
        { q: "You also sell brand products like home-integration systems — are those counted here?", a: "No, only services count." },
        { q: "Completion = services completed ÷ services booked?", a: "Yes." },
        { q: "And a cancelled service sits in the denominator but not the numerator?", a: "Correct — booked but not successfully completed." },
        { q: "Any change to how we calculate it?", a: "No." },
        { q: "Is the analytics tool itself healthy — no measurement glitch?", a: "All fine there." },
        { q: "One region or many?", a: "Multiple regions." },
        { q: "Sudden or gradual, and over what window?", a: "Sudden — past month vs. previous." },
        { q: "Every user segment, or specific ones?", a: "Consistent across all segments." },
        { q: "All service types, or specific ones — beauty, cleaning, repairs?", a: "It's tied to repair services." }
      ] },
      { t: "note", x: "Big win already. It's not 'Urban Company is failing everywhere' — it's 'repair jobs get booked and then don't complete, this month.' Now I know exactly which door to open first." },
      { t: "step", label: "STEP 2", x: "Identify possible causes" },
      { t: "p", x: "Because the trail already points at repairs, I'll start internal, then sweep operational and external. I always tell the interviewer my plan first — structure is half the score." },
      { t: "sub", x: "Internal factors — product" },
      { t: "qa", items: [
        { q: "Any recent app updates or feature changes?", a: "Minor updates, nothing that should hit completion." },
        { q: "Let me confirm the order flow is unchanged.", a: "Go ahead — yes, that's correct." }
      ] },
      { t: "journey", label: "User journey — booking a service", steps: ["Add address", "Search / select service", "Add to cart", "Cart → Continue", "Login / create account", "Pick time slot", "Confirm & pay"] },
      { t: "qa", items: [
        { q: "No 'continue as guest' — account creation is mandatory, and that's been true since inception?", a: "Yes, unchanged." }
      ] },
      { t: "sub", x: "Internal factors — tech & backend" },
      { t: "qa", items: [
        { q: "Bugs or support tickets spiking?", a: "Nothing significant." },
        { q: "Traceable to a version, device or OS?", a: "No, consistent everywhere." },
        { q: "Any backend changes — migrations, DB updates?", a: "None." }
      ] },
      { t: "sub", x: "Operational" },
      { t: "qa", items: [
        { q: "Order-volume spike, or fewer professionals over the past month?", a: "No operational change reported." },
        { q: "Any drop in customer-service quality?", a: "No." },
        { q: "Any failures on delivery times, availability, or quality?", a: "Yes — many services cancelled a day after booking." },
        { q: "Urban Company guarantees the booked slot. At what stage were these cancelled?", a: "Mostly 2-3 hours before the scheduled time." },
        { q: "Were these the repair bookings — kitchen and electrical appliances?", a: "Yes, exactly those." },
        { q: "Could a shortage of electricians be causing scheduling delays that push jobs to cancellation?", a: "Yes — fewer service pros this month led to delays and hurt completion." },
        { q: "And are our electricians trained for the newest gadgets?", a: "We have training plans they finish before assignment, but with new gadgets appearing constantly, some skill gaps are likely." }
      ] },
      { t: "callout", label: "The root cause", x: "Too few trained repair pros for the demand. Fewer electricians → scheduling jams → jobs cancelled hours before the slot. The booking funnel is perfectly fine; the supply of skilled hands is not." },
      { t: "step", label: "STEP 3", x: "Analyze the causes" },
      { t: "sub", x: "Shortage of experts" },
      { t: "ul", items: ["Data: compare available experts before vs. after the drop; map scheduling delays to delayed and cancelled jobs.", "Feedback: mine complaints about delays for the correlation with lower completion.", "Service time: measure actual service time vs. the booked slot, and find the days/times delays peak."] },
      { t: "step", label: "STEP 4", x: "Plan & implement solutions" },
      { t: "sub", x: "Fix the supply" },
      { t: "ul", items: ["Recruit harder and improve training; keep skills current with new appliances.", "Raise incentives to retain the high-quality pros we already have."] },
      { t: "sub", x: "Fix tooling & operations" },
      { t: "ul", items: ["Work with engineering on any app/system friction; keep maintenance regular.", "Streamline resource allocation and logistics; sharpen tracking and monitoring.", "Notify users proactively about status, so a delay doesn't quietly become a cancellation."] },
      { t: "step", label: "STEP 5", x: "Monitor & measure" },
      { t: "ul", items: ["Repair-job completion rate, specifically.", "Last-minute cancellation rate.", "Actual service time vs. booked slot.", "Provider CSAT and retention."] },
      { t: "p", x: "Notice we never blamed the app or the users — the data walked us straight to a capacity problem. That's the discipline: follow the slice that's actually bleeding, and the fix names itself." }
    ]
  },
  {
    slug: "upgrad", company: "UpGrad", wordmark: "upGrad", brand: "#d0021b", readTime: "7 min read",
    title: "UpGrad's certification completion rate decreased 18% in Chennai",
    body: [
      { t: "p", x: "Certification completion down 18% in Chennai. No neat interview transcript this time — just a real, open problem. Which honestly is where product thinking earns its keep. Here's the systematic path I'd walk, and I want you to feel every turn of it." },
      { t: "step", label: "STEP 1", x: "Clarify & validate the problem" },
      { t: "p", x: "Before solutioning, I validate the problem and get specific. Two questions matter most:" },
      { t: "ul", items: ["Sudden or gradual? A cliff smells like a technical or content change on a specific date; a slow slide smells like fit or rising competition.", "Only Chennai, or a pattern hiding in other cities too?"] },
      { t: "step", label: "STEP 2", x: "Segment the data" },
      { t: "p", x: "Averages lie; segments confess. I'd slice completion by:" },
      { t: "ul", items: ["Course / program.", "Age group and gender.", "Job level — students vs. working professionals."] },
      { t: "note", x: "If one segment is dragging the whole average down, that segment IS the lead. Don't fix the average — fix the pocket." },
      { t: "step", label: "STEP 3", x: "Identify internal factors" },
      { t: "ul", items: ["Course structure or content changes around the drop's start date.", "Instructor changes.", "Platform UX/UI changes.", "Technical pain — app crashes, slow or buffering video streaming.", "A check-in with customer service for a rise in Chennai-specific complaints."] },
      { t: "step", label: "STEP 4", x: "Identify external factors" },
      { t: "ul", items: ["A competitor launching a similar certification.", "Shifting industry demand for certain certifications.", "Local disruptions — prolonged internet outages, natural events."] },
      { t: "step", label: "STEP 5", x: "Check related metrics" },
      { t: "ul", items: ["New signups.", "Mid-course drop-outs, and where exactly they happen.", "Engagement and feedback scores."] },
      { t: "p", x: "These tell me whether people never start, quit midway, or finish unhappy — three completely different problems with three different fixes." },
      { t: "step", label: "STEP 6", x: "Hypothesize & experiment" },
      { t: "callout", label: "My lead hypothesis", x: "If the drop concentrates on working professionals, the workload is probably too heavy for people juggling full-time jobs. I'd test that fast with a targeted survey or an A/B on pacing — before building anything." },
      { t: "step", label: "STEP 7", x: "Mitigate" },
      { t: "ul", items: ["Re-pace or modularize heavy courses.", "Improve platform stability and streaming.", "Refresh content or structure where it's failing.", "Add targeted nudges and real support for stuck learners."] },
      { t: "p", x: "18% is serious, and it deserves this calm, structured chase — not a panicked feature. Find the segment, form the hypothesis, test it cheap, then fix with confidence. You can absolutely run this play." }
    ]
  },
  {
    slug: "unacademy", company: "Unacademy", wordmark: "unacademy", brand: "#0b8457", readTime: "7 min read",
    title: "Unacademy's daily active user count decreased 20% in Ahmedabad",
    body: [
      { t: "p", x: "DAU down 20% in Ahmedabad. Twenty percent of a city's daily users just… stopped showing up. People don't ghost an app for no reason — either something broke, or something better appeared. Let's find out which, calmly and in order." },
      { t: "step", label: "STEP 1", x: "Read the shape of the drop" },
      { t: "p", x: "Timeline first. Sudden points to a technical trigger — a bad build, an outage. Gradual points to product-market fit slipping or competition creeping in. The shape narrows the search before I've even opened a dashboard." },
      { t: "step", label: "STEP 2", x: "Internal factors" },
      { t: "sub", x: "Product" },
      { t: "ul", items: ["Check the release log for any update or feature launch that lines up with the drop's start date."] },
      { t: "sub", x: "Technical" },
      { t: "ul", items: ["Ask engineering about bugs, server downtime or performance issues hitting Ahmedabad specifically."] },
      { t: "sub", x: "Customer support" },
      { t: "ul", items: ["Scan recent tickets from the city — a spike in volume or severity is a loud clue."] },
      { t: "step", label: "STEP 3", x: "External factors" },
      { t: "ul", items: ["Competition — a rival's big launch, campaign or promo stealing users.", "Regulatory or policy changes affecting operations there.", "Market and behaviour shifts in the Ahmedabad education scene."] },
      { t: "step", label: "STEP 4", x: "Segment the affected users" },
      { t: "ul", items: ["Break the drop down by student age, grade, courses enrolled and device used — the pattern usually lives in one of these."] },
      { t: "step", label: "STEP 5", x: "Review related metrics" },
      { t: "ul", items: ["Course completion, session length, courses enrolled — is this a reach problem, or an engagement/satisfaction problem?"] },
      { t: "step", label: "STEP 6", x: "Hypothesize & validate" },
      { t: "callout", label: "My lead hypothesis", x: "A new app version with a bug on a device family popular in Ahmedabad — quietly degrading the experience or logging people out. I'd validate against device-level data and a little user research before acting." },
      { t: "step", label: "STEP 7", x: "Act & monitor" },
      { t: "ul", items: ["Fix the device bug fast.", "Counter the competitor with a sharp local offer.", "Add local-language content if that's the gap.", "Then watch DAU by device/version, session length and support tickets until it recovers."] },
      { t: "p", x: "Root cause before solution — always. Rush to a marketing campaign when it's actually a device bug, and you've spent budget fixing the wrong thing. Slow is smooth, and smooth is fast." }
    ]
  },
  {
    slug: "tata-cliq", company: "Tata Cliq", wordmark: "TATA CLiQ", brand: "#17181a", readTime: "11 min read",
    title: "Tata Cliq's website bounce rate increased 25%",
    body: [
      { t: "p", x: "Bounce rate up 25%. Here's the detail that makes this one delicious: total traffic didn't change. Same number of people arriving, but far more of them leaving after a single page. Something on that first screen is physically pushing them out. Let's catch it." },
      { t: "step", label: "STEP 1", x: "Clarify the problem" },
      { t: "qa", items: [
        { q: "Playing it back: bounce is up 25% across the whole website, and not on the mobile app?", a: "Correct." },
        { q: "Whole site, or specific pages?", a: "Across the entire website." },
        { q: "Bounce = single-page sessions ÷ total sessions, as a percentage?", a: "Yes." },
        { q: "Any change to how it's calculated?", a: "No." },
        { q: "One region or many?", a: "Multiple regions." },
        { q: "Sudden or gradual, and over what window?", a: "Sudden — past week vs. the week before." },
        { q: "Consistent across user segments?", a: "Yes, consistent." },
        { q: "Specific traffic sources — direct, organic, referral?", a: "Across all sources." },
        { q: "Do we have supporting metrics, like time-on-page?", a: "Not currently." },
        { q: "Then logically: bounce is one-page-visits ÷ total-visits. Rising across all sources means either total visits fell, or one-page visits jumped. Did total visits fall?", a: "No, total visits held constant." }
      ] },
      { t: "note", x: "That last exchange is the whole case. Traffic is flat but bounce is up — so single-page exits are spiking. People arrive and bail immediately. Now I know exactly what to look for: something that greets them and repels them." },
      { t: "step", label: "STEP 2", x: "Identify possible causes" },
      { t: "p", x: "I'll go external first, then internal, then confirm backend." },
      { t: "sub", x: "External factors" },
      { t: "qa", items: [
        { q: "New competitors or new offerings pulling people away?", a: "No drastic change." },
        { q: "Competitor marketing campaigns?", a: "Some — it's year-end sale season, everyone's running sales." },
        { q: "Are we running a sale right now?", a: "Not yet — one's coming in a week." },
        { q: "Any major event or holiday shifting behaviour, beyond sale season?", a: "Nothing else." },
        { q: "Negative press or a sentiment shift?", a: "Nothing on our radar." },
        { q: "Regulatory changes?", a: "None." },
        { q: "Seasonal or economic swing?", a: "Nothing significant." }
      ] },
      { t: "sub", x: "Internal factors — product" },
      { t: "qa", items: [
        { q: "Since it's the website, any recent UI/UX changes?", a: "Yes — for next week's sale, we added some UI elements to build awareness." },
        { q: "Just home-page banners, or more?", a: "Banners on the home page and a pop-up on landing pages." },
        { q: "When did these go live?", a: "About a week ago." },
        { q: "Any navigation changes?", a: "None." }
      ] },
      { t: "journey", label: "User journey — visiting the site", steps: ["Land on the site", "See the new sale pop-up", "Try to close it", "Continue browsing"] },
      { t: "sub", x: "Internal factors — tech" },
      { t: "qa", items: [
        { q: "Bugs or support tickets?", a: "Nothing significant." },
        { q: "Traceable to desktop vs. mobile?", a: "Yes — the bounce increase is consistently mobile web users." },
        { q: "Can mobile users actually see and use every element of that pop-up — the close button included?", a: "You're right — on mobile the pop-up's positioning hides the close button, so it's hard to dismiss." }
      ] },
      { t: "sub", x: "Backend" },
      { t: "qa", items: [
        { q: "Now that I suspect the root cause, just confirming — any backend changes, migrations, data loss?", a: "None." }
      ] },
      { t: "callout", label: "The root cause", x: "The week-old sale pop-up renders with its close button off-screen on mobile web. Visitors literally can't shut it — so they shut the tab. One misplaced 'X' is manufacturing a 25% bounce spike." },
      { t: "step", label: "STEP 3", x: "Analyze the causes" },
      { t: "sub", x: "The pop-up & UI change" },
      { t: "ul", items: ["Data: bounce before vs. after the pop-up went live — does the timing line up?", "Feedback: complaints about the pop-up, especially on mobile.", "Engagement: time-on-site before vs. after."] },
      { t: "sub", x: "Mobile optimization" },
      { t: "ul", items: ["A technical audit of the pop-up's mobile positioning and behaviour.", "An A/B test of bounce with vs. without the pop-up on mobile."] },
      { t: "step", label: "STEP 4", x: "Plan & implement solutions" },
      { t: "sub", x: "Fix the pop-up" },
      { t: "ul", items: ["Make the close button reachable and visible on every device.", "A/B test friendlier pop-up designs.", "Tune timing and frequency so it stops disrupting the visit."] },
      { t: "sub", x: "Harden mobile" },
      { t: "ul", items: ["Ensure every element, pop-up included, is mobile-optimized.", "Audit regularly so this class of bug can't recur."] },
      { t: "step", label: "STEP 5", x: "Monitor & measure" },
      { t: "ul", items: ["Bounce rate, especially mobile, before vs. after.", "Pop-up click-through rate.", "Time on page on key landing pages.", "Pages per session and average session duration."] },
      { t: "p", x: "A 25% bounce spike sounds catastrophic; the fix was moving a button. That's RCA in one image — the calm walk from a scary metric to a tiny, fixable truth." }
    ]
  },
  {
    slug: "swiggy", company: "Swiggy", wordmark: "Swiggy", brand: "#fc8019", readTime: "7 min read",
    title: "Swiggy orders dropped 30% in Bangalore",
    body: [
      { t: "p", x: "Orders down 30% in Bangalore. That's not a dip, that's a dent — and a dent that size almost always has a loud, findable cause. Let's not flail; let's investigate." },
      { t: "step", label: "STEP 1", x: "Understand the drop" },
      { t: "p", x: "Sudden or gradual? A gradual slide could be a long-term trend I'd study against historical data and market shifts. A sudden fall means something changed on a specific date — and that's what I'd hunt first." },
      { t: "step", label: "STEP 2", x: "Internal factors first (if sudden)" },
      { t: "ul", items: ["App or website updates and functionality issues.", "Delivery-logistics changes.", "Restaurant supply — did popular restaurants drop off in Bangalore?", "Pricing or delivery-charge increases.", "Marketing changes."] },
      { t: "p", x: "Concretely, I'd sit with engineering to scan for bugs and anomalies, read customer-service reports and social chatter for complaints, and check whether restaurant inventory or prices moved." },
      { t: "step", label: "STEP 3", x: "External factors (once internal is ruled out)" },
      { t: "ul", items: ["A new competitor entering or surging.", "Bad PR.", "Local events changing behaviour — a festival where people eat out.", "Macro shifts — economy, regulations, lockdown-style disruptions."] },
      { t: "p", x: "I'd use market research for competitor surges, and check for any Bangalore-specific event or rule change." },
      { t: "callout", label: "Where I'd place my first bet", x: "Pricing and restaurant supply. If delivery fees jumped or top restaurants vanished, a 30% order drop follows fast — and both are quick to verify, so I'd rule them in or out on day one." },
      { t: "step", label: "STEP 4", x: "Implement solutions (cause-dependent)" },
      { t: "ul", items: ["Technical issue → fix fast with engineering.", "Inventory/pricing → reassess partnerships and pricing strategy.", "Competitor → rethink the value proposition and marketing.", "Seasonal/temporary → wait and watch before overreacting."] },
      { t: "step", label: "STEP 5", x: "Communicate & monitor" },
      { t: "ul", items: ["Keep stakeholders (and if it's big, users) informed on the issue and the plan.", "After changes, watch order volume closely to confirm recovery and learn which levers matter most."] },
      { t: "p", x: "Structure beats panic every time. Same five beats — understand, rule internal, rule external, fix, monitor — and a terrifying 30% becomes a to-do list." }
    ]
  },
  {
    slug: "rapido", company: "Rapido", wordmark: "Rapido", brand: "#1a1712", readTime: "7 min read",
    title: "Rapido's rider rating dropped 10%",
    body: [
      { t: "p", x: "Rider rating down 10%. A rating is just how people feel, printed as a number — so this is really 'riders have felt worse lately.' Feelings have sources. Let's trace this one without the melodrama." },
      { t: "step", label: "STEP 1", x: "Understand the metric" },
      { t: "p", x: "How is the rider rating calculated, and what feeds it? And is every rider affected, or is a segment dragging the average? Get this straight before anything else." },
      { t: "step", label: "STEP 2", x: "Timing & pattern" },
      { t: "p", x: "Sudden or gradual? Sudden points to a recent product change, a system error, or an external event. Gradual points to slow-rotting service quality or rising competition. The shape steers the search." },
      { t: "step", label: "STEP 3", x: "Investigate internal factors" },
      { t: "ul", items: ["Product changes — updates to the app, driver-assignment logic, routing, or how ratings are captured. And were changes communicated to riders?", "Service quality — segment by driver, area and bike type to expose patterns.", "Technical issues — bugs, crashes or performance problems degrading the ride."] },
      { t: "step", label: "STEP 4", x: "Assess external factors" },
      { t: "ul", items: ["Competitive landscape — new players, aggressive marketing, changed rating systems.", "Regulatory or legal shifts affecting service or perception.", "Societal, economic or environmental events swaying sentiment."] },
      { t: "step", label: "STEP 5", x: "Evaluate related metrics" },
      { t: "ul", items: ["Rider complaints, number of rides, average ride duration — clues that corroborate the rating drop."] },
      { t: "step", label: "STEP 6", x: "Talk to people" },
      { t: "ul", items: ["Customer service — are complaints up?", "Drivers — have they noticed changes?", "Riders directly — surveys, interviews, focus groups on their experience and rating behaviour."] },
      { t: "callout", label: "The move I'd make first", x: "Slice ratings by driver and area. Bad experiences cluster — a handful of drivers, one region, one bike type. Find the cluster and you've found most of the answer." },
      { t: "step", label: "STEP 7", x: "Act & monitor" },
      { t: "p", x: "Once I've the likely root cause, the plan could be technical fixes, better rider-driver communication, driver training, a refined rating system, or marketing. Then I'd watch the metrics closely after each change, keep iterating, and keep every stakeholder aligned on the problem, the fix and the expected outcome." },
      { t: "p", x: "Ratings feel personal, so people panic and start apologising. Don't. Cluster the data, find the pocket of pain, fix that — and the average heals itself." }
    ]
  },
  {
    slug: "pharmeasy", company: "PharmEasy", wordmark: "PharmEasy", brand: "#10847e", readTime: "11 min read",
    title: "PharmEasy's order fulfillment rate decreased 12%",
    body: [
      { t: "p", x: "Order fulfillment down 12%. 'Fulfillment' means placed-and-actually-delivered — so orders are being placed and then dying before they arrive. Someone's basket is going cold somewhere in the pipe. Let's find exactly where." },
      { t: "step", label: "STEP 1", x: "Clarify the problem" },
      { t: "qa", items: [
        { q: "Playing it back: overall order fulfillment is down 12%?", a: "Yes." },
        { q: "Website, app, and the WhatsApp ordering option — or specific ones?", a: "Website and app orders." },
        { q: "You also offer lab tests — are those counted here?", a: "No, only medicines and healthcare products." },
        { q: "Fulfillment = orders delivered ÷ orders placed?", a: "Yes." },
        { q: "And a cancelled order sits in the denominator but not the numerator?", a: "Correct." },
        { q: "Any change to the calculation?", a: "No." },
        { q: "Analytics tool healthy — no measurement glitch?", a: "All fine." },
        { q: "One region or many?", a: "Multiple regions." },
        { q: "Sudden or gradual, over what window?", a: "Sudden — past month vs. previous." },
        { q: "All segments, or specific?", a: "Consistent across all segments." },
        { q: "All order types, or specific — prescription vs. OTC?", a: "Tied to orders with at least one prescription medicine." }
      ] },
      { t: "note", x: "And there's my thread. Not 'PharmEasy is broken' — 'orders containing a prescription medicine are placed and then don't complete, this month.' Prescriptions have a special step in the flow. I'd bet the problem lives right there." },
      { t: "step", label: "STEP 2", x: "Identify possible causes" },
      { t: "p", x: "I'll walk internal first, then operational, then external — and I'll say so up front." },
      { t: "sub", x: "Internal factors — product" },
      { t: "qa", items: [
        { q: "Any recent app updates or feature changes?", a: "Minor, nothing that should affect fulfillment." },
        { q: "Let me confirm the order flow.", a: "Please do — that's correct." }
      ] },
      { t: "journey", label: "User journey — placing an order", steps: ["Add address", "Search medicine", "Add to cart", "Cart → Continue", "Upload prescription OR 'I don't have one' → book doctor call", "Continue", "Confirm & pay"] },
      { t: "qa", items: [
        { q: "So if they continue without a prescription, the order is placed but only ships after a successful doctor's call?", a: "Exactly right." }
      ] },
      { t: "sub", x: "Internal factors — tech & backend" },
      { t: "qa", items: [
        { q: "Bugs or support tickets spiking?", a: "Nothing significant." },
        { q: "Traceable to a version, device or OS?", a: "No, consistent everywhere." },
        { q: "Any backend changes?", a: "None." }
      ] },
      { t: "sub", x: "Operational" },
      { t: "qa", items: [
        { q: "Order-volume spike, or fewer delivery staff this month?", a: "No operational change." },
        { q: "Any drop in customer-service quality?", a: "No." },
        { q: "Any failures on delivery times, availability, quality?", a: "Yes — many orders cancelled a day after being placed." },
        { q: "PharmEasy promises 24-48h delivery. What stage were these in before cancelling?", a: "Most weren't even at 'order is being packed'." },
        { q: "Were these the prescription orders where the user chose the doctor-consultation route?", a: "Yes — no prescription at checkout, so they booked the doctor call." },
        { q: "Could a shortage of doctors for those consults be creating scheduling delays that push orders to cancellation?", a: "Yes — fewer consulting doctors this month caused delays and hurt fulfillment." }
      ] },
      { t: "callout", label: "The root cause", x: "Not enough doctors for the mandatory teleconsults. Fewer doctors → consults back up → prescription orders stall before packing and cancel. The delivery engine is fine; the doctor's calendar is the bottleneck." },
      { t: "step", label: "STEP 3", x: "Analyze the causes" },
      { t: "sub", x: "Doctor shortage" },
      { t: "ul", items: ["Data: available doctors before vs. after the drop; map scheduling delays to delayed/cancelled orders.", "Feedback: complaints about consult delays, and the correlation with lower fulfillment.", "Trends: is consult/approval time rising, and do delays peak at certain times?"] },
      { t: "step", label: "STEP 4", x: "Plan & implement solutions" },
      { t: "sub", x: "Recruit" },
      { t: "ul", items: ["Onboard more consulting doctors; incentivise them to join and take more calls."] },
      { t: "sub", x: "Schedule smarter" },
      { t: "ul", items: ["Efficient scheduling to cut delays; use forecasting to predict peaks and staff for them."] },
      { t: "sub", x: "Communicate" },
      { t: "ul", items: ["Set honest wait-time expectations; keep users updated on order status so they don't bail."] },
      { t: "step", label: "STEP 5", x: "Monitor & measure" },
      { t: "ul", items: ["Consultation completion rate.", "Order cancellation rate.", "Order fulfillment rate.", "Post-consult CSAT and ratings."] },
      { t: "p", x: "See the pattern with Urban Company? Different company, identical shape — a hidden capacity shortage upstream of the thing you're measuring. Once you've felt this pattern, you'll spot it everywhere." }
    ]
  },
  {
    slug: "pepperfry", company: "Pepperfry", wordmark: "Pepperfry", brand: "#f04e37", readTime: "7 min read",
    title: "Pepperfry's average order delivery time rose 30% in Gurugram",
    body: [
      { t: "p", x: "Average delivery time up 30% in Gurugram. Furniture is heavy, bulky and personal — delivery is where the whole experience is won or lost. And a spike in one city almost always means something local shifted. Let's go local." },
      { t: "step", label: "STEP 1", x: "Scope & timing" },
      { t: "p", x: "Sudden or gradual? And is it only Gurugram, or are other cities creeping up too? Nailing scope and timing tells me whether to look for a one-off change or a spreading trend." },
      { t: "step", label: "STEP 2", x: "Examine internal factors" },
      { t: "ul", items: ["Operational — recent changes or issues in Gurugram warehousing, inventory or delivery staffing.", "Technical — bugs or glitches in the order-management system or delivery-routing algorithm.", "Policy/process — any recent change to delivery or ops procedures that quietly backfired."] },
      { t: "step", label: "STEP 3", x: "Review external factors" },
      { t: "ul", items: ["New local regulations, roadworks or policies slowing delivery.", "Market dynamics — strikes, festivals, local events, or competitor actions."] },
      { t: "step", label: "STEP 4", x: "Analyze related KPIs" },
      { t: "ul", items: ["Number of orders, delivery complaints, return rates — extra angles on the problem."] },
      { t: "step", label: "STEP 5", x: "Engage the teams" },
      { t: "callout", label: "The move I'd make first", x: "Talk to ground operations before the dashboards. They feel a short-staffed hub or a broken route days before it shows up in the averages — the fastest path to the real cause is often a ten-minute conversation." },
      { t: "step", label: "STEP 6", x: "Hypothesize & validate" },
      { t: "p", x: "From what I gather, I'd form hypotheses and validate them with data analysis, field visits and chats with delivery staff — not desk guesses." },
      { t: "step", label: "STEP 7", x: "Act & monitor" },
      { t: "ul", items: ["Fix technical issues; train or re-balance delivery staff; adjust ops procedures; coordinate with local authorities; communicate with customers.", "Then watch delivery time, late-delivery complaints and hub throughput vs. volume until it normalises, iterating as needed."] },
      { t: "p", x: "Logistics problems love to hide in averages. Get specific about the city, get close to the ground team, and the 30% stops being a mystery and starts being a checklist." }
    ]
  },
  {
    slug: "ola", company: "Ola", wordmark: "Ola", brand: "#1a1712", readTime: "12 min read",
    title: "Ola's number of completed rides dropped 15%",
    body: [
      { t: "p", x: "Completed rides down 15% — but bookings are steady. Stop and feel that contradiction. People are still requesting rides in the same numbers; the rides just aren't finishing. That gap between 'booked' and 'completed' is the entire case, and it's a beautiful one." },
      { t: "step", label: "STEP 1", x: "Clarify the problem" },
      { t: "qa", items: [
        { q: "Playing it back: total completed rides are down 15% overall?", a: "Yes." },
        { q: "Specific ride types — Autos, Minis, luxury — or all?", a: "More pronounced in Minis and Autos." },
        { q: "Only completed rides count — cancellations and no-shows excluded?", a: "Correct, only completed." },
        { q: "Completed = driver taps 'End Trip' at the destination?", a: "Yes, but payment must also process successfully — only then is it 'completed'." },
        { q: "Any change to how this is tracked?", a: "No." },
        { q: "Analytics tools healthy?", a: "All fine." },
        { q: "One region or many?", a: "Several, but heavier in high-demand urban areas." },
        { q: "Sudden or gradual, over what window?", a: "Gradual — over the last 2-3 months." },
        { q: "All customer segments, or specific?", a: "Heavier among frequent users and premium daily-commuters." },
        { q: "Crucial one: has the number of rides BOOKED dropped too?", a: "No — bookings have stayed fairly stable." }
      ] },
      { t: "note", x: "That's the hinge. Bookings flat, completions down — so rides are booked and then killed before they finish. I'm no longer asking 'why don't people want rides?' I'm asking 'why do accepted rides die?' Huge difference." },
      { t: "step", label: "STEP 2", x: "Identify possible causes" },
      { t: "p", x: "Since bookings are fine, I'll dig internal, then operational, then external." },
      { t: "sub", x: "Internal — app performance" },
      { t: "qa", items: [
        { q: "Recent app or infra updates? Bugs or slow performance hurting completions?", a: "Minor updates, no major performance issues." },
        { q: "Users or drivers hitting crashes or allocation delays?", a: "No significant complaints." },
        { q: "Any change in average session time per user?", a: "No, about the same as before." },
        { q: "Any user-journey change that could cause incomplete rides?", a: "Minor updates, nothing that changes the journey overall." }
      ] },
      { t: "sub", x: "Internal — payments" },
      { t: "qa", items: [
        { q: "Any payment-system issues that might discourage drivers — delayed payouts, disputes?", a: "No widespread issues, though some isolated payout delays occurred a few months back." },
        { q: "Were those delays tied to a specific payment mode?", a: "Mostly digital — credit/debit cards and Google Pay." }
      ] },
      { t: "sub", x: "Operational — driver availability" },
      { t: "qa", items: [
        { q: "Fewer drivers active, or lower demand over this period?", a: "Both driver count and average customers have stayed stable." },
        { q: "And the count of rides recorded as no-shows or cancellations — has that changed?", a: "Yes, it's dropped quite a bit." }
      ] },
      { t: "sub", x: "Operational — ride cancellations" },
      { t: "qa", items: [
        { q: "Could the completion drop come from drivers cancelling after they accept — or even start — the ride?", a: "Yes — we're seeing a rise in drivers cancelling post-acceptance." },
        { q: "Break cancellations down by payment mode — are they concentrated anywhere?", a: "Most cancelled rides were set to pay via Google Pay." },
        { q: "Given those are digital-payment rides, could payment issues be driving the cancellations?", a: "That seems possible." },
        { q: "Did those users re-request a ride soon after cancelling?", a: "No — mostly they didn't book again nearby." },
        { q: "So — are drivers cancelling to bypass the app and dodge digital-payout delays, keeping the customer and asking for direct cash payment?", a: "Yes. That's it — your root-cause read is correct." }
      ] },
      { t: "sub", x: "External" },
      { t: "qa", items: [
        { q: "Competitors offering drivers better incentives or lower commissions?", a: "Competition exists, but no major driver shift observed." },
        { q: "Local events, strikes or regulatory changes hitting completions?", a: "Nothing significant recently." }
      ] },
      { t: "callout", label: "The root cause", x: "Drivers are quietly bypassing the app. Stung by delayed digital payouts, they accept, then cancel and ask the rider to pay cash directly off-platform. The ride physically happens — it just never 'completes' in our system, and the already-served rider doesn't re-book." },
      { t: "step", label: "STEP 3", x: "Analyze the causes" },
      { t: "sub", x: "Drivers bypassing the app" },
      { t: "ul", items: ["Data: investigate post-acceptance cancellations in high-demand areas and their link to digital-payment rides; look for patterns right after acceptance.", "Driver feedback: understand the motivation to bypass. Note the workaround — riders can switch to cash before the ride starts — and confirm drivers cancel precisely to escape payout delays."] },
      { t: "step", label: "STEP 4", x: "Plan & implement solutions" },
      { t: "sub", x: "Fix payments" },
      { t: "ul", items: ["Guarantee timely payouts and transparent fare breakdowns — heal the actual wound."] },
      { t: "sub", x: "Retention & compliance" },
      { t: "ul", items: ["Incentivise completing rides in-app — bonuses for peak-hour or high-demand completions."] },
      { t: "step", label: "STEP 5", x: "Monitor & measure" },
      { t: "ul", items: ["Post-acceptance cancellation rate.", "Completion rate by payment mode.", "Driver CSAT and payout timing, to confirm the fix lands."] },
      { t: "p", x: "This is my favourite kind of RCA — the number screamed 'demand problem,' but one steady stat (bookings) flipped the whole story into a trust-and-payments problem. Always hunt for the metric that refuses to fit; it's usually holding the key." }
    ]
  },
  {
    slug: "paytm", company: "Paytm", wordmark: "Paytm", brand: "#00a7e1", readTime: "7 min read",
    title: "Paytm's monthly active user count decreased 25%",
    body: [
      { t: "p", x: "MAU down 25%. That's a quarter of your monthly actives quietly not returning — enormous for a payments app, where trust and friction decide everything. Let's check both, methodically." },
      { t: "step", label: "STEP 1", x: "Confirm the metric" },
      { t: "p", x: "First, is the 25% real, or a reporting artefact? And are we clear it's India MAU specifically, not global or another region? Never chase a number you haven't validated." },
      { t: "step", label: "STEP 2", x: "Read the pattern" },
      { t: "p", x: "Sudden or gradual? Sudden smells like a technical issue, a market shock, or a new release. Gradual smells like rising competition, decaying performance, or shifting behaviour." },
      { t: "step", label: "STEP 3", x: "Internal factors" },
      { t: "ul", items: ["Product changes — recent updates, new features, UI changes that hurt experience.", "Technical issues — crashes, login problems, payment failures. Segment by device, OS and app version to find patterns.", "Marketing — recent campaigns, offers, or acquisition-strategy changes."] },
      { t: "step", label: "STEP 4", x: "External factors" },
      { t: "ul", items: ["Competition — a new entrant, or big moves by existing rivals.", "Regulation — any change affecting our services (huge in fintech).", "Macro — a downturn or major event shifting consumer behaviour."] },
      { t: "step", label: "STEP 5", x: "Related metrics & feedback" },
      { t: "ul", items: ["DAU, engagement, transaction volume, CSAT, churn — for the fuller picture.", "Reviews, complaints and support tickets — read them for common pain themes."] },
      { t: "callout", label: "Where I'd look first", x: "Regulatory and login/payment friction. In fintech, a single KYC or onboarding change — or a spike in failed logins — can silently lock out millions. That's my first stop, before marketing or competition." },
      { t: "step", label: "STEP 6", x: "Hypothesize, act, communicate, monitor" },
      { t: "ul", items: ["Form hypotheses, then test with data, surveys or A/B tests.", "Fix the confirmed cause — technical, product, or marketing.", "Keep stakeholders informed throughout.", "Monitor MAU/DAU recovery, transactions, churn and funnel drop-off at login/KYC, iterating as you learn."] },
      { t: "p", x: "Big scary number, calm structured chase. Validate it's real, read the shape, split internal vs. external, and follow the friction. In fintech, the answer is usually hiding in the login screen." }
    ]
  },
  {
    slug: "nykaa", company: "Nykaa", wordmark: "Nykaa", brand: "#e5006e", readTime: "7 min read",
    title: "Nykaa's customer satisfaction score decreased 15%",
    body: [
      { t: "p", x: "CSAT down 15%. Here's the reframe that keeps you calm: customers are actively telling us something's wrong. Vocal-and-unhappy is a gift compared to silent-and-gone. Let's listen properly and decode it." },
      { t: "step", label: "STEP 1", x: "Context of the drop" },
      { t: "p", x: "Sudden or a trend, and over what window? The timeline shapes everything that follows." },
      { t: "step", label: "STEP 2", x: "Which segments are hit" },
      { t: "p", x: "Is the drop uniform, or concentrated? I'd slice by geography, age, product category, and new vs. returning customers. The dissatisfied pocket usually names itself." },
      { t: "step", label: "STEP 3", x: "Decompose satisfaction" },
      { t: "p", x: "CSAT is a bundle — product quality, delivery time, customer service, interface. I'd figure out which specific part of the experience soured." },
      { t: "sub", x: "Likely internal factors" },
      { t: "ul", items: ["A new feature or interface customers find confusing.", "Shipping/delivery slowdowns from logistics issues.", "Product quality or availability problems."] },
      { t: "sub", x: "Likely external factors" },
      { t: "ul", items: ["Competitors offering better service or prices.", "Economic pressure making customers more price-sensitive and harder to satisfy."] },
      { t: "step", label: "STEP 4", x: "Cross-check KPIs" },
      { t: "ul", items: ["Purchase frequency, churn rate, average order value, NPS — do they corroborate the story?"] },
      { t: "step", label: "STEP 5", x: "Gather qualitative insight" },
      { t: "callout", label: "The move I'd make first", x: "Pair the number with real voices. Read recent reviews, run a quick survey, and ask customer service what's spiking. CSAT tells you it dropped; customers tell you exactly why — and they're usually blunt about it." },
      { t: "step", label: "STEP 6", x: "Collaborate, test, iterate" },
      { t: "ul", items: ["Share insights with Marketing, Ops, UX and Support, and co-design the fixes.", "Improve the broken link — features, service, or quality — and test small before scaling.", "Then monitor CSAT and related KPIs, gathering feedback to keep improving."] },
      { t: "p", x: "A satisfaction dip is a message, not a verdict. Segment it, listen to the humans behind it, fix the one link that broke — and keep listening. Continuous beats heroic." }
    ]
  },
  {
    slug: "makemytrip", company: "MakeMyTrip", wordmark: "MakeMyTrip", brand: "#eb2226", readTime: "7 min read",
    title: "MakeMyTrip's flight ticket cancellation rate rose 18%",
    body: [
      { t: "p", x: "Flight cancellations up 18%. Some cancellations are just life — plans change, that's travel. But an 18% jump means something in OUR world nudged behaviour. Let's separate the noise from the signal, calmly." },
      { t: "step", label: "STEP 1", x: "Understand the metric in detail" },
      { t: "p", x: "Are specific routes, airlines or customer segments cancelling more? Granularity guides everything, and often hands you a targeted fix." },
      { t: "step", label: "STEP 2", x: "Read the trend" },
      { t: "p", x: "Sudden or gradual? Sudden points to a specific event or change; gradual points to systemic issues or shifting market conditions." },
      { t: "step", label: "STEP 3", x: "Investigate internal factors" },
      { t: "ul", items: ["A refund-policy change that's less friendly to customers (more cancellations).", "A UI/UX change or new feature that made cancelling too easy.", "Pricing or ticketing-policy changes; glitches or bugs in the cancellation flow."] },
      { t: "step", label: "STEP 4", x: "Investigate external factors" },
      { t: "ul", items: ["A competitor's aggressive promos causing cancel-and-rebook.", "New airline or regulatory policies.", "A public-health scare or economic downturn."] },
      { t: "step", label: "STEP 5", x: "Related metrics & behaviour" },
      { t: "ul", items: ["Rising complaints, negative reviews, or falling engagement — signals of the pain point in the journey."] },
      { t: "step", label: "STEP 6", x: "Engage cross-functional teams" },
      { t: "ul", items: ["Customer service, operations, data analytics and engineering, for insights and data points."] },
      { t: "step", label: "STEP 7", x: "Hypothesize & test" },
      { t: "callout", label: "The tell I'd look for", x: "If the spike is one airline, it's likely their policy. If it's across all airlines, look inward — a refund-policy or checkout change usually explains a broad, uniform jump. That single distinction routes the whole investigation." },
      { t: "p", x: "I'd validate with A/B tests, user surveys, or deeper dives into behaviour data." },
      { t: "step", label: "STEP 8", x: "Act on insights" },
      { t: "ul", items: ["Improve customer communication.", "Change platform features or policies — e.g., rebalance refunds, or add a confirm step before cancelling.", "Work with airline partners.", "Fix any technical issues in the flow."] },
      { t: "p", x: "Cancellations feel like customers voting against you. Usually they're voting against one policy or one too-easy button. Get granular, split internal vs. external, and the 18% points right at its own cause." }
    ]
  },
  {
    slug: "amazon", company: "Amazon", wordmark: "amazon", brand: "#232f3e", readTime: "7 min read",
    title: "Amazon noticed a 20% drop in daily active users in India",
    body: [
      { t: "p", x: "DAU down 20% in India. On a company this size, 20% isn't a wobble — it's an earthquake, and earthquakes rarely have one tiny cause. Let's find out whether this is a stumble to fix or a shift to respond to. Methodically, as always." },
      { t: "step", label: "STEP 1", x: "Name the metric" },
      { t: "p", x: "The metric that fell is daily active users in India — a core engagement signal. I'd anchor on exactly that before anything else." },
      { t: "step", label: "STEP 2", x: "Investigate the nature of the drop" },
      { t: "p", x: "Sudden or gradual? Sudden → look for a specific incident or change around that date. Gradual → a shift in behaviour or market dynamics, which needs a different lens. And I'd verify the metric's accuracy — a tracking bug can fake the whole crisis." },
      { t: "step", label: "STEP 3", x: "Examine internal factors" },
      { t: "ul", items: ["Platform changes — UI/UX, pricing adjustments.", "Technical issues — server downtime, app crashes.", "Algorithm changes that hurt the India experience specifically.", "Data-tracking accuracy — confirm the drop is real."] },
      { t: "step", label: "STEP 4", x: "Examine external factors" },
      { t: "ul", items: ["A competitor gaining share or launching a large-scale festival sale.", "Legal or regulatory changes in India.", "Shifts in consumer behaviour or economic conditions.", "Cultural or language issues specific to the Indian market."] },
      { t: "step", label: "STEP 5", x: "Analyze related KPIs" },
      { t: "ul", items: ["Churn rate and user-acquisition rate — do they explain the DAU move?"] },
      { t: "step", label: "STEP 6", x: "Collaborate with the right teams" },
      { t: "ul", items: ["Internal/technical (a bug or server problem) → engineering and IT to resolve fast.", "Strategic (pricing, UI/UX) → the relevant teams to weigh changes."] },
      { t: "callout", label: "The move I'd make first", x: "Line up the drop's start date against release and incident logs. Most sudden 20% dips have a matching entry — a bad deploy, an outage, a pricing change — quietly waiting to be found." },
      { t: "step", label: "STEP 7", x: "Respond, communicate, monitor" },
      { t: "ul", items: ["The response could be product improvements, marketing shifts, stronger infra, bug fixes, better support, or localised research into Indian users' needs.", "Keep internal teams, leadership and (if apt) users informed.", "After changes, monitor DAU and related metrics closely for recovery."] },
      { t: "p", x: "Even on a giant, the method holds: name the metric, verify it's real, read the shape, split internal vs. external, follow the logs. Scale changes the stakes, not the discipline." }
    ]
  }
];
