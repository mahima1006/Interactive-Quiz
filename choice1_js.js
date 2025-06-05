const Data = [ /*Set of questions */
  {
    que: "What does HTML stand for?",
    option: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    ans: "Hyper Text Markup Language"
  },
  {
    que: "Which tag is used to create a paragraph in HTML?",
    option: ["<p>", "<para>", "<paragraph>", "<text>"],
    ans: "<p>"
  },
  {
    que: "How do you make text bold in HTML?",
    option: ["<bold>", "<b>", "<strong>", "<bo>"],
    ans: "<b>"
  },
  {
    que: "Which tag is used to add a link in HTML?",
    option: ["<link>", "<a>", "<href>", "<url>"],
    ans: "<a>"
  },
  {
    que: "How would you add a line break in html?",
    option: ["<br>","<b>","<break>","<bre>"],
    ans: "<br>"
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

function checkAnswer(selected, correct) { /* checks if the answer is same as the selected one*/
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    score++;
    feedback.innerText = "You're Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "Oops wrong answer!";
    feedback.style.color = "red";
  }

  setTimeout(() => { /*loads if its a coreect answer or not in 1 second */
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
