const quizQuestionsHard = [
  {
      question: "What is a closure in JavaScript?",
      options: [
          "A) A function that has access to its outer function's scope even after the outer function has finished executing",
          "B) A function that is defined inside another function",
          "C) A function that returns another function",
          "D) All of the above"
      ],
      answer: "A) A function that has access to its outer function's scope even after the outer function has finished executing"
  },
  {
      question: "What is the purpose of 'npm' in Node.js?",
      options: [
          "A) To manage packages/modules",
          "B) To create databases",
          "C) To define routes",
          "D) To style webpages"
      ],
      answer: "A) To manage packages/modules"
  },
  {
      question: "In Java, what is the difference between '== and '.equals()' when comparing strings?",
      options: [
          "A) '==' compares object references, '.equals()' compares string contents",
          "B) '==' compares string contents, '.equals()' compares object references",
          "C) '==' and '.equals()' both compare string contents",
          "D) '==' and '.equals()' are not used for string comparison"
      ],
      answer: "A) '==' compares object references, '.equals()' compares string contents"
  },
  {
      question: "What does MVC stand for in web development?",
      options: [
          "A) Model-View-Controller",
          "B) Multiple-View-Configuration",
          "C) Many-Variables-Classes",
          "D) Main-View-Controller"
      ],
      answer: "A) Model-View-Controller"
  },
  {
      question: "Which SQL statement is used to remove a table from the database?",
      options: [
          "A) DROP TABLE",
          "B) DELETE TABLE",
          "C) REMOVE TABLE",
          "D) ERASE TABLE"
      ],
      answer: "A) DROP TABLE"
  },
  {
      question: "What is the purpose of 'git rebase'?",
      options: [
          "A) To combine multiple branches into one",
          "B) To revert a commit",
          "C) To create a new branch",
          "D) To push changes to a remote repository"
      ],
      answer: "A) To combine multiple branches into one"
  },
  {
      question: "In computer hardware, what does CPU stand for?",
      options: [
          "A) Central Processing Unit",
          "B) Computer Processing Unit",
          "C) Central Power Unit",
          "D) Computer Power Unit"
      ],
      answer: "A) Central Processing Unit"
  },
  {
      question: "What is a promise in JavaScript?",
      options: [
          "A) An object representing the eventual completion or failure of an asynchronous operation",
          "B) A function that is immediately invoked",
          "C) A variable with fixed value",
          "D) A type of error handling"
      ],
      answer: "A) An object representing the eventual completion or failure of an asynchronous operation"
  },
  {
      question: "Which Java keyword is used to prevent method overriding?",
      options: [
          "A) override",
          "B) final",
          "C) static",
          "D) protect"
      ],
      answer: "B) final"
  },
  {
      question: "What does ACID stand for in DBMS?",
      options: [
          "A) Atomicity, Consistency, Isolation, Durability",
          "B) Active, Condition, Integration, Database",
          "C) All Conditions In Data",
          "D) Atomic, Consistent, Integrated, Durable"
      ],
      answer: "A) Atomicity, Consistency, Isolation, Durability"
  },
  {
      question: "Which Git command is used to undo changes in a repository?",
      options: [
          "A) git reset",
          "B) git checkout",
          "C) git revert",
          "D) git pull"
      ],
      answer: "C) git revert"
  },
  {
      question: "What does GPU stand for in computer hardware?",
      options: [
          "A) Graphics Processing Unit",
          "B) Graphical Performance Unit",
          "C) General Processing Unit",
          "D) Global Performance Unit"
      ],
      answer: "A) Graphics Processing Unit"
  },
  {
      question: "What is the purpose of 'async' and 'await' in JavaScript?",
      options: [
          "A) To handle asynchronous operations more elegantly",
          "B) To create loops",
          "C) To define classes",
          "D) To style webpages"
      ],
      answer: "A) To handle asynchronous operations more elegantly"
  },
  {
      question: "Which Java collection interface provides an ordered collection?",
      options: [
          "A) List",
          "B) Set",
          "C) Map",
          "D) Queue"
      ],
      answer: "A) List"
  },
  {
      question: "In DBMS, what is the purpose of 'JOIN'?",
      options: [
          "A) To combine rows from two or more tables based on a related column",
          "B) To delete rows from a table",
          "C) To modify table schema",
          "D) To insert data into a table"
      ],
      answer: "A) To combine rows from two or more tables based on a related column"
  },
  {
      question: "Which Git command is used to see the history of commits?",
      options: [
          "A) git history",
          "B) git log",
          "C) git status",
          "D) git branch"
      ],
      answer: "B) git log"
  },
  {
      question: "What is the purpose of 'localStorage' in web development?",
      options: [
          "A) To store key-value pairs in the browser",
          "B) To define routes",
          "C) To manage session cookies",
          "D) To create responsive designs"
      ],
      answer: "A) To store key-value pairs in the browser"
  },
  {
      question: "In Java, which keyword is used to implement inheritance?",
      options: [
          "A) extends",
          "B) implements",
          "C) inherit",
          "D) parent"
      ],
      answer: "A) extends"
  },
  {
      question: "What does RAID stand for in computer hardware?",
      options: [
          "A) Redundant Array of Independent Disks",
          "B) Random Access Integrated Database",
          "C) Rapid Action Interface Device",
          "D) Recovery and Interconnection Disk"
      ],
      answer: "A) Redundant Array of Independent Disks"
  },
  {
      question: "Which SQL statement is used to change the data type of a column in a table?",
      options: [
          "A) ALTER TABLE",
          "B) MODIFY COLUMN",
          "C) CHANGE COLUMN",
          "D) UPDATE COLUMN"
      ],
      answer: "A) ALTER TABLE"
  },
  {
      question: "What is the purpose of 'git clone'?",
      options: [
          "A) To create a copy of a remote repository locally",
          "B) To delete a repository",
          "C) To merge branches",
          "D) To revert changes"
      ],
      answer: "A) To create a copy of a remote repository locally"
  },
  {
      question: "In web development, what does CSS stand for?",
      options: [
          "A) Cascading Style Sheets",
          "B) Centralized Style Sheets",
          "C) Computer Style Sheets",
          "D) Creative Style Sheets"
      ],
      answer: "A) Cascading Style Sheets"
  },
  {
      question: "Which SQL statement is used to add a new column to a table?",
      options: [
          "A) ALTER TABLE",
          "B) ADD COLUMN",
          "C) MODIFY COLUMN",
          "D) CREATE COLUMN"
      ],
      answer: "A) ALTER TABLE"
  },
  {
      question: "What is the purpose of 'document.getElementById()' in JavaScript?",
      options: [
          "A) To get an element by its ID from the HTML document",
          "B) To add an event listener to an element",
          "C) To create a new element",
          "D) To apply styles to an element"
      ],
      answer: "A) To get an element by its ID from the HTML document"
  },
  {
      question: "In Java, what is the purpose of 'interface'?",
      options: [
          "A) To define a contract for implementing classes",
          "B) To create anonymous classes",
          "C) To declare variables",
          "D) To define private methods"
      ],
      answer: "A) To define a contract for implementing classes"
  },
  {
      question: "Which Git command is used to merge branches?",
      options: [
          "A) git merge",
          "B) git pull",
          "C) git branch",
          "D) git commit"
      ],
      answer: "A) git merge"
  },
  {
      question: "What is the purpose of 'index.html' in web development?",
      options: [
          "A) To serve as the entry point for a web page",
          "B) To define CSS styles",
          "C) To store JavaScript functions",
          "D) To manage database connections"
      ],
      answer: "A) To serve as the entry point for a web page"
  },
  {
      question: "In DBMS, what does 'DML' stand for?",
      options: [
          "A) Data Manipulation Language",
          "B) Data Model Language",
          "C) Data Management Language",
          "D) Database Management Language"
      ],
      answer: "A) Data Manipulation Language"
  }
];

