export function selectQuestions(
  questionBank,
  count = 6,
  attemptedIds = []
) {
  const attemptedSet =
    new Set(attemptedIds);

  const availableQuestions =
    questionBank.filter(
      (question) =>
        !attemptedSet.has(question.id)
    );

  const shuffle = (questions) => {
    return [...questions].sort(
      () => Math.random() - 0.5
    );
  };

  const easy =
    availableQuestions.filter(
      (question) =>
        question.difficulty === "Easy"
    );

  const medium =
    availableQuestions.filter(
      (question) =>
        question.difficulty === "Medium"
    );

  const hard =
    availableQuestions.filter(
      (question) =>
        question.difficulty === "Hard"
    );

  /*
   * Normal case:
   * 2 Easy + 2 Medium + 2 Hard
   */

  if (
    easy.length >= 2 &&
    medium.length >= 2 &&
    hard.length >= 2
  ) {
    const selected = [
      ...shuffle(easy).slice(0, 2),
      ...shuffle(medium).slice(0, 2),
      ...shuffle(hard).slice(0, 2),
    ];

    return shuffle(selected);
  }

  /*
   * If the user has already attempted
   * most of the question bank, allow
   * previously attempted questions again.
   */

  const fallback =
    shuffle(questionBank);

  return fallback.slice(0, count);
}