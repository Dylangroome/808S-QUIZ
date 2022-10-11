/**
  * create const varibles
  * questions use queryselector to target class and id
  * choices is wraperd in a array and targets class choice-text use aueryselectorall to target all elements
  */

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

/**
  * create varibles
  * currentquestions = to a empty objet
  * acceptingAnswers varible = to true
  * score = 0
  * questioncounter = 0
  * availableQuestions = to empty array
  */

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


/**
  * create varibles for questions that = to a array 
  * in the array create 4 objects to store question, multiple option choice and answer
  */

let questions = [
    {
        question: 'What is 2+2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
    {
        question: 'What is the tallest building in the world?',
        choice1: 'burj',
        choice2: 'eilfe',
        choice3: 'home',
        choice4: 'cat',
        answer: 1,
    },
    {
        question: 'milk comes froe?',
        choice1: 'god',
        choice2: 'home',
        choice3: 'cow',
        choice4: 'shop',
        answer: 3,
    },
    {
        question: 'What is 2+8?',
        choice1: '10',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 1,
    }
]


/**
  * score points for right answer = 100 and max questions = 4
  * capitalise const varible to keep fixed
  */


const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

/**
  * create function startgame
  * questionCounter = 0
    score = 0
  * call availableQuestions and use spread operator to get all the values from questions

    call getNewQuestion
  */

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

/**
  * return to end html page when all qustions have been presented
  */

/**
  * create function getNewQuestion
  * create loop to keep track of score and  MAX_QUESTIONS
  */

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

/**
  * questionCounter++ update questyion by 1
  * progressBarFull update prgress bar based on  what question usert is on
  */

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    /**
  * keep track of question user is on
  * determine which wuestion to ask user
  * dont ask the same question more then one time
  */

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

/**
  * create choices funtion
  */


choices.forEach(choice => {
    choice.addEventListener('click' , e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        /**
         * show grren for right answer or red for wrong answer
         */

        let classToApply = selectedAnswer == currentQuestion.answer ?  'correct' : 'incorrect'

        /**
  * loop to add 100 score if answer is corect
  */

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

             /**
  * give time to show user question is red or green
  */

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

/**
 * Music file setup
 */
 let bgmusic = document.getElementById('bgMusic');
 bgmusic.volume = 0.5;
 bgmusic.loop = true;
 let soundOn = false;
 
 /**
  * Toggle on and off background music
  */
 function musicControl() {
     soundOn = !soundOn;
     if (soundOn) {
         bgmusic.play();
         document.getElementById("music-on").classList.add('hide');
         document.getElementById("music-off").classList.remove('hide');
     } else {
         bgmusic.pause();
         document.getElementById("music-off").classList.add('hide');
         document.getElementById("music-on").classList.remove('hide');
     }
 }
 

startGame( )