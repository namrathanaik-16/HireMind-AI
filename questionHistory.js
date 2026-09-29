const STORAGE_KEY = "hiremind_question_history";

export function getQuestionHistory(role) {
  try {
    const stored =
      localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const history = JSON.parse(stored);

    return history[role] || [];
  } catch (error) {
    console.error(
      "Unable to read question history:",
      error
    );

    return [];
  }
}

export function saveQuestionHistory(
  role,
  questionIds
) {
  try {
    const stored =
      localStorage.getItem(STORAGE_KEY);

    const history = stored
      ? JSON.parse(stored)
      : {};

    const existing =
      history[role] || [];

    history[role] = [
      ...existing,
      ...questionIds,
    ];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(history)
    );
  } catch (error) {
    console.error(
      "Unable to save question history:",
      error
    );
  }
}

export function clearQuestionHistory(
  role
) {
  try {
    const stored =
      localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return;
    }

    const history = JSON.parse(stored);

    delete history[role];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(history)
    );
  } catch (error) {
    console.error(
      "Unable to clear question history:",
      error
    );
  }
}