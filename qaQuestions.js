const qaQuestions = [
  // =====================================================
  // EASY — 8 QUESTIONS
  // =====================================================

  {
    id: "QA001",
    title: "Validate Login Test Data",
    difficulty: "Easy",
    category: "Test Automation",
    marks: 10,
    skills: ["Validation", "Test Data", "JavaScript"],
    description:
      "Validate login test data. A valid test user must contain a non-empty username and password with at least 8 characters.",
    functionName: "validateLoginData",
    starter: `function validateLoginData(user) {
  // Write your code here
}`,
    testCases: [
      {
        input: [
          {
            username: "testuser",
            password: "Password123"
          }
        ],
        expected: true
      },
      {
        input: [
          {
            username: "testuser",
            password: "123"
          }
        ],
        expected: false
      }
    ]
  },

  {
    id: "QA002",
    title: "Find Failed Test Cases",
    difficulty: "Easy",
    category: "Test Reporting",
    marks: 10,
    skills: ["Arrays", "Filtering", "Test Results"],
    description:
      "Given a list of test results, return the IDs of all failed test cases.",
    functionName: "findFailedTests",
    starter: `function findFailedTests(results) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { id: "TC001", status: "PASS" },
          { id: "TC002", status: "FAIL" },
          { id: "TC003", status: "PASS" },
          { id: "TC004", status: "FAIL" }
        ]],
        expected: ["TC002", "TC004"]
      }
    ]
  },

  {
    id: "QA003",
    title: "Count Test Results",
    difficulty: "Easy",
    category: "Test Reporting",
    marks: 10,
    skills: ["Arrays", "Counting", "Reporting"],
    description:
      "Count the number of passed, failed and skipped test cases.",
    functionName: "countResults",
    starter: `function countResults(results) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          "PASS",
          "PASS",
          "FAIL",
          "SKIPPED",
          "FAIL"
        ]],
        expected: {
          PASS: 2,
          FAIL: 2,
          SKIPPED: 1
        }
      }
    ]
  },

  {
    id: "QA004",
    title: "Validate API Response",
    difficulty: "Easy",
    category: "API Testing",
    marks: 10,
    skills: ["API Testing", "Objects", "Validation"],
    description:
      "Validate that an API response contains the expected status code and required fields.",
    functionName: "validateResponse",
    starter: `function validateResponse(response) {
  // Write your code here
}`,
    testCases: [
      {
        input: [{
          status: 200,
          body: {
            id: 101,
            name: "Rahul"
          }
        }],
        expected: true
      },
      {
        input: [{
          status: 500,
          body: {}
        }],
        expected: false
      }
    ]
  },

  {
    id: "QA005",
    title: "Detect Duplicate Test IDs",
    difficulty: "Easy",
    category: "Test Management",
    marks: 10,
    skills: ["Arrays", "Sets", "Test Data"],
    description:
      "Find duplicate test case IDs in a test suite while preserving the order in which duplicates first appear.",
    functionName: "findDuplicateTestIds",
    starter: `function findDuplicateTestIds(testIds) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          "TC001",
          "TC002",
          "TC001",
          "TC003",
          "TC002"
        ]],
        expected: ["TC001", "TC002"]
      }
    ]
  },

  {
    id: "QA006",
    title: "Calculate Pass Percentage",
    difficulty: "Easy",
    category: "Test Reporting",
    marks: 10,
    skills: ["Arrays", "Calculations", "Reporting"],
    description:
      "Calculate the percentage of test cases that passed.",
    functionName: "calculatePassPercentage",
    starter: `function calculatePassPercentage(results) {
  // Write your code here
}`,
    testCases: [
      {
        input: [["PASS", "PASS", "FAIL", "PASS"]],
        expected: 75
      },
      {
        input: [["PASS", "FAIL"]],
        expected: 50
      }
    ]
  },

  {
    id: "QA007",
    title: "Validate Required Fields",
    difficulty: "Easy",
    category: "Test Automation",
    marks: 10,
    skills: ["Validation", "Forms", "Test Automation"],
    description:
      "Validate that all required fields in a form contain non-empty values.",
    functionName: "validateRequiredFields",
    starter: `function validateRequiredFields(data, requiredFields) {
  // Write your code here
}`,
    testCases: [
      {
        input: [
          {
            name: "Rahul",
            email: "rahul@example.com",
            age: 25
          },
          ["name", "email"]
        ],
        expected: true
      },
      {
        input: [
          {
            name: "",
            email: "rahul@example.com"
          },
          ["name", "email"]
        ],
        expected: false
      }
    ]
  },

  {
    id: "QA008",
    title: "Filter Tests by Priority",
    difficulty: "Easy",
    category: "Test Management",
    marks: 10,
    skills: ["Arrays", "Filtering", "Test Planning"],
    description:
      "Return all test cases matching the requested priority.",
    functionName: "filterByPriority",
    starter: `function filterByPriority(testCases, priority) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { id: "TC001", priority: "High" },
          { id: "TC002", priority: "Low" },
          { id: "TC003", priority: "High" }
        ], "High"],
        expected: [
          { id: "TC001", priority: "High" },
          { id: "TC003", priority: "High" }
        ]
      }
    ]
  },

  // =====================================================
  // MEDIUM — 8 QUESTIONS
  // =====================================================

  {
    id: "QA009",
    title: "Analyze API Response Times",
    difficulty: "Medium",
    category: "Performance Testing",
    marks: 15,
    skills: ["Arrays", "Performance Testing", "Data Analysis"],
    description:
      "Given API request records, identify requests whose response time exceeds the configured threshold.",
    functionName: "findSlowRequests",
    starter: `function findSlowRequests(requests, threshold) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { endpoint: "/users", responseTime: 120 },
          { endpoint: "/orders", responseTime: 850 },
          { endpoint: "/products", responseTime: 300 }
        ], 500],
        expected: [
          { endpoint: "/orders", responseTime: 850 }
        ]
      }
    ]
  },

  {
    id: "QA010",
    title: "Group Test Cases by Module",
    difficulty: "Medium",
    category: "Test Management",
    marks: 15,
    skills: ["Objects", "Arrays", "Grouping"],
    description:
      "Group test cases by application module.",
    functionName: "groupTestsByModule",
    starter: `function groupTestsByModule(testCases) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { id: "TC001", module: "Login" },
          { id: "TC002", module: "Checkout" },
          { id: "TC003", module: "Login" }
        ]],
        expected: {
          Login: [
            { id: "TC001", module: "Login" },
            { id: "TC003", module: "Login" }
          ],
          Checkout: [
            { id: "TC002", module: "Checkout" }
          ]
        }
      }
    ]
  },

  {
    id: "QA011",
    title: "Detect Flaky Tests",
    difficulty: "Medium",
    category: "Test Analysis",
    marks: 15,
    skills: ["Test Analysis", "Arrays", "Statistics"],
    description:
      "A test is considered flaky if it has both PASS and FAIL results across multiple executions. Return all flaky test IDs.",
    functionName: "findFlakyTests",
    starter: `function findFlakyTests(executions) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          {
            id: "TC001",
            results: ["PASS", "PASS", "PASS"]
          },
          {
            id: "TC002",
            results: ["PASS", "FAIL", "PASS"]
          },
          {
            id: "TC003",
            results: ["FAIL", "FAIL", "FAIL"]
          }
        ]],
        expected: ["TC002"]
      }
    ]
  },

  {
    id: "QA012",
    title: "Compare API Responses",
    difficulty: "Medium",
    category: "API Testing",
    marks: 15,
    skills: ["API Testing", "Objects", "Comparison"],
    description:
      "Compare two API response objects and return the fields whose values are different.",
    functionName: "compareResponses",
    starter: `function compareResponses(expected, actual) {
  // Write your code here
}`,
    testCases: [
      {
        input: [
          {
            id: 1,
            name: "Rahul",
            status: "active"
          },
          {
            id: 1,
            name: "Rahul",
            status: "inactive"
          }
        ],
        expected: ["status"]
      }
    ]
  },

  {
    id: "QA013",
    title: "Generate Boundary Test Cases",
    difficulty: "Medium",
    category: "Test Design",
    marks: 15,
    skills: ["Boundary Value Analysis", "Test Design"],
    description:
      "Given a minimum and maximum valid value, generate boundary test values using minimum-1, minimum, minimum+1, maximum-1, maximum and maximum+1.",
    functionName: "generateBoundaryValues",
    starter: `function generateBoundaryValues(min, max) {
  // Write your code here
}`,
    testCases: [
      {
        input: [1, 10],
        expected: [0, 1, 2, 9, 10, 11]
      }
    ]
  },

  {
    id: "QA014",
    title: "Analyze Test Execution Logs",
    difficulty: "Medium",
    category: "Log Analysis",
    marks: 15,
    skills: ["Strings", "Logs", "Debugging"],
    description:
      "Given execution log messages, count ERROR and WARNING entries and return the totals.",
    functionName: "analyzeLogs",
    starter: `function analyzeLogs(logs) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          "INFO Test started",
          "ERROR Element not found",
          "WARNING Slow response",
          "ERROR Timeout",
          "INFO Test completed"
        ]],
        expected: {
          ERROR: 2,
          WARNING: 1
        }
      }
    ]
  },

  {
    id: "QA015",
    title: "Retry Failed Tests",
    difficulty: "Medium",
    category: "Test Automation",
    marks: 15,
    skills: ["Retry Logic", "Automation", "Arrays"],
    description:
      "Given test execution results across attempts, return the tests that passed after at least one previous failure.",
    functionName: "findRecoveredTests",
    starter: `function findRecoveredTests(testRuns) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          {
            id: "TC001",
            results: ["FAIL", "PASS"]
          },
          {
            id: "TC002",
            results: ["PASS"]
          },
          {
            id: "TC003",
            results: ["FAIL", "FAIL"]
          }
        ]],
        expected: ["TC001"]
      }
    ]
  },

  {
    id: "QA016",
    title: "Prioritize Test Execution",
    difficulty: "Medium",
    category: "Test Planning",
    marks: 15,
    skills: ["Sorting", "Priority", "Test Planning"],
    description:
      "Sort test cases by priority in the order Critical, High, Medium and Low.",
    functionName: "prioritizeTests",
    starter: `function prioritizeTests(testCases) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { id: "TC001", priority: "Low" },
          { id: "TC002", priority: "Critical" },
          { id: "TC003", priority: "High" },
          { id: "TC004", priority: "Medium" }
        ]],
        expected: [
          { id: "TC002", priority: "Critical" },
          { id: "TC003", priority: "High" },
          { id: "TC004", priority: "Medium" },
          { id: "TC001", priority: "Low" }
        ]
      }
    ]
  },

  // =====================================================
  // HARD — 8 QUESTIONS
  // =====================================================

  {
    id: "QA017",
    title: "Build an API Test Runner",
    difficulty: "Hard",
    category: "API Automation",
    marks: 25,
    skills: ["API Testing", "Automation", "Async Programming"],
    description:
      "Design a test runner that executes multiple API validation functions and returns a structured test report.",
    functionName: "runApiTests",
    starter: `async function runApiTests(tests) {
  // Write your code here
}`,
    evaluator: "async"
  },

  {
    id: "QA018",
    title: "Parallel Test Execution",
    difficulty: "Hard",
    category: "Test Automation",
    marks: 25,
    skills: ["Async Programming", "Concurrency", "Automation"],
    description:
      "Execute independent automated tests concurrently while collecting the result of every test.",
    functionName: "runTestsInParallel",
    starter: `async function runTestsInParallel(tests, limit) {
  // Write your code here
}`,
    evaluator: "async"
  },

  {
    id: "QA019",
    title: "Build a Test Retry Framework",
    difficulty: "Hard",
    category: "Test Automation",
    marks: 25,
    skills: ["Retry Logic", "Automation", "Async Programming"],
    description:
      "Implement a reusable retry mechanism for unstable automated tests. A test should stop retrying as soon as it passes.",
    functionName: "retryTest",
    starter: `async function retryTest(testFunction, attempts) {
  // Write your code here
}`,
    evaluator: "retry"
  },

  {
    id: "QA020",
    title: "Detect Flaky Tests from History",
    difficulty: "Hard",
    category: "Test Analysis",
    marks: 25,
    skills: ["Data Analysis", "Testing", "Statistics"],
    description:
      "Analyze historical test results and identify tests whose pass/fail behavior indicates instability.",
    functionName: "analyzeFlakiness",
    starter: `function analyzeFlakiness(history) {
  // Write your code here
}`,
    evaluator: "analysis"
  },

  {
    id: "QA021",
    title: "API Contract Validator",
    difficulty: "Hard",
    category: "API Testing",
    marks: 25,
    skills: ["API Testing", "Schema Validation", "Automation"],
    description:
      "Implement a validator that checks whether an API response matches a defined contract containing required fields and expected data types.",
    functionName: "validateContract",
    starter: `function validateContract(response, contract) {
  // Write your code here
}`,
    evaluator: "schema"
  },

  {
    id: "QA022",
    title: "Build a Test Dependency Resolver",
    difficulty: "Hard",
    category: "Test Architecture",
    marks: 25,
    skills: ["Graphs", "Dependencies", "Test Planning"],
    description:
      "Given tests and their dependencies, determine a valid execution order while detecting circular dependencies.",
    functionName: "resolveTestOrder",
    starter: `function resolveTestOrder(tests) {
  // Write your code here
}`,
    evaluator: "graph"
  },

  {
    id: "QA023",
    title: "Selenium Locator Strategy",
    difficulty: "Hard",
    category: "UI Automation",
    marks: 25,
    skills: ["Selenium", "Locators", "UI Automation"],
    description:
      "Design a robust locator strategy for dynamic web elements. The solution should prioritize stable attributes and avoid fragile selectors.",
    functionName: "buildLocator",
    starter: `function buildLocator(element) {
  // Return the most reliable locator strategy.
}`,
    evaluator: "code-review"
  },

  {
    id: "QA024",
    title: "Design a Test Automation Framework",
    difficulty: "Hard",
    category: "Automation Architecture",
    marks: 25,
    skills: ["Selenium", "Page Object Model", "CI/CD", "Architecture"],
    description:
      "Design the core structure of a scalable test automation framework using Page Object Model, reusable utilities, configuration management and reporting.",
    functionName: "designFramework",
    starter: `function designFramework() {
  // Design the architecture of a scalable
  // test automation framework.
}`,
    evaluator: "code-review"
  }
];

export default qaQuestions;