(function() {
    document.querySelector('h1').textContent = "One List";
})();

function submitText(event) {
    if (event.which === 13) {
        var text = document.createTextNode(event.target.value);
        var list = document.getElementById('list');
        var ptag = document.createElement('p');
        var newLi = document.createElement("li");
        var newId = Math.random();
        var ptagId = Math.random() + 1;
        newLi.id = newId;
        ptag.id = ptagId;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        newLi.appendChild(deleteButton);
        deleteButton.style.display = "none";

        addListItem(text, list, newLi, newId, ptag);

        var editButton = document.createElement('a');
        editButton.className = "fa fa-pencil"
        editButton.addEventListener("click", beginEditingItem);
        newLi.appendChild(editButton);

        addstrikeThroughFunc(newLi, ptagId, newId);
        document.getElementById('input').value = "";
        document.getElementById('listContainer').style.display = "flex";
    }
}

function beginEditingItem(event) {
    var id = event.target.parentNode.id;
    var itemContainer = document.getElementById(id);
    var currentTextP = itemContainer.children[1];
    currentTextP.style.display = "none";

    var defaultText = itemContainer.children[1].textContent;

    var editInputBox = document.createElement("input");
    editInputBox.addEventListener("keyup", finishEditingItem);
    editInputBox.type = "text";
    editInputBox.value = defaultText;
    itemContainer.insertBefore(editInputBox, itemContainer.children[2]);
}

function finishEditingItem(event) {
    if (event.which === 13) {
        var newText = event.target.value;
        var parentId = event.target.parentNode.id;
        var itemContainer = document.getElementById(parentId);
        var currentTextP = itemContainer.children[1];
        currentTextP.textContent = newText;
        currentTextP.style.display = "inherit";
        itemContainer.removeChild(itemContainer.children[2]);
    }
}

function addListItem(text, list, newLi, newId, ptag) {
    newLi.appendChild(ptag);
    ptag.appendChild(text);
    $(list.appendChild(newLi)).hide().fadeIn();
    $("li").on("click", "button", function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });
}

function addstrikeThroughFunc(newLi, ptagId, newId) {
    newLi.onclick = function() {
        let x = document.getElementById(ptagId);
        let y = document.getElementById(newId);
        let button = y.children[0];

        if (!x.style.textDecoration) {
            x.style.textDecoration = "line-through";
            x.style.textDecorationColor = "#000000"
            button.style.display = "inherit";
            button.style.margin = "4px";
        } else {
            x.style.textDecoration = "none";
            x.style.textDecorationColor = "";
            button.style.display = "none";
        }
    }
}
