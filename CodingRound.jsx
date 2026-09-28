import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

const roleQuestions = {
  "Frontend Developer": [
    {
      title: "Reverse a String",
      difficulty: "Easy",
      marks: 10,
      description:
        "Write a JavaScript function that returns the reversed version of a given string.",
      starter: `function reverseString(str) {\n  // Write your code here\n}`,
    },
    {
      title: "Find Maximum Number",
      difficulty: "Easy",
      marks: 10,
      description: "Return the largest number in an array.",
      starter: `function findMax(arr) {\n  // Write your code here\n}`,
    },
    {
      title: "Palindrome Checker",
      difficulty: "Medium",
      marks: 15,
      description:
        "Check whether a string is a palindrome ignoring spaces and case.",
      starter: `function isPalindrome(str) {\n  // Write your code here\n}`,
    },
    {
      title: "Two Sum",
      difficulty: "Medium",
      marks: 15,
      description:
        "Return the indices of two numbers whose sum equals the target.",
      starter: `function twoSum(nums, target) {\n  // Write your code here\n}`,
    },
    {
      title: "Debounce Function",
      difficulty: "Hard",
      marks: 25,
      description: "Implement a JavaScript debounce function.",
      starter: `function debounce(fn, delay) {\n  // Write your code here\n}`,
    },
    {
      title: "Todo State Manager",
      difficulty: "Hard",
      marks: 25,
      description:
        "Implement add, delete and toggle logic for a todo list.",
      starter: `class TodoManager {\n  // Write your code here\n}`,
    },
  ],

  "Python Developer": [
    {
      title: "Factorial",
      difficulty: "Easy",
      marks: 10,
      description: "Return the factorial of a number.",
      starter: `def factorial(n):\n    # Write your code here\n    pass`,
    },
    {
      title: "Largest Number",
      difficulty: "Easy",
      marks: 10,
      description: "Return the largest number in a list.",
      starter: `def largest(nums):\n    # Write your code here\n    pass`,
    },
    {
      title: "Palindrome",
      difficulty: "Medium",
      marks: 15,
      description: "Check whether a string is a palindrome.",
      starter: `def is_palindrome(text):\n    # Write your code here\n    pass`,
    },
    {
      title: "Two Sum",
      difficulty: "Medium",
      marks: 15,
      description: "Return indices whose sum equals target.",
      starter: `def two_sum(nums, target):\n    # Write your code here\n    pass`,
    },
    {
      title: "LRU Cache",
      difficulty: "Hard",
      marks: 25,
      description: "Implement an LRU Cache.",
      starter: `class LRUCache:\n    def __init__(self, capacity):\n        pass`,
    },
    {
      title: "Library Management",
      difficulty: "Hard",
      marks: 25,
      description: "Design a simple library management system.",
      starter: `class Library:\n    pass`,
    },
  ],

  "Java Developer": [
    {
      title: "Factorial",
      difficulty: "Easy",
      marks: 10,
      description: "Print factorial of a number.",
      starter: `public class Main {\n  public static void main(String[] args){\n\n  }\n}`,
    },
    {
      title: "Fibonacci",
      difficulty: "Easy",
      marks: 10,
      description: "Generate Fibonacci sequence.",
      starter: `public class Main {\n  public static void main(String[] args){\n\n  }\n}`,
    },
    {
      title: "Valid Parentheses",
      difficulty: "Medium",
      marks: 15,
      description: "Determine whether brackets are balanced.",
      starter: `public static boolean isValid(String s){\n\n}`,
    },
    {
      title: "Binary Search",
      difficulty: "Medium",
      marks: 15,
      description: "Implement Binary Search.",
      starter: `public static int binarySearch(int[] arr,int target){\n\n}`,
    },
    {
      title: "LRU Cache",
      difficulty: "Hard",
      marks: 25,
      description: "Implement an LRU Cache.",
      starter: `class LRUCache {\n\n}`,
    },
    {
      title: "Employee Management",
      difficulty: "Hard",
      marks: 25,
      description: "Design an Employee Management system.",
      starter: `class Employee {\n\n}`,
    },
  ],

  "QA Engineer": [
    {
      title: "Email Validation",
      difficulty: "Easy",
      marks: 10,
      description: "Validate email format.",
      starter: `function validateEmail(email){\n  // Write your code here\n}`,
    },
    {
      title: "Duplicate Logs",
      difficulty: "Easy",
      marks: 10,
      description: "Find duplicate log entries.",
      starter: `function findDuplicates(logs){\n\n}`,
    },
    {
      title: "API Response Validation",
      difficulty: "Medium",
      marks: 15,
      description: "Validate the given JSON response.",
      starter: `const response = {\n\n}`,
    },
    {
      title: "Employee & Department Join",
      difficulty: "Medium",
      marks: 15,
      description:
        "Write an SQL query to display employee name and department name.",
      schema: `employees
------------------------------------------------
emp_id          INT
emp_name        VARCHAR
department_id   INT

departments
------------------------------------------------
department_id   INT
department_name VARCHAR`,
      starter: `-- Write your SQL query below`,
    },
    {
      title: "Checkout Test Scenarios",
      difficulty: "Hard",
      marks: 25,
      description:
        "Write functional test scenarios for an e-commerce checkout page.",
      starter: `1. `,
    },
    {
      title: "Bug Classification",
      difficulty: "Hard",
      marks: 25,
      description: "Classify bugs by severity and priority.",
      starter: `Critical:\nHigh:\nMedium:\nLow:`,
    },
  ],

  "Data Analyst": [
    {
      title: "Average Salary by Department",
      difficulty: "Easy",
      marks: 10,
      description:
        "Display department name and average salary. Sort by highest average salary.",
      schema: `employees
------------------------------------------------
emp_id          INT
emp_name        VARCHAR
department_id   INT
salary          INT

departments
------------------------------------------------
department_id   INT
department_name VARCHAR`,
      starter: `-- Write your SQL query below`,
    },
    {
      title: "Top 5 Customers by Revenue",
      difficulty: "Easy",
      marks: 10,
      description:
        "Return the top 5 customers based on total purchase amount.",
      schema: `customers
------------------------------------------------
customer_id     INT
customer_name   VARCHAR

orders
------------------------------------------------
order_id        INT
customer_id     INT
amount          DECIMAL`,
      starter: `-- Write your SQL query below`,
    },
    {
      title: "Monthly Revenue",
      difficulty: "Medium",
      marks: 15,
      description:
        "Calculate the total revenue generated in each month.",
      schema: `orders
------------------------------------------------
order_id        INT
order_date      DATE
amount          DECIMAL`,
      starter: `-- Write your SQL query below`,
    },
    {
      title: "Customer Segmentation",
      difficulty: "Medium",
      marks: 15,
      description:
        "Classify customers into Platinum, Gold and Silver based on total spending.",
      schema: `orders
------------------------------------------------
customer_id     INT
amount          DECIMAL`,
      starter: `-- Write your SQL query below`,
    },
    {
      title: "Sales Dashboard KPIs",
      difficulty: "Hard",
      marks: 25,
      description:
        "Using a single SQL query, return Total Revenue, Total Orders, Average Order Value and Highest Order Value.",
      schema: `orders
------------------------------------------------
order_id        INT
amount          DECIMAL`,
      starter: `-- Write your SQL query below`,
    },
    {
      title: "Customer Retention Analysis",
      difficulty: "Hard",
      marks: 25,
      description:
        "Find customers who placed orders in both January and February.",
      schema: `orders
------------------------------------------------
customer_id     INT
order_date      DATE`,
      starter: `-- Write your SQL query below`,
    },
  ],
};

