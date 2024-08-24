document.querySelectorAll('.club__category').forEach(button => {
    button.addEventListener('click', function() {
        // 모든 버튼에서 active 클래스 제거
        document.querySelectorAll('.club__category').forEach(btn => btn.classList.remove('active'));
        
        // 클릭된 버튼에 active 클래스 추가
        this.classList.add('active');
    });
});