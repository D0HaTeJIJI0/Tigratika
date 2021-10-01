window.addEventListener("DOMContentLoaded", () => {
  const imgList = document.querySelectorAll(".incormation__img");

  if (imgList.length % 2 !== 0) {
    imgList.forEach((img, i) => {
      if (i === imgList.length - 1) {
        img.classList.add("incormation__img--last");
      }
    });
  }

  const btn = document.querySelector(".information__btn-wpapper .btn");
  const popUpBlock = document.querySelector(".pop-up");
  const popUpClose = popUpBlock.querySelector(".pop-up__close");
  const popUpSendBtn = popUpBlock.querySelector(".form__btn");
  const popUpForm = popUpBlock.querySelector(".form");
  const popUpCheck = popUpBlock.querySelector(".form__checkbox");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    popUpBlock.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  popUpBlock.addEventListener("click", (e) => {
    if (e.target === popUpBlock) {
      popUpBlock.classList.add("hidden");
      document.body.style.overflow = "";
    }

    if (e.target === popUpClose) {
      popUpBlock.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  popUpCheck.addEventListener("click", () => {
    popUpCheck.checked
      ? (popUpSendBtn.disabled = false)
      : (popUpSendBtn.disabled = true);
  });

  popUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    popUpForm.reset();
  });
});
