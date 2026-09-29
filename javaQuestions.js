const javaQuestions = [
  // =====================================================
  // EASY — 8 QUESTIONS
  // =====================================================

  {
    id: "JA001",
    title: "Calculate Employee Bonus",
    difficulty: "Easy",
    category: "Java Basics",
    marks: 10,
    skills: ["Methods", "Conditionals", "Business Logic"],
    description:
      "Calculate an employee bonus based on their salary and performance rating. If the rating is 5, give 20% of salary. If it is 4, give 15%. Otherwise give 10%.",
    functionName: "calculateBonus",
    starter: `public static double calculateBonus(double salary, int rating) {
    // Write your code here
}`,
    testCases: [
      {
        input: [50000, 5],
        expected: 10000
      },
      {
        input: [50000, 4],
        expected: 7500
      }
    ]
  },

  {
    id: "JA002",
    title: "Find Maximum Transaction",
    difficulty: "Easy",
    category: "Collections",
    marks: 10,
    skills: ["Arrays", "Loops", "Searching"],
    description:
      "Given an array of transaction amounts, return the highest transaction amount.",
    functionName: "findMaximum",
    starter: `public static int findMaximum(int[] transactions) {
    // Write your code here
}`,
    testCases: [
      {
        input: [[1200, 4500, 800, 6200, 3100]],
        expected: 6200
      }
    ]
  },

  {
    id: "JA003",
    title: "Count Active Users",
    difficulty: "Easy",
    category: "Collections",
    marks: 10,
    skills: ["Arrays", "Loops", "Objects"],
    description:
      "Given an array of boolean values representing user status, return the number of active users.",
    functionName: "countActiveUsers",
    starter: `public static int countActiveUsers(boolean[] activeUsers) {
    // Write your code here
}`,
    testCases: [
      {
        input: [[true, false, true, true, false]],
        expected: 3
      }
    ]
  },

  {
    id: "JA004",
    title: "Remove Duplicate IDs",
    difficulty: "Easy",
    category: "Collections",
    marks: 10,
    skills: ["HashSet", "Collections", "Data Processing"],
    description:
      "Given a list of employee IDs containing duplicates, return only unique IDs while preserving insertion order.",
    functionName: "removeDuplicates",
    starter: `public static List<Integer> removeDuplicates(List<Integer> ids) {
    // Write your code here
}`,
    testCases: [
      {
        input: [[101, 102, 101, 103, 102, 104]],
        expected: [101, 102, 103, 104]
      }
    ]
  },

  {
    id: "JA005",
    title: "Validate Email",
    difficulty: "Easy",
    category: "Java Basics",
    marks: 10,
    skills: ["Strings", "Validation"],
    description:
      "Validate a basic email address. The email must contain '@' and '.' after the '@'.",
    functionName: "isValidEmail",
    starter: `public static boolean isValidEmail(String email) {
    // Write your code here
}`,
    testCases: [
      {
        input: ["employee@example.com"],
        expected: true
      },
      {
        input: ["employeeexample.com"],
        expected: false
      }
    ]
  },

  {
    id: "JA006",
    title: "Calculate Order Total",
    difficulty: "Easy",
    category: "Business Logic",
    marks: 10,
    skills: ["Loops", "Arrays", "Calculation"],
    description:
      "Calculate the total price of an order using arrays of prices and quantities.",
    functionName: "calculateOrderTotal",
    starter: `public static double calculateOrderTotal(
        double[] prices,
        int[] quantities) {
    // Write your code here
}`,
    testCases: [
      {
        input: [[100.0, 50.0, 25.0], [2, 3, 4]],
        expected: 450.0
      }
    ]
  },

  {
    id: "JA007",
    title: "Find Employee by ID",
    difficulty: "Easy",
    category: "Collections",
    marks: 10,
    skills: ["Lists", "Loops", "Objects"],
    description:
      "Search a list of employees and return the employee whose ID matches the given ID.",
    functionName: "findEmployee",
    starter: `public static Employee findEmployee(
        List<Employee> employees,
        int id) {
    // Write your code here
}`,
    testCases: []
  },

  {
    id: "JA008",
    title: "Convert Status Code",
    difficulty: "Easy",
    category: "Java Basics",
    marks: 10,
    skills: ["Switch", "Conditionals", "Enums"],
    description:
      "Convert HTTP status codes into readable status messages.",
    functionName: "getStatusMessage",
    starter: `public static String getStatusMessage(int statusCode) {
    // Write your code here
}`,
    testCases: [
      {
        input: [200],
        expected: "OK"
      },
      {
        input: [404],
        expected: "NOT_FOUND"
      },
      {
        input: [500],
        expected: "SERVER_ERROR"
      }
    ]
  },

  // =====================================================
  // MEDIUM — 8 QUESTIONS
  // =====================================================

  {
    id: "JA009",
    title: "Group Employees by Department",
    difficulty: "Medium",
    category: "Collections",
    marks: 15,
    skills: ["Streams", "Collectors", "HashMap"],
    description:
      "Group employees by department and return a map where each department contains its employees.",
    functionName: "groupByDepartment",
    starter: `public static Map<String, List<Employee>> groupByDepartment(
        List<Employee> employees) {
    // Write your code here
}`,
    testCases: []
  },

  {
    id: "JA010",
    title: "Sort Employees by Salary",
    difficulty: "Medium",
    category: "Collections",
    marks: 15,
    skills: ["Comparator", "Collections", "Sorting"],
    description:
      "Sort employees by salary in descending order without modifying the original list.",
    functionName: "sortBySalary",
    starter: `public static List<Employee> sortBySalary(
        List<Employee> employees) {
    // Write your code here
}`,
    testCases: []
  },

  {
    id: "JA011",
    title: "Find Duplicate Transactions",
    difficulty: "Medium",
    category: "Collections",
    marks: 15,
    skills: ["HashSet", "HashMap", "Data Processing"],
    description:
      "Given transaction IDs, return all IDs that appear more than once.",
    functionName: "findDuplicates",
    starter: `public static List<Integer> findDuplicates(
        List<Integer> transactionIds) {
    // Write your code here
}`,
    testCases: [
      {
        input: [[101, 102, 103, 101, 104, 102]],
        expected: [101, 102]
      }
    ]
  },

  {
    id: "JA012",
    title: "Implement LRU Cache",
    difficulty: "Medium",
    category: "Data Structures",
    marks: 15,
    skills: ["HashMap", "LinkedHashMap", "Caching"],
    description:
      "Implement an LRU cache supporting get and put operations with a fixed capacity.",
    functionName: "LRUCache",
    starter: `class LRUCache {
    public LRUCache(int capacity) {
        // Write your code here
    }

    public int get(int key) {
        // Write your code here
    }

    public void put(int key, int value) {
        // Write your code here
    }
}`,
    evaluator: "class"
  },

  {
    id: "JA013",
    title: "Process Employee Records with Streams",
    difficulty: "Medium",
    category: "Java Streams",
    marks: 15,
    skills: ["Streams", "filter", "map", "collect"],
    description:
      "Return the names of employees earning more than a given salary, sorted alphabetically.",
    functionName: "getHighEarners",
    starter: `public static List<String> getHighEarners(
        List<Employee> employees,
        double minimumSalary) {
    // Write your code here
}`,
    testCases: []
  },

  {
    id: "JA014",
    title: "Thread-Safe Counter",
    difficulty: "Medium",
    category: "Multithreading",
    marks: 15,
    skills: ["Threads", "Synchronization", "Concurrency"],
    description:
      "Implement a counter that can safely be incremented by multiple threads without losing updates.",
    functionName: "SafeCounter",
    starter: `class SafeCounter {
    private int count = 0;

    public void increment() {
        // Write your code here
    }

    public int getCount() {
        // Write your code here
    }
}`,
    evaluator: "class"
  },

  {
    id: "JA015",
    title: "API Response Aggregator",
    difficulty: "Medium",
    category: "Backend Logic",
    marks: 15,
    skills: ["Collections", "Streams", "Aggregation"],
    description:
      "Aggregate API records by user ID and calculate the total amount associated with each user.",
    functionName: "aggregateByUser",
    starter: `public static Map<Integer, Double> aggregateByUser(
        List<Transaction> transactions) {
    // Write your code here
}`,
    testCases: []
  },

  {
    id: "JA016",
    title: "Custom Exception Validation",
    difficulty: "Medium",
    category: "Exception Handling",
    marks: 15,
    skills: ["Exceptions", "Custom Exceptions", "Validation"],
    description:
      "Validate an employee's salary and throw a custom exception when the salary is negative.",
    functionName: "validateSalary",
    starter: `public static void validateSalary(double salary) {
    // Write your code here
}`,
    evaluator: "exception"
  },

  // =====================================================
  // HARD — 8 QUESTIONS
  // =====================================================

  {
    id: "JA017",
    title: "Concurrent Task Executor",
    difficulty: "Hard",
    category: "Multithreading",
    marks: 25,
    skills: ["ExecutorService", "Concurrency", "Threads"],
    description:
      "Implement a service that executes multiple independent tasks concurrently while limiting the number of worker threads.",
    functionName: "executeTasks",
    starter: `public static List<String> executeTasks(
        List<Callable<String>> tasks,
        int threadCount) {
    // Write your code here
}`,
    evaluator: "concurrency"
  },

  {
    id: "JA018",
    title: "Thread-Safe Singleton",
    difficulty: "Hard",
    category: "Design Patterns",
    marks: 25,
    skills: ["Singleton", "Concurrency", "Design Patterns"],
    description:
      "Implement a thread-safe Singleton class that guarantees only one instance is created.",
    functionName: "Singleton",
    starter: `class Singleton {
    private Singleton() {
    }

    public static Singleton getInstance() {
        // Write your code here
    }
}`,
    evaluator: "singleton"
  },

  {
    id: "JA019",
    title: "Producer Consumer System",
    difficulty: "Hard",
    category: "Multithreading",
    marks: 25,
    skills: ["Threads", "BlockingQueue", "Concurrency"],
    description:
      "Implement a producer-consumer system where producers add jobs and consumers process them safely.",
    functionName: "JobQueue",
    starter: `class JobQueue {
    // Implement a thread-safe producer-consumer queue.
}`,
    evaluator: "concurrency"
  },

  {
    id: "JA020",
    title: "Design an In-Memory Cache",
    difficulty: "Hard",
    category: "System Design",
    marks: 25,
    skills: ["Caching", "HashMap", "TTL", "Concurrency"],
    description:
      "Design an in-memory cache supporting TTL expiration and thread-safe reads and writes.",
    functionName: "DataCache",
    starter: `class DataCache {
    public DataCache(long ttlMillis) {
        // Write your code here
    }

    public void put(String key, Object value) {
        // Write your code here
    }

    public Object get(String key) {
        // Write your code here
    }
}`,
    evaluator: "cache"
  },

  {
    id: "JA021",
    title: "Retry Failed API Calls",
    difficulty: "Hard",
    category: "Backend Engineering",
    marks: 25,
    skills: ["Exception Handling", "Retry Logic", "Backend"],
    description:
      "Implement a retry utility that retries a failed operation up to the specified number of attempts before returning the final failure.",
    functionName: "retry",
    starter: `public static <T> T retry(
        Callable<T> operation,
        int attempts) throws Exception {
    // Write your code here
}`,
    evaluator: "retry"
  },

  {
    id: "JA022",
    title: "Build a Rate Limiter",
    difficulty: "Hard",
    category: "Backend Engineering",
    marks: 25,
    skills: ["Concurrency", "Time", "Collections", "System Design"],
    description:
      "Implement a simple rate limiter that allows only a fixed number of requests within a time window.",
    functionName: "RateLimiter",
    starter: `class RateLimiter {
    public RateLimiter(int maxRequests, long windowMillis) {
        // Write your code here
    }

    public boolean allowRequest() {
        // Write your code here
    }
}`,
    evaluator: "rate-limiter"
  },

  {
    id: "JA023",
    title: "Deadlock-Safe Account Transfer",
    difficulty: "Hard",
    category: "Concurrency",
    marks: 25,
    skills: ["Synchronization", "Locks", "Deadlocks"],
    description:
      "Implement a money transfer operation between two accounts while preventing race conditions and deadlocks.",
    functionName: "transfer",
    starter: `public static void transfer(
        Account source,
        Account destination,
        double amount) {
    // Write your code here
}`,
    evaluator: "concurrency"
  },

  {
    id: "JA024",
    title: "Design a Notification Service",
    difficulty: "Hard",
    category: "System Design",
    marks: 25,
    skills: ["OOP", "Interfaces", "Design Patterns", "Architecture"],
    description:
      "Design a notification service supporting Email, SMS and Push notifications using an extensible object-oriented architecture.",
    functionName: "NotificationService",
    starter: `interface NotificationSender {
    void send(String message);
}

class NotificationService {
    // Design an extensible notification system.
}`,
    evaluator: "design"
  }
];

export default javaQuestions;