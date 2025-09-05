function AjouterTache() {
    const input = document.getElementById("inputText");
    const tache = input.value.trim();
    const list = document.getElementById("list");

    if (tache === "") return;

    let li = document.createElement("li");
    li.textContent = tache;

    const btn2 = document.createElement("button");
    btn2.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    btn2.onclick = function () {
        li.remove();
    };

    btn2.className ="btn3";

 

    const btn4 = document.createElement("button");
    btn4.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
    
    btn4.onclick = function () {
    const nouveauTexte = prompt("Modifier la tâche :", li.firstChild.textContent);
    if (nouveauTexte !== null && nouveauTexte.trim() !== "") {
        li.firstChild.textContent = nouveauTexte.trim();
    }
};

    btn4.className = "btn5";

    li.appendChild(btn2);
    li.appendChild(btn4);
    list.appendChild(li);
    input.value = "";
}

