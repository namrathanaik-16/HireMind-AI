const dataAnalystQuestions = [
  // =====================================================
  // EASY — 8 QUESTIONS
  // =====================================================

  {
    id: "DA001",
    title: "Calculate Average Sales",
    difficulty: "Easy",
    category: "Data Analysis",
    marks: 10,
    skills: ["Arrays", "Aggregation", "Statistics"],
    description:
      "Given a list of daily sales values, calculate the average daily sales.",
    functionName: "calculateAverage",
    starter: `function calculateAverage(sales) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[100, 200, 300, 400]],
        expected: 250
      },
      {
        input: [[50, 100]],
        expected: 75
      }
    ]
  },

  {
    id: "DA002",
    title: "Find Maximum Sales",
    difficulty: "Easy",
    category: "Data Analysis",
    marks: 10,
    skills: ["Arrays", "Aggregation", "Statistics"],
    description:
      "Find the highest sales value from a list of daily sales.",
    functionName: "findMaximum",
    starter: `function findMaximum(sales) {
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
    id: "DA003",
    title: "Count Missing Values",
    difficulty: "Easy",
    category: "Data Cleaning",
    marks: 10,
    skills: ["Arrays", "Data Cleaning", "Validation"],
    description:
      "Count how many values in a dataset are null, undefined or empty strings.",
    functionName: "countMissing",
    starter: `function countMissing(values) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[10, null, 20, "", 30, null]],
        expected: 3
      }
    ]
  },

  {
    id: "DA004",
    title: "Filter Sales by Region",
    difficulty: "Easy",
    category: "Data Filtering",
    marks: 10,
    skills: ["Arrays", "Filtering", "Data Analysis"],
    description:
      "Return only sales records belonging to the requested region.",
    functionName: "filterByRegion",
    starter: `function filterByRegion(records, region) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { region: "South", sales: 500 },
          { region: "North", sales: 300 },
          { region: "South", sales: 700 }
        ], "South"],
        expected: [
          { region: "South", sales: 500 },
          { region: "South", sales: 700 }
        ]
      }
    ]
  },

  {
    id: "DA005",
    title: "Calculate Total Revenue",
    difficulty: "Easy",
    category: "Business Analytics",
    marks: 10,
    skills: ["Aggregation", "Arrays", "Business Logic"],
    description:
      "Calculate total revenue from a list of transactions.",
    functionName: "calculateRevenue",
    starter: `function calculateRevenue(transactions) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { amount: 100 },
          { amount: 250 },
          { amount: 150 }
        ]],
        expected: 500
      }
    ]
  },

  {
    id: "DA006",
    title: "Find Top Selling Product",
    difficulty: "Easy",
    category: "Business Analytics",
    marks: 10,
    skills: ["Arrays", "Objects", "Aggregation"],
    description:
      "Given product sales records, return the product with the highest quantity sold.",
    functionName: "findTopProduct",
    starter: `function findTopProduct(products) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { name: "Laptop", quantity: 20 },
          { name: "Mouse", quantity: 80 },
          { name: "Keyboard", quantity: 40 }
        ]],
        expected: {
          name: "Mouse",
          quantity: 80
        }
      }
    ]
  },

  {
    id: "DA007",
    title: "Calculate Conversion Rate",
    difficulty: "Easy",
    category: "Business Analytics",
    marks: 10,
    skills: ["Percentages", "Metrics", "Analytics"],
    description:
      "Calculate conversion rate using the number of conversions and total visitors.",
    functionName: "calculateConversionRate",
    starter: `function calculateConversionRate(conversions, visitors) {
  // Write your code here
}`,
    testCases: [
      {
        input: [50, 1000],
        expected: 5
      },
      {
        input: [25, 500],
        expected: 5
      }
    ]
  },

  {
    id: "DA008",
    title: "Sort Records by Value",
    difficulty: "Easy",
    category: "Data Processing",
    marks: 10,
    skills: ["Sorting", "Arrays", "Data Processing"],
    description:
      "Sort analytical records from highest value to lowest value without modifying the original array.",
    functionName: "sortByValue",
    starter: `function sortByValue(records) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { name: "A", value: 100 },
          { name: "B", value: 500 },
          { name: "C", value: 250 }
        ]],
        expected: [
          { name: "B", value: 500 },
          { name: "C", value: 250 },
          { name: "A", value: 100 }
        ]
      }
    ]
  },

  // =====================================================
  // MEDIUM — 8 QUESTIONS
  // =====================================================

  {
    id: "DA009",
    title: "Group Sales by Region",
    difficulty: "Medium",
    category: "Data Aggregation",
    marks: 15,
    skills: ["Grouping", "Aggregation", "Objects"],
    description:
      "Group sales records by region and calculate total sales for each region.",
    functionName: "salesByRegion",
    starter: `function salesByRegion(records) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { region: "South", sales: 500 },
          { region: "North", sales: 300 },
          { region: "South", sales: 700 },
          { region: "North", sales: 200 }
        ]],
        expected: {
          South: 1200,
          North: 500
        }
      }
    ]
  },

  {
    id: "DA010",
    title: "Calculate Monthly Revenue",
    difficulty: "Medium",
    category: "Business Analytics",
    marks: 15,
    skills: ["Aggregation", "Dates", "Data Processing"],
    description:
      "Given transaction records containing dates and amounts, calculate total revenue for each month.",
    functionName: "monthlyRevenue",
    starter: `function monthlyRevenue(transactions) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { date: "2026-01-10", amount: 100 },
          { date: "2026-01-20", amount: 200 },
          { date: "2026-02-05", amount: 300 }
        ]],
        expected: {
          "2026-01": 300,
          "2026-02": 300
        }
      }
    ]
  },

  {
    id: "DA011",
    title: "Calculate Moving Average",
    difficulty: "Medium",
    category: "Statistics",
    marks: 15,
    skills: ["Arrays", "Statistics", "Moving Average"],
    description:
      "Calculate a moving average using the specified window size.",
    functionName: "movingAverage",
    starter: `function movingAverage(values, windowSize) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[10, 20, 30, 40, 50], 3],
        expected: [20, 30, 40]
      }
    ]
  },

  {
    id: "DA012",
    title: "Detect Sales Outliers",
    difficulty: "Medium",
    category: "Statistics",
    marks: 15,
    skills: ["Statistics", "Data Cleaning", "Outlier Detection"],
    description:
      "Using a provided lower and upper threshold, return all sales values outside the accepted range.",
    functionName: "findOutliers",
    starter: `function findOutliers(values, lower, upper) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[10, 20, 30, 100, 40, 5], 10, 50],
        expected: [100, 5]
      }
    ]
  },

  {
    id: "DA013",
    title: "Join Customer and Order Data",
    difficulty: "Medium",
    category: "Data Transformation",
    marks: 15,
    skills: ["Joins", "Arrays", "Data Transformation"],
    description:
      "Combine customer records with their orders using customerId.",
    functionName: "joinCustomerOrders",
    starter: `function joinCustomerOrders(customers, orders) {
  // Write your code here
}`,
    testCases: [
      {
        input: [
          [
            { id: 1, name: "Rahul" },
            { id: 2, name: "Anita" }
          ],
          [
            { customerId: 1, amount: 500 },
            { customerId: 2, amount: 300 }
          ]
        ],
        expected: [
          {
            id: 1,
            name: "Rahul",
            amount: 500
          },
          {
            id: 2,
            name: "Anita",
            amount: 300
          }
        ]
      }
    ]
  },

  {
    id: "DA014",
    title: "Calculate Customer Retention",
    difficulty: "Medium",
    category: "Business Analytics",
    marks: 15,
    skills: ["Analytics", "Percentages", "Customer Metrics"],
    description:
      "Calculate the percentage of customers who remained active from the previous period.",
    functionName: "calculateRetention",
    starter: `function calculateRetention(previousCustomers, retainedCustomers) {
  // Write your code here
}`,
    testCases: [
      {
        input: [1000, 850],
        expected: 85
      }
    ]
  },

  {
    id: "DA015",
    title: "Find Top Performing Region",
    difficulty: "Medium",
    category: "Business Analytics",
    marks: 15,
    skills: ["Aggregation", "Sorting", "Analytics"],
    description:
      "Calculate total sales for every region and return the region with the highest total sales.",
    functionName: "topRegion",
    starter: `function topRegion(records) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          { region: "North", sales: 500 },
          { region: "South", sales: 800 },
          { region: "North", sales: 300 }
        ]],
        expected: {
          region: "North",
          sales: 800
        }
      }
    ]
  },

  {
    id: "DA016",
    title: "Clean Customer Dataset",
    difficulty: "Medium",
    category: "Data Cleaning",
    marks: 15,
    skills: ["Data Cleaning", "Validation", "Transformation"],
    description:
      "Clean customer records by trimming names, removing records without email addresses and converting emails to lowercase.",
    functionName: "cleanCustomers",
    starter: `function cleanCustomers(customers) {
  // Write your code here
}`,
    testCases: [
      {
        input: [[
          {
            name: "  Rahul ",
            email: "RAHUL@EXAMPLE.COM"
          },
          {
            name: "Anita",
            email: ""
          }
        ]],
        expected: [
          {
            name: "Rahul",
            email: "rahul@example.com"
          }
        ]
      }
    ]
  },

  // =====================================================
  // HARD — 8 QUESTIONS
  // =====================================================

  {
    id: "DA017",
    title: "Build a Data Aggregation Pipeline",
    difficulty: "Hard",
    category: "Data Engineering",
    marks: 25,
    skills: ["Aggregation", "Transformation", "Data Pipelines"],
    description:
      "Build a reusable pipeline that filters invalid records, groups records by category and calculates aggregate metrics.",
    functionName: "aggregatePipeline",
    starter: `function aggregatePipeline(records) {
  // Write your code here
}`,
    evaluator: "pipeline"
  },

  {
    id: "DA018",
    title: "Calculate Statistical Summary",
    difficulty: "Hard",
    category: "Statistics",
    marks: 25,
    skills: ["Mean", "Median", "Variance", "Statistics"],
    description:
      "Given a numerical dataset, calculate mean, median, minimum, maximum and variance.",
    functionName: "statisticalSummary",
    starter: `function statisticalSummary(values) {
  // Write your code here
}`,
    evaluator: "statistics"
  },

  {
    id: "DA019",
    title: "Detect Anomalies in Time Series",
    difficulty: "Hard",
    category: "Time Series",
    marks: 25,
    skills: ["Time Series", "Statistics", "Anomaly Detection"],
    description:
      "Identify unusual observations in a time-series dataset using a configurable deviation threshold.",
    functionName: "detectAnomalies",
    starter: `function detectAnomalies(values, threshold) {
  // Write your code here
}`,
    evaluator: "statistics"
  },

  {
    id: "DA020",
    title: "Build a Customer Cohort Analyzer",
    difficulty: "Hard",
    category: "Business Analytics",
    marks: 25,
    skills: ["Cohort Analysis", "Dates", "Customer Analytics"],
    description:
      "Group customers by their signup month and calculate how many remain active in subsequent months.",
    functionName: "analyzeCohorts",
    starter: `function analyzeCohorts(customers) {
  // Write your code here
}`,
    evaluator: "analytics"
  },

  {
    id: "DA021",
    title: "Build a Data Quality Checker",
    difficulty: "Hard",
    category: "Data Quality",
    marks: 25,
    skills: ["Data Validation", "Data Cleaning", "Quality Metrics"],
    description:
      "Create a data-quality checker that reports missing values, duplicate records and invalid fields.",
    functionName: "checkDataQuality",
    starter: `function checkDataQuality(records) {
  // Write your code here
}`,
    evaluator: "data-quality"
  },

  {
    id: "DA022",
    title: "Build a Query Result Cache",
    difficulty: "Hard",
    category: "Data Engineering",
    marks: 25,
    skills: ["Caching", "Performance", "Data Access"],
    description:
      "Design a cache for expensive analytical queries that avoids executing the same query repeatedly.",
    functionName: "QueryCache",
    starter: `class QueryCache {
  constructor(ttl) {
    // Write your code here
  }

  get(query) {
    // Write your code here
  }

  set(query, result) {
    // Write your code here
  }
}`,
    evaluator: "cache"
  },

  {
    id: "DA023",
    title: "Build a Data Transformation Engine",
    difficulty: "Hard",
    category: "Data Engineering",
    marks: 25,
    skills: ["Data Transformation", "Functional Programming", "Pipelines"],
    description:
      "Implement a transformation engine that supports filtering, mapping and aggregation operations on datasets.",
    functionName: "DataTransformer",
    starter: `class DataTransformer {
  constructor(data) {
    // Write your code here
  }

  filter(predicate) {
    // Write your code here
  }

  map(transformer) {
    // Write your code here
  }

  aggregate(reducer) {
    // Write your code here
  }
}`,
    evaluator: "class"
  },

  {
    id: "DA024",
    title: "Design a Real-Time Analytics Processor",
    difficulty: "Hard",
    category: "Analytics Architecture",
    marks: 25,
    skills: ["Streaming", "Aggregation", "System Design"],
    description:
      "Design a processor that receives events continuously and maintains real-time metrics such as event counts, totals and averages.",
    functionName: "AnalyticsProcessor",
    starter: `class AnalyticsProcessor {
  constructor() {
    // Write your code here
  }

  process(event) {
    // Write your code here
  }

  getMetrics() {
    // Write your code here
  }
}`,
    evaluator: "architecture"
  }
];

export default dataAnalystQuestions;