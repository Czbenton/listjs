(function() {
  document.querySelector('h1').textContent = "One List";
})();


function submitText(event) {
    if (event.which === 13) {
        var text = document.createTextNode(event.target.value);
        var list = document.getElementById('list');
        var newLi = document.createElement("li");
        list.appendChild(newLi);
        // newLi.className = "center";
        newLi.appendChild(text);
        document.getElementById('input').value = "";
        (function(){
          document.getElementById('listContainer').style.display = "flex";
        })();
    }
}
