import DoneButton from './components/completeTask.js';
import DeleteButton from './components/deleteTask.js';

    const createTask = (evento) => {

        evento.preventDefault();

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const value = input.value;

        const task = document.createElement('li');

        task.classList.add('task');

        const conteudo = ` <p class="content">${value}</p>`;

        task.innerHTML = conteudo;

        task.appendChild(DoneButton())
        task.appendChild(DeleteButton());
        lista.appendChild(task);

        input.value = " ";
    }

    const newTask = document.querySelector('[data-form-button]');


    newTask.addEventListener('click', createTask);
