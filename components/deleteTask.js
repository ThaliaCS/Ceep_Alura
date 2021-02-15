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


export default DeleteButton;