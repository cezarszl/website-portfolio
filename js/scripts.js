//IIFE
(function () {
    // Assigning DOM elements to variables
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let messageInput = document.querySelector('#contact-msg');

    // Function showing error messages
    function showErrorMessage(input, message) {
        let container = input.parentElement;

        // Removing an existing error
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        // Adding the error, if the message exists
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    // Function validating e-mail input
    function validateEmail() {
        let value = emailInput.value;

        // Checking if the field is empty
        if (!value) {
            showErrorMessage(emailInput, 'E-mail is a required field.');
            return false;
        }

        // Checking if the input constains @
        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter valid e-mail address.');
            return false;
        }

        // Checking if the input contains .
        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter valid e-mail address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    // Function validating text lenght
    function validateMessage() {
        let value = messageInput.value;

        // Checking if the textbox is not empty
        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field.');
            return false;
        }

        // Checking if the message is not longer than 50 characters
        if (value.length >= 50) {
            showErrorMessage(messageInput, 'The message must not be longer than 50 characters.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;

    }

    // Function validating email and message at once
    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidMessage;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Preventing submit until fields are validated
        if (validateForm()) {
            alert('Thanks for contacting me!');
            form.action = "/";
            form.method = "GET";
            e.currentTarget.submit(); // Continuing interuped form submit
        }
    });

    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);


})();