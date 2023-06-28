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
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    const data = questions[index]
    console.log(data);
    quesBox.innerText = `${index+1}. ${data.que}`;
}

//init call
loadQuestion();