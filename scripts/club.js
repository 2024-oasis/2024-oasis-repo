document.querySelectorAll(".club__category").forEach((button) => {
  button.addEventListener("click", function () {
    // 紐⑤뱺 踰꾪듉?뿉?꽌 active ?겢?옒?뒪 ?젣嫄?
    document
      .querySelectorAll(".club__category")
      .forEach((btn) => btn.classList.remove("active"));

    // ?겢由??맂 踰꾪듉?뿉 active ?겢?옒?뒪 異붽??
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".club__category");
  const clubCards = document.querySelectorAll(".club__card");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 모든 카테고리 버튼에서 active 클래스 제거
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      // 현재 클릭한 버튼에 active 클래스 추가
      this.classList.add("active");

      const categoryId = this.id;

      clubCards.forEach((card) => {
        // "전체" 버튼 클릭 시 모든 카드를 표시
        if (
          categoryId === "all" ||
          categoryId === "" ||
          this.textContent === "전체"
        ) {
          card.style.display = "block";
        } else if (card.id === categoryId) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
