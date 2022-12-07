//Found on https://www.arclab.com/en/kb/htmlcss/display-date-time-javascript-php-ssi.html.
var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));


confirm("Test your knowledge from visiting the site!");

//Found this quiz Javascript on https://www.sitepoint.com/simple-javascript-quiz/.
(function() {
  function buildQuiz() {

    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];


      for (letter in currentQuestion.answers) {

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }


      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {

    const answerContainers = quizContainer.querySelectorAll(".answers");


    let numCorrect = 0;


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if (userAnswer === currentQuestion.correctAnswer) {

        numCorrect++;


        answerContainers[questionNumber].style.color = "green";
      } else {

        answerContainers[questionNumber].style.color = "red";
      }
    });


    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "How many species of otter are there?",
      answers: {
        a: "13",
        b: "15",
        c: "A lot"
      },
      correctAnswer: "a"
    },
    {
      question: "What do otters like to eat?",
      answers: {
        a: "Starbursts",
        b: "Skittles",
        c: "Sea urchins, clams, mussels and crabs"
      },
      correctAnswer: "c"
    },
    {
      question: "Otters are found on all continents execpt?",
      answers: {
        a: "Australia and Antarctica",
        b: "Africa",
        c: "They are on all of them",
      },
      correctAnswer: "a"
    }
  ];


  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();
