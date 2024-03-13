const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");
function AddTask() {
    if(inputBox.value === ''){
        alert("You must write someting")
    }else{
        let li=document.createElement('li'); 
        li.innerHTML=inputBox.value;
        // console.log(li);
        listContainer.appendChild(li);  
        let span = document.createElement('span');
        span.innerHTML = "\u00D7"; 
        li.appendChild(span);    
    }
    inputBox.value="";
    saveData()
}

listContainer.addEventListener('click', function (e) {
    console.log(e.target.tagName)
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()   
    } 
    else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()