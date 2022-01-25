// $(".option").click(function () {
//   $(".option").removeClass("active");
//   $(this).addClass("active");
// });

const btnss = document.querySelectorAll(".option");
btnss.forEach((item, i) => {
  const domIndex = item.getAttribute("data-item");
  item.addEventListener("click", () => {
    btnss.forEach((option) => {
      option.classList.remove("active");
    });
    if (i == domIndex) {
      item.classList.add("active");
    }
  });
});
