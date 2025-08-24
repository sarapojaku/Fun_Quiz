# 🧠 Quiz Website

A simple and fun quiz website built with **HTML, CSS, and JavaScript**.  
Each round presents a **random question** (no repeats), and answers are shuffled for fairness.  
At the end, the user’s **score is displayed** with an option to play again.

---

## ✨ Features
- 🎲 Randomized questions every round (no repeats until reset).  
- 🔀 Shuffled answer options each time.  
- ✅ Immediate feedback (correct/incorrect highlighting).  
- 📊 Score calculation at the end of the quiz.  
- 🔁 Replay option after finishing.  
- 💡 Easy to customize: just edit the `allQuestions` array in `app.js`.

---

## 📂 Project Structure
quiz-website/
│── index.html # Main HTML file
│── style.css # Basic styling (buttons, colors, layout)
│── app.js # Quiz logic (questions, randomizer, scoring)
│── README.md # Project documentation

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone or download this repo
```bash
git clone https://github.com/your-username/quiz-website.git
2. Open in browser
Simply open index.html in your browser — no server needed.

🛠️ Customization
Add or Edit Questions
Open app.js and update the allQuestions array:

js
Copy
Edit
{
  question: "What is the capital of Japan?",
  answers: [
    { text: "Kyoto", correct: false },
    { text: "Osaka", correct: false },
    { text: "Tokyo", correct: true },
    { text: "Nagoya", correct: false },
  ],
}
question → your quiz question

answers → possible answers (correct: true marks the right one)

🎨 Styling
Basic CSS is included in style.css.

Feel free to customize colors, fonts, or button styles.

📸 Preview
Here’s how the quiz looks in action:

Question screen:
👉 A random question with four shuffled answer buttons.

Score screen:
👉 “You scored X out of Y 🎉” message with a Play Again button.

📌 Future Ideas
⏱️ Add a timer for each question.

🏆 Leaderboard with high scores.

📱 Mobile-responsive layout.

🌙 Dark mode toggle.

👩‍💻 Author
Made with ❤️ by [Sara Pojaku]
