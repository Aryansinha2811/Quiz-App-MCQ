const quizQuestionsMedium = [
    {
        question: "What does SQL stand for?",
        options: {
            A: "Structured Query Language",
            B: "Sequential Query Language",
            C: "Simple Query Language",
            D: "Static Query Language"
        },
        answer: "A"
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        options: {
            A: "var",
            B: "let",
            C: "const",
            D: "int"
        },
        answer: "A"
    },
    {
        question: "In SQL, which statement is used to select data from a database?",
        options: {
            A: "SELECT",
            B: "UPDATE",
            C: "INSERT",
            D: "ALTER"
        },
        answer: "A"
    },
    {
        question: "What is the purpose of 'this' keyword in JavaScript?",
        options: {
            A: "Refers to the current object",
            B: "Refers to the previous object",
            C: "Refers to the next object",
            D: "Refers to a specific function"
        },
        answer: "A"
    },
    {
        question: "Which data type is NOT supported in SQL?",
        options: {
            A: "INTEGER",
            B: "BOOLEAN",
            C: "FLOAT",
            D: "ARRAY"
        },
        answer: "D"
    },
    {
        question: "What is the output of the following JavaScript code?\n\n```javascript\nconsole.log(2 + '2');\n```",
        options: {
            A: "4",
            B: "22",
            C: "Error",
            D: "Undefined"
        },
        answer: "B"
    },
    {
        question: "Which SQL statement is used to update data in a database?",
        options: {
            A: "UPDATE",
            B: "MODIFY",
            C: "ALTER",
            D: "CHANGE"
        },
        answer: "A"
    },
    {
        question: "In JavaScript, what is the difference between 'let' and 'const'?",
        options: {
            A: "'let' is block-scoped and can be reassigned, 'const' is block-scoped and cannot be reassigned",
            B: "'let' is function-scoped and can be reassigned, 'const' is block-scoped and cannot be reassigned",
            C: "'let' is block-scoped and can be reassigned, 'const' is function-scoped and cannot be reassigned",
            D: "'let' is function-scoped and can be reassigned, 'const' is block-scoped and can be reassigned"
        },
        answer: "A"
    },
    {
        question: "Which SQL statement is used to delete data from a database?",
        options: {
            A: "DELETE",
            B: "REMOVE",
            C: "DROP",
            D: "ERASE"
        },
        answer: "A"
    },
    {
        question: "What is the result of the following SQL query?\n\n```sql\nSELECT COUNT(*) FROM users;\n```",
        options: {
            A: "Returns the number of rows in the 'users' table",
            B: "Returns the number of columns in the 'users' table",
            C: "Returns the first row from the 'users' table",
            D: "Returns all rows from the 'users' table"
        },
        answer: "A"
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: {
            A: "var",
            B: "let",
            C: "const",
            D: "static"
        },
        answer: "C"
    },
    {
        question: "In SQL, which statement is used to add new rows to a table?",
        options: {
            A: "INSERT INTO",
            B: "ADD ROW",
            C: "ADD INTO",
            D: "CREATE ROW"
        },
        answer: "A"
    },
    {
        question: "What is the output of the following Java code snippet?\n\n```java\nint x = 5;\nint y = x++;\nSystem.out.println(y);\n```",
        options: {
            A: "5",
            B: "6",
            C: "4",
            D: "Error"
        },
        answer: "A"
    },
    {
        question: "Which of the following is NOT a primitive data type in Java?",
        options: {
            A: "int",
            B: "boolean",
            C: "array",
            D: "double"
        },
        answer: "C"
    },
    {
        question: "In SQL, which statement is used to change a column in a table?",
        options: {
            A: "ALTER TABLE",
            B: "MODIFY COLUMN",
            C: "CHANGE TABLE",
            D: "UPDATE COLUMN"
        },
        answer: "A"
    },
    {
        question: "What is the purpose of 'try-catch' in Java?",
        options: {
            A: "To handle exceptions",
            B: "To create loops",
            C: "To declare variables",
            D: "To define classes"
        },
        answer: "A"
    },
    {
        question: "Which SQL statement is used to create a new table?",
        options: {
            A: "CREATE TABLE",
            B: "ADD TABLE",
            C: "INSERT TABLE",
            D: "DEFINE TABLE"
        },
        answer: "A"
    },
    {
        question: "What is the output of the following Java code snippet?\n\n```java\nString str = 'Hello';\nSystem.out.println(str.length());\n```",
        options: {
            A: "5",
            B: "6",
            C: "Error",
            D: "None of the above"
        },
        answer: "A"
    },
    {
        question: "Which SQL statement is used to make sure that the changes made by the current transaction become permanent?",
        options: {
            A: "COMMIT",
            B: "SAVE",
            C: "APPLY",
            D: "PERSIST"
        },
        answer: "A"
    },
    {
        question: "What is the purpose of 'static' keyword in Java?",
        options: {
            A: "To define a constant",
            B: "To make a variable class-specific",
            C: "To define a method that can be called without creating an instance of the class",
            D: "To create a synchronized block"
        },
        answer: "C"
    }
];


function createQuiz() {
    const container = document.getElementById("container");

    quizQuestionsMedium.forEach((questionObj, index) => {
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
            const correctAnswer = quizQuestionsMedium[index].answer;

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
    scoreDisplay.innerText = `You scored ${score} out of ${quizQuestionsMedium.length}`;

    const cheering = document.getElementById("cheer");
    const ImageFull = document.getElementById("Full-Score");
    const ImageHalf = document.getElementById("Half-Score");
    const ImageLess = document.getElementById("Less-Score");
    const myMan = document.getElementById("myMan");
    const pepe = document.getElementById("pepe");

    if (score < 7) {
        cheering.innerText = "Bhai thoda padh liye kar kabhi kbhar"
        ImageLess.style.display = "block";
    } else if (score < 13) {
        cheering.innerText = "Thoda mehnat orr bas"
        ImageHalf.style.display = "block";
    } else if (score < 17) {
        cheering.innerText = "Shabash beta !!..."
        pepe.style.display = "block";
    }else if (score < 19) {
        cheering.innerText = "My Man "
        myMan.style.display = "block";
    } else if (score == 20) {
        cheering.innerText = "7 crore"
        ImageFull.style.display = "block";
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
    let twoMinutes = 60 * 0.25,
        display = document.querySelector("#countdown");
    startCountdown(twoMinutes, display);
});