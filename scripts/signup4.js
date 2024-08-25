function showAlert() {
    document.getElementById("popup").style.display = "block";
    document.body.classList.add("alert-active"); // 배경을 비활성화
}

function closeAlert() {
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("alert-active"); // 배경을 다시 활성화
}

function goToMain() {
    window.location.href = "main.html"; // 메인 페이지로 이동
}

function login() {
    window.location.href = "login.html"; // 로그인 페이지로 이동
}
