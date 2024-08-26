// DOMContentLoaded 이벤트는 DOM이 완전히 로드된 후 실행됩니다.
document.addEventListener("DOMContentLoaded", function () {
  // '신청하기' 버튼을 선택합니다.
  const applyButton = document.querySelector(".apply-button");

  // 버튼이 클릭되었을 때 실행할 함수를 정의합니다.
  applyButton.addEventListener("click", function () {
    // '신청 완료되었습니다!'라는 메시지를 알림창으로 표시합니다.
    alert("신청 완료되었습니다!");
  });
});
