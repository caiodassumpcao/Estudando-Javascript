var fslist = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fslist.length; i++) {
  initMultipleFieldSet(fslist[i]);
}

function initMultipleFieldSet(fs) {
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";
  addButton.type = "button";

  fs.appendChild(addButton);

  var firtsInput = fs.querySelector("input");

  addButton.addEventListener("click", function () {
    var div = document.createElement("div");
    var newInput = document.createElement("input");
    newInput.name = firtsInput.name;
    newInput.type = firtsInput.type;

    var deletButton = document.createElement("button");
    deletButton.textContent = "Excluir";
    deletButton.type = "button";

    div.appendChild(newInput);
    div.appendChild(deletButton);

    deletButton.addEventListener("click", function () {
      div.remove();
    });

    fs.insertBefore(div, addButton);
  });
}
