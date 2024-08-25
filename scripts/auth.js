document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;

    if (username) {
        // 로그인 성공 시 헤더 업데이트
        const navbar = document.getElementById('header__nav');
        navbar.innerHTML = `
            <li><a href="#">${username}</a></li>
            <li><a href="#" id="logout-link">로그아웃</a></li>
        `;

        // 로그아웃 기능 추가
        document.getElementById('logout-link').addEventListener('click', function() {
            // 로그아웃 시 헤더 원래대로 복원
            navbar.innerHTML = `
                <li><a href="#" id="login-link">로그인</a></li>
                <li><a href="#" id="signup-link">회원가입</a></li>
            `;
        });
    } else {
        alert('아이디를 입력하세요.');
    }
});