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
    question: "Which element has the atomic number 1?",
    answers: [
      { text: "Helium", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Leo Tolstoy", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Earth", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    answers: [
      { text: "China", correct: false },
      { text: "Brazil", correct: true },
      { text: "UK", correct: false },
      { text: "Russia", correct: false },
    ],
  },
  {
    question: "What is the square root of 144?",
    answers: [
      { text: "10", correct: false },
      { text: "12", correct: true },
      { text: "14", correct: false },
      { text: "16", correct: false },
    ],
  },
  {
    question: "Which organ purifies blood in the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Kidney", correct: true },
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
    ],
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      { text: "Marie Curie", correct: false },
      { text: "Alexander Fleming", correct: true },
      { text: "Louis Pasteur", correct: false },
      { text: "Gregor Mendel", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Everest", correct: true },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false },
    ],
  },
  {
    question: "Which continent is the Sahara Desert located on?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "South America", correct: false },
    ],
  },
  {
    question: "What is the main language spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "English", correct: false },
      { text: "French", correct: false },
    ],
  },
  {
    question: "Which is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "What is H2O more commonly known as?",
    answers: [
      { text: "Hydrogen Peroxide", correct: false },
      { text: "Water", correct: true },
      { text: "Salt", correct: false },
      { text: "Oxygen", correct: false },
    ],
  },
  {
    question: "Who is the author of 'Harry Potter' series?",
    answers: [
      { text: "J.K. Rowling", correct: true },
      { text: "J.R.R. Tolkien", correct: false },
      { text: "George R.R. Martin", correct: false },
      { text: "Suzanne Collins", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "Japan", correct: true },
      { text: "China", correct: false },
      { text: "Thailand", correct: false },
      { text: "South Korea", correct: false },
    ],
  },
  {
    question: "Which organ pumps blood through the body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false },
      { text: "Kidneys", correct: false },
    ],
  },
  {
    question: "Which gas is essential for human respiration?",
    answers: [
      { text: "Carbon Dioxide", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the freezing point of water?",
    answers: [
      { text: "0°C", correct: true },
      { text: "32°C", correct: false },
      { text: "100°C", correct: false },
      { text: "-10°C", correct: false },
    ],
  },
  {
    question: "Which famous ship sank in 1912?",
    answers: [
      { text: "Titanic", correct: true },
      { text: "Lusitania", correct: false },
      { text: "Queen Mary", correct: false },
      { text: "Bismarck", correct: false },
    ],
  },
  {
    question: "Which country has the largest population?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "USA", correct: false },
      { text: "Russia", correct: false },
    ],
  },
  {
    question: "Which planet spins on its side compared to the others?",
    answers: [
      { text: "Uranus", correct: true },
      { text: "Neptune", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    answers: [
      { text: "Marie Curie", correct: true },
      { text: "Rosalind Franklin", correct: false },
      { text: "Mother Teresa", correct: false },
      { text: "Ada Lovelace", correct: false },
    ],
  },
  {
    question: "What year did World War II end?",
    answers: [
      { text: "1945", correct: true },
      { text: "1940", correct: false },
      { text: "1939", correct: false },
      { text: "1950", correct: false },
    ],
  },
  {
    question: "Which element is a liquid at room temperature?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Sodium", correct: false },
      { text: "Aluminum", correct: false },
      { text: "Potassium", correct: false },
    ],
  },
  {
    question: "In which country were the Olympic Games invented?",
    answers: [
      { text: "Greece", correct: true },
      { text: "Italy", correct: false },
      { text: "France", correct: false },
      { text: "Egypt", correct: false },
    ],
  },
  {
    question: "Which continent has the most countries?",
    answers: [
      { text: "Africa", correct: true },
      { text: "Europe", correct: false },
      { text: "Asia", correct: false },
      { text: "South America", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Ringgit", correct: false },
      { text: "Baht", correct: false },
    ],
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: [
      { text: "France", correct: true },
      { text: "Germany", correct: false },
      { text: "Italy", correct: false },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "What is the hottest planet in our solar system?",
    answers: [
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "What does DNA stand for?",
    answers: [
      { text: "Deoxyribonucleic Acid", correct: true },
      { text: "Dynamic Nuclear Atom", correct: false },
      { text: "Double Nucleic Agent", correct: false },
      { text: "Deep Neural Array", correct: false },
    ],
  },
  {
    question: "Which is the largest internal organ in the human body?",
    answers: [
      { text: "Liver", correct: true },
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
      { text: "Kidneys", correct: false },
    ],
  },
  {
    question: "Which is the smallest bone in the human body?",
    answers: [
      { text: "Stapes (in the ear)", correct: true },
      { text: "Phalanges", correct: false },
      { text: "Fibula", correct: false },
      { text: "Ulna", correct: false },
    ],
  },
  {
    question: "What is the capital city of Australia?",
    answers: [
      { text: "Canberra", correct: true },
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Perth", correct: false },
    ],
  },
  {
    question: "Which country has the most time zones?",
    answers: [
      { text: "France", correct: true },
      { text: "USA", correct: false },
      { text: "Russia", correct: false },
      { text: "Canada", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Makalu", correct: false },
    ],
  },
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
