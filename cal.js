const result = document.getElementById('result');
    const keys = document.querySelector('.keys');

    // Add a click event listener to the keys
    keys.addEventListener('click', (event) => {
        if (event.target.matches('button')) {
            const key = event.target;
            const keyValue = key.textContent;
            const displayValue = result.value;

            if (key.classList.contains('operator')) {
                if (keyValue === 'C') {
                    // Clear the input field
                    result.value = '';
                } else if (keyValue === '=') {
                    // Evaluate and display the result
                    try {
                        result.value = eval(displayValue);
                    } catch (error) {
                        result.value = 'Error';
                    }
                } else {
                    // Append the operator to the input field
                    result.value += keyValue;
                }
            } else {
                // Append the number or decimal point to the input field
                result.value += keyValue;
            }
        }
    });
