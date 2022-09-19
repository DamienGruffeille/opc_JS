/*Ajout d'une liste dans le p ayant pour ID "info"*/
let elt = document.getElementById("info");
elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";
elt.style.backgroundColor = "white";

const newElt = document.createElement("div");
newElt.innerHTML = "<p>Elément</p>";
newElt.style.backgroundColor = "red";
elt.appendChild(newElt);
