console.clear()
const calculation = (equation) => {
    return eval(equation);
}

const AllButtons = document.querySelectorAll('.button');
const input = document.querySelector('.input');

AllButtons.forEach((myBut) => {
    myBut.addEventListener('click', (event) => {
        try {
            const buttonText = event.target.innerHTML;

            if (buttonText === '=') {
                input.value = calculation(input.value);
            } else if (buttonText === 'C') {
                input.value = '';
            } else if (buttonText === `DEL`) {
                try {
                    input.value = input.value.slice(0, input.value.length - 1)
                }
                catch (error) {
                    console.log(error);
                }
            } else if (buttonText === `^`) {
                input.value += `**`;
            } else
                input.value += buttonText;
        } catch (e) { }
    });
});