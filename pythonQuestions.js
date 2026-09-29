const pythonQuestions = [
  // =====================================================
  // EASY — 8 QUESTIONS
  // =====================================================

  {
    id: "PY001",
    title: "Transform User Data",
    difficulty: "Easy",
    category: "Python Basics",
    marks: 10,
    skills: ["Lists", "Dictionaries", "Data Transformation"],
    description:
      "An API returns user dictionaries containing extra fields. Return a new list containing only id, name and email for each user.",
    functionName: "transform_users",
    starter: `def transform_users(users):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          {
            "id": 1,
            "name": "Rahul",
            "email": "rahul@example.com",
            "age": 24
          },
          {
            "id": 2,
            "name": "Anita",
            "email": "anita@example.com",
            "age": 22
          }
        ]],
        expected: [
          {
            "id": 1,
            "name": "Rahul",
            "email": "rahul@example.com"
          },
          {
            "id": 2,
            "name": "Anita",
            "email": "anita@example.com"
          }
        ]
      }
    ]
  },

  {
    id: "PY002",
    title: "Filter Products",
    difficulty: "Easy",
    category: "Python Basics",
    marks: 10,
    skills: ["Lists", "Filtering", "Dictionaries"],
    description:
      "Filter products by category and return only products whose price is below the given maximum price.",
    functionName: "filter_products",
    starter: `def filter_products(products, category, max_price):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          {"name": "Laptop", "category": "Electronics", "price": 800},
          {"name": "Mouse", "category": "Electronics", "price": 30},
          {"name": "Chair", "category": "Furniture", "price": 100}
        ], "Electronics", 100],
        expected: [
          {"name": "Mouse", "category": "Electronics", "price": 30}
        ]
      }
    ]
  },

  {
    id: "PY003",
    title: "Remove Duplicate Values",
    difficulty: "Easy",
    category: "Python Basics",
    marks: 10,
    skills: ["Lists", "Sets", "Data Processing"],
    description:
      "Remove duplicate values from a list while preserving their original order.",
    functionName: "remove_duplicates",
    starter: `def remove_duplicates(values):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[1, 2, 2, 3, 1, 4]],
        expected: [1, 2, 3, 4]
      },
      {
        input: [["a", "b", "a", "c"]],
        expected: ["a", "b", "c"]
      }
    ]
  },

  {
    id: "PY004",
    title: "Count Word Frequency",
    difficulty: "Easy",
    category: "Python Basics",
    marks: 10,
    skills: ["Dictionaries", "Strings", "Counting"],
    description:
      "Given a list of words, return a dictionary containing the frequency of each word.",
    functionName: "count_words",
    starter: `def count_words(words):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [["api", "java", "api", "python", "java", "api"]],
        expected: {
          "api": 3,
          "java": 2,
          "python": 1
        }
      }
    ]
  },

  {
    id: "PY005",
    title: "Calculate Cart Total",
    difficulty: "Easy",
    category: "Python Basics",
    marks: 10,
    skills: ["Lists", "Dictionaries", "Business Logic"],
    description:
      "Calculate the total value of a shopping cart using the price and quantity of each product.",
    functionName: "calculate_total",
    starter: `def calculate_total(cart):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          {"price": 100, "quantity": 2},
          {"price": 50, "quantity": 3}
        ]],
        expected: 350
      }
    ]
  },

  {
    id: "PY006",
    title: "Find Highest Transaction",
    difficulty: "Easy",
    category: "Python Basics",
    marks: 10,
    skills: ["Lists", "Loops", "Built-in Functions"],
    description:
      "Given a list of transaction amounts, return the highest transaction amount.",
    functionName: "find_highest",
    starter: `def find_highest(transactions):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[1200, 4500, 800, 6200, 3100]],
        expected: 6200
      }
    ]
  },

  {
    id: "PY007",
    title: "Validate User Registration",
    difficulty: "Easy",
    category: "Validation",
    marks: 10,
    skills: ["Strings", "Dictionaries", "Validation"],
    description:
      "Validate a registration object. Name and email are required and the email must contain '@' and '.'.",
    functionName: "validate_user",
    starter: `def validate_user(user):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [{
          "name": "Rahul",
          "email": "rahul@example.com"
        }],
        expected: true
      },
      {
        input: [{
          "name": "",
          "email": "rahul@example.com"
        }],
        expected: false
      }
    ]
  },

  {
    id: "PY008",
    title: "Group Products by Category",
    difficulty: "Easy",
    category: "Data Processing",
    marks: 10,
    skills: ["Dictionaries", "Lists", "Grouping"],
    description:
      "Group products into a dictionary where each category contains the products belonging to it.",
    functionName: "group_by_category",
    starter: `def group_by_category(products):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          {"name": "iPhone", "category": "Mobile"},
          {"name": "MacBook", "category": "Laptop"},
          {"name": "Galaxy", "category": "Mobile"}
        ]],
        expected: {
          "Mobile": [
            {"name": "iPhone", "category": "Mobile"},
            {"name": "Galaxy", "category": "Mobile"}
          ],
          "Laptop": [
            {"name": "MacBook", "category": "Laptop"}
          ]
        }
      }
    ]
  },

  // =====================================================
  // MEDIUM — 8 QUESTIONS
  // =====================================================

  {
    id: "PY009",
    title: "Paginate API Results",
    difficulty: "Medium",
    category: "Backend Logic",
    marks: 15,
    skills: ["Lists", "Slicing", "Pagination"],
    description:
      "Given a list of API results, page number and page size, return the records belonging to that page.",
    functionName: "paginate",
    starter: `def paginate(items, page, page_size):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5, 6, 7, 8], 2, 3],
        expected: [4, 5, 6]
      },
      {
        input: [["A", "B", "C", "D"], 1, 2],
        expected: ["A", "B"]
      }
    ]
  },

  {
    id: "PY010",
    title: "Process Employee Records",
    difficulty: "Medium",
    category: "Data Processing",
    marks: 15,
    skills: ["Lists", "Dictionaries", "Sorting"],
    description:
      "Return the names of employees whose salary is above the given threshold, sorted alphabetically.",
    functionName: "get_high_earners",
    starter: `def get_high_earners(employees, minimum_salary):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          {"name": "Rahul", "salary": 60000},
          {"name": "Anita", "salary": 80000},
          {"name": "John", "salary": 50000}
        ], 55000],
        expected: ["Anita", "Rahul"]
      }
    ]
  },

  {
    id: "PY011",
    title: "Flatten Nested Comments",
    difficulty: "Medium",
    category: "Data Structures",
    marks: 15,
    skills: ["Recursion", "Lists", "Trees"],
    description:
      "Flatten a nested comment structure into a single list while preserving parent-to-child order.",
    functionName: "flatten_comments",
    starter: `def flatten_comments(comments):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          {
            "id": 1,
            "text": "Parent",
            "replies": [
              {
                "id": 2,
                "text": "Child",
                "replies": []
              }
            ]
          }
        ]],
        expected: [
          {"id": 1, "text": "Parent"},
          {"id": 2, "text": "Child"}
        ]
      }
    ]
  },

  {
    id: "PY012",
    title: "Aggregate Transactions",
    difficulty: "Medium",
    category: "Data Processing",
    marks: 15,
    skills: ["Dictionaries", "Aggregation", "Lists"],
    description:
      "Aggregate transactions by user ID and calculate the total amount for every user.",
    functionName: "aggregate_transactions",
    starter: `def aggregate_transactions(transactions):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          {"user_id": 1, "amount": 100},
          {"user_id": 2, "amount": 200},
          {"user_id": 1, "amount": 50}
        ]],
        expected: {
          "1": 150,
          "2": 200
        }
      }
    ]
  },

  {
    id: "PY013",
    title: "LRU Cache",
    difficulty: "Medium",
    category: "Data Structures",
    marks: 15,
    skills: ["Dictionaries", "OrderedDict", "Caching"],
    description:
      "Implement an LRU cache supporting get and put operations with a fixed capacity.",
    functionName: "LRUCache",
    starter: `class LRUCache:
    def __init__(self, capacity):
        # Write your code here
        pass

    def get(self, key):
        # Write your code here
        pass

    def put(self, key, value):
        # Write your code here
        pass`,
    evaluator: "class"
  },

  {
    id: "PY014",
    title: "Analyze Server Logs",
    difficulty: "Medium",
    category: "Backend",
    marks: 15,
    skills: ["Strings", "Dictionaries", "Log Processing"],
    description:
      "Given server log records, count the number of ERROR and WARNING messages and return the totals.",
    functionName: "analyze_logs",
    starter: `def analyze_logs(logs):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          "INFO Server started",
          "ERROR Database connection failed",
          "WARNING High memory usage",
          "ERROR Timeout",
          "INFO Request completed"
        ]],
        expected: {
          "ERROR": 2,
          "WARNING": 1
        }
      }
    ]
  },

  {
    id: "PY015",
    title: "Detect Duplicate API Requests",
    difficulty: "Medium",
    category: "Backend",
    marks: 15,
    skills: ["Sets", "Dictionaries", "API Design"],
    description:
      "Given request IDs in chronological order, return the IDs that appear more than once.",
    functionName: "find_duplicate_requests",
    starter: `def find_duplicate_requests(request_ids):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [["REQ1", "REQ2", "REQ1", "REQ3", "REQ2"]],
        expected: ["REQ1", "REQ2"]
      }
    ]
  },

  {
    id: "PY016",
    title: "Build a Data Validation Pipeline",
    difficulty: "Medium",
    category: "Data Engineering",
    marks: 15,
    skills: ["Functions", "Lists", "Validation"],
    description:
      "Process records by removing invalid entries, normalizing names and keeping only records with valid email addresses.",
    functionName: "validate_records",
    starter: `def validate_records(records):
    # Write your code here
    pass`,
    testCases: [
      {
        input: [[
          {
            "name": "  Rahul ",
            "email": "rahul@example.com"
          },
          {
            "name": "",
            "email": "invalid"
          }
        ]],
        expected: [
          {
            "name": "Rahul",
            "email": "rahul@example.com"
          }
        ]
      }
    ]
  },

  // =====================================================
  // HARD — 8 QUESTIONS
  // =====================================================

  {
    id: "PY017",
    title: "Implement Retry Logic",
    difficulty: "Hard",
    category: "Backend",
    marks: 25,
    skills: ["Exceptions", "Functions", "Error Handling"],
    description:
      "Implement a utility that retries a function when it raises an exception, up to the specified number of attempts.",
    functionName: "retry",
    starter: `def retry(function, attempts):
    # Write your code here
    pass`,
    evaluator: "retry"
  },

  {
    id: "PY018",
    title: "Concurrent Task Runner",
    difficulty: "Hard",
    category: "Concurrency",
    marks: 25,
    skills: ["Threading", "Concurrency", "ThreadPoolExecutor"],
    description:
      "Execute multiple independent tasks concurrently while limiting the maximum number of workers.",
    functionName: "run_tasks",
    starter: `def run_tasks(tasks, max_workers):
    # Write your code here
    pass`,
    evaluator: "concurrency"
  },

  {
    id: "PY019",
    title: "Build a TTL Cache",
    difficulty: "Hard",
    category: "System Design",
    marks: 25,
    skills: ["Caching", "Dictionaries", "Time"],
    description:
      "Implement an in-memory cache where entries automatically become invalid after their TTL expires.",
    functionName: "TTLCache",
    starter: `class TTLCache:
    def __init__(self, ttl):
        # Write your code here
        pass

    def set(self, key, value):
        # Write your code here
        pass

    def get(self, key):
        # Write your code here
        pass`,
    evaluator: "cache"
  },

  {
    id: "PY020",
    title: "Rate Limiter",
    difficulty: "Hard",
    category: "Backend",
    marks: 25,
    skills: ["Time", "Collections", "System Design"],
    description:
      "Implement a rate limiter that allows only a fixed number of requests during a configured time window.",
    functionName: "RateLimiter",
    starter: `class RateLimiter:
    def __init__(self, max_requests, window_seconds):
        # Write your code here
        pass

    def allow_request(self):
        # Write your code here
        pass`,
    evaluator: "rate-limiter"
  },

  {
    id: "PY021",
    title: "Memoization Utility",
    difficulty: "Hard",
    category: "Performance",
    marks: 25,
    skills: ["Decorators", "Caching", "Functions"],
    description:
      "Implement a memoization decorator that caches function results based on the arguments provided.",
    functionName: "memoize",
    starter: `def memoize(function):
    # Write your code here
    pass`,
    evaluator: "memoization"
  },

  {
    id: "PY022",
    title: "Producer Consumer Queue",
    difficulty: "Hard",
    category: "Concurrency",
    marks: 25,
    skills: ["Threading", "Queue", "Synchronization"],
    description:
      "Design a thread-safe producer-consumer queue using Python's concurrency primitives.",
    functionName: "JobQueue",
    starter: `class JobQueue:
    def __init__(self, max_size):
        # Write your code here
        pass

    def add_job(self, job):
        # Write your code here
        pass

    def get_job(self):
        # Write your code here
        pass`,
    evaluator: "concurrency"
  },

  {
    id: "PY023",
    title: "Build an Event Dispatcher",
    difficulty: "Hard",
    category: "Architecture",
    marks: 25,
    skills: ["Classes", "Callbacks", "Data Structures"],
    description:
      "Implement an event dispatcher that supports registering callbacks, emitting events and removing callbacks.",
    functionName: "EventDispatcher",
    starter: `class EventDispatcher:
    def __init__(self):
        # Write your code here
        pass

    def on(self, event, callback):
        # Write your code here
        pass

    def emit(self, event, data):
        # Write your code here
        pass

    def off(self, event, callback):
        # Write your code here
        pass`,
    evaluator: "class"
  },

  {
    id: "PY024",
    title: "Design an API Response Cache",
    difficulty: "Hard",
    category: "Backend Architecture",
    marks: 25,
    skills: ["Caching", "API Design", "Architecture"],
    description:
      "Design a reusable API response cache that stores responses, supports expiration and avoids unnecessary repeated requests.",
    functionName: "APICache",
    starter: `class APICache:
    def __init__(self, ttl):
        # Write your code here
        pass

    def set(self, key, value):
        # Write your code here
        pass

    def get(self, key):
        # Write your code here
        pass`,
    evaluator: "cache"
  }
];

export default pythonQuestions;