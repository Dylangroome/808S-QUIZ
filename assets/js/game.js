const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

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

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}