// ===== State =====
let allQuestions = [
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Who was the first person to walk on the Moon?",
    answers: [
      { text: "Neil Armstrong", correct: true },
      { text: "Yuri Gagarin", correct: false },
      { text: "Buzz Aldrin", correct: false },
      { text: "John Glenn", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for Gold?",
    answers: [
      { text: "G", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Go", correct: false },
    ],
  },
  {
    question: "Which country invented paper?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "China", correct: true },
      { text: "Greece", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question: "How many bones are in the adult human body?",
    answers: [
      { text: "206", correct: true },
      { text: "201", correct: false },
      { text: "210", correct: false },
      { text: "208", correct: false },
    ],
  },
  // add other questions here...
];

// ===== Variables =====
let availableQuestions = [];
let score = 0;
let timer;
const QUESTION_TIME = 5; // seconds per question

// DOM references
let startScreen,
  startButton,
  quizScreen,
  questionElement,
  answerButtons,
  nextButton,
  timerElement;

// ===== Utils =====
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== Core =====
function initDom() {
  startScreen = document.getElementById("start-screen");
  startButton = document.getElementById("start-btn");
  quizScreen = document.getElementById("quiz-screen");
  questionElement = document.getElementById("question");
  answerButtons = document.getElementById("answer-buttons");
  nextButton = document.getElementById("next-btn");
  timerElement = document.getElementById("timer");

  startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    startQuiz();
  });

  nextButton.addEventListener("click", () => {
    nextButton.style.display = "none";
    if (availableQuestions.length > 0) {
      showQuestion();
    } else {
      showScore();
    }
  });
}

// ===== Start Quiz =====
function startQuiz() {
  score = 0;
  const shuffled = shuffle([...allQuestions]);
  availableQuestions = shuffled.slice(0, 5); // pick 5 random questions
  nextButton.style.display = "none";
  timerElement.style.display = "block";
  showQuestion();
}

function resetState() {
  clearInterval(timer);
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// ===== Show Question =====
function showQuestion() {
  resetState();

  if (availableQuestions.length === 0) {
    showScore();
    return;
  }

  const currentQuestion = availableQuestions.splice(0, 1)[0];
  questionElement.textContent = currentQuestion.question;

  const shuffledAnswers = shuffle([...currentQuestion.answers]);
  shuffledAnswers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = answer.text;
    btn.dataset.correct = answer.correct ? "true" : "false";
    btn.addEventListener("click", () => selectAnswer(btn));
    answerButtons.appendChild(btn);
  });

  startTimer();
}

// ===== Timer =====
function startTimer() {
  let timeLeft = QUESTION_TIME;
  timerElement.textContent = `Time: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      const correctBtn = Array.from(answerButtons.children).find(
        (btn) => btn.dataset.correct === "true"
      );
      revealCorrect(correctBtn);

      Array.from(answerButtons.children).forEach(
        (btn) => (btn.disabled = true)
      );

      nextButton.style.display = "block"; // show next button
    }
  }, 1000);
}

// ===== Select Answer =====
function selectAnswer(selectedBtn) {
  clearInterval(timer);
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (!isCorrect) selectedBtn.classList.add("wrong");

  const correctBtn = Array.from(answerButtons.children).find(
    (btn) => btn.dataset.correct === "true"
  );
  revealCorrect(correctBtn);

  Array.from(answerButtons.children).forEach((btn) => (btn.disabled = true));

  if (isCorrect) score++;

  nextButton.style.display = "block"; // show next button
}

// ===== Reveal Correct =====
function revealCorrect(correctBtn) {
  if (correctBtn) correctBtn.classList.add("correct");
}

// ===== Show Score =====
function showScore() {
  resetState();
  timerElement.style.display = "none";
  questionElement.innerHTML = `You scored <strong>${score}</strong> out of <strong>5</strong> 🎉`;
  nextButton.textContent = "Restart Quiz";
  nextButton.style.display = "block";

  nextButton.addEventListener(
    "click",
    () => {
      nextButton.textContent = "Next Question";
      startQuiz();
    },
    { once: true }
  );
}

// ===== Boot =====
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDom);
} else {
  initDom();
}
