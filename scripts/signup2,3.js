function validatePassword() {
    const passwordInput = document.getElementById('password');
    const helpText = document.getElementById('passwordHelp');
    const password = passwordInput.value;

    const isValid = password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);

    if (isValid) {
        helpText.style.display = 'none';
         passwordInput.style.marginBottom = '25px'
    } else {
        helpText.style.display = 'block';
         passwordInput.style.marginBottom = '0px'
    }

    checkPasswordMatch();
}

function checkPasswordMatch() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('password-check');
    const mismatchText = document.getElementById('passwordMismatch');

    if (confirmPasswordInput.value !== "" && confirmPasswordInput.value !== passwordInput.value) {
        mismatchText.style.display = 'block';
        confirmPasswordInput.style.marginBottom = '0px';
    } else {
        mismatchText.style.display = 'none';
        confirmPasswordInput.style.marginBottom = '25px';
    }
}

