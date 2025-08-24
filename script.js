// const questions = [
//   {
//     question: "What is the largest ocean on Earth?",
//     answers: [
//       { text: "Atlantic Ocean", correct: false },
//       { text: "Indian Ocean", correct: false },
//       { text: "Pacific Ocean", correct: true },
//       { text: "Arctic Ocean", correct: false },
//     ],
//   },
//   {
//     question: "Who was the first person to walk on the Moon?",
//     answers: [
//       { text: "Neil Armstrong", correct: true },
//       { text: "Yuri Gagarin", correct: false },
//       { text: "Buzz Aldrin", correct: false },
//       { text: "John Glenn", correct: false },
//     ],
//   },
//   {
//     question: "What is the chemical symbol for Gold?",
//     answers: [
//       { text: "G", correct: false },
//       { text: "Au", correct: true },
//       { text: "Ag", correct: false },
//       { text: "Go", correct: false },
//     ],
//   },
//   {
//     question: "Which country invented paper?",
//     answers: [
//       { text: "Egypt", correct: false },
//       { text: "China", correct: true },
//       { text: "Greece", correct: false },
//       { text: "India", correct: false },
//     ],
//   },
//   {
//     question: "How many bones are in the adult human body?",
//     answers: [
//       { text: "206", correct: true },
//       { text: "201", correct: false },
//       { text: "210", correct: false },
//       { text: "208", correct: false },
//     ],
//   },
//   {
//     question: "Which planet is known as the “Red Planet?",
//     answers: [
//       { text: "Mercury", correct: false },
//       { text: "Venus", correct: false },
//       { text: "Jupiter", correct: false },
//       { text: "Mars", correct: true },
//     ],
//   },
//   {
//     question: "What is the capital of Japan?",
//     answers: [
//       { text: "Kyoto", correct: false },
//       { text: "Osaka", correct: false },
//       { text: "Tokyo", correct: true },
//       { text: "Nagoya", correct: false },
//     ],
//   },
//   {
//     question: "Which gas do plants absorb during photosynthesis?",
//     answers: [
//       { text: "Carbon Dioxide", correct: true },
//       { text: "Oxygen", correct: false },
//       { text: "Nitrogen", correct: false },
//       { text: "Hydrogen", correct: false },
//     ],
//   },
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function randomQuestions() {
//   // pick a random index from the questions array
//   let randomIndex = Math.floor(Math.random() * questions.length);
//   let randomQuestion = questions[randomIndex];

//   console.log(randomQuestion);
//   return randomQuestion;
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   questionElement.innerHTML = currentQuestion.question;

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//     answerButtons.appendChild(button);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("wrong");
//   }
//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

// function showScore() {
//   resetState();
//   questionElement.innerHTML = `You scored ${score} out of ${questions.length}! 🎉`;
//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   if (currentQuestionIndex < questions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });

// startQuiz();

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
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: true },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Kyoto", correct: false },
      { text: "Osaka", correct: false },
      { text: "Tokyo", correct: true }, // ✅ correct
      { text: "Nagoya", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    answers: [
      { text: "Carbon Dioxide", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Picasso", correct: false },
      { text: "Michelangelo", correct: false },
      { text: "Van Gogh", correct: true },
      { text: "Leonardo da Vinci", correct: false },
    ],
  },
  {
    question: "What’s the fastest land animal?",
    answers: [
      { text: "Cheetah", correct: true },
      { text: "Horse", correct: false },
      { text: "Lion", correct: false },
      { text: "Leopard", correct: false },
    ],
  },
];

let availableQuestions = [];
let score = 0;

// DOM refs (initialized after DOM is ready)
let questionElement, answerButtons, nextButton;

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
  questionElement = document.getElementById("question");
  answerButtons = document.getElementById("answer-buttons");
  nextButton = document.getElementById("next-btn");

  if (!questionElement || !answerButtons || !nextButton) {
    console.error(
      "Missing required elements. Make sure you have #question, #answer-buttons, and #next-btn in your HTML."
    );
  }

  nextButton.addEventListener("click", () => {
    if (nextButton.dataset.action === "restart") {
      startQuiz();
    } else {
      showQuestion();
    }
  });
}

function startQuiz() {
  score = 0;
  availableQuestions = [...allQuestions]; // fresh copy
  nextButton.textContent = "Next";
  nextButton.dataset.action = "next";
  showQuestion();
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion() {
  resetState();

  // no more questions → score
  if (availableQuestions.length === 0) {
    showScore();
    return;
  }

  // pick & remove a random question (no repeats)
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const currentQuestion = availableQuestions.splice(randomIndex, 1)[0];

  // render question
  questionElement.textContent = currentQuestion.question;

  // shuffle answers each time
  const answersShuffled = shuffle([...currentQuestion.answers]);

  answersShuffled.forEach((answer) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = answer.text;
    btn.dataset.correct = answer.correct ? "true" : "false";
    btn.addEventListener("click", selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  // reveal correct + lock buttons
  Array.from(answerButtons.children).forEach((btn) => {
    if (btn.dataset.correct === "true") btn.classList.add("correct");
    btn.disabled = true;
  });

  nextButton.style.display = "block";
  nextButton.dataset.action =
    availableQuestions.length === 0 ? "score" : "next";

  if (nextButton.dataset.action === "score") {
    nextButton.textContent = "Show Score";
    nextButton.onclick = showScore; // ensure it goes to score
  } else {
    nextButton.textContent = "Next";
    nextButton.onclick = showQuestion;
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored <strong>${score}</strong> out of <strong>${allQuestions.length}</strong> 🎉`;
  nextButton.textContent = "Play Again";
  nextButton.dataset.action = "restart";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

// ===== Boot =====
// Works whether your script is in <head> or at the end of <body>
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initDom();
    startQuiz();
  });
} else {
  initDom();
  startQuiz();
}
