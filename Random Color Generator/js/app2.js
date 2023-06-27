const getColor = () => {
    //Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);

    const randomCode = "#" + randomNumber.toString(16);
document.body.style.backgroundColor = randomCode;

document.getElementById("color-code").innerHTML = randomCode;
}

//event call
document.getElementById("btn").addEventListener("click", getColor)

//intital call
getColor();