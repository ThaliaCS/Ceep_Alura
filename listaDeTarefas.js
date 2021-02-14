const newTask = document.querySelector('[data-form-button]');

const createTask = (evento) => {
 
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
   

    const value = input.value;

    console.log(value);

    input.value = " ";
}

newTask.addEventListener('click', createTask);
