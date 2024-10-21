const indiaMediumLevelQuestions = [
    {
        question: "Which Indian ruler is known for founding the city of Fatehpur Sikri?",
        options: { A: "Shah Jahan", B: "Babur", C: "Akbar", D: "Humayun" },
        answer: "C"
    },
    {
        question: "Who was the first woman to become the Prime Minister of India?",
        options: { A: "Indira Gandhi", B: "Pratibha Patil", C: "Sushma Swaraj", D: "Sarojini Naidu" },
        answer: "A"
    },
    {
        question: "Which Indian state was formed last, in the year 2014?",
        options: { A: "Uttarakhand", B: "Chhattisgarh", C: "Jharkhand", D: "Telangana" },
        answer: "D"
    },
    {
        question: "Which Mughal emperor commissioned the construction of the Red Fort in Delhi?",
        options: { A: "Akbar", B: "Aurangzeb", C: "Shah Jahan", D: "Babur" },
        answer: "C"
    },
    {
        question: "Which Indian freedom fighter gave the slogan 'Inquilab Zindabad'?",
        options: { A: "Mahatma Gandhi", B: "Bhagat Singh", C: "Subhas Chandra Bose", D: "Lala Lajpat Rai" },
        answer: "B"
    },
    {
        question: "Which is the oldest mountain range in India?",
        options: { A: "Aravalli Range", B: "Himalayas", C: "Western Ghats", D: "Vindhya Range" },
        answer: "A"
    },
    {
        question: "Who was the first Indian to win a Nobel Prize?",
        options: { A: "C.V. Raman", B: "Rabindranath Tagore", C: "Amartya Sen", D: "Mother Teresa" },
        answer: "B"
    },
    {
        question: "The Khajuraho Group of Monuments is located in which state?",
        options: { A: "Uttar Pradesh", B: "Madhya Pradesh", C: "Rajasthan", D: "Maharashtra" },
        answer: "B"
    },
    {
        question: "Which Indian state has the longest coastline?",
        options: { A: "Tamil Nadu", B: "Andhra Pradesh", C: "Maharashtra", D: "Gujarat" },
        answer: "D"
    },
    {
        question: "In which year was the Indian Constitution adopted?",
        options: { A: "1950", B: "1947", C: "1949", D: "1952" },
        answer: "C"
    },
    {
        question: "Which dynasty built the Brihadeeswarar Temple in Tamil Nadu?",
        options: { A: "Pallava", B: "Chola", C: "Cheras", D: "Pandyas" },
        answer: "B"
    },
    {
        question: "Which is the largest freshwater lake in India?",
        options: { A: "Chilka Lake", B: "Dal Lake", C: "Wular Lake", D: "Pulicat Lake" },
        answer: "C"
    },
    {
        question: "Who is the author of the book 'Discovery of India'?",
        options: { A: "Jawaharlal Nehru", B: "Rabindranath Tagore", C: "Dr. B.R. Ambedkar", D: "Sarojini Naidu" },
        answer: "A"
    },
    {
        question: "In which state is the Sundarbans National Park located?",
        options: { A: "Odisha", B: "West Bengal", C: "Assam", D: "Jharkhand" },
        answer: "B"
    },
    {
        question: "Which Mughal ruler was the last emperor of India?",
        options: { A: "Shah Jahan", B: "Akbar II", C: "Bahadur Shah II", D: "Aurangzeb" },
        answer: "C"
    },
    {
        question: "Which Indian scientist is credited with launching India’s first satellite, Aryabhata?",
        options: { A: "Vikram Sarabhai", B: "A.P.J. Abdul Kalam", C: "Homi J. Bhabha", D: "Satish Dhawan" },
        answer: "A"
    },
    {
        question: "Which river flows through the Thar Desert in India?",
        options: { A: "Godavari", B: "Tapti", C: "Sabarmati", D: "Luni" },
        answer: "D"
    },
    {
        question: "Which Indian state is known for the dance form 'Kathakali'?",
        options: { A: "Tamil Nadu", B: "Kerala", C: "Karnataka", D: "Andhra Pradesh" },
        answer: "B"
    }
];



function createQuiz() {
    const container = document.getElementById("container");

    indiaMediumLevelQuestions.forEach((questionObj, index) => {
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

function submitQuiz() {
    const cards = document.querySelectorAll(".card");
    let score = 0;

    cards.forEach((card, index) => {
        const selectedOption = card.querySelector("input:checked");
        if (selectedOption) {
            const questionNumber = index + 1;
            const userAnswer = selectedOption.value;
            const correctAnswer = indiaMediumLevelQuestions[index].answer;

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
    scoreDisplay.innerText = `You scored ${score} out of ${indiaMediumLevelQuestions.length}`;

    const cheering = document.getElementById("cheer");

    if (score < 7) {
        cheering.innerText = "Work a Little bit More !"
    } else if (score < 13) {
        cheering.innerText = "Nice Try !"
    } else if (score < 17) {
        cheering.innerText = "You are Good at this"
    } else if (score = indiaMediumLevelQuestions.length) {
        cheering.innerText = "Genius"
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
    let twoMinutes = 60 * 2,
        display = document.querySelector("#countdown");
    startCountdown(twoMinutes, display);
});