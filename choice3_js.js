const Data = [/*Set of questions */
  {
    que: "What planet is known as the 'Blue Planet'?",
    option: ["Earth", "Mars", "Jupiter", "Venus"],
    ans: "Earth"
  },
  {
    que: "Water freezes at what temperature in Celsius?",
    option: ["0*C", "32*C", "-10*C", "100*C"],
    ans: "0*C"
  },
  {
    que: "Which part of the plant conducts photosynthesis?",
    option: ["Roots", "Stem", "Leaves", "Flowers"],
    ans: "Leaves"
  },
  {
    que: "What gas do humans breathe in to survive?",
    option: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    ans: "Oxygen"
  },
  {
    que: "What is the boiling point of water in Celsius?",
    option: ["0*C", "50*C", "100*C", "150*C"],
    ans: "100*C"
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
