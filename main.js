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
        var ptagId = Math.random()+1;
        newLi.id = newId;
        ptag.id = ptagId;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        newLi.appendChild(deleteButton);
        deleteButton.style.display = "none";

        addListItem(text, list, newLi, newId, ptag);
        addstrikeThroughFunc(newLi, ptagId, newId);
        document.getElementById('input').value = "";
        document.getElementById('listContainer').style.display = "flex";

    }
}

function addListItem(text, list, newLi, newId, ptag) {
    newLi.appendChild(ptag);
    ptag.appendChild(text);
    $(list.appendChild(newLi)).hide().fadeIn();

}

function addstrikeThroughFunc(newLi,ptagId, newId) {
  newLi.onclick = function() {
      let x = document.getElementById(ptagId);
      let y = document.getElementById(newId);
      let button = y.children[0];

      if (!x.style.textDecoration) {
          x.style.textDecoration = "line-through";
          x.style.textDecorationColor = "#000000"
          button.style.display = "inherit";
      } else {
          x.style.textDecoration = "none";
          x.style.textDecorationColor = "";
          button.style.display = "none";
      }
  }
}


// function bubble(event){
//   console.log(event);
// }
