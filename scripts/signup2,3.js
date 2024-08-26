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

document.getElementById("id__check").addEventListener("click", function() {
    var idCheckSentence = document.getElementById("id__check__sentence");
    var usernameInput = document.getElementById("id");

    // 메시지를 표시하고 스타일 변경
    idCheckSentence.style.display = "block"; // 메시지 표시
    usernameInput.style.marginBottom = "0px"; // 입력창의 margin-bottom 변경
});


function move4() {
    window.location.href = "signup4.html"; 
}

function goToMain() {
    window.location.href = "main.html"; // 메인 페이지로 이동
}

function login() {
    window.location.href = "login.html"; // 로그인 페이지로 이동
}
