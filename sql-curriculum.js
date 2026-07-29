/* sql-curriculum.js — the 10-day SQL bootcamp: 3 levels, 30 missions.
   Written in Shubham's voice. Every solution runs on sql-engine.js.
   Add lessons anytime: the map, XP maths and day plan all recompute. */
window.SQL_CURRICULUM = {
  promise: {
    days: 10,
    hours: 2,
    missions: 30,
    headline: "Zero to interview-ready SQL in 10 days.",
    guarantee: "Finish all 30 missions in order, 2 focused hours a day, and you will walk into a SQL interview round able to read any question, break it down out loud, and write the query. If you finish all 30 and still can't, email me and I'll sit with you personally until you can. That's in writing."
  },
  levels: [
    {
      id: "basics",
      name: "BOOT SECTOR",
      sub: "Basics",
      days: "Day 1 – 3",
      xp: 60,
      accent: "#2ee6d6",
      blurb: "Reading data, filtering it, sorting it, counting it. Twelve missions and you can already answer most day-one analyst questions.",
      lessons: [
        {
          id: "b1", title: "SELECT", tag: "Ask your first question",
          concept: [
            "SQL is you asking a database a question in almost-plain English. That's the whole trick. SELECT picks the columns you want. FROM says which table to pull them from.",
            "Tables are grids: rows are records, columns are fields. SELECT never changes anything — you're just looking. So poke around fearlessly. You cannot break this."
          ],
          syntax: "SELECT column_a, column_b\nFROM table_name;",
          demo: "SELECT name, city FROM users;",
          mission: "Pull every user's name and their plan. Two columns, nothing else.",
          starter: "SELECT ",
          solution: "SELECT name, plan FROM users;",
          hints: ["Two column names after SELECT, separated by a comma.", "The table is called users. Finish with a semicolon."],
          fact: { t: "1974 · the name", x: "SQL was born at IBM as SEQUEL — Structured English QUEry Language. Legal made them drop the vowels because a British aircraft company already owned the SEQUEL trademark. Half the industry still says \"sequel\" out loud anyway. You're allowed to." }
        },
        {
          id: "b2", title: "DISTINCT", tag: "Kill the duplicates",
          concept: [
            "Real data repeats itself constantly. DISTINCT collapses repeated values so you see the unique set — every city, every plan, every status.",
            "It goes right after SELECT, and it applies to the whole row you selected, not just one column. Remember that. It's an interview trap."
          ],
          syntax: "SELECT DISTINCT column\nFROM table_name;",
          demo: "SELECT DISTINCT plan FROM users;",
          mission: "Which cities do our users come from? Every city, listed once.",
          starter: "SELECT ",
          solution: "SELECT DISTINCT city FROM users;",
          hints: ["DISTINCT sits between SELECT and the column name.", "One column: city."],
          fact: { t: "1970 · the paper", x: "Everything you're learning traces back to one 1970 paper by Edgar F. Codd at IBM: \"A Relational Model of Data for Large Shared Data Banks.\" Management ignored it for years. A young Larry Ellison did not — and built Oracle on it." }
        },
        {
          id: "b3", title: "WHERE", tag: "Filter with numbers",
          concept: [
            "WHERE is the line where analysts earn their money. It keeps only the rows that pass a test: >, <, >=, <=, = and != all work exactly like you'd expect.",
            "Order matters: SELECT ... FROM ... WHERE. Say it out loud a few times — what, from where, and only if."
          ],
          syntax: "SELECT columns\nFROM table\nWHERE column > 100;",
          demo: "SELECT id, amount FROM orders WHERE amount < 800;",
          mission: "Show the id and amount of every order above 2000.",
          starter: "SELECT id, amount\nFROM orders\nWHERE ",
          solution: "SELECT id, amount FROM orders WHERE amount > 2000;",
          hints: ["Use the greater-than sign on the amount column.", "WHERE amount > 2000"],
          fact: { t: "declarative", x: "You never tell SQL *how* to find the rows. You describe what you want, and the query planner figures out the how. That's why SQL has outlived nearly every programming language it was born alongside." }
        },
        {
          id: "b4", title: "LIKE", tag: "Filter with text",
          concept: [
            "Text filters use quotes: WHERE city = 'Kolkata'. Single quotes, always — double quotes mean something else in SQL.",
            "For partial matches, LIKE with the % wildcard is your friend. 'A%' means starts with A. '%kit' means ends with kit. '%data%' means contains data anywhere."
          ],
          syntax: "SELECT columns FROM table\nWHERE column LIKE 'A%';",
          demo: "SELECT name, category FROM products WHERE category = 'courses';",
          mission: "Find every user whose name starts with A. Return the name only.",
          starter: "SELECT name\nFROM users\nWHERE ",
          solution: "SELECT name FROM users WHERE name LIKE 'A%';",
          hints: ["LIKE plus a % wildcard after the letter.", "WHERE name LIKE 'A%'"],
          fact: { t: "Bobby Tables", x: "The most famous joke in database history: a kid named \"Robert'); DROP TABLE Students;--\" wipes a school's records. The lesson isn't funny though — never glue user input into a query string. Use parameters. Interviewers love asking why." }
        },
        {
          id: "b5", title: "AND / OR / NOT", tag: "Stack your conditions",
          concept: [
            "One filter is rarely enough. AND means both must be true. OR means either. NOT flips a condition.",
            "When you mix AND and OR, wrap the OR part in brackets. AND binds tighter than OR, and that single detail has broken more dashboards than any bug I know."
          ],
          syntax: "WHERE status = 'paid'\n  AND amount > 1000",
          demo: "SELECT name, plan, city FROM users WHERE plan = 'pro' OR plan = 'team';",
          mission: "Paid orders above 2000. Return id, amount and status.",
          starter: "SELECT id, amount, status\nFROM orders\nWHERE ",
          solution: "SELECT id, amount, status FROM orders WHERE status = 'paid' AND amount > 2000;",
          hints: ["Two conditions joined with AND.", "status = 'paid' AND amount > 2000"],
          fact: { t: "war story", x: "The oldest horror story in the industry: an engineer writes UPDATE users SET plan = 'free' and forgets the WHERE. Every single customer gets downgraded in one keystroke. Pros write the WHERE clause first, then go back and add the UPDATE." }
        },
        {
          id: "b6", title: "IN / BETWEEN", tag: "Shortcuts that read better",
          concept: [
            "IN ('a','b','c') replaces a pile of ORs. BETWEEN 500 AND 1500 replaces two comparisons — and it's inclusive on both ends.",
            "These aren't faster. They're clearer. Clear queries get reviewed and shipped; clever queries get questioned."
          ],
          syntax: "WHERE plan IN ('free','team')\nWHERE amount BETWEEN 500 AND 1500",
          demo: "SELECT name, plan FROM users WHERE plan IN ('free','team');",
          mission: "Orders between 500 and 1500 rupees, inclusive. Return id and amount.",
          starter: "SELECT id, amount\nFROM orders\nWHERE ",
          solution: "SELECT id, amount FROM orders WHERE amount BETWEEN 500 AND 1500;",
          hints: ["BETWEEN takes a low value AND a high value.", "WHERE amount BETWEEN 500 AND 1500"],
          fact: { t: "everywhere", x: "SQLite — one small file, no server — is probably the most deployed piece of software on earth. It's inside every Android phone, every iPhone, every major browser, most cars and plenty of aircraft. You're carrying several databases right now." }
        },
        {
          id: "b7", title: "NULL", tag: "The value that isn't",
          concept: [
            "NULL is not zero and not an empty string. It means unknown. And because it's unknown, NULL = NULL is not true — it's unknown too.",
            "So you can never filter with = NULL. You use IS NULL and IS NOT NULL. This one line has saved careers."
          ],
          syntax: "WHERE column IS NULL\nWHERE column IS NOT NULL",
          demo: "SELECT id, rating FROM reviews WHERE rating IS NOT NULL;",
          mission: "One user never filled in their city. Find them — name only.",
          starter: "SELECT name\nFROM users\nWHERE ",
          solution: "SELECT name FROM users WHERE city IS NULL;",
          hints: ["Not = NULL. Never = NULL.", "WHERE city IS NULL"],
          fact: { t: "Mr. NULL", x: "A California man got a vanity plate that read NULL, hoping to dodge tickets. Instead the state's system dumped every ticket with a missing plate onto him — thousands of dollars of them. There are people with the surname Null who can't book flights online for the same reason." }
        },
        {
          id: "b8", title: "ORDER BY", tag: "Sort the answer",
          concept: [
            "Databases return rows in whatever order is convenient for them. If you want an order, you ask for it.",
            "ORDER BY column sorts ascending by default. Add DESC for biggest-first. You can sort by several columns — the second one breaks ties in the first."
          ],
          syntax: "SELECT columns FROM table\nORDER BY column DESC;",
          demo: "SELECT name, age FROM users ORDER BY age ASC;",
          mission: "All products, most expensive first. Return name and price.",
          starter: "SELECT name, price\nFROM products\n",
          solution: "SELECT name, price FROM products ORDER BY price DESC;",
          hints: ["ORDER BY goes after FROM.", "ORDER BY price DESC"],
          fact: { t: "1986 · standard", x: "SQL became an ANSI standard in 1986 and ISO in 1987. That's why the skill travels: Postgres, MySQL, Snowflake, BigQuery, SQLite, Redshift — the dialects differ at the edges, but what you're learning right now works in all of them." }
        },
        {
          id: "b9", title: "LIMIT", tag: "Just the top few",
          concept: [
            "LIMIT caps how many rows come back. Pair it with ORDER BY and you have the classic \"top N\" answer that every interviewer asks for.",
            "It's also a safety habit. Exploring an unknown table? LIMIT 10 first. Always."
          ],
          syntax: "SELECT columns FROM table\nORDER BY column DESC\nLIMIT 5;",
          demo: "SELECT name, price FROM products ORDER BY price DESC LIMIT 3;",
          mission: "The 3 cheapest products. Return name and price, cheapest first.",
          starter: "SELECT name, price\nFROM products\n",
          solution: "SELECT name, price FROM products ORDER BY price ASC LIMIT 3;",
          hints: ["Sort ascending, then cut it off.", "ORDER BY price ASC LIMIT 3"],
          fact: { t: "the classic mistake", x: "Every analyst has once run SELECT * on a table with 400 million rows and watched their laptop die. Nobody does it twice. LIMIT is not training wheels — senior people use it more than juniors do." }
        },
        {
          id: "b10", title: "Aliases & maths", tag: "Make columns yours",
          concept: [
            "You can do arithmetic right in the SELECT: amount / quantity, price * 0.9, age + 1. The database computes it per row.",
            "Then name the result with AS. Nobody wants a dashboard column called \"amount/quantity\". Naming is not decoration — it's how your work gets understood."
          ],
          syntax: "SELECT price * 2 AS double_price\nFROM products;",
          demo: "SELECT name, price, price * 2 AS pair_price FROM products;",
          mission: "For every order show id, and amount divided by quantity, named unit_price.",
          starter: "SELECT id, ",
          solution: "SELECT id, amount / quantity AS unit_price FROM orders;",
          hints: ["Divide with the / sign, then rename it with AS.", "amount / quantity AS unit_price"],
          fact: { t: "optimiser", x: "Write a / b or b / a in the wrong order and SQL will happily return a confident wrong number. The database checks your syntax, never your logic. That's your job — and it's exactly what interviews test." }
        },
        {
          id: "b11", title: "Aggregates", tag: "Squash rows into numbers",
          concept: [
            "COUNT, SUM, AVG, MIN and MAX collapse many rows into one number. This is where you stop listing data and start answering questions.",
            "COUNT(*) counts rows. COUNT(column) counts rows where that column isn't NULL. Those two are different numbers, and knowing why puts you ahead of most candidates."
          ],
          syntax: "SELECT COUNT(*) AS n,\n       SUM(amount) AS total\nFROM orders;",
          demo: "SELECT MIN(price) AS cheapest, MAX(price) AS priciest FROM products;",
          mission: "One row, three numbers: order count as orders, total revenue as revenue, average order value as aov.",
          starter: "SELECT ",
          solution: "SELECT COUNT(*) AS orders, SUM(amount) AS revenue, AVG(amount) AS aov FROM orders;",
          hints: ["Three aggregate functions in one SELECT, each with its own alias.", "COUNT(*) AS orders, SUM(amount) AS revenue, AVG(amount) AS aov"],
          fact: { t: "COUNT trap", x: "In our reviews table one rating is NULL. COUNT(*) says 12 rows. COUNT(rating) says 11. If you ever report an average that looks suspiciously high, NULLs are usually the reason — they're skipped, not treated as zero." }
        },
        {
          id: "b12", title: "GROUP BY", tag: "One number per bucket",
          concept: [
            "GROUP BY is the single most important clause in analytics. It splits rows into buckets, then runs your aggregate once per bucket.",
            "The rule that keeps you safe: every column in your SELECT is either inside an aggregate, or listed in the GROUP BY. No exceptions."
          ],
          syntax: "SELECT category, SUM(price) AS total\nFROM products\nGROUP BY category;",
          demo: "SELECT plan, COUNT(*) AS users FROM users GROUP BY plan;",
          mission: "Revenue per order status: return status and SUM(amount) as revenue.",
          starter: "SELECT status, ",
          solution: "SELECT status, SUM(amount) AS revenue FROM orders GROUP BY status;",
          hints: ["Aggregate the amount, then group by the status column.", "SELECT status, SUM(amount) AS revenue FROM orders GROUP BY status"],
          fact: { t: "the filter", x: "Ask any hiring manager where SQL interviews are won and lost and you'll hear the same answer: GROUP BY. Master it and you've cleared the bar most people never do. You just did. Basics complete — go tell someone." }
        }
      ]
    },
    {
      id: "inter",
      name: "CORE ACCESS",
      sub: "Intermediate",
      days: "Day 4 – 7",
      xp: 90,
      accent: "#5b2fe0",
      blurb: "Joins, conditional logic, subqueries — the level where you stop querying one table and start answering real product questions.",
      lessons: [
        {
          id: "i1", title: "HAVING", tag: "Filter the groups",
          concept: [
            "WHERE filters rows before grouping. HAVING filters the groups after. You cannot use an aggregate in WHERE — that's what HAVING is for.",
            "Read a query in this order and it clicks forever: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT."
          ],
          syntax: "SELECT col, COUNT(*) AS n\nFROM table\nGROUP BY col\nHAVING COUNT(*) > 2;",
          demo: "SELECT category, COUNT(*) AS n FROM products GROUP BY category HAVING COUNT(*) > 2;",
          mission: "Which plans have more than 3 users? Return plan and COUNT(*) as users.",
          starter: "SELECT plan, COUNT(*) AS users\nFROM users\nGROUP BY plan\n",
          solution: "SELECT plan, COUNT(*) AS users FROM users GROUP BY plan HAVING COUNT(*) > 3;",
          hints: ["The condition uses the aggregate, so it belongs in HAVING.", "HAVING COUNT(*) > 3"],
          fact: { t: "execution order", x: "SQL is written in one order and executed in another. That's why you can't use a SELECT alias in WHERE — when WHERE runs, the alias doesn't exist yet. Explain that in an interview and watch the room change." }
        },
        {
          id: "i2", title: "INNER JOIN", tag: "Two tables, one answer",
          concept: [
            "Data lives split across tables on purpose. Orders store a user_id, not a name. JOIN stitches them back together on the matching key.",
            "Give tables short aliases (users u, orders o) and qualify your columns (u.name, o.amount). With joins it isn't optional — both tables have an id."
          ],
          syntax: "SELECT u.name, o.amount\nFROM orders o\nJOIN users u ON u.id = o.user_id;",
          demo: "SELECT u.name, o.amount FROM orders o JOIN users u ON u.id = o.user_id LIMIT 5;",
          mission: "The 5 biggest paid orders with the buyer's name. Return name and amount, biggest first.",
          starter: "SELECT u.name, o.amount\nFROM orders o\nJOIN users u ON u.id = o.user_id\n",
          solution: "SELECT u.name, o.amount FROM orders o JOIN users u ON u.id = o.user_id WHERE o.status = 'paid' ORDER BY o.amount DESC LIMIT 5;",
          hints: ["Filter for paid, sort by amount descending, then LIMIT 5.", "WHERE o.status = 'paid' ORDER BY o.amount DESC LIMIT 5"],
          fact: { t: "why split?", x: "Storing the buyer's name on every order would mean updating a hundred rows when someone changes their name — and one typo makes your data lie. Codd's insight was to store each fact once and join when you need it. Fifty years on, nobody's beaten it." }
        },
        {
          id: "i3", title: "LEFT JOIN", tag: "Keep the empties",
          concept: [
            "INNER JOIN drops rows with no match. LEFT JOIN keeps every row from the left table and fills the right side with NULLs when there's nothing to match.",
            "That NULL is a feature. LEFT JOIN plus WHERE right.id IS NULL is how you find what's missing — users who never bought, products never reviewed, signups that never activated."
          ],
          syntax: "SELECT a.x\nFROM a\nLEFT JOIN b ON b.a_id = a.id\nWHERE b.id IS NULL;",
          demo: "SELECT u.name, o.id AS order_id FROM users u LEFT JOIN orders o ON o.user_id = u.id LIMIT 8;",
          mission: "Which users have never ordered anything? Return the name only.",
          starter: "SELECT u.name\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id\n",
          solution: "SELECT u.name FROM users u LEFT JOIN orders o ON o.user_id = u.id WHERE o.id IS NULL;",
          hints: ["After the LEFT JOIN, keep only rows where the order side came back empty.", "WHERE o.id IS NULL"],
          fact: { t: "the money query", x: "\"Who signed up and never came back?\" is the highest-value question in any product company, and it's a LEFT JOIN with an IS NULL. This one pattern has funded entire growth teams." }
        },
        {
          id: "i4", title: "Multi-table joins", tag: "Three tables deep",
          concept: [
            "You can chain joins as long as each one has a clean ON. Orders link to users on user_id, and to products on product_id.",
            "Build these one join at a time and run after each step. Writing all three at once and debugging the mess is how beginners lose an hour."
          ],
          syntax: "FROM orders o\nJOIN users u ON u.id = o.user_id\nJOIN products p ON p.id = o.product_id",
          demo: "SELECT u.name, p.name AS product FROM orders o JOIN users u ON u.id = o.user_id JOIN products p ON p.id = o.product_id LIMIT 5;",
          mission: "The 6 biggest paid orders with buyer name, product name (as product) and amount. Biggest first.",
          starter: "SELECT u.name, p.name AS product, o.amount\nFROM orders o\nJOIN users u ON u.id = o.user_id\n",
          solution: "SELECT u.name, p.name AS product, o.amount FROM orders o JOIN users u ON u.id = o.user_id JOIN products p ON p.id = o.product_id WHERE o.status = 'paid' ORDER BY o.amount DESC LIMIT 6;",
          hints: ["Add a second JOIN to products on p.id = o.product_id.", "Then WHERE o.status = 'paid' ORDER BY o.amount DESC LIMIT 6"],
          fact: { t: "star schema", x: "Almost every analytics warehouse is shaped like this: one big fact table (orders, events) surrounded by small description tables (users, products). Learn to join the middle to the edges and you can read any company's data model on day one." }
        },
        {
          id: "i5", title: "JOIN + GROUP BY", tag: "Revenue by anything",
          concept: [
            "Joins and aggregates together are the workhorse of analytics: join to get the label, group by the label, aggregate the number.",
            "Say the sentence before you write the query. \"Revenue per category\" → number is SUM(amount), bucket is category. The SQL almost writes itself after that."
          ],
          syntax: "SELECT p.category, SUM(o.amount) AS revenue\nFROM orders o\nJOIN products p ON p.id = o.product_id\nGROUP BY p.category;",
          demo: "SELECT p.category, COUNT(*) AS orders FROM orders o JOIN products p ON p.id = o.product_id GROUP BY p.category;",
          mission: "Paid revenue per product category. Return category and SUM(o.amount) as revenue, biggest first.",
          starter: "SELECT p.category, SUM(o.amount) AS revenue\nFROM orders o\nJOIN products p ON p.id = o.product_id\n",
          solution: "SELECT p.category, SUM(o.amount) AS revenue FROM orders o JOIN products p ON p.id = o.product_id WHERE o.status = 'paid' GROUP BY p.category ORDER BY revenue DESC;",
          hints: ["Filter paid rows first, group by category, then sort by your alias.", "WHERE o.status = 'paid' GROUP BY p.category ORDER BY revenue DESC"],
          fact: { t: "one query, one meeting", x: "This exact shape — revenue split by a dimension — is what most weekly business reviews are made of. Learn it well and you'll be the person who answers the question live in the room instead of promising a follow-up." }
        },
        {
          id: "i6", title: "CASE WHEN", tag: "If-else, in SQL",
          concept: [
            "CASE WHEN is your if-else. It walks the conditions top to bottom, takes the first one that's true, and falls back to ELSE.",
            "Use it to turn raw numbers into words humans act on: whale, core, starter. Buckets beat decimals in every stakeholder conversation."
          ],
          syntax: "CASE WHEN x >= 100 THEN 'big'\n     WHEN x >= 10  THEN 'mid'\n     ELSE 'small' END AS bucket",
          demo: "SELECT name, price, CASE WHEN price >= 1500 THEN 'premium' ELSE 'accessible' END AS tier FROM products;",
          mission: "Bucket every order: 'whale' if amount >= 2500, 'core' if >= 1000, else 'starter'. Return id, amount and the bucket as bucket, biggest amount first.",
          starter: "SELECT id, amount,\n  CASE WHEN ",
          solution: "SELECT id, amount, CASE WHEN amount >= 2500 THEN 'whale' WHEN amount >= 1000 THEN 'core' ELSE 'starter' END AS bucket FROM orders ORDER BY amount DESC;",
          hints: ["Two WHENs and an ELSE, then END AS bucket.", "Order matters — check the biggest threshold first."],
          fact: { t: "order matters", x: "Flip the two WHENs and every whale gets labelled core, because 3000 is also >= 1000 and CASE stops at the first match. Silent, plausible, wrong. Always write your thresholds from the top down." }
        },
        {
          id: "i7", title: "CASE inside aggregates", tag: "Rates and percentages",
          concept: [
            "Put a CASE inside SUM and you can count just the rows you care about: SUM(CASE WHEN refunded THEN 1 ELSE 0 END).",
            "Divide that by COUNT(*) and multiply by 100.0 and you have a rate. Use 100.0, not 100 — in many databases integer division quietly throws away your decimals."
          ],
          syntax: "SELECT ROUND(100.0 * SUM(CASE WHEN c THEN 1 ELSE 0 END) / COUNT(*), 1) AS rate\nFROM table;",
          demo: "SELECT COUNT(*) AS all_orders, SUM(CASE WHEN status = 'paid' THEN 1 ELSE 0 END) AS paid_orders FROM orders;",
          mission: "One number: the refund rate as a percentage of all orders, rounded to 1 decimal, named refund_rate.",
          starter: "SELECT ROUND(",
          solution: "SELECT ROUND(100.0 * SUM(CASE WHEN status = 'refunded' THEN 1 ELSE 0 END) / COUNT(*), 1) AS refund_rate FROM orders;",
          hints: ["Count refunded rows with SUM(CASE...), divide by COUNT(*), multiply by 100.0.", "Wrap the whole thing in ROUND(..., 1) and alias it refund_rate."],
          fact: { t: "conversion rate", x: "Every funnel metric you'll ever be asked for is this pattern: numerator with a CASE, denominator with a COUNT. Signup→activation, trial→paid, cart→checkout. One shape, a hundred questions." }
        },
        {
          id: "i8", title: "Grouping by time", tag: "Monthly anything",
          concept: [
            "Our dates are stored as text like 2025-03-21. Take the first 7 characters with SUBSTR(order_date, 1, 7) and you get 2025-03 — a month you can group by.",
            "Because YYYY-MM sorts alphabetically in true date order, ORDER BY month just works. Trends are the most requested chart in existence and this is how you build one."
          ],
          syntax: "SELECT SUBSTR(date_col, 1, 7) AS month,\n       SUM(amount) AS revenue\nFROM table GROUP BY month;",
          demo: "SELECT SUBSTR(signup_date, 1, 7) AS month, COUNT(*) AS signups FROM users GROUP BY month ORDER BY month;",
          mission: "Monthly paid revenue: month (first 7 characters of order_date) and revenue, oldest month first.",
          starter: "SELECT SUBSTR(order_date, 1, 7) AS month, ",
          solution: "SELECT SUBSTR(order_date, 1, 7) AS month, SUM(amount) AS revenue FROM orders WHERE status = 'paid' GROUP BY month ORDER BY month;",
          hints: ["Group by your month alias, and don't forget the paid filter.", "GROUP BY month ORDER BY month"],
          fact: { t: "why ISO wins", x: "The YYYY-MM-DD format isn't an accident — it's ISO 8601, designed so text sorting equals date sorting. Store dates as 12-03-2025 and you'll spend your career fighting your own data." }
        },
        {
          id: "i9", title: "Scalar subqueries", tag: "A query inside a query",
          concept: [
            "You can drop a whole query in brackets wherever a single value belongs. (SELECT AVG(amount) FROM orders) returns one number — compare against it in WHERE.",
            "This is how you answer \"above average\", \"more than the median customer\", \"bigger than last month\" without hardcoding a number that goes stale tomorrow."
          ],
          syntax: "WHERE amount > (SELECT AVG(amount) FROM orders)",
          demo: "SELECT AVG(amount) AS avg_order FROM orders;",
          mission: "Orders bigger than the average order. Return id and amount, biggest first.",
          starter: "SELECT id, amount\nFROM orders\nWHERE amount > (",
          solution: "SELECT id, amount FROM orders WHERE amount > (SELECT AVG(amount) FROM orders) ORDER BY amount DESC;",
          hints: ["The subquery goes in brackets inside WHERE.", "WHERE amount > (SELECT AVG(amount) FROM orders) ORDER BY amount DESC"],
          fact: { t: "no magic numbers", x: "Hardcoding 1800 because that's today's average is how reports rot. A subquery recalculates itself forever. Interviewers notice which one you reach for." }
        },
        {
          id: "i10", title: "IN (subquery)", tag: "Filter by another table",
          concept: [
            "A subquery can also return a list of values, and IN checks membership against it. \"Users who ever placed a big order\" becomes readable in one line.",
            "It's often the same answer as a JOIN, but it keeps your output clean — you get one row per user, no duplicated rows from the join."
          ],
          syntax: "WHERE id IN (SELECT user_id FROM orders WHERE amount > 1000)",
          demo: "SELECT user_id FROM orders WHERE amount > 2500;",
          mission: "Names of users who have ever placed an order above 2500. Return the name only.",
          starter: "SELECT name\nFROM users\nWHERE id IN (",
          solution: "SELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > 2500);",
          hints: ["The inner query returns user_ids; match them against users.id.", "WHERE id IN (SELECT user_id FROM orders WHERE amount > 2500)"],
          fact: { t: "NOT IN warning", x: "IN is safe. NOT IN with a list that contains a NULL returns nothing at all, silently, forever — because \"not equal to unknown\" is unknown. Seniors use NOT EXISTS or a LEFT JOIN instead. Level cleared, by the way. You're now dangerous." }
        }
      ]
    },
    {
      id: "adv",
      name: "ROOT ACCESS",
      sub: "Advanced",
      days: "Day 8 – 10",
      xp: 140,
      accent: "#ff5a3c",
      blurb: "CTEs and window functions — the eight missions that separate people who can query from people who get hired to think.",
      lessons: [
        {
          id: "a1", title: "CTEs (WITH)", tag: "Name your steps",
          concept: [
            "A CTE lets you name a query and reuse it: WITH paid AS (SELECT ...) then SELECT FROM paid. Same result as a nested subquery, ten times more readable.",
            "This is the single biggest upgrade to how you'll write SQL. Stop nesting brackets four deep. Build your answer in named steps, like a paragraph."
          ],
          syntax: "WITH paid AS (\n  SELECT * FROM orders WHERE status = 'paid'\n)\nSELECT COUNT(*) FROM paid;",
          demo: "WITH paid AS (SELECT * FROM orders WHERE status = 'paid') SELECT COUNT(*) AS n FROM paid;",
          mission: "Using a CTE called paid (all paid orders), return COUNT(*) as orders and SUM(amount) as revenue.",
          starter: "WITH paid AS (\n  SELECT * FROM orders WHERE status = 'paid'\n)\nSELECT ",
          solution: "WITH paid AS (SELECT * FROM orders WHERE status = 'paid') SELECT COUNT(*) AS orders, SUM(amount) AS revenue FROM paid;",
          hints: ["The final SELECT reads FROM paid, not FROM orders.", "SELECT COUNT(*) AS orders, SUM(amount) AS revenue FROM paid"],
          fact: { t: "readability = seniority", x: "In a real code review, a five-line CTE chain beats a clever one-liner every single time. Your job isn't to impress the database. It's to write something the next person can trust at 2am." }
        },
        {
          id: "a2", title: "Chained CTEs", teaser: "", tag: "Build in layers",
          concept: [
            "You can define several CTEs separated by commas, and each one can read the ones above it. Step one filters, step two aggregates, step three joins on the labels.",
            "This is how you'd answer a case-study question on a whiteboard — one clean step at a time. The query and the thinking finally look the same."
          ],
          syntax: "WITH a AS ( ... ),\n     b AS ( SELECT ... FROM a )\nSELECT * FROM b;",
          demo: "WITH paid AS (SELECT * FROM orders WHERE status = 'paid'), by_user AS (SELECT user_id, SUM(amount) AS spend FROM paid GROUP BY user_id) SELECT * FROM by_user ORDER BY spend DESC LIMIT 3;",
          mission: "Top 5 spenders on paid orders: return the user's name and their spend, biggest first. Build it with a paid CTE and a by_user CTE, then join to users.",
          starter: "WITH paid AS (\n  SELECT * FROM orders WHERE status = 'paid'\n),\nby_user AS (\n  SELECT user_id, SUM(amount) AS spend FROM paid GROUP BY user_id\n)\nSELECT ",
          solution: "WITH paid AS (SELECT * FROM orders WHERE status = 'paid'), by_user AS (SELECT user_id, SUM(amount) AS spend FROM paid GROUP BY user_id) SELECT u.name, b.spend FROM by_user b JOIN users u ON u.id = b.user_id ORDER BY b.spend DESC LIMIT 5;",
          hints: ["Join by_user to users on u.id = b.user_id.", "ORDER BY b.spend DESC LIMIT 5"],
          fact: { t: "the interview move", x: "When you get a messy case question, say this out loud: \"Let me build it in steps — first the paid orders, then spend per user, then the names.\" You've just shown structured thinking before writing a single character." }
        },
        {
          id: "a3", title: "ROW_NUMBER", tag: "Top N per group",
          concept: [
            "Window functions run a calculation across a set of rows while keeping every row. ROW_NUMBER() OVER (PARTITION BY x ORDER BY y) numbers rows 1, 2, 3 within each partition.",
            "Number the rows inside a CTE, then keep only rn = 1 outside it. That's the answer to \"the best per category\", \"the latest per user\", \"the first order per customer\" — the most asked advanced SQL question there is."
          ],
          syntax: "ROW_NUMBER() OVER (\n  PARTITION BY category\n  ORDER BY price DESC\n) AS rn",
          demo: "SELECT category, name, price, ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rn FROM products;",
          mission: "The most expensive product in each category. Return category, name and price, sorted by category. Use a CTE with ROW_NUMBER, then filter rn = 1.",
          starter: "WITH ranked AS (\n  SELECT p.category, p.name, p.price,\n    ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY p.price DESC) AS rn\n  FROM products p\n)\nSELECT ",
          solution: "WITH ranked AS (SELECT p.category, p.name, p.price, ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY p.price DESC) AS rn FROM products p) SELECT category, name, price FROM ranked WHERE rn = 1 ORDER BY category;",
          hints: ["Select three columns from ranked and filter WHERE rn = 1.", "Finish with ORDER BY category."],
          fact: { t: "2003 → 2018", x: "Window functions entered the SQL standard in 2003, but SQLite only shipped them in 2018. If a tutorial says \"just use a self-join\" for top-N-per-group, it was written before the good stuff existed." }
        },
        {
          id: "a4", title: "RANK vs DENSE_RANK", tag: "Handle the ties",
          concept: [
            "ROW_NUMBER never ties — it just picks. RANK ties, then skips (1, 2, 2, 4). DENSE_RANK ties without skipping (1, 2, 2, 3).",
            "Which one you pick is a product decision, not a technical one. \"Are we 3rd or 4th when two people tie for 2nd?\" Ask that question out loud in an interview and you'll sound like someone who's shipped."
          ],
          syntax: "RANK() OVER (ORDER BY amount DESC) AS rnk",
          demo: "SELECT name, price, RANK() OVER (ORDER BY price DESC) AS rnk FROM products;",
          mission: "For paid orders return id, amount, RANK() as rnk and DENSE_RANK() as dns, both ordered by amount descending. Sort the output by amount descending.",
          starter: "SELECT id, amount,\n  RANK() OVER (ORDER BY amount DESC) AS rnk,\n  ",
          solution: "SELECT id, amount, RANK() OVER (ORDER BY amount DESC) AS rnk, DENSE_RANK() OVER (ORDER BY amount DESC) AS dns FROM orders WHERE status = 'paid' ORDER BY amount DESC;",
          hints: ["Two window functions with the same OVER clause.", "Don't forget WHERE status = 'paid' and the final ORDER BY."],
          fact: { t: "look at 999", x: "Several of our orders are exactly 999. Watch what RANK does to the numbers after the tie versus DENSE_RANK. Leaderboards, top-seller lists and pricing tiers all live or die on this choice." }
        },
        {
          id: "a5", title: "Running totals", tag: "Cumulative anything",
          concept: [
            "Add ORDER BY inside OVER() and an aggregate becomes cumulative: SUM(amount) OVER (ORDER BY order_date) is revenue-to-date, row by row.",
            "No ORDER BY inside OVER means the whole partition at once. That one difference is the whole mental model for windows — worth reading twice."
          ],
          syntax: "SUM(amount) OVER (ORDER BY order_date) AS running",
          demo: "SELECT order_date, amount, SUM(amount) OVER (ORDER BY order_date) AS running FROM orders LIMIT 6;",
          mission: "For paid orders return order_date, amount, and the running revenue total as running, oldest first. Use a paid CTE.",
          starter: "WITH paid AS (\n  SELECT * FROM orders WHERE status = 'paid'\n)\nSELECT order_date, amount,\n  ",
          solution: "WITH paid AS (SELECT * FROM orders WHERE status = 'paid') SELECT order_date, amount, SUM(amount) OVER (ORDER BY order_date) AS running FROM paid ORDER BY order_date;",
          hints: ["SUM(amount) OVER (ORDER BY order_date) AS running", "Then ORDER BY order_date on the outer query too."],
          fact: { t: "before windows", x: "Analysts used to compute running totals with a self-join that compared every row to every earlier row. On a million rows it could run for hours. One OVER() clause replaced all of it — and interviewers still remember the pain." }
        },
        {
          id: "a6", title: "Percent of total", tag: "Share of the pie",
          concept: [
            "SUM(x) OVER () with empty brackets means \"the total across all rows\" while keeping each row. Divide a row by that and you get its share.",
            "Aggregate first in a CTE, then window over the result. Trying to do both in one pass is the classic mistake here."
          ],
          syntax: "ROUND(100.0 * revenue / SUM(revenue) OVER (), 1) AS pct",
          demo: "WITH rev AS (SELECT category, SUM(price) AS total FROM products GROUP BY category) SELECT category, total, SUM(total) OVER () AS grand FROM rev;",
          mission: "Paid revenue per category with its share: return category, revenue, and pct (percentage of total revenue, 1 decimal), biggest revenue first.",
          starter: "WITH rev AS (\n  SELECT p.category AS category, SUM(o.amount) AS revenue\n  FROM orders o JOIN products p ON p.id = o.product_id\n  WHERE o.status = 'paid'\n  GROUP BY p.category\n)\nSELECT category, revenue,\n  ",
          solution: "WITH rev AS (SELECT p.category AS category, SUM(o.amount) AS revenue FROM orders o JOIN products p ON p.id = o.product_id WHERE o.status = 'paid' GROUP BY p.category) SELECT category, revenue, ROUND(100.0 * revenue / SUM(revenue) OVER (), 1) AS pct FROM rev ORDER BY revenue DESC;",
          hints: ["SUM(revenue) OVER () is the grand total inside the same query.", "Wrap it: ROUND(100.0 * revenue / SUM(revenue) OVER (), 1) AS pct"],
          fact: { t: "mix shift", x: "Revenue can grow while your best category shrinks as a share of the whole. Absolute numbers hide that; percent-of-total exposes it. This is the query that makes a PM sound senior in a business review." }
        },
        {
          id: "a7", title: "Repeat rate", tag: "A real product metric",
          concept: [
            "Aggregate twice: once per user, then once across users. Count orders per user in a CTE, then ask what share of those users ordered more than once.",
            "Two-step aggregation is the pattern behind retention, repeat rate, power users and cohort analysis. Learn the shape, not the metric."
          ],
          syntax: "WITH per_user AS (\n  SELECT user_id, COUNT(*) AS orders\n  FROM orders GROUP BY user_id\n)\nSELECT ... FROM per_user;",
          demo: "SELECT user_id, COUNT(*) AS orders FROM orders GROUP BY user_id ORDER BY orders DESC LIMIT 5;",
          mission: "One number: of all users who ordered at least once, what percentage ordered more than once? Round to 1 decimal, name it repeat_rate.",
          starter: "WITH per_user AS (\n  SELECT user_id, COUNT(*) AS orders FROM orders GROUP BY user_id\n)\nSELECT ROUND(",
          solution: "WITH per_user AS (SELECT user_id, COUNT(*) AS orders FROM orders GROUP BY user_id) SELECT ROUND(100.0 * SUM(CASE WHEN orders > 1 THEN 1 ELSE 0 END) / COUNT(*), 1) AS repeat_rate FROM per_user;",
          hints: ["Numerator: SUM(CASE WHEN orders > 1 THEN 1 ELSE 0 END). Denominator: COUNT(*).", "Multiply by 100.0 and ROUND(..., 1) AS repeat_rate"],
          fact: { t: "the honest metric", x: "Growth teams love new signups because the number always goes up. Repeat rate is the number that tells the truth about whether the product actually works. Learn to compute it yourself and you'll never be spun by a dashboard again." }
        },
        {
          id: "a8", title: "Month-over-month growth", tag: "The finale",
          concept: [
            "LAG() reaches into the previous row of a window. Monthly revenue in a CTE, then LAG(revenue) OVER (ORDER BY month) gives you last month beside this month.",
            "One query with a CTE, an aggregate, a window function and a rate — this is a real interview answer. The first month shows NULL growth, and that's correct: there's nothing before it. Say so out loud instead of hiding it."
          ],
          syntax: "LAG(revenue) OVER (ORDER BY month) AS prev",
          demo: "WITH m AS (SELECT SUBSTR(order_date,1,7) AS month, SUM(amount) AS revenue FROM orders WHERE status = 'paid' GROUP BY month) SELECT month, revenue, LAG(revenue) OVER (ORDER BY month) AS prev FROM m ORDER BY month;",
          mission: "Monthly paid revenue with growth: return month, revenue, prev (previous month's revenue) and growth (percent change vs prev, 1 decimal), oldest month first.",
          starter: "WITH m AS (\n  SELECT SUBSTR(order_date, 1, 7) AS month, SUM(amount) AS revenue\n  FROM orders WHERE status = 'paid' GROUP BY month\n)\nSELECT month, revenue,\n  LAG(revenue) OVER (ORDER BY month) AS prev,\n  ",
          solution: "WITH m AS (SELECT SUBSTR(order_date,1,7) AS month, SUM(amount) AS revenue FROM orders WHERE status = 'paid' GROUP BY month) SELECT month, revenue, LAG(revenue) OVER (ORDER BY month) AS prev, ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month), 1) AS growth FROM m ORDER BY month;",
          hints: ["growth = 100.0 * (revenue - prev) / prev, rounded to 1 decimal.", "You can repeat the LAG(...) expression inside the growth calculation."],
          fact: { t: "you're done", x: "Thirty missions. CTEs, joins, aggregates, windows, rates and growth. That's genuinely more SQL than most people writing dashboards for a living. Now go pull a real question from your own work and answer it — that's where this becomes yours." }
        }
      ]
    }
  ],
  ranks: [
    { at: 0, name: "SCRIPT KIDDIE" },
    { at: 300, name: "QUERY RUNNER" },
    { at: 720, name: "JOIN OPERATOR" },
    { at: 1200, name: "GROUP BY GHOST" },
    { at: 1620, name: "WINDOW WIZARD" },
    { at: 2300, name: "ROOT ACCESS" }
  ]
};
