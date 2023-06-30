const addBtn = document.querySelector('#addBtn');
const main = document.querySelector("#main");

addBtn.addEventListener(
    "click", 
    function(){
        addNote();
    }
);

function checkLocalStorage() {
     const IsNotes = JSON.parse(localStorage.getItem("notes"));
    console.log(IsNotes);
}


const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    localStorage.setItem("notes",JSON.stringify(data))
}

const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
            <div class="tool">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>
            <textarea></textarea>
        `;


    note.querySelector(".trash").addEventListener(
        "click", 
        function(){
            note.remove()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes();

}