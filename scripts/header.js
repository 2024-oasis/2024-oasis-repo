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
            }
        })
        .catch(error => console.error('Error loading the template:', error));
});
