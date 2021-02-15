(() => {
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

    const DoneButton = () => {

        const doneButton = document.createElement('button');

        doneButton.classList.add('check-button')
        doneButton.innerText = 'concluir';
        doneButton.addEventListener('click', completeTask);

        return doneButton;
    }

    /* componente, começa com maiusculo */
    const DeleteButton = () => {

        const deleteButton = document.createElement('button');

        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'excluir';
        deleteButton.addEventListener('click', deleteTask);

        return deleteButton;
    }

    const deleteTask = (evento) => {

        const deleteButton = evento.target;

        const taskDone = deleteButton.parentElement;

        taskDone.remove();
    }


    const completeTask = (evento) => {

        const doneButton = evento.target;

        const taskDone = doneButton.parentElement;

        /* toggle retorna boolean  e risca  done no css*/
        taskDone.classList.toggle('done');

    }

})()