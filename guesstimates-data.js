// Guesstimate case studies — full, visual walkthroughs in Shubham's voice.
// Inspired by The Product Folks guesstimates category; original writing.
// Block types: p | step{label,x} | sub{x} | note{x} | callout{label,x} | ul{items} | calc{label,rows:[{label,value,n?}]} | answer{label,x}
window.GUESS_CASES = [
  {
    slug: "flipkart-festive", company: "Flipkart", wordmark: "Flipkart", brand: "#2874f0", readTime: "5 min read",
    title: "What's the total value of electronics sold on Flipkart during the festive season?",
    body: [
      { t: "p", x: "'Total value of electronics in the festive season' sounds enormous and unknowable. It isn't — it's just one big number, sliced a few times, with a festive twist at the end. I'll go top-down from Flipkart's overall scale. Watch it shrink into something we can actually hold." },
      { t: "note", x: "Approach: top-down — start from Flipkart's total sales, carve out electronics, carve out the festive window, then adjust for the sale surge." },
      { t: "step", label: "STEP 1", x: "Pin the festive window" },
      { t: "p", x: "In India the festive season runs roughly Navratri → Diwali — call it about one month of peak shopping." },
      { t: "step", label: "STEP 2", x: "Anchor on annual electronics sales" },
      { t: "p", x: "Flipkart's GMV was around $15B (2021). Assume electronics are ~30% of that → about $4.5B of electronics a year." },
      { t: "step", label: "STEP 3", x: "Carve out the festive share" },
      { t: "p", x: "Discounts and gifting concentrate demand. Assume ~25% of annual electronics sales land in this one festive month → about $1.125B." },
      { t: "step", label: "STEP 4", x: "Adjust for the surge" },
      { t: "p", x: "Festive sales mean more units but lower prices. Say +50% units at a 30% discount: (1 + 0.50) × (1 − 0.30) = 1.05. So bump the value by ~5%." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Flipkart annual GMV", value: "$15B", n: 15000 },
        { label: "Electronics share (30%)", value: "$4.5B", n: 4500 },
        { label: "Festive-season share (25%)", value: "$1.125B", n: 1125 },
        { label: "Surge adjustment (×1.05)", value: "$1.18B", n: 1181 }
      ] },
      { t: "answer", label: "Electronics sold on Flipkart this festive season", x: "≈ $1.18 billion" },
      { t: "p", x: "That's the whole trick: anchor big, slice with stated assumptions, adjust for the twist. Nobody expects the exact figure — they want to see you build it, calmly, out loud. You just did." }
    ]
  },
  {
    slug: "swiggy-mumbai", company: "Swiggy", wordmark: "Swiggy", brand: "#fc8019", readTime: "4 min read",
    title: "What's the average daily number of meals delivered by Swiggy in Mumbai?",
    body: [
      { t: "p", x: "A whole city's worth of meals — where do you even start? With people. Population is our anchor, and order-frequency does the rest. Let's build it up." },
      { t: "note", x: "Approach: population-based — segment the city, estimate order frequency, then divide down to a day." },
      { t: "step", label: "STEP 1", x: "Anchor on population" },
      { t: "p", x: "Mumbai is home to ~20M people. Lifestyle and residential density push online ordering higher here — assume ~40% are in the order-happy segment → 8M individuals." },
      { t: "step", label: "STEP 2", x: "Estimate order frequency" },
      { t: "p", x: "Not everyone orders daily. Say the average is ~3 orders a week → 8M × 3 = 24M orders a week." },
      { t: "step", label: "STEP 3", x: "Bring it to a day" },
      { t: "p", x: "Divide by 7 → about 3.4M orders a day. Split across breakfast, lunch and dinner, that's ~1.1M per meal window — a nice sanity check." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Mumbai population", value: "20M", n: 20 },
        { label: "Online-ordering segment (40%)", value: "8M", n: 8 },
        { label: "Weekly orders (×3)", value: "24M / wk", n: 24 },
        { label: "Daily orders (÷7)", value: "≈ 3.4M / day", n: 3.4 }
      ] },
      { t: "answer", label: "Meals delivered by Swiggy in Mumbai", x: "≈ 3.4 million / day" },
      { t: "p", x: "See how the meal-time cross-check (~1.1M each) makes the answer feel solid? Always sanity-test from a second angle — it's what turns a guess into a guesstimate." }
    ]
  },
  {
    slug: "blinkit-weight", company: "Blinkit", wordmark: "blinkit", brand: "#0c831f", readTime: "4 min read",
    title: "What is the total weight of groceries delivered by Blinkit in a day?",
    body: [
      { t: "p", x: "This one's fun because the unit is kilograms, not users. Two levers only: how many orders, and how heavy is each. Multiply, done." },
      { t: "note", x: "Approach: units × size — orders per day times the average weight of an order." },
      { t: "step", label: "STEP 1", x: "Estimate daily orders" },
      { t: "p", x: "Blinkit is a top grocery-delivery player. To keep it clean, assume ~200,000 orders a day across India." },
      { t: "step", label: "STEP 2", x: "Estimate the weight of one order" },
      { t: "p", x: "Picture a typical basket: 1 kg rice + 1 kg vegetables + 0.5 kg dairy + 0.5 kg packaged food + 1 kg household items ≈ 4 kg per order." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Orders per day", value: "200,000" },
        { label: "Average weight per order", value: "≈ 4 kg" },
        { label: "Total (200,000 × 4 kg)", value: "800,000 kg" }
      ] },
      { t: "answer", label: "Groceries delivered by Blinkit", x: "≈ 800 tonnes / day" },
      { t: "p", x: "When the question is about volume or weight, resist the urge to overthink — break it into 'how many' × 'how big,' state your basket honestly, and multiply. Simple wins." }
    ]
  },
  {
    slug: "upgrad-enrollments", company: "UpGrad", wordmark: "upGrad", brand: "#d0021b", readTime: "4 min read",
    title: "What is the average number of new course enrollments on UpGrad every month?",
    body: [
      { t: "p", x: "UpGrad sells to a specific crowd — professionals levelling up. So I anchor on that audience, not the whole country, and funnel down to monthly enrollments." },
      { t: "note", x: "Approach: top-down funnel — target audience → potential users → active users → monthly enrollers." },
      { t: "step", label: "STEP 1", x: "Size the audience" },
      { t: "p", x: "Say ~100M professionals in India, and ~50% are smartphone-owning and tech-savvy → 50M potential users." },
      { t: "step", label: "STEP 2", x: "Narrow to active users" },
      { t: "p", x: "Not all potential users actually use it. Take ~15% active → 7.5M active users." },
      { t: "step", label: "STEP 3", x: "Find the monthly enrollers" },
      { t: "p", x: "Courses run for months, so only a slice enroll fresh each month. Assume ~5% of active users start a new course monthly." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Professionals in India", value: "100M", n: 100 },
        { label: "Smartphone & tech-savvy (50%)", value: "50M", n: 50 },
        { label: "Active users (15%)", value: "7.5M", n: 7.5 },
        { label: "Enroll a new course / mo (5%)", value: "375,000", n: 0.375 }
      ] },
      { t: "answer", label: "New enrollments on UpGrad", x: "≈ 375,000 / month" },
      { t: "p", x: "For any subscription or course product, start from WHO it's really for — not the whole population. A tight audience anchor keeps your funnel honest." }
    ]
  },
  {
    slug: "apple-music-us", company: "Apple Music", wordmark: "Music", brand: "#fa243c", readTime: "4 min read",
    title: "Estimate the number of Apple Music subscribers in the United States.",
    body: [
      { t: "p", x: "A classic top-down. Start from the whole country and peel away layers — internet, then music-streamers, then Apple's slice. Each cut is one clean assumption." },
      { t: "note", x: "Approach: top-down — population → internet users → music streamers → Apple Music share." },
      { t: "step", label: "STEP 1", x: "Anchor on population" },
      { t: "p", x: "The US population is ~330M." },
      { t: "step", label: "STEP 2", x: "Internet, then music" },
      { t: "p", x: "About 90% are online → ~297M internet users. Of those, say ~70% stream music → ~208M online music listeners." },
      { t: "step", label: "STEP 3", x: "Apple's share" },
      { t: "p", x: "Apple Music is huge but competes with Spotify, Pandora and more. Assume ~25% of streamers use it." },
      { t: "calc", label: "The funnel", rows: [
        { label: "US population", value: "330M", n: 330 },
        { label: "Internet users (90%)", value: "297M", n: 297 },
        { label: "Online music listeners (70%)", value: "208M", n: 208 },
        { label: "Apple Music share (25%)", value: "52M", n: 52 }
      ] },
      { t: "answer", label: "Apple Music subscribers in the US", x: "≈ 52 million" },
      { t: "p", x: "Top-down is your default for 'how many people use X in a region.' Anchor on population and peel layer by layer — you'll never be lost." }
    ]
  },
  {
    slug: "amazon-items", company: "Amazon.in", wordmark: "amazon", brand: "#232f3e", readTime: "5 min read",
    title: "How many items are sold on Amazon.in in a day?",
    body: [
      { t: "p", x: "Here I'll go bottom-up — build from households, through orders, all the way to individual items, then divide into a day. It feels more grounded than starting from a giant number." },
      { t: "note", x: "Approach: bottom-up — households → internet → Amazon shoppers → orders → items → per day." },
      { t: "step", label: "STEP 1", x: "Households, then internet" },
      { t: "p", x: "India has ~300M households; assume ~50% have internet → 150M connected households." },
      { t: "step", label: "STEP 2", x: "Amazon shoppers" },
      { t: "p", x: "With competitors around, say ~20% order from Amazon → 30M ordering households." },
      { t: "step", label: "STEP 3", x: "Orders and items" },
      { t: "p", x: "Assume ~2 orders/month per household, ~3 items/order → 30M × 2 × 3 = 180M items a month." },
      { t: "step", label: "STEP 4", x: "Down to a day" },
      { t: "p", x: "Divide the monthly total by 30 → ~6M items a day." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Households in India", value: "300M", n: 300 },
        { label: "With internet (50%)", value: "150M", n: 150 },
        { label: "Order from Amazon (20%)", value: "30M", n: 30 },
        { label: "Monthly items (×2 orders ×3 items)", value: "180M / mo", n: 180 },
        { label: "Daily items (÷30)", value: "6M / day", n: 6 }
      ] },
      { t: "answer", label: "Items sold on Amazon.in", x: "≈ 6 million / day" },
      { t: "p", x: "Bottom-up shines when you can picture a real unit — a household, a basket. Build up brick by brick and the tower stands on its own." }
    ]
  },
  {
    slug: "netflix-data", company: "Netflix", wordmark: "NETFLIX", brand: "#e50914", readTime: "5 min read",
    title: "How much data is consumed by Netflix users worldwide in a day?",
    body: [
      { t: "p", x: "Data questions are just 'people × time × rate.' The only wrinkle here is quality — SD vs. HD burn very different amounts. So I'll split the users and add the two streams back up." },
      { t: "note", x: "Approach: users × hours × data-rate, split by streaming quality." },
      { t: "step", label: "STEP 1", x: "Anchor on subscribers & watch time" },
      { t: "p", x: "~200M subscribers globally, each watching ~2 hours a day." },
      { t: "step", label: "STEP 2", x: "Split by quality" },
      { t: "p", x: "Netflix uses ~1 GB/hr for SD and ~3 GB/hr for HD. Assume a 50/50 split — 100M SD and 100M HD viewers." },
      { t: "step", label: "STEP 3", x: "Add the streams" },
      { t: "p", x: "SD: 100M × 2 × 1 = 200M GB. HD: 100M × 2 × 3 = 600M GB." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Global subscribers", value: "200M", n: 200 },
        { label: "SD data (100M × 2h × 1 GB)", value: "200M GB", n: 200 },
        { label: "HD data (100M × 2h × 3 GB)", value: "600M GB", n: 600 },
        { label: "Total per day", value: "800M GB", n: 800 }
      ] },
      { t: "answer", label: "Data consumed by Netflix worldwide", x: "≈ 800 million GB / day" },
      { t: "p", x: "When one variable has two very different modes (SD vs. HD), split it, solve each, and recombine. Averaging blindly would've hidden the real story." }
    ]
  },
  {
    slug: "dunzo-chennai", company: "Dunzo", wordmark: "Dunzo", brand: "#00d290", readTime: "4 min read",
    title: "How many tasks does Dunzo fulfill in a day in Chennai?",
    body: [
      { t: "p", x: "One city, one app, one behaviour. Anchor on Chennai's people, funnel to active users, then apply a gentle order frequency. Clean and quick." },
      { t: "note", x: "Approach: population funnel → active users → tasks per user." },
      { t: "step", label: "STEP 1", x: "Potential users" },
      { t: "p", x: "Chennai has ~10M people; urban smartphone penetration ~70% → 7M potential Dunzo users." },
      { t: "step", label: "STEP 2", x: "Active users" },
      { t: "p", x: "Assume ~5% are active → 350,000 active users." },
      { t: "step", label: "STEP 3", x: "Tasks per user" },
      { t: "p", x: "Say the average active user places one task every two days — so daily tasks = 350,000 ÷ 2." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Chennai population", value: "10M", n: 10 },
        { label: "Smartphone users (70%)", value: "7M", n: 7 },
        { label: "Active Dunzo users (5%)", value: "350,000", n: 0.35 },
        { label: "Tasks / day (1 per 2 days)", value: "175,000", n: 0.175 }
      ] },
      { t: "answer", label: "Tasks Dunzo fulfills in Chennai", x: "≈ 175,000 / day" },
      { t: "p", x: "Notice the 'once every two days' move — frequency rarely equals one-per-day. A realistic frequency assumption is where good guesstimates separate from lazy ones." }
    ]
  },
  {
    slug: "bookmyshow-tickets", company: "BookMyShow", wordmark: "BookMyShow", brand: "#dc354b", readTime: "4 min read",
    title: "How many tickets are sold through BookMyShow during a major Bollywood release weekend?",
    body: [
      { t: "p", x: "This one anchors on capacity, not population — screens and seats. Then I take BookMyShow's slice of the bookings. A different flavour of guesstimate, equally structured." },
      { t: "note", x: "Approach: capacity-based — screens × shows × seats, then platform share." },
      { t: "step", label: "STEP 1", x: "Anchor on screens & seats" },
      { t: "p", x: "A big Bollywood film opens on ~4,500 screens. At ~4 shows/day and ~200 seats each: 4,500 × 4 × 200 = 3.6M seats a day." },
      { t: "step", label: "STEP 2", x: "Assume near-full houses" },
      { t: "p", x: "Blockbuster openings run near capacity, so treat that 3.6M as effectively sold across the weekend's peak." },
      { t: "step", label: "STEP 3", x: "BookMyShow's share" },
      { t: "p", x: "Not all tickets go through one platform. Assume BookMyShow handles ~40% of bookings." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Screens nationwide", value: "4,500", n: 4500 },
        { label: "Seats / day (×4 shows ×200)", value: "3.6M", n: 3600000 },
        { label: "BookMyShow share (40%)", value: "1.44M", n: 1440000 }
      ] },
      { t: "answer", label: "Tickets via BookMyShow (opening weekend)", x: "≈ 1.44 million" },
      { t: "p", x: "When a business is bounded by physical capacity, anchor there — screens, seats, rooms, tables. Capacity is often a tighter, truer anchor than population." }
    ]
  },
  {
    slug: "zomato-delhi", company: "Zomato", wordmark: "zomato", brand: "#ef4f5f", readTime: "5 min read",
    title: "How many orders does Zomato fulfill on a typical Saturday in Delhi?",
    body: [
      { t: "p", x: "Here I'll lean on population density AND behaviour — people order more on weekends, and often more than once. Both factors matter, so I bake both in." },
      { t: "note", x: "Approach: population → online-orderers → Zomato share → weekend behaviour → multiple orders." },
      { t: "step", label: "STEP 1", x: "Delhi's people who order online" },
      { t: "p", x: "Delhi has ~30M people; say ~10% order food online → 3M potential online orderers." },
      { t: "step", label: "STEP 2", x: "Zomato's share" },
      { t: "p", x: "With competitors around, give Zomato ~50% → 1.5M potential Zomato customers." },
      { t: "step", label: "STEP 3", x: "Weekend behaviour" },
      { t: "p", x: "Not everyone orders on a given Saturday. Say ~20% do → 300,000 orderers. And people often order twice (lunch + dinner) — average ~1.5 orders each." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Delhi population", value: "30M", n: 30 },
        { label: "Order food online (10%)", value: "3M", n: 3 },
        { label: "Zomato share (50%)", value: "1.5M", n: 1.5 },
        { label: "Order on a Saturday (20%)", value: "300,000", n: 0.3 },
        { label: "×1.5 orders each", value: "450,000", n: 0.45 }
      ] },
      { t: "answer", label: "Zomato orders on a Saturday in Delhi", x: "≈ 450,000" },
      { t: "p", x: "That last step — multiple orders per person — is easy to forget and it matters. Behaviour, not just headcount, drives the real number." }
    ]
  },
  {
    slug: "bigbasket-pune", company: "BigBasket", wordmark: "bigbasket", brand: "#84c225", readTime: "4 min read",
    title: "How many orders does BigBasket fulfill in Pune on a weekday?",
    body: [
      { t: "p", x: "A tidy funnel with one extra twist at the end — market share. Anchor on Pune, narrow to daily online-grocery orders, then take BigBasket's slice." },
      { t: "note", x: "Approach: population funnel → daily orders → market share." },
      { t: "step", label: "STEP 1", x: "Pune's online grocery shoppers" },
      { t: "p", x: "Pune ~3.1M people; ~50% internet → 1.55M; ~20% use online grocery → 310,000 potential shoppers." },
      { t: "step", label: "STEP 2", x: "Who orders today" },
      { t: "p", x: "Grocery isn't daily. Say ~10% order on a given weekday → 31,000 daily orders across all platforms." },
      { t: "step", label: "STEP 3", x: "BigBasket's share" },
      { t: "p", x: "As one of several players, give BigBasket ~30% → the rest is arithmetic." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Pune population", value: "3.1M", n: 3.1 },
        { label: "Internet users (50%)", value: "1.55M", n: 1.55 },
        { label: "Online grocery shoppers (20%)", value: "310,000", n: 0.31 },
        { label: "Order on a given day (10%)", value: "31,000", n: 0.031 },
        { label: "BigBasket share (30%)", value: "≈ 9,300", n: 0.0093 }
      ] },
      { t: "answer", label: "BigBasket orders in Pune", x: "≈ 9,300 / weekday" },
      { t: "p", x: "Whenever a market has clear rivals, add a market-share step. Skipping it is the most common way guesstimates come out wildly too big." }
    ]
  },
  {
    slug: "byjus-subscribers", company: "Byju's", wordmark: "BYJU'S", brand: "#813588", readTime: "4 min read",
    title: "How many new subscribers does Byju's gain in a month?",
    body: [
      { t: "p", x: "The neat twist here: new subscribers come from a growth RATE on an existing base. So I size the base first, then apply monthly growth." },
      { t: "note", x: "Approach: size the existing base → apply a monthly growth rate." },
      { t: "step", label: "STEP 1", x: "The audience" },
      { t: "p", x: "Byju's targets school students — ~350M in India; ~50% with internet access → 175M reachable." },
      { t: "step", label: "STEP 2", x: "Existing base" },
      { t: "p", x: "As a leader (but not the only player), assume ~15% penetration → ~26.25M existing users." },
      { t: "step", label: "STEP 3", x: "Monthly growth" },
      { t: "p", x: "Apply a modest ~2% monthly growth to that base for new subscribers." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Students in India", value: "350M", n: 350 },
        { label: "With internet (50%)", value: "175M", n: 175 },
        { label: "Byju's penetration (15%)", value: "26.25M", n: 26.25 },
        { label: "New subs (2% growth)", value: "525,000", n: 0.525 }
      ] },
      { t: "answer", label: "New Byju's subscribers", x: "≈ 525,000 / month" },
      { t: "p", x: "'New per month' almost always means a rate on a base, not a fresh funnel. Spotting that framing instantly is a lovely little tell of a sharp PM." }
    ]
  },
  {
    slug: "office365-india", company: "Microsoft 365", wordmark: "Office 365", brand: "#d83b01", readTime: "4 min read",
    title: "How many Microsoft Office 365 users are there in India?",
    body: [
      { t: "p", x: "Top-down again, but with a smart middle cut: Office 365 lives in work and study, so I narrow to the workforce-and-students slice before applying adoption." },
      { t: "note", x: "Approach: top-down — population → internet → workforce/education → Office 365 adoption." },
      { t: "step", label: "STEP 1", x: "Population & internet" },
      { t: "p", x: "India ~1.4B people; ~50% online → ~700M internet users." },
      { t: "step", label: "STEP 2", x: "Narrow to work & study" },
      { t: "p", x: "Office 365 is used mostly by professionals and students — say ~40% of the population fits → ~280M potential users." },
      { t: "step", label: "STEP 3", x: "Adoption" },
      { t: "p", x: "Against free alternatives, assume ~40% of that base actually uses Office 365." },
      { t: "calc", label: "The funnel", rows: [
        { label: "India population", value: "1.4B", n: 1400 },
        { label: "Internet users (50%)", value: "700M", n: 700 },
        { label: "Workforce / education (40%)", value: "280M", n: 280 },
        { label: "Use Office 365 (40%)", value: "112M", n: 112 }
      ] },
      { t: "answer", label: "Office 365 users in India", x: "≈ 112 million" },
      { t: "p", x: "The 'narrow to the relevant slice' step (work + study) is what keeps a productivity-tool estimate from ballooning to the whole population. Context cuts are gold." }
    ]
  },
  {
    slug: "unacademy-hours", company: "Unacademy", wordmark: "unacademy", brand: "#0b8457", readTime: "4 min read",
    title: "How many hours of video content are consumed on Unacademy daily?",
    body: [
      { t: "p", x: "This is a consumption question — so once I have active users, I just multiply by hours-per-user. The funnel gets me the users; one clean multiply gets me the hours." },
      { t: "note", x: "Approach: users funnel → active users → hours per user." },
      { t: "step", label: "STEP 1", x: "Potential users" },
      { t: "p", x: "Like UpGrad, Unacademy targets learners and professionals — take a potential base of ~50M." },
      { t: "step", label: "STEP 2", x: "Active users" },
      { t: "p", x: "Assume ~15% active → 7.5M active learners." },
      { t: "step", label: "STEP 3", x: "Hours per user" },
      { t: "p", x: "Unacademy is video-first. Say an active learner watches ~1 hour/day (one lecture or several short clips)." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Potential users", value: "50M", n: 50 },
        { label: "Active users (15%)", value: "7.5M", n: 7.5 },
        { label: "Hours each (×1 hr/day)", value: "7.5M hrs", n: 7.5 }
      ] },
      { t: "answer", label: "Video consumed on Unacademy", x: "≈ 7.5 million hours / day" },
      { t: "p", x: "Reusing an audience anchor across similar products (UpGrad, Unacademy) is totally fair — just say so. Consistency in your assumptions signals clear thinking." }
    ]
  },
  {
    slug: "freshworks-businesses", company: "Freshworks", wordmark: "Freshworks", brand: "#e8532f", readTime: "5 min read",
    title: "How many businesses use Freshworks products globally?",
    body: [
      { t: "p", x: "For a B2B product I'll do something extra confident — estimate two independent ways (top-down and bottom-up) and reconcile them. When two paths land near each other, trust soars." },
      { t: "note", x: "Approach: top-down AND bottom-up, then reconcile the two." },
      { t: "step", label: "STEP 1", x: "Top-down" },
      { t: "p", x: "~200M businesses globally; ~10% need CRM/support/ITSM tools → 20M; Freshworks captures ~5% → ~1M businesses." },
      { t: "calc", label: "Top-down funnel", rows: [
        { label: "Businesses globally", value: "200M", n: 200 },
        { label: "Need such tools (10%)", value: "20M", n: 20 },
        { label: "Freshworks share (5%)", value: "1M", n: 1 }
      ] },
      { t: "step", label: "STEP 2", x: "Bottom-up cross-check" },
      { t: "p", x: "By region: India ~2M mid/large × 10% = 200k; US ~10M × 3% = 300k; Europe ~10M × 2% = 200k. Add them → ~700k businesses." },
      { t: "note", x: "Two methods, two answers: ~1M (top-down) and ~700k (bottom-up). A blend around the middle is the honest call." },
      { t: "answer", label: "Businesses using Freshworks", x: "≈ 850,000" },
      { t: "p", x: "Estimating two ways and reconciling is the most senior move in guesstimates. When your paths agree, you're clearly not fooling yourself — and interviewers love that." }
    ]
  },
  {
    slug: "dream11-ipl", company: "Dream11", wordmark: "Dream11", brand: "#d13239", readTime: "5 min read",
    title: "How many active users does Dream11 have during the IPL season?",
    body: [
      { t: "p", x: "Cricket is the anchor here — India runs on it. I'll funnel from fans to fantasy players to Dream11's share, then apply the IPL surge at the very end." },
      { t: "note", x: "Approach: fan funnel → fantasy interest → market share → IPL surge." },
      { t: "step", label: "STEP 1", x: "Cricket fans online" },
      { t: "p", x: "Say 50% of 1.4B are cricket fans → 700M; ~50% online → 350M cricket-loving internet users." },
      { t: "step", label: "STEP 2", x: "Fantasy interest & share" },
      { t: "p", x: "Only some play fantasy — take ~10% → 35M potential fantasy users. Dream11's ~50% share → 17.5M." },
      { t: "step", label: "STEP 3", x: "IPL surge" },
      { t: "p", x: "During the IPL, activity roughly doubles. Apply ×2." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Cricket fans (50% of 1.4B)", value: "700M", n: 700 },
        { label: "Internet users (50%)", value: "350M", n: 350 },
        { label: "Fantasy-cricket interest (10%)", value: "35M", n: 35 },
        { label: "Dream11 share (50%)", value: "17.5M", n: 17.5 },
        { label: "IPL surge (×2)", value: "35M", n: 35 }
      ] },
      { t: "answer", label: "Dream11 active users during IPL", x: "≈ 35 million" },
      { t: "p", x: "Seasonal products need a surge multiplier at the end — apply it last, after you've built the steady-state base. Order of operations keeps it clean." }
    ]
  },
  {
    slug: "practo-appointments", company: "Practo", wordmark: "practo", brand: "#14bef0", readTime: "4 min read",
    title: "How many appointments are booked through Practo daily in India?",
    body: [
      { t: "p", x: "Instead of anchoring on patients, I'll anchor on the scarce side — doctors. There are far fewer of them, which makes the estimate tighter and cleaner." },
      { t: "note", x: "Approach: supply-side anchor — doctors on the platform × appointments each." },
      { t: "step", label: "STEP 1", x: "Doctors on Practo" },
      { t: "p", x: "India has ~1.3M allopathic doctors; assume ~10% use Practo → 130,000 doctors." },
      { t: "step", label: "STEP 2", x: "Doctors with appointments" },
      { t: "p", x: "Not all are booked daily. Say ~50% have at least one Practo appointment a day → 65,000." },
      { t: "step", label: "STEP 3", x: "Appointments per doctor" },
      { t: "p", x: "A booked doctor likely has more than one — average ~3 Practo appointments/day." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Doctors in India", value: "1.3M", n: 1300000 },
        { label: "On Practo (10%)", value: "130,000", n: 130000 },
        { label: "With ≥1 appt/day (50%)", value: "65,000", n: 65000 },
        { label: "×3 appts each", value: "195,000", n: 195000 }
      ] },
      { t: "answer", label: "Appointments booked via Practo", x: "≈ 195,000 / day" },
      { t: "p", x: "Anchoring on the smaller side of a marketplace (doctors, not patients) often gives a tighter, more defensible estimate. Pick the side you can size best." }
    ]
  },
  {
    slug: "paytm-transactions", company: "Paytm", wordmark: "Paytm", brand: "#00a7e1", readTime: "5 min read",
    title: "Estimate the total value of transactions processed by Paytm in a week.",
    body: [
      { t: "p", x: "Value questions add one more multiply than count questions: users → transactions → value per transaction. Let's stack those cleanly." },
      { t: "note", x: "Approach: active users × transactions/week × average value." },
      { t: "step", label: "STEP 1", x: "Active users" },
      { t: "p", x: "India ~1.4B; ~40% smartphones → 560M; as a leading wallet, ~60% use Paytm → ~336M active users." },
      { t: "step", label: "STEP 2", x: "Transactions per user" },
      { t: "p", x: "Paytm spans retail, bills, recharges, shopping. Assume ~10 transactions per user per week." },
      { t: "step", label: "STEP 3", x: "Average value" },
      { t: "p", x: "Balancing tiny retail taps with big bill payments, assume ~₹300 per transaction." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Smartphone users (40%)", value: "560M", n: 560 },
        { label: "Active Paytm users (60%)", value: "336M", n: 336 },
        { label: "Weekly transactions (×10)", value: "3.36B txns" },
        { label: "Value (×₹300)", value: "₹1,008B" }
      ] },
      { t: "answer", label: "Paytm transaction value", x: "≈ ₹1,008 billion / week" },
      { t: "p", x: "For value, always finish with a price-per-unit assumption, and say why you picked it. A stated average value is what turns a volume guess into a rupee figure." }
    ]
  },
  {
    slug: "razorpay-volume", company: "Razorpay", wordmark: "Razorpay", brand: "#3395ff", readTime: "5 min read",
    title: "Estimate the value of transactions processed by Razorpay in a day.",
    body: [
      { t: "p", x: "Razorpay's customers are businesses, and they're wildly different in size. So instead of one average, I'll segment into tiers and sum — much more honest than pretending a startup and an enterprise transact alike." },
      { t: "note", x: "Approach: segment businesses by size → daily volume per tier → sum." },
      { t: "step", label: "STEP 1", x: "Businesses on Razorpay" },
      { t: "p", x: "Assume ~600,000 businesses use Razorpay today." },
      { t: "step", label: "STEP 2", x: "Split by tier & assign volume" },
      { t: "p", x: "Small (50% → 300k) at ~$500/day, medium (30% → 180k) at ~$2,000/day, large (20% → 120k) at ~$5,000/day." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Businesses on Razorpay", value: "600,000" },
        { label: "Small: 300k × $500", value: "$150M", n: 150 },
        { label: "Medium: 180k × $2,000", value: "$360M", n: 360 },
        { label: "Large: 120k × $5,000", value: "$600M", n: 600 },
        { label: "Total daily volume", value: "≈ $1.11B", n: 1110 }
      ] },
      { t: "answer", label: "Razorpay transaction volume", x: "≈ $1.11 billion / day" },
      { t: "p", x: "When your population is lumpy — tiny shops vs. big enterprises — segment before you multiply. One blended average would quietly lie to you here." }
    ]
  },
  {
    slug: "oyo-goa", company: "OYO", wordmark: "OYO", brand: "#ee2e24", readTime: "6 min read",
    title: "Estimate the occupancy rate of OYO Rooms in Goa during peak season.",
    body: [
      { t: "p", x: "Occupancy is a ratio — room-nights sold ÷ room-nights available — so I build both halves and divide. This one also has a beautiful lesson about catching yourself when the math goes impossible." },
      { t: "note", x: "Approach: build room-nights demanded and room-nights available, then divide — and sanity-check the result." },
      { t: "step", label: "STEP 1", x: "Peak tourists in Goa" },
      { t: "p", x: "Goa gets ~8M tourists/year → ~660k/month; December's peak adds ~50% → ~990k tourists." },
      { t: "step", label: "STEP 2", x: "The trap — and the fix" },
      { t: "p", x: "First I assumed 5% of tourists use OYO... and the math spat out 120% occupancy. Impossible! That's my cue that an assumption is off. Dialing OYO's share down to a more realistic ~2% fixes it." },
      { t: "note", x: "This is the whole point of a guesstimate: if your answer breaks reality (occupancy can't exceed 100%), don't ship it — find the wrong assumption and correct it. Reality-checking is a feature, not a failure." },
      { t: "step", label: "STEP 3", x: "Room-nights demanded" },
      { t: "p", x: "2% of 990k → 19,800 OYO guests; average stay ~3 nights → 59,400 room-nights demanded." },
      { t: "step", label: "STEP 4", x: "Room-nights available" },
      { t: "p", x: "Assume ~4,000 OYO rooms in Goa × 31 nights → 124,000 room-nights available." },
      { t: "calc", label: "The funnel", rows: [
        { label: "December tourists (+50%)", value: "990,000", n: 990000 },
        { label: "Use OYO (2%)", value: "19,800", n: 19800 },
        { label: "Room-nights demanded (×3)", value: "59,400", n: 59400 },
        { label: "Room-nights available (4,000×31)", value: "124,000", n: 124000 }
      ] },
      { t: "answer", label: "OYO occupancy in Goa (peak)", x: "≈ 48%" },
      { t: "p", x: "Best lesson in this whole set: a guesstimate that violates reality is a gift — it's pointing straight at your broken assumption. Fix it, and your final answer earns real trust." }
    ]
  },
  {
    slug: "curefit-live", company: "Cure.fit", wordmark: "cure.fit", brand: "#f5515f", readTime: "5 min read",
    title: "Estimate the number of users who attend live classes on the Cure.fit app daily.",
    body: [
      { t: "p", x: "A longer funnel, but each cut is simple. Urban → smartphone → fitness-interested → downloads → active → live-class attendees. Take it one honest step at a time." },
      { t: "note", x: "Approach: urban-population funnel → downloads → active users → live-class share." },
      { t: "step", label: "STEP 1", x: "Urban smartphone users" },
      { t: "p", x: "Urban India ~34% of 1.4B ≈ 476M; ~65% smartphones → ~310M." },
      { t: "step", label: "STEP 2", x: "Fitness interest → downloads" },
      { t: "p", x: "Say ~15% are fitness-interested and download Cure.fit → ~46.5M downloads." },
      { t: "step", label: "STEP 3", x: "Active, then live" },
      { t: "p", x: "Apply a ~25% MAU ratio → ~11.6M active; of those, ~8% attend live classes daily (others use recorded classes or centres)." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Urban population (34%)", value: "476M", n: 476 },
        { label: "Smartphone users (65%)", value: "310M", n: 310 },
        { label: "Fitness-interested (15%)", value: "46.5M", n: 46.5 },
        { label: "Active users (25% MAU)", value: "11.6M", n: 11.6 },
        { label: "Attend live daily (8%)", value: "928,000", n: 0.928 }
      ] },
      { t: "answer", label: "Cure.fit live-class attendees", x: "≈ 928,000 / day" },
      { t: "p", x: "Long funnels feel scary but they're just short ones stacked. State each percentage, keep moving, and the final number arrives on its own. Structure beats fear." }
    ]
  },
  {
    slug: "policybazaar-policies", company: "PolicyBazaar", wordmark: "policybazaar", brand: "#00b9f5", readTime: "4 min read",
    title: "Estimate the number of insurance policies sold via PolicyBazaar in a month.",
    body: [
      { t: "p", x: "PolicyBazaar sells many insurance types. Rather than juggle all of them, I'll pick ONE clean category — car insurance — solve it well, and say I'd repeat the pattern for the rest. Scoping down is a strength." },
      { t: "note", x: "Approach: scope to one category (car insurance), then anchor on vehicles." },
      { t: "step", label: "STEP 1", x: "Cars on the road" },
      { t: "p", x: "~230M registered vehicles in India; ~20% are four-wheelers → 46M cars." },
      { t: "step", label: "STEP 2", x: "Monthly renewals" },
      { t: "p", x: "Car insurance is annual, so ~46M ÷ 12 ≈ 3.8M cars need insurance each month." },
      { t: "step", label: "STEP 3", x: "PolicyBazaar's share" },
      { t: "p", x: "Assume ~10% of those go through PolicyBazaar." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Registered vehicles", value: "230M", n: 230 },
        { label: "Four-wheelers (20%)", value: "46M", n: 46 },
        { label: "Monthly renewals (÷12)", value: "3.8M / mo", n: 3.8 },
        { label: "Via PolicyBazaar (10%)", value: "380,000", n: 0.38 }
      ] },
      { t: "answer", label: "Car-insurance policies via PolicyBazaar", x: "≈ 380,000 / month" },
      { t: "p", x: "When a product spans many categories, pick one, nail it, and note the method generalises. Trying to solve all categories at once is how you drown in a guesstimate." }
    ]
  },
  {
    slug: "ola-bangalore", company: "Ola", wordmark: "Ola", brand: "#1a1712", readTime: "5 min read",
    title: "Estimate the number of Ola rides taken in Bangalore on a daily basis.",
    body: [
      { t: "p", x: "I'll anchor on commuting — the biggest, most predictable source of rides — then add a slice for non-work trips. Two buckets, added together, feel more complete than one." },
      { t: "note", x: "Approach: working population → Ola commuters → rides/day → add non-work rides." },
      { t: "step", label: "STEP 1", x: "Working Ola users" },
      { t: "p", x: "Bangalore ~12M; ~30% working & employed → 3.6M; ~15% use Ola → 540,000 commuters." },
      { t: "step", label: "STEP 2", x: "Commute rides" },
      { t: "p", x: "People commute twice a day but not always via Ola — average ~1.2 rides/day → ~648,000 work rides." },
      { t: "step", label: "STEP 3", x: "Add non-work rides" },
      { t: "p", x: "Shopping, social trips and the like add roughly ~20% more → ~130,000 extra rides." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Bangalore population", value: "12M", n: 12 },
        { label: "Working & employed (30%)", value: "3.6M", n: 3.6 },
        { label: "Use Ola (15%)", value: "540,000", n: 0.54 },
        { label: "Work rides (×1.2/day)", value: "648,000", n: 0.648 },
        { label: "Non-work (+20%)", value: "≈ 778,000", n: 0.778 }
      ] },
      { t: "answer", label: "Ola rides in Bangalore", x: "≈ 778,000 / day" },
      { t: "p", x: "Splitting into 'work' and 'non-work' rides catches demand a single commute assumption would miss. When a product serves multiple occasions, add the buckets." }
    ]
  },
  {
    slug: "inmobi-impressions", company: "InMobi", wordmark: "InMobi", brand: "#e43e30", readTime: "4 min read",
    title: "Estimate the number of ad impressions served by InMobi in a day.",
    body: [
      { t: "p", x: "Ad impressions are a big multiply: people × screen time × ad frequency × market share. Each factor is a simple guess; the product is enormous — which is exactly right for global advertising." },
      { t: "note", x: "Approach: smartphone users × hours × ads/hour × market share." },
      { t: "step", label: "STEP 1", x: "The audience" },
      { t: "p", x: "InMobi is global — anchor on ~3.8B smartphone users worldwide." },
      { t: "step", label: "STEP 2", x: "Exposure per user" },
      { t: "p", x: "Say ~3 hours/day of app/web use, seeing ~1 ad every 5 minutes → 12 ads/hour → 36 ad views per user per day." },
      { t: "step", label: "STEP 3", x: "InMobi's share" },
      { t: "p", x: "InMobi serves a slice of all mobile ads — assume ~10% market share." },
      { t: "calc", label: "The funnel", rows: [
        { label: "Global smartphone users", value: "3.8B", n: 3800 },
        { label: "Ad views/day (×3 hrs ×12/hr)", value: "136.8B", n: 136800 },
        { label: "InMobi share (10%)", value: "13.68B", n: 13680 }
      ] },
      { t: "answer", label: "InMobi ad impressions", x: "≈ 13.68 billion / day" },
      { t: "p", x: "Don't flinch at billions — advertising is a volume game and big final numbers are correct. Keep each factor sane and let the multiplication do its thing." }
    ]
  },
  {
    slug: "google-us-searches", company: "Google", wordmark: "Google", brand: "#4285f4", readTime: "4 min read",
    title: "Estimate the daily volume of Google searches made in the United States.",
    body: [
      { t: "p", x: "A textbook top-down to close on. Population → internet users → Google users → searches per person. Four clean cuts and we land." },
      { t: "note", x: "Approach: top-down — population → internet → Google users → searches per user." },
      { t: "step", label: "STEP 1", x: "Population & internet" },
      { t: "p", x: "US ~330M; ~90% online → ~297M internet users." },
      { t: "step", label: "STEP 2", x: "Google users" },
      { t: "p", x: "Google dominates search — say ~90% of internet users → ~267M Google users." },
      { t: "step", label: "STEP 3", x: "Searches per user" },
      { t: "p", x: "Some search once or twice, others dozens of times. A reasonable average is ~5 searches/day." },
      { t: "calc", label: "The funnel", rows: [
        { label: "US population", value: "330M", n: 330 },
        { label: "Internet users (90%)", value: "297M", n: 297 },
        { label: "Google users (90%)", value: "267M", n: 267 },
        { label: "Searches / day (×5)", value: "1.335B", n: 1335 }
      ] },
      { t: "answer", label: "Google searches in the US", x: "≈ 1.335 billion / day" },
      { t: "p", x: "You've now seen top-down, bottom-up, capacity, supply-side, ratio and segmented approaches. That's the whole toolkit — pick the anchor you can size best, state every assumption, and sanity-check. Go crack any guesstimate. You've got this." }
    ]
  }
];