export default function CodingRound() {
  const location = useLocation();
  const selectedRole =
    location.state?.role || "Frontend Developer";

  const questions = roleQuestions[selectedRole];

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState(
    questions.map((q) => q.starter)
  );

  const [timeLeft, setTimeLeft] = useState(50 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const q = questions[current];

  const progress =
    ((current + 1) / questions.length) * 100;

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const updateAnswer = (value) => {
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const finishRound = () => {
    alert(`${selectedRole} Coding Round Completed!`);
  };

  return (
    <div className="coding-page">
      <div className="coding-card">

        <div className="coding-top">
          <div>
            <h3>{selectedRole}</h3>
            <p>Question {current + 1} of {questions.length}</p>
          </div>

          <div className="timer">
            {minutes}:{seconds}
          </div>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="question-header">
          <span className={`badge ${q.difficulty.toLowerCase()}`}>
            {q.difficulty}
          </span>

          <span>{q.marks} Marks</span>
        </div>

        <h2>{q.title}</h2>

        <p className="description">{q.description}</p>

        {q.schema && (
          <div className="schema-box">
            <h4>Database Schema</h4>
            <pre>{q.schema}</pre>
          </div>
        )}

        <div className="editor">
          <textarea
            spellCheck={false}
            value={answers[current]}
            onChange={(e) => updateAnswer(e.target.value)}
          />
        </div>

        <div className="coding-actions">
          <button
            className="secondary"
            disabled={current === 0}
            onClick={previousQuestion}
          >
            Previous
          </button>

          <button className="secondary">
            Run Code
          </button>

          {current === questions.length - 1 ? (
            <button onClick={finishRound}>
              Finish Round
            </button>
          ) : (
            <button onClick={nextQuestion}>
              Next Question
            </button>
          )}
        </div>

      </div>
    </div>
  );
}