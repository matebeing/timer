

const input = document.getElementById("toDo_add");

input.addEventListener('keypress', (e) => {
    if (e.key == "Enter" && input.value != "") {
        let item = `<div>
            <input type="checkbox" onchange='handleChange(this)'>
            <span>${input.value}</span>
            <button id="toDo-removeItem" onClick="this.parentElement.remove()" style="float: right; font-size: 10px">REMOVE</button
        </div>
        `
        document.getElementById("toDo-items").innerHTML += item;
        
        input.value = ""

    }
})


function handleChange(checkbox) {
    if(checkbox.checked == true){
        checkbox.parentElement.style.opacity = "0.5"
    }else{
        checkbox.parentElement.style.opacity = "1"
    }
}