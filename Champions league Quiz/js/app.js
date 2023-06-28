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

let index = 0; //2
let total = questions.length;//17
let right = 0; //18
let wrong = 0; //19
const quesBox = document.getElementById("quesBox"); //5
const optionInputs = document.querySelectorAll('.options'); //7
const loadQuestion = () => { //1
    if (index === total){ //29
        return endQuiz();
    }
    reset(); //26

    const data = questions[index] //3

    quesBox.innerHTML = `${index+1}. ${data.que}`; //6
    optionInputs[0].nextElementSibling.innerText = data.a; //8
    optionInputs[1].nextElementSibling.innerText = data.b; //9
    optionInputs[2].nextElementSibling.innerText = data.c; //10
    optionInputs[3].nextElementSibling.innerText = data.d; //11
}

const submitQuiz = () => { //12
    const data = questions[index]; //15.2
    const ans = getAnswer() //15.1
    if(ans === data.correct){ //16
        right++; //20
    } else{ //21
        wrong++; //22
    }
    index++; //24
    loadQuestion(); //25
    return; //23
} 

const getAnswer = () => { //13
    let answer;
    optionInputs.forEach( //14 takes call back
        (input) => {
            if(input.checked){
                answer = input.value;

            }
        }
    )
    return answer;
}

const reset = () => { //27
    optionInputs.forEach( //28 
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => { //30
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3>Thank you for playing quiz</h3>
        <h2>${right} / ${total} are correct.</h2>
    </div>    
    `
}; 

//init call
loadQuestion(); //4