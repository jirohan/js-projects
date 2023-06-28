const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'

    },
    {
        'que': 'What year was JS launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'

    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Cascading Sheet Style ',
        'd': 'None',
        'correct': 'b'

    },
    {
        'que': 'What is the correct way to declare a JavaScript variable?',
        'a': 'var myVar',
        'b': 'variable myVar',
        'c': 'let myVar',
        'd': 'const myVar',
        'correct': 'a'

    },
    {
        'que': 'Which of the following is not a JavaScript data type?',
        'a': 'String',
        'b': 'Boolan',
        'c': 'Float',
        'd': 'Number',
        'correct': 'c'

    }
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;  
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
       return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerHTML = ` ${index+1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    } else {
        wrong ++;
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            } 
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank you for playing Quiz</h3>
    <h2> ${right} / ${total} are correct
    `
}

//intital call
loadQuestion();