document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
  
    loginButton.addEventListener('click', function (event) {
      event.preventDefault(); // 폼 제출 방지
      window.location.href = '/index.html'; // 메인 페이지로 이동
    });
  });