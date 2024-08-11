const tasks = []
const ul = document.getElementById('list');
const input = document.getElementById('user-input');
const button = document.getElementById('button');
const MAX_TASKS = 10

function addTask() {
    const userInput = input.value.trim();
    if (userInput) {
        if (tasks.length < MAX_TASKS) { // Check if the number of tasks is below the limit
            tasks.push(userInput);
            input.value = '';
            renderTasks();
        } else {
            alert('You cannot add more than 10 tasks.');
        }
    }
}

function renderTasks(){
    ul.innerHTML = ''
    tasks.forEach((task, index) => {
        const li = document.createElement('li')
        li.textContent = task;

        const removebutton = document.createElement('button')
        removebutton.textContent = 'X';
        removebutton.classList.add('removebutton')
        removebutton.addEventListener('click', () =>{
            tasks.splice(index, 1)
            renderTasks()
        })

        li.appendChild(removebutton)
        ul.appendChild(li)
        
    })
}





button.addEventListener('click', addTask )


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if inside a form
        addTask(); // Call addTask function
    }
});









