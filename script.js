// Lire le localStorage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];



// Déclarer les variables
const taskInput = document.getElementById("taskInput");
const btn = document.getElementById("boutton");
const errorMessage = document.getElementById("errorMessage");
const taskList = document.getElementById("taskList");

// Afficher le localStorage
document.addEventListener('DOMContentLoaded', () => {
    tasks.forEach(task => {
        const p = document.createElement("p");
        p.textContent = task;
        p.classList.add("task-style");

        // Création de la checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Création du btn modifier
        const btnModifier = document.createElement("button");
        btnModifier.textContent = "Modifier";

        //Création du btn Supprimer
        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer"

        // Assembler les éléments
        p.appendChild(checkbox);
        p.appendChild(btnModifier);
        p.appendChild(btnSupprimer);

        taskList.appendChild(p);
    })
})

// Evenement pour le bouton
btn.addEventListener("click", () => {
    if(taskInput.value === "") {
        errorMessage.style.display = "block";
    } else {
        tasks.push(taskInput.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Création de l'element de liste
        const p = document.createElement("p");
        p.textContent = taskInput.value;
        p.classList.add("task-style");

        // Création de la checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Création du btn modifier
        const btnModifier = document.createElement("button");
        btnModifier.textContent = "Modifier";

        //Création du btn Supprimer
        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer"

        // Assembler les éléments
        p.appendChild(checkbox);
        p.appendChild(btnModifier);
        p.appendChild(btnSupprimer);

        taskList.appendChild(p);
        // Vider l'input et remettre le message d'erreur a display:none
        const rollBackTaskInput = taskInput.value;
        taskInput.value = "";
        errorMessage.style.display = "none";

        // Gérer l'event du bouton Supprimer
        btnSupprimer.addEventListener("click", () => {
            p.remove();
            const index = tasks.indexOf(rollBackTaskInput);
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })

    }
});
