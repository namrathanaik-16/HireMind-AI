const frontendQuestions = [
  {
    id: "FE001",
    title: "Transform API User Data",
    difficulty: "Easy",
    category: "JavaScript",
    marks: 10,

    skills: [
      "Array Methods",
      "Objects",
      "Data Transformation",
    ],

    description:
      "You receive user data from an API. Transform the array so that each object contains only the user's id, name, and email, and return the transformed array.",

    functionName: "transformUsers",

    starter: `function transformUsers(users) {
  // Write your code here
}`,

    testCases: [
      {
        input: [
          [
            {
              id: 1,
              name: "Rahul",
              email: "rahul@example.com",
              age: 24,
            },
            {
              id: 2,
              name: "Anita",
              email: "anita@example.com",
              age: 22,
            },
          ],
        ],

        expected: [
          {
            id: 1,
            name: "Rahul",
            email: "rahul@example.com",
          },
          {
            id: 2,
            name: "Anita",
            email: "anita@example.com",
          },
        ],
      },
    ],
  },

  {
    id: "FE002",
    title: "Search and Filter Products",
    difficulty: "Easy",
    category: "JavaScript",
    marks: 10,

    skills: [
      "Array Methods",
      "Filtering",
      "Searching",
    ],

    description:
      "Implement a function that returns products matching a search term and category. The search should be case-insensitive.",

    functionName: "filterProducts",

    starter: `function filterProducts(products, searchTerm, category) {
  // Write your code here
}`,

    testCases: [
      {
        input: [
          [
            {
              name: "iPhone 15",
              category: "Mobile",
            },
            {
              name: "Galaxy S24",
              category: "Mobile",
            },
            {
              name: "MacBook Air",
              category: "Laptop",
            },
          ],
          "iphone",
          "Mobile",
        ],

        expected: [
          {
            name: "iPhone 15",
            category: "Mobile",
          },
        ],
      },
    ],
  },

  {
    id: "FE003",
    title: "Debounced Search",
    difficulty: "Medium",
    category: "JavaScript",
    marks: 15,

    skills: [
      "Closures",
      "setTimeout",
      "Performance",
    ],

    description:
      "Implement a debounce utility that delays execution of a function until the specified delay has passed without another call.",

    functionName: "debounce",

    starter: `function debounce(fn, delay) {
  // Write your code here
}`,

    evaluator: "debounce",
  },

  {
    id: "FE004",
    title: "Pagination Logic",
    difficulty: "Medium",
    category: "JavaScript",
    marks: 15,

    skills: [
      "Array Manipulation",
      "Pagination",
      "UI Logic",
    ],

    description:
      "Implement pagination logic. Given an array, page number and page size, return the items belonging to that page.",

    functionName: "paginate",

    starter: `function paginate(items, page, pageSize) {
  // Write your code here
}`,

    testCases: [
      {
        input: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          2,
          3,
        ],

        expected: [4, 5, 6],
      },

      {
        input: [
          ["A", "B", "C", "D", "E"],
          1,
          2,
        ],

        expected: ["A", "B"],
      },

      {
        input: [
          [10, 20, 30, 40],
          2,
          2,
        ],

        expected: [30, 40],
      },
    ],
  },

  {
    id: "FE005",
    title: "API Request State Manager",
    difficulty: "Medium",
    category: "React",
    marks: 15,

    skills: [
      "React State",
      "Async Operations",
      "Error Handling",
    ],

    description:
      "Design the state transitions for an API request. The state should correctly represent loading, success and error states.",

    functionName: "requestReducer",

    starter: `function requestReducer(state, action) {
  // Write your code here
}`,

    testCases: [
      {
        input: [
          {
            status: "idle",
            data: null,
            error: null,
          },
          {
            type: "REQUEST_START",
          },
        ],

        expected: {
          status: "loading",
          data: null,
          error: null,
        },
      },

      {
        input: [
          {
            status: "loading",
            data: null,
            error: null,
          },
          {
            type: "REQUEST_SUCCESS",
            payload: ["A", "B"],
          },
        ],

        expected: {
          status: "success",
          data: ["A", "B"],
          error: null,
        },
      },
    ],
  },

  {
    id: "FE006",
    title: "Shopping Cart State",
    difficulty: "Medium",
    category: "React",
    marks: 15,

    skills: [
      "State Management",
      "Immutable Updates",
      "Array Operations",
    ],

    description:
      "Implement cart operations to add products, remove products and update quantities without mutating the original state.",

    functionName: "updateCart",

    starter: `function updateCart(cart, action) {
  // Write your code here
}`,

    testCases: [
      {
        input: [
          [],
          {
            type: "ADD",
            product: {
              id: 1,
              name: "Keyboard",
              quantity: 1,
            },
          },
        ],

        expected: [
          {
            id: 1,
            name: "Keyboard",
            quantity: 1,
          },
        ],
      },
    ],
  },

  {
    id: "FE007",
    title: "Flatten Nested Comments",
    difficulty: "Medium",
    category: "JavaScript",
    marks: 15,

    skills: [
      "Recursion",
      "Data Structures",
      "Tree Traversal",
    ],

    description:
      "A comments API returns nested replies. Flatten the comment tree into a single array while preserving the original order.",

    functionName: "flattenComments",

    starter: `function flattenComments(comments) {
  // Write your code here
}`,

    testCases: [
      {
        input: [
          [
            {
              id: 1,
              text: "Parent",
              replies: [
                {
                  id: 2,
                  text: "Child",
                  replies: [],
                },
              ],
            },
          ],
        ],

        expected: [
          {
            id: 1,
            text: "Parent",
          },
          {
            id: 2,
            text: "Child",
          },
        ],
      },
    ],
  },

  {
    id: "FE008",
    title: "Handle Duplicate API Requests",
    difficulty: "Hard",
    category: "JavaScript",
    marks: 25,

    skills: [
      "Promises",
      "Async JavaScript",
      "Request Management",
    ],

    description:
      "Multiple components may request the same resource simultaneously. Implement a request manager that reuses an existing request instead of creating duplicate network requests.",

    functionName: "requestManager",

    starter: `function requestManager(fetchFunction) {
  // Write your code here
}`,

    evaluator: "async-request-manager",
  },

  {
    id: "FE009",
    title: "Infinite Scroll Controller",
    difficulty: "Hard",
    category: "React",
    marks: 25,

    skills: [
      "React",
      "Pagination",
      "Async Operations",
      "State Management",
    ],

    description:
      "Design the logic for an infinite-scroll component. Prevent duplicate loading requests and stop requesting once the API reports that there are no more pages.",

    functionName: "infiniteScrollReducer",

    starter: `function infiniteScrollReducer(state, action) {
  // Write your code here
}`,

    testCases: [
      {
        input: [
          {
            items: [1, 2],
            loading: false,
            hasMore: true,
          },
          {
            type: "LOAD_START",
          },
        ],

        expected: {
          items: [1, 2],
          loading: true,
          hasMore: true,
        },
      },

      {
        input: [
          {
            items: [1, 2],
            loading: true,
            hasMore: true,
          },
          {
            type: "LOAD_SUCCESS",
            payload: {
              items: [3, 4],
              hasMore: false,
            },
          },
        ],

        expected: {
          items: [1, 2, 3, 4],
          loading: false,
          hasMore: false,
        },
      },
    ],
  },

  {
    id: "FE010",
    title: "Fix Unnecessary React Re-renders",
    difficulty: "Hard",
    category: "React Performance",
    marks: 25,

    skills: [
      "React.memo",
      "useMemo",
      "useCallback",
      "Performance",
    ],

    description:
      "A React dashboard becomes slow because child components re-render whenever the parent renders. Explain and implement the changes required to prevent unnecessary renders.",

    functionName: "optimizeDashboard",

    starter: `function optimizeDashboard() {
  // Analyze the component structure
  // and implement the optimization strategy.
}`,

    evaluator: "code-review",
  },

  {
    id: "FE011",
    title: "Promise Concurrency Limiter",
    difficulty: "Hard",
    category: "JavaScript",
    marks: 25,

    skills: [
      "Promises",
      "Async Programming",
      "Concurrency",
    ],

    description:
      "Given multiple asynchronous tasks, execute them while allowing no more than N tasks to run at the same time.",

    functionName: "runWithConcurrency",

    starter: `async function runWithConcurrency(tasks, limit) {
  // Write your code here
}`,

    evaluator: "async",
  },

  {
    id: "FE012",
    title: "Custom useDebounce Hook",
    difficulty: "Hard",
    category: "React",
    marks: 25,

    skills: [
      "React Hooks",
      "useEffect",
      "Custom Hooks",
    ],

    description:
      "Implement a reusable React custom hook that returns a debounced version of a changing value.",

    functionName: "useDebounce",

    starter: `function useDebounce(value, delay) {
  // Write your code here
}`,

    evaluator: "react-hook",
  },
];

export default frontendQuestions;