const questions = [
    {
        'que': 'Who were the participants in the first European Cup Final in 1956?',
        'a': 'Read Madrid and Stade Reims',
        'b': 'Read Madrid and Barcelona',
        'c': 'Real Madrid and Benfica',
        'd': 'Real Madrid and AC Milan',
        'correct': 'a'
    },
    {
        'que': 'Which club dominated the first era of the UEFA Champions League?',
        'a': 'Ajax',
        'b': 'Barcelona',
        'c': 'Benfica',
        'd': 'Real Madrid',
        'correct': 'd'
    },
    {
        'que': 'Who won the UEFA Champions League final in 2004?',
        'a': 'Monaco',
        'b': 'Deportivo La Coruna',
        'c': 'Porto',
        'd': 'Chelsea',
        'correct': 'c'
    },
    {
        'que': 'Which city hosted the first ever UEFA Champions League final?',
        'a': 'London',
        'b': 'Paris',
        'c': 'Stuttgart',
        'd': 'Madrid',
        'correct': 'b'
    },
    {
        'que': 'Which team was the first British team to lift the European Cup?',
        'a': 'Manchester United',
        'b': 'Nottingham Forest',
        'c': 'Liverpool',
        'd': 'Celtic',
        'correct': 'd'
    }
] 

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if(index == total){
        return endQuiz();
    }
    reset();

    const data = questions[index]
    
    quesBox.innerHTML = `${index+1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;

    }else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align: center">
        <h3>Thank you for playing quiz</h3>
        <h2>${right} /${total} are correct.</h2>
    </div>    
    `
}

loadQuestion();