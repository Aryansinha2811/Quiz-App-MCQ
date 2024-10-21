const indiaGeneralKnowledgeQuestions = [
    {
        question: "What is the capital of India?",
        options: { A: "Mumbai", B: "New Delhi", C: "Kolkata", D: "Chennai" },
        answer: "B"
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: { A: "Jawaharlal Nehru", B: "Subhas Chandra Bose", C: "Mahatma Gandhi", D: "Bhagat Singh" },
        answer: "C"
    },
    {
        question: "Which river is the longest in India?",
        options: { A: "Ganga", B: "Yamuna", C: "Brahmaputra", D: "Godavari" },
        answer: "A"
    },
    {
        question: "In which year did India gain independence from British rule?",
        options: { A: "1947", B: "1950", C: "1930", D: "1965" },
        answer: "A"
    },
    {
        question: "Which festival is known as the Festival of Lights in India?",
        options: { A: "Holi", B: "Diwali", C: "Eid", D: "Christmas" },
        answer: "B"
    },
    {
        question: "What is the national animal of India?",
        options: { A: "Elephant", B: "Lion", C: "Bengal Tiger", D: "Peacock" },
        answer: "C"
    },
    {
        question: "Which monument is considered one of the Seven Wonders of the World in India?",
        options: { A: "Qutub Minar", B: "Red Fort", C: "Taj Mahal", D: "Gateway of India" },
        answer: "C"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: { A: "Indira Gandhi", B: "Mahatma Gandhi", C: "Rajendra Prasad", D: "Jawaharlal Nehru" },
        answer: "D"
    },
    {
        question: "Which state is the largest by area in India?",
        options: { A: "Uttar Pradesh", B: "Maharashtra", C: "Rajasthan", D: "Madhya Pradesh" },
        answer: "C"
    },
    {
        question: "What is the national flower of India?",
        options: { A: "Rose", B: "Lotus", C: "Sunflower", D: "Lily" },
        answer: "B"
    },
    {
        question: "Which is the official language of India?",
        options: { A: "Hindi", B: "English", C: "Bengali", D: "Tamil" },
        answer: "A"
    },
    {
        question: "Who composed the Indian national anthem?",
        options: { A: "Sarojini Naidu", B: "Rabindranath Tagore", C: "Bankim Chandra Chatterjee", D: "Lata Mangeshkar" },
        answer: "B"
    },
    {
        question: "Which city is known as the Silicon Valley of India?",
        options: { A: "Mumbai", B: "Hyderabad", C: "Pune", D: "Bangalore" },
        answer: "D"
    },
    {
        question: "Who is the current President of India?",
        options: { A: "Narendra Modi", B: "Ramnath Kovind", C: "Droupadi Murmu", D: "Amit Shah" },
        answer: "C"
    },
    {
        question: "What is the national sport of India?",
        options: { A: "Cricket", B: "Football", C: "Hockey", D: "Kabaddi" },
        answer: "C"
    },
    {
        question: "Which state is known as the 'Land of Five Rivers'?",
        options: { A: "Punjab", B: "Gujarat", C: "Kerala", D: "Haryana" },
        answer: "A"
    },
    {
        question: "Which Indian scientist is known for his work on the scattering of light?",
        options: { A: "C.V. Raman", B: "A.P.J. Abdul Kalam", C: "Homi Bhabha", D: "Vikram Sarabhai" },
        answer: "A"
    },
    {
        question: "Which city is the financial capital of India?",
        options: { A: "Delhi", B: "Chennai", C: "Mumbai", D: "Kolkata" },
        answer: "C"
    }
];


// Function to create and append cards for each question
function createQuiz() {
    const container = document.getElementById("container");

    indiaGeneralKnowledgeQuestions.forEach((questionObj, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const questionNumber = index + 1;
        card.innerHTML = `
        <h2>Question ${questionNumber}</h2>
        <p>${questionObj.question}</p>
        <ul class="options">
            <li>
                <label>
                    <input type="radio" name="q${questionNumber}" value="A">
                    ${questionObj.options.A}
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="q${questionNumber}" value="B">
                    ${questionObj.options.B}
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="q${questionNumber}" value="C">
                    ${questionObj.options.C}
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="q${questionNumber}" value="D">
                    ${questionObj.options.D}
                </label>
            </li>
        </ul>
    `;

        container.appendChild(card);
    });
}

// Function to handle quiz submission
function submitQuiz() {
    const cards = document.querySelectorAll(".card");
    let score = 0;

    cards.forEach((card, index) => {
        const selectedOption = card.querySelector("input:checked");
        if (selectedOption) {
            const questionNumber = index + 1;
            const userAnswer = selectedOption.value;
            const correctAnswer = indiaGeneralKnowledgeQuestions[index].answer;

            if (userAnswer === correctAnswer) {
                score++;
            }
        }

        document.querySelector(".countdown-timer").style.display = "none";

        // Hide the submit button
        document.querySelector(".submit-btn").style.display = "none";

    });

    // Clear all content on the page
    const mainContainer = document.getElementById("container");
    mainContainer.innerHTML = "";

    // Display "Time's Up!!" prompt and score
    const timesUpDiv = document.getElementById("timesup");
    timesUpDiv.style.display = "block";
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.innerText = `You scored ${score} out of ${indiaGeneralKnowledgeQuestions.length}`;

    const cheering = document.getElementById("cheer");

    if (score < 9) {
        cheering.innerText = "Work a Little bit More !"
    } else if (score < 13) {
        cheering.innerText = "Nice Try"
    } else if (score < 17) {
        cheering.innerText = "You are a Genius !"
    } else if (score == 18) {
        cheering.innerText = "Perfect Sir !!"
    }
}

// Function to start countdown timer
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

// Function to handle tasks at the end of countdown
function endTasks() {
    submitQuiz();

    // Hide the countdown timer
    document.querySelector(".countdown-timer").style.display = "none";

    // Hide the submit button
    document.querySelector(".submit-btn").style.display = "none";
}

// Initialize quiz creation and countdown
document.addEventListener("DOMContentLoaded", function () {
    createQuiz();
    let fourMinutes = 60 * 4,
        display = document.querySelector("#countdown");
    startCountdown(fourMinutes, display);
});