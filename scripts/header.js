document.addEventListener("DOMContentLoaded", function() {
    // 외부 HTML 파일 로드
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // 로드된 HTML을 DOM에 삽입
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const template = doc.getElementById('header-template');
            
            if (template) {
                const clone = document.importNode(template.content, true);
                document.getElementById('header').appendChild(clone);
            } else {
                console.error('Template not found in external file');
                return;
            }

            // 헤더가 로드된 후에 요소들을 찾음
            const loginButton = document.getElementById("login-button");
            const userInfo = document.getElementById("user-info");

            // 페이지 로드 시 localStorage에 저장된 사용자 이름을 확인하여 헤더 업데이트
            const savedUsername = localStorage.getItem('username');
            if (savedUsername) {
                updateHeaderWithUsername(savedUsername);
            }

            if (loginButton) {
                loginButton.addEventListener("click", function(event) {
                    event.preventDefault();

                    // 사용자 이름을 가져옴 (예시: '사용자')
                    const username = "고길동(교사)"; // 실제로는 사용자 입력 또는 서버 응답에서 받아옴

                    // localStorage에 사용자 이름 저장
                    localStorage.setItem('username', username);

                    // 헤더 업데이트
                    updateHeaderWithUsername(username);
                });
            } else {
                console.error('Login button not found');
            }
        })
        .catch(error => console.error('Error loading the template:', error));
});

function updateHeaderWithUsername(username) {
    const userInfo = document.getElementById("user-info");
    if (userInfo) {
        // 사용자 이름과 로그아웃 버튼에 각각 클래스 추가
        userInfo.innerHTML = `<span class="username">${username}</span> <a href="#" id="logout-link" class="logout-link">로그아웃</a>`;
        
        // 로그아웃 이벤트 추가
        const logoutLink = document.getElementById("logout-link");
        logoutLink.addEventListener("click", function(event) {
            event.preventDefault();
            // 로그아웃 시 localStorage에서 사용자 정보 삭제
            localStorage.removeItem('username');
            // 헤더를 초기 상태로 복원
            resetHeader();
        });
    }
}

function resetHeader() {
    const userInfo = document.getElementById("user-info");
    if (userInfo) {
        // 초기 상태로 헤더를 복원
        userInfo.innerHTML = `<a href="login.html" id="login-link">로그인</a>`;
    }
}
