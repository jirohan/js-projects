const endDate = "1 July 2023 10:00 PM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    console.log(diff);
    inputs[0].value = Math.floor(diff /3600 / 24);

    //convert into days;
}

clock()