const globalHardLevelQuestions = [
    // India
    {
        question: "Which Indian city is known as the 'Pink City'?",
        options: { A: "Jaipur", B: "Jodhpur", C: "Udaipur", D: "Ahmedabad" },
        answer: "A"
    },
    {
        question: "Which is the oldest stock exchange in Asia located in India?",
        options: { A: "Calcutta Stock Exchange", B: "Bombay Stock Exchange", C: "National Stock Exchange", D: "Madras Stock Exchange" },
        answer: "B"
    },
    {
        question: "Which Indian classical dance form originates from Odisha?",
        options: { A: "Bharatanatyam", B: "Kathakali", C: "Odissi", D: "Kuchipudi" },
        answer: "C"
    },

    // United States
    {
        question: "Who was the first President of the United States?",
        options: { A: "Thomas Jefferson", B: "John Adams", C: "Abraham Lincoln", D: "George Washington" },
        answer: "D"
    },
    {
        question: "Which US state was the last to join the Union, becoming the 50th state?",
        options: { A: "Alaska", B: "Hawaii", C: "Arizona", D: "New Mexico" },
        answer: "B"
    },
    {
        question: "Which US city is known for being the headquarters of the United Nations?",
        options: { A: "Washington, D.C.", B: "Los Angeles", C: "New York City", D: "Chicago" },
        answer: "C"
    },

    // Russia
    {
        question: "Which Russian city is known as the 'Venice of the North'?",
        options: { A: "Moscow", B: "Novosibirsk", C: "Saint Petersburg", D: "Vladivostok" },
        answer: "C"
    },
    {
        question: "What is the official residence of the President of Russia?",
        options: { A: "The White House", B: "The Kremlin", C: "Winter Palace", D: "Lubyanka" },
        answer: "B"
    },
    {
        question: "Which Russian cosmonaut was the first human to travel into space?",
        options: { A: "Alexei Leonov", B: "Yuri Gagarin", C: "Valentina Tereshkova", D: "Gherman Titov" },
        answer: "B"
    },

    // Japan
    {
        question: "Which city in Japan was the first to be hit by an atomic bomb in 1945?",
        options: { A: "Tokyo", B: "Hiroshima", C: "Nagasaki", D: "Osaka" },
        answer: "B"
    },
    {
        question: "What is the highest mountain in Japan?",
        options: { A: "Mount Haku", B: "Mount Asama", C: "Mount Fuji", D: "Mount Tate" },
        answer: "C"
    },
    {
        question: "Which Japanese city is known as the 'City of Temples'?",
        options: { A: "Kyoto", B: "Osaka", C: "Sapporo", D: "Nagoya" },
        answer: "A"
    },
    {
        question: "Who is the current Emperor of Japan (as of 2024)?",
        options: { A: "Akihito", B: "Naruhito", C: "Hirohito", D: "Yoshihito" },
        answer: "B"
    },
    {
        question: "Which Japanese electronics company was the first to develop the Walkman?",
        options: { A: "Panasonic", B: "Toshiba", C: "Sony", D: "Sharp" },
        answer: "C"
    },
    {
        question: "Which treaty ended the Russo-Japanese War in 1905?",
        options: { A: "Treaty of Versailles", B: "Treaty of Kanagawa", C: "Treaty of Portsmouth", D: "Treaty of Brest-Litovsk" },
        answer: "C"
    }
];

function createQuiz() {
    const container = document.getElementById("container");

    globalHardLevelQuestions.forEach((questionObj, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const questionNumber = index + 1;
        let optionsHTML = '';
        // Fixed iterating through the object
        Object.entries(questionObj.options).forEach(([key, option]) => {
            optionsHTML += `
        <li>
            <label>
            <input type="radio" name="q${questionNumber}" value="${key}">
            ${option}
            </label>
        </li>
        `;
        });

        card.innerHTML = `
        <h2>Question ${questionNumber}</h2>
        <p>${questionObj.question}</p>
        <ul class="options">
        ${optionsHTML}
        </ul>
    `;

        container.appendChild(card);
    });
}

function submitQuiz() {
    const cards = document.querySelectorAll(".card");
    let score = 0;

    cards.forEach((card, index) => {
        const selectedOption = card.querySelector("input:checked");
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = globalHardLevelQuestions[index].answer;

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    });

    document.querySelector(".countdown-timer").style.display = "none";
    document.querySelector(".submit-btn").style.display = "none";

    const mainContainer = document.getElementById("container");
    mainContainer.innerHTML = "";

    const timesUpDiv = document.getElementById("timesup");
    timesUpDiv.style.display = "block";
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.innerText = `You scored ${score} out of ${globalHardLevelQuestions.length}`;

    const cheering = document.getElementById("cheer");

    if (score < 7) {
        cheering.innerText = "Work a Little bit More !";
    } else if (score < 12) {
        cheering.innerText = "You are Good at this !!";
    } else if (score === globalHardLevelQuestions.length) {
        cheering.innerText = "You are Genius !!";
    }
}

function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            endTasks();
        }
    }, 1000);
}

function endTasks() {
    submitQuiz();
    document.querySelector(".countdown-timer").style.display = "none";
    document.querySelector(".submit-btn").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    createQuiz();
    let fiveMinutes = 60 * 5,
        display = document.querySelector("#countdown");
    startCountdown(fiveMinutes, display);
});
