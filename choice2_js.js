const Data = [/*Set of questions */
  {
    que: "Which country has the longest coastline in the world?",
    option: ["Australia", "Canada", "Russia", "Indonesia"],
    ans: "Canada"
  },
  {
    que: "What is the powerhouse of the cell?",
    option: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    ans: "Mitochondria"
  },
  {
    que: "Who was the first woman to win a Nobel Prize?",
    option: [
      "Marie Curie",
      "Rosalind Franklin",
      "Ada Lovelace",
      "Dorothy Hodgkin"
    ],
    ans: "Marie Curie"
  },
  {
    que: "Which scientist developed the theory of general relativity?",
    option: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    ans: "Albert Einstein"
  },
  {
    que: "What element does 'Fe' represent on the periodic table?",
    option: ["Lead", "Iron", "Fluorine", "Francium"],
    ans: "Iron"
  }
];

let currentQue = 0;
let score = 0;

function loadQuestion() {
  const q = Data[currentQue];
  document.getElementById("question").innerText = q.que;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  for (let i = 0; i < q.option.length; i++) {
  const opt = q.option[i];
  const b = document.createElement("button");
  b.innerText = opt;
  b.onclick = function() {
    checkAnswer(opt, q.ans);
  };
  optionsDiv.appendChild(b);
}

  document.getElementById("feedback").innerText = "";
}

function checkAnswer(selected, correct) {/* checks if the answer is same as the selected one*/
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    score++;
    feedback.innerText = "You're Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "Oops wrong answer!";
    feedback.style.color = "red";
  }

  setTimeout(() => {/*loads if its a coreect answer or not in 1 second */
    currentQue++;
    if (currentQue < Data.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  }, 1000);
}

function showFinalScore() {
  document.querySelector(".question-box").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${Data.length}</p>
    <button onclick="window.location.href='index.html'" 
            style="background-color: lightblue; padding: 10px 20px; margin: 10px;color:black;">
      Go back to main
    </button>
  `;
}


loadQuestion();
