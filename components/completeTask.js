const DoneButton = () => {

    const doneButton = document.createElement('button');

    doneButton.classList.add('check-button')
    doneButton.innerText = 'concluir';
    doneButton.addEventListener('click', completeTask);

    return doneButton;
}


const completeTask = (evento) => {

    const doneButton = evento.target;

    const taskDone = doneButton.parentElement;

    /* toggle retorna boolean  e risca  done no css*/
    taskDone.classList.toggle('done');

}

// exportar botao
export default DoneButton;