    document.addEventListener('DOMContentLoaded', () => {
        const result = document.getElementById('result');
        const firstInput = document.getElementById('first');
        const secondInput = document.getElementById('second');
        document.getElementById('plus').addEventListener('click', () => {
            operator = '+';
        });
        document.getElementById('minus').addEventListener('click', () => {
            operator = '-';
        });
        document.getElementById('kopaytrsh').addEventListener('click', () => {
            operator = '*';
        });
        document.getElementById('ayrish').addEventListener('click', () => {
            operator = '/';
        });
        document.querySelector('.btn').addEventListener('click', calculate);
        let operator = '';

        function calculate() {
            const num1 = parseFloat(firstInput.value);
            const num2 = parseFloat(secondInput.value);
            let output;
            if (operator === '+') {
                output = num1 + num2;
            } else if (operator === '-') {
                output = num1 - num2;
            } else if (operator === '*') {
                output = num1 * num2;
            } else if (operator === '/') {
                if (num2 === 0) {
                    result.textContent = 'Nolga bolinish';
                    return;
                }
                output = num1 / num2;
            } else {
                result.textContent = 'Operatsiyani tanlang';
                return;
            }
            
            result.textContent = output;
        }
    });