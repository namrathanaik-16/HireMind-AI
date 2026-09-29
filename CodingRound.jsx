import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Editor from "@monaco-editor/react";
import frontendQuestions from "../data/questions/frontendQuestions";
import javaQuestions from "../data/questions/javaQuestions";
import pythonQuestions from "../data/questions/pythonQuestions";
import qaQuestions from "../data/questions/qaQuestions";
import dataAnalystQuestions from "../data/questions/dataAnalystQuestions";

import { selectQuestions } from "../data/questions/selectQuestions";
import {
  getQuestionHistory,
  saveQuestionHistory,
} from "../data/questions/questionHistory";

import "../index.css";

const questionBanks = {
  "Frontend Developer": frontendQuestions,
  "Java Developer": javaQuestions,
  "Python Developer": pythonQuestions,
  "QA Engineer": qaQuestions,
  "Data Analyst": dataAnalystQuestions,
};

export default function CodingRound() {
  const location = useLocation();

  const selectedRole =
    location.state?.role || "Frontend Developer";

  const questionBank =
  questionBanks[selectedRole] || frontendQuestions;

  const [questions] = useState(() => {
    const attemptedIds =
      getQuestionHistory(selectedRole);

  return selectQuestions(
    questionBank,
    6,
    attemptedIds
  );
});

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState(() =>
    questions.map((q) => q.starter)
  );

  const [timeLeft, setTimeLeft] =
    useState(50 * 60);

  const [output, setOutput] =
    useState("");

  const [runError, setRunError] =
    useState("");

  const [testResults, setTestResults] =
    useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) =>
        prev > 0 ? prev - 1 : 0
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const q = questions[current];

  const progress =
    ((current + 1) / questions.length) * 100;

  const minutes = String(
    Math.floor(timeLeft / 60)
  ).padStart(2, "0");

  const seconds = String(
    timeLeft % 60
  ).padStart(2, "0");

  const updateAnswer = (value) => {
    const updated = [...answers];

    updated[current] = value;

    setAnswers(updated);
  };

  const clearResults = () => {
    setOutput("");
    setRunError("");
    setTestResults([]);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      clearResults();
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
      clearResults();
    }
  };

  const finishRound = () => {
    const questionIds =
      questions.map(
        (question) => question.id
      );

  saveQuestionHistory(
    selectedRole,
    questionIds
  );

  alert(
    `${selectedRole} Coding Round Completed!`
  );
};

  const getEditorLanguage = () => {
    if (q.schema) {
      return "sql";
    }

    if (selectedRole === "Python Developer") {
      return "python";
    }

    if (selectedRole === "Java Developer") {
      return "java";
    }

    return "javascript";
  };

  const compareValues = (
    actual,
    expected
  ) => {
    if (
      Array.isArray(actual) &&
      Array.isArray(expected)
    ) {
      return (
        JSON.stringify(actual) ===
        JSON.stringify(expected)
      );
    }

    if (
      typeof actual === "object" &&
      actual !== null &&
      typeof expected === "object" &&
      expected !== null
    ) {
      return (
        JSON.stringify(actual) ===
        JSON.stringify(expected)
      );
    }

    return (
      String(actual) ===
      String(expected)
    );
  };

  const runStandardFunctionTests = (
    candidateFunction
  ) => {
    const results =
      q.testCases.map((testCase) => {
        const actual =
          candidateFunction(
            ...testCase.input
          );

        const passed =
          compareValues(
            actual,
            testCase.expected
          );

        return {
          input: testCase.input,
          expected: testCase.expected,
          actual,
          passed,
        };
      });

    return results;
  };

  const runCode = () => {
    setOutput("");
    setRunError("");
    setTestResults([]);

    try {
      /*
       * Questions with specialized evaluators
       * will be connected later.
       */

      if (q.evaluator) {
        if (
          q.evaluator === "debounce" ||
          q.evaluator ===
            "async-request-manager" ||
          q.evaluator ===
            "code-review" ||
          q.evaluator === "async" ||
          q.evaluator ===
            "react-hook"
        ) {
          setOutput(
            "This question uses a specialized evaluator. Automatic evaluation for this question type will be connected next."
          );

          return;
        }
      }

      /*
       * Questions without automated
       * test cases can still execute
       * JavaScript code.
       */

      if (!q.testCases) {
        const code = answers[current];

        const logs = [];

        const originalLog =
          console.log;

        console.log = (...args) => {
          logs.push(
            args
              .map((value) =>
                typeof value ===
                "object"
                  ? JSON.stringify(
                      value
                    )
                  : String(value)
              )
              .join(" ")
          );
        };

        try {
          const execute =
            new Function(code);

          execute();
        } finally {
          console.log =
            originalLog;
        }

        if (logs.length > 0) {
          setOutput(
            logs.join("\n")
          );
        } else {
          setOutput(
            "Code executed successfully. No output."
          );
        }

        return;
      }

      const code = answers[current];

      const functionName =
        q.functionName;

      const execute =
        new Function(
          `${code}

          return typeof ${functionName} === "function"
            ? ${functionName}
            : null;
          `
        );

      const candidateFunction =
        execute();

      if (!candidateFunction) {
        throw new Error(
          `Function ${functionName} was not found.`
        );
      }

      const results =
        runStandardFunctionTests(
          candidateFunction
        );

      setTestResults(results);

      const passedCount =
        results.filter(
          (test) => test.passed
        ).length;

      setOutput(
        `${passedCount} / ${results.length} Test Cases Passed`
      );
    } catch (error) {
      setRunError(
        error.message
      );
    }
  };

  return (
    <div className="coding-page">

      <div className="coding-card">

        <div className="coding-top">

          <div>
            <h3>
              {selectedRole}
            </h3>

            <p>
              Question {current + 1} of{" "}
              {questions.length}
            </p>
          </div>

          <div className="timer">
            {minutes}:{seconds}
          </div>

        </div>

        <div className="progress">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

        <div className="question-header">

          <span
            className={`badge ${q.difficulty.toLowerCase()}`}
          >
            {q.difficulty}
          </span>

          <span>
            {q.marks} Marks
          </span>

        </div>

        <h2>
          {q.title}
        </h2>

        <p className="description">
          {q.description}
        </p>

        {q.skills && (
          <div className="question-skills">

            {q.skills.map(
              (skill) => (
                <span
                  key={skill}
                  className="skill-tag"
                >
                  {skill}
                </span>
              )
            )}

          </div>
        )}

        {q.schema && (
          <div className="schema-box">

            <h4>
              Database Schema
            </h4>

            <pre>
              {q.schema}
            </pre>

          </div>
        )}

        <div className="editor">

          <Editor
            height="400px"
            language={getEditorLanguage()}
            theme="vs-dark"
            value={answers[current]}
            onChange={(value) =>
              updateAnswer(
                value || ""
              )
            }
            options={{
              minimap: {
                enabled: false,
              },

              fontSize: 14,

              lineNumbers: "on",

              wordWrap: "on",

              automaticLayout: true,

              tabSize: 2,

              scrollBeyondLastLine:
                false,

              padding: {
                top: 15,
              },
            }}
          />

        </div>

        {(output || runError) && (
          <div className="output-console">

            <div className="output-header">

              <span>
                {runError
                  ? "Error"
                  : "Test Results"}
              </span>

            </div>

            {runError ? (
              <pre className="error-output">
                {runError}
              </pre>
            ) : (
              <>
                <div className="test-summary">
                  {output}
                </div>

                {testResults.length >
                  0 && (
                  <div className="test-results">

                    {testResults.map(
                      (
                        test,
                        index
                      ) => (
                        <div
                          className={`test-case ${
                            test.passed
                              ? "passed"
                              : "failed"
                          }`}
                          key={index}
                        >

                          <div className="test-case-title">

                            <span>
                              {test.passed
                                ? "✓"
                                : "✗"}
                            </span>

                            <span>
                              Test Case{" "}
                              {index + 1}
                            </span>

                          </div>

                          <div className="test-case-details">

                            <div>
                              <strong>
                                Input:
                              </strong>{" "}
                              {JSON.stringify(
                                test.input
                              )}
                            </div>

                            <div>
                              <strong>
                                Expected:
                              </strong>{" "}
                              {JSON.stringify(
                                test.expected
                              )}
                            </div>

                            <div>
                              <strong>
                                Actual:
                              </strong>{" "}
                              {JSON.stringify(
                                test.actual
                              )}
                            </div>

                          </div>

                        </div>
                      )
                    )}

                  </div>
                )}

              </>
            )}

          </div>
        )}

        <div className="coding-actions">

          <button
            className="secondary"
            disabled={
              current === 0
            }
            onClick={
              previousQuestion
            }
          >
            Previous
          </button>

          <button
            className="secondary"
            onClick={runCode}
          >
            Run Code
          </button>

          {current ===
          questions.length - 1 ? (
            <button
              onClick={
                finishRound
              }
            >
              Finish Round
            </button>
          ) : (
            <button
              onClick={
                nextQuestion
              }
            >
              Next Question
            </button>
          )}

        </div>

      </div>

    </div>
  );
}