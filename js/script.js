// variables de chaque éléments
var taskInput = document.getElementById('taskInput');
var addTaskBtn = document.getElementById('button');
var taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addTask();
    }
});

// fonction d'ajout de tâches
function addTask(){
    var taskText = taskInput.value.trim();

    if(taskText === ''){
        alert('Veuillez entrer une tâche valide.');
        return;
    }

    // créer nouvel élément li (liste)
    var li = document.createElement('li');
    li.innerHTML =`<span>${taskText}</span><button class="delete">Supprimer</button>`;

    // marquer la tâche comme terminée
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // supprimer la tâche
    li.querySelector('.delete').addEventListener('click', (e) => {
        e.stopPropagation(); // empêche déclenchement du clic sur li
        li.remove();
    });

    // ajouter tâche à la liste
    taskList.appendChild(li);

    // réinitialiser l'input
    taskInput.value = '';
    
}