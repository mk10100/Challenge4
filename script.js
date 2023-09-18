document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "Who created JavaScript?",
            options: [
                "Brendan Eich",
                "Mark Zuckerberg",
                "Steve Jobs",
                "Bill Gates",
            ],
            correctAnswer: 0,
        },
        {
            question: "In what year was JavaScript first introduced?",
            options: ["1995", "2000", "2005", "2010"],
            correctAnswer: 0,
        },
    ];

    const questionContainer = document.getElementById("question-container");
    const scoreSpan = document.getElementById("score");
    const timeSpan = document.getElementById("time");
    const nextButton = document.getElementById("next-button");
    const startButton = document.getElementById("start-button");
    const initialsInput = document.getElementById("initials-input");
    const saveScoreButton = document.getElementById("save-score-button");
    const initialsContainer = document.getElementById("initials-container");
    const congratulationsContainer = document.getElementById("congratulations-container");

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
        displayQuestion();
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
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!selectedOption) return false;

        const selectedAnswer = parseInt(selectedOption.value);

        return selectedAnswer === questions[currentQuestionIndex].correctAnswer;
    }

    function displayScoreboard() {
        // Implement the scoreboard display logic
    }

    function displayAllScores() {
        // Implement the display of all scores logic
    }

    function displayQuestion() {
        // Implement the display of questions and options logic
    }

    startButton.addEventListener("click", () => {
        document.getElementById("initials-container").style.display = "none";
        questionContainer.style.display = "block";
        nextButton.style.display = "inline";
        startTimer();
        displayQuestion();

        // Add the event listener for the "Next" button after it is displayed
        nextButton.addEventListener("click", () => {
            checkAnswer();
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                endGame();
            }
        });
    });
    
    function checkAnswer() {
        // Implement the checkAnswer function to evaluate the user's answer and update the score
        if (isAnswerCorrect()) {
            score++;
        }
        scoreSpan.textContent = score;
    }
    
    // Initial setup
    startButton.addEventListener("click", startGame);
});
