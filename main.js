var x = document.querySelector('h1')

function change() {
    x.textContent = "One List";
}

change();



function submitText(event) {
console.log(event);
    if (event.which === 13) {
        var text = document.createTextNode(event.target.value);
        var list = document.getElementById('list');
        var newLi = document.createElement("li");
        list.appendChild(newLi);
        newLi.appendChild(text);
        document.getElementById('input').value = "";
    }
}




console.log(text);
