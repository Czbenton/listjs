(function() {
    document.querySelector('h1').textContent = "One List";
})();


function submitText(event) {
    if (event.which === 13) {
        var text = document.createTextNode(event.target.value);
        var list = document.getElementById('list');
        var newLi = document.createElement("li");
        var newId = Math.random();
        newLi.id = newId;

        addListItem(text, list, newLi, newId);
        document.getElementById('input').value = "";
        document.getElementById('listContainer').style.display = "flex";

        deleteListItem(text, list, newLi, newId);

    }
}

function addListItem(text, list, newLi, newId) {
    newLi.appendChild(text);
    $(list.appendChild(newLi)).hide().fadeIn();
    newLi.onclick = function() {
        let x = document.getElementById(newId);
        if (!x.style.textDecoration) {
            x.style.textDecoration = "line-through";
            x.style.textDecorationColor = "#000000:"
        } else {
            x.style.textDecoration = "none";
            x.style.textDecorationColor = "";
        }
    }
}

function strikeThrough() {

}

function deleteListItem(text, list, newLi, newId) {
    let x = document.getElementById(newId);
    if (x.syle.textDecoration) {
        text.textContent = "X " + text;
    }
}



// function bubble(event){
//   console.log(event);
// }
