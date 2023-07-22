const calculation = (equation) => {
    return eval(equation);
}

const AllButtons = document.querySelectorAll('.button');
const input = document.querySelector('.input');

AllButtons.forEach((myBut) => {
    myBut.addEventListener('click', (event) => {
        const buttonText = event.target.innerHTML;

        if (buttonText === '=') {
            input.value = calculation(input.value);
        } else if (buttonText === 'C') {
            input.value = '';
        } else {
            input.value += buttonText;
        }
    });
});