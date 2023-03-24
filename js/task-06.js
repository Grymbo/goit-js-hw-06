/*const validationInput = document.querySelector("#validation-input");

        validationInput.addEventListener("blur", () => {
            const inputLength = validationInput.value.length;
            const requiredLength = Number(validationInput.dataset.length);

            if (inputLength === requiredLength) {
            validationInput.classList.add("valid");
            validationInput.classList.remove("invalid");
            } else {
            validationInput.classList.add("invalid");
            validationInput.classList.remove("valid");
            }
        });
        */

const input = document.getElementById('validation-input');

        input.addEventListener('blur', () => {
        const expectedLength = input.getAttribute('data-length');
        const actualLength = input.value.length;
        
        if (actualLength === parseInt(expectedLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        }
        });