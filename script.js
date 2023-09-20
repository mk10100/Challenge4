document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "Who created JavaScript?",
      options: ["Brendan Eich", "Mark Zuckerberg", "Steve Jobs", "Bill Gates"],
      correctAnswer: 0,
    },
    {
      question: "In what year was JavaScript first introduced?",
      options: ["1995", "2000", "2005", "2010"],
      correctAnswer: 0,
    },
    {
      question: "What was JavaScript initially called?",
      options: ["JavaScript", "ScriptEase", "LiveScript", "WebScript"],
      correctAnswer: 2,
    },
    {
      question: "Which programming languages influenced JavaScript?",
      options: ["Python", "Java", "Perl", "All of the above"],
      correctAnswer: 3,
    },
    {
      question: "What is ECMAScript?",
      options: [
        "A type of coffee",
        "A version of JavaScript",
        "A web browser",
        "An operating system",
      ],
      correctAnswer: 1,
    },
  ];
  const questionContainer = document.getElementById("question-container");
  const scoreSpan = document.getElementById("score");
  const nextButton = document.getElementById("next-button");
  const startButton = document.getElementById("start-button");
  const initialsInput = document.getElementById("initials-input");
  const timeSpan = document.getElementById("time");

  const saveScoreButton = document.getElementById("save-score-button");
  const initialsContainer = document.getElementById("initials-container");
  const congratulationsContainer = document.getElementById(
    "congratulations-container"
  );

  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
  let scoreboard = [];

  function startGame() {
    initialsContainer.style.display = "none";
    questionContainer.style.display = "block";
    nextButton.style.display = "inline";
    startTimer();
    displayQuestion(); // Display the first question
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        timeSpan.textContent = timeLeft + " seconds";
      } else {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    clearInterval(timerInterval);

    const finalScoreSpan = document.getElementById("final-score");
    finalScoreSpan.textContent = score + "/" + questions.length;

    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("game-over-container").style.display = "block";

    if (score === questions.length) {
      congratulationsContainer.style.display = "block";
    } else {
      congratulationsContainer.style.display = "none";
    }

    const initials = initialsInput.value.trim();
    if (initials !== "") {
      const scoreItem = { initials, score };
      scoreboard.push(scoreItem);
    }

    displayScoreboard();
    displayAllScores();
  }

  function isAnswerCorrect() {
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    );
    if (!selectedOption) {
      timeLeft = timeLeft - 10;
      return false;
    }

    const selectedAnswer = parseInt(selectedOption.value);
    const answer =
      selectedAnswer === questions[currentQuestionIndex].correctAnswer;
    if (!answer) {
      timeLeft = timeLeft - 10;
    }
    return answer;
  }

  function displayScoreboard() {
    // Implement the scoreboard display logic
  }

  function displayAllScores() {
    // Implement the display of all scores logic
  }
  function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionContainer.innerHTML = `
  <h2>${currentQuestion.question}</h2>
  <ul>
    ${currentQuestion.options
      .map(
        (option, index) => `
          <li>
            <input type="radio" name="answer" value="${index}" id="option${index}">
            <label for="option${index}">${option}</label>
          </li>
        `
      )
      .join("")}
  </ul>
`;
    } else {
      endGame(); // End the game when all questions are answered
    }
  }
  function checkAnswer() {
    if (isAnswerCorrect()) {
      score++;
    }
    scoreSpan.textContent = score;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion(); // Display the next question
    } else {
      endGame(); // End the game when all questions are answered
    }
  }

  startButton.addEventListener("click", () => {
    startTimer();
    document.getElementById("initials-container").style.display = "none";
    questionContainer.style.display = "block";
    nextButton.style.display = "inline";
    displayQuestion(); // Display the first question

    // Add the event listener for the "Next" button after it is displayed
    nextButton.addEventListener("click", checkAnswer);
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const questions = [
//         {
//             question: "Who created JavaScript?",
//             options: [
//                 "Brendan Eich",
//                 "Mark Zuckerberg",
//                 "Steve Jobs",
//                 "Bill Gates",
//             ],
//             correctAnswer: 0,
//         },
//         {
//             question: "In what year was JavaScript first introduced?",
//             options: ["1995", "2000", "2005", "2010"],
//             correctAnswer: 0,
//         },
//     ];

//     const questionContainer = document.getElementById("question-container");
//     const scoreSpan = document.getElementById("score");
//     const timeSpan = document.getElementById("time");
//     const nextButton = document.getElementById("next-button");
//     const startButton = document.getElementById("start-button");
//     const initialsInput = document.getElementById("initials-input");
//     const saveScoreButton = document.getElementById("save-score-button");
//     const initialsContainer = document.getElementById("initials-container");
//     const congratulationsContainer = document.getElementById("congratulations-container");

//     let currentQuestionIndex = 0;
//     let score = 0;
//     let timeLeft = 60;
//     let timerInterval;
//     let scoreboard = [];

//     function startGame() {
//         initialsContainer.style.display = "none";
//         questionContainer.style.display = "block";
//         nextButton.style.display = "inline";
//         startTimer();
//         displayQuestion();
//     }

//     function startTimer() {
//         timerInterval = setInterval(() => {
//             if (timeLeft > 0) {
//                 timeLeft--;
//                 timeSpan.textContent = timeLeft + " seconds";
//             } else {
//                 clearInterval(timerInterval);
//                 endGame();
//             }
//         }, 1000);
//     }

//     function endGame() {
//         clearInterval(timerInterval);
//         const finalScoreSpan = document.getElementById("final-score");
//         finalScoreSpan.textContent = score + "/" + questions.length;

//         document.getElementById("question-container").style.display = "none";
//         document.getElementById("next-button").style.display = "none";
//         document.getElementById("game-over-container").style.display = "block";

//         if (score === questions.length) {
//             congratulationsContainer.style.display = "block";
//         } else {
//             congratulationsContainer.style.display = "none";
//         }

//         const initials = initialsInput.value.trim();
//         if (initials !== "") {
//             const scoreItem = { initials, score };
//             scoreboard.push(scoreItem);
//         }

//         displayScoreboard();
//         displayAllScores();
//     }

//     function isAnswerCorrect() {
//         const selectedOption = document.querySelector('input[name="answer"]:checked');
//         if (!selectedOption) return false;

//         const selectedAnswer = parseInt(selectedOption.value);

//         return selectedAnswer === questions[currentQuestionIndex].correctAnswer;
//     }

//     function displayScoreboard() {
//         // Implement the scoreboard display logic
//     }

//     function displayAllScores() {
//         // Implement the display of all scores logic
//     }

//     function displayQuestion() {
//         // Implement the display of questions and options logic
//     }

//     startButton.addEventListener("click", () => {
//         document.getElementById("initials-container").style.display = "none";
//         questionContainer.style.display = "block";
//         nextButton.style.display = "inline";
//         startTimer();
//         displayQuestion();

//         // Add the event listener for the "Next" button after it is displayed
//         nextButton.addEventListener("click", () => {
//             checkAnswer();
//             currentQuestionIndex++;

//             if (currentQuestionIndex < questions.length) {
//                 displayQuestion();
//             } else {
//                 endGame();
//             }
//         });
//     });

//     function checkAnswer() {
//         // Implement the checkAnswer function to evaluate the user's answer and update the score
//         if (isAnswerCorrect()) {
//             score++;
//         }
//         scoreSpan.textContent = score;
//     }

//     // Initial setup
//     startButton.addEventListener("click", startGame);
// });
