const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');
const scoreSpan = document.getElementById('score');

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Mars', correct: false },
            { text: 'Saturn', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.classList.add(correct ? 'correct' : 'incorrect');
        }
    });
    nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hidden');
    } else {
        showResult();
    }
}

function showResult() {
    nextButton.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreSpan.innerText = score;
}

function restartQuiz() {
    startGame();
}

startGame();
