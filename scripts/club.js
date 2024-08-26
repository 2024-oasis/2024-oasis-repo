document.querySelectorAll(".club__category").forEach((button) => {
  button.addEventListener("click", function () {
    // 모든 버튼?��?�� active ?��?��?�� ?���?
    document
      .querySelectorAll(".club__category")
      .forEach((btn) => btn.classList.remove("active"));

    // ?���??�� 버튼?�� active ?��?��?�� 추�??
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".club__category");
  const clubCards = document.querySelectorAll(".club__card");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // ��� ī�װ� ��ư���� active Ŭ���� ����
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      // ���� Ŭ���� ��ư�� active Ŭ���� �߰�
      this.classList.add("active");

      const categoryId = this.id;

      clubCards.forEach((card) => {
        // "��ü" ��ư Ŭ�� �� ��� ī�带 ǥ��
        if (
          categoryId === "all" ||
          categoryId === "" ||
          this.textContent === "��ü"
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
