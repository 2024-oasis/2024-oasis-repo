function completeSignup() {
    // 회원가입 완료 로직이 여기에 들어갈 수 있습니다.
    // 예를 들어, 서버에 데이터를 제출한 후 성공적으로 완료되면 팝업을 보여줍니다.
    showAlert();
}

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