function populateQuiz() {
  const container = document.querySelector('.container');
  container.innerHTML = ''; // Clear existing content

  quizQuestionsHard.forEach((question, index) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const questionNumber = index + 1;
      card.innerHTML = `
          <h2>Question ${questionNumber}</h2>
          <p>${question.question}</p>
          <ul class="options">
              <li><label><input type="radio" name="q${questionNumber}" value="a"> ${question.options[0]}</label></li>
              <li><label><input type="radio" name="q${questionNumber}" value="b"> ${question.options[1]}</label></li>
              <li><label><input type="radio" name="q${questionNumber}" value="c"> ${question.options[2]}</label></li>
              <li><label><input type="radio" name="q${questionNumber}" value="d"> ${question.options[3]}</label></li>
          </ul>
      `;

      container.appendChild(card);
  });

  // Add submit button after all questions
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.classList.add('submit-btn');
  submitButton.addEventListener('click', submitQuiz);
  container.appendChild(submitButton);
}

// Function to handle quiz submission
function submitQuiz() {
  let score = 0;
  const totalQuestions = quizQuestionsHard.length;

  quizQuestionsHard.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
      if (selectedOption) {
          const userAnswer = selectedOption.value;
          if (userAnswer === question.answer.charAt(0).toLowerCase()) {
              score++;
          }
      }
  });

  const percentageScore = (score / totalQuestions) * 100;
  alert(`You scored ${score} out of ${totalQuestions}. (${percentageScore}%)`);
}

// Populate the quiz when the page loads
window.addEventListener('DOMContentLoaded', populateQuiz);