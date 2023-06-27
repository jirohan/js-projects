
const firstName = ["Liam", "Noah", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas", "Henry", "Alexander", "Mason", "Michael", "Ethan", "Daniel", "Jacob", "Logan", "Jackson", "Levi", "Sebastian", "Mateo", "Jack", "Owen", "Theodore", "Aiden", "Samuel", "Joseph", "John", "David", "Wyatt", "Matthew", "Luke", "Asher", "Carter", "Julian", "Grayson", "Leo", "Jayden", "Gabriel", "Isaac", "Lincoln", "Anthony", "Hudson", "Dylan", "Ezra", "Thomas", "Charles", "Christopher", "Jaxon", "Maverick","Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Sofia", "Avery", "Ella", "Scarlett", "Grace", "Chloe", "Victoria", "Riley", "Aria", "Lily", "Aubrey", "Zoey", "Penelope", "Layla", "Nora", "Lillian", "Addison", "Stella", "Natalie", "Hannah", "Lucy", "Zoe", "Brooklyn", "Savannah", "Audrey", "Leah", "Eleanor", "Skylar", "Ellie", "Paisley", "Violet", "Claire", "Bella", "Aurora", "Hazel", "Chelsea"];

const lastName = ["Smith", "Maharjan", "Shrestha", "Joshi", "Johnson", "Khanal", "Bhattrai",  "Williams", "Dangol", "Jones", "Brown", "Singh",  "Davis",  "Miller",  "Shakya", "Wilson", "Anderson", "Taylor", "Thomas", "Jackson", "White", "Harris", "Martin", "Karki", "Thompson", "Malakar", "Garcia", "Basnet", "Rajbhandari", "Martinez", "Bajracharaya",  "Robinson",  "Clark", "Baniya",  "Rodriguez",  "Lewis",  "Lee", "Walker",  "Hall", "Yadav",  "Allen",  "Young", "Hernandez", "Adhakari", "Sapkota", "King", "Bajjyu", "Yonzon"];

function getName(){
    let randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' '+ lastName[Math.floor(Math.random() * lastName.length)]
    return randomName;
}

function nameQty(){
    const userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = "";
    if(userQty > 5){
        document.querySelector('.nameList').innerHTML = "ONLY 5 NAMES CAN BE GENERATE" ;
    }
    else{
        for(i = 0; i < userQty; i++ ){
            document.querySelector('.nameList').innerHTML += getName() + "<br/>";
        }
    }
}

