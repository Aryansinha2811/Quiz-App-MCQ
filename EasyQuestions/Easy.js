const quizQuestionsEasy = [
  {
      question: "What does HTML stand for?",
      options: {
          A: "Hyper Text Markup Language",
          B: "High Text Markup Language",
          C: "Hyper Tabular Markup Language",
          D: "None of the above"
      },
      answer: "A"
  },
  {
      question: "Which CSS property controls the text size?",
      options: {
          A: "font-size",
          B: "text-size",
          C: "text-style",
          D: "font-style"
      },
      answer: "A"
  },
  {
      question: "What does CSS stand for?",
      options: {
          A: "Computer Style Sheets",
          B: "Cascading Style Sheets",
          C: "Creative Style Sheets",
          D: "Colorful Style Sheets"
      },
      answer: "B"
  },
  {
      question: "Which CSS property controls the background color of an element?",
      options: {
          A: "color",
          B: "background-color",
          C: "bgcolor",
          D: "background-style"
      },
      answer: "B"
  },
  {
      question: "Which of the following is not a valid variable name in JavaScript?",
      options: {
          A: "2myVar",
          B: "_myVar",
          C: "myVar2",
          D: "my_Var"
      },
      answer: "A"
  },
  {
      question: "What is the output of 2 + '2' in JavaScript?",
      options: {
          A: "4",
          B: "22",
          C: "Error",
          D: "Undefined"
      },
      answer: "B"
  },
  {
      question: "Who is the father of C programming language?",
      options: {
          A: "Dennis Ritchie",
          B: "Brian Kernighan",
          C: "Ken Thompson",
          D: "Bjarne Stroustrup"
      },
      answer: "A"
  },
  {
      question: "Which symbol is used for single-line comments in C?",
      options: {
          A: "//",
          B: "/*",
          C: "#",
          D: "--"
      },
      answer: "A"
  },
  {
      question: "What is the main function of a CPU?",
      options: {
          A: "To execute programs",
          B: "To store data",
          C: "To connect to the internet",
          D: "To display graphics"
      },
      answer: "A"
  },
  {
      question: "Which component of the computer stores data temporarily?",
      options: {
          A: "RAM",
          B: "Hard Drive",
          C: "CPU",
          D: "Motherboard"
      },
      answer: "A"
  },
  {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      options: {
          A: "title",
          B: "src",
          C: "alt",
          D: "href"
      },
      answer: "C"
  },
  {
      question: "Which CSS property is used to create space around elements, outside of any defined borders?",
      options: {
          A: "margin",
          B: "padding",
          C: "space",
          D: "border"
      },
      answer: "A"
  },
  {
      question: "In C, which function is used to print formatted output to the console?",
      options: {
          A: "print()",
          B: "cout",
          C: "printf()",
          D: "printText()"
      },
      answer: "C"
  },
  {
      question: "Which of the following is a valid color in CSS?",
      options: {
          A: "#12345G",
          B: "#ABCDEF",
          C: "#ZYX987",
          D: "#7777777"
      },
      answer: "B"
  },
  {
      question: "What does the 'href' attribute define in HTML?",
      options: {
          A: "The source of an image",
          B: "The heading of a section",
          C: "A hyperlink reference",
          D: "A paragraph style"
      },
      answer: "C"
  },
  {
      question: "Which operator is used for exponentiation in JavaScript?",
      options: {
          A: "^",
          B: "**",
          C: "^^",
          D: "//"
      },
      answer: "B"
  },
  {
      question: "Which data type in C is used to store characters?",
      options: {
          A: "char",
          B: "int",
          C: "string",
          D: "float"
      },
      answer: "A"
  },
  {
      question: "What is the default value of the 'type' attribute in an HTML <input> element?",
      options: {
          A: "text",
          B: "number",
          C: "checkbox",
          D: "button"
      },
      answer: "A"
  }
];


// Ensure DOM content is loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');

  // Function to create and append cards for each question
  function createQuiz() {
      quizQuestionsEasy.forEach((questionObj, index) => {
          const card = document.createElement('div');
          card.classList.add('card');

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

  // Initialize quiz creation
  createQuiz();
});

// Function to handle quiz submission
function submitQuiz() {
  const cards = document.querySelectorAll('.card');
  let score = 0;

  cards.forEach((card, index) => {
      const selectedOption = card.querySelector('input:checked');
      if (selectedOption) {
          const questionNumber = index + 1;
          const userAnswer = selectedOption.value;
          const correctAnswer = quizQuestionsEasy[index].answer;

          if (userAnswer === correctAnswer) {
              score++;
          }
      }
  });

  alert(`You scored ${score} out of ${quizQuestionsEasy.length}`);
}
