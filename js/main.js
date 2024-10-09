const menuButton = document.querySelector(".nav_toggle button");
// const closeButton = document.querySelector(".nav_close button");
const menu = document.querySelector(".nav_center");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("show");
  overlay.classList.add("show"); // Thêm hoặc xóa lớp show để hiển thị hoặc ẩn menu
});

// closeButton.addEventListener("click", function () {
//   menu.classList.toggle("show");
//   overlay.classList.add("show"); // Thêm hoặc xóa lớp show để hiển thị hoặc ẩn menu
// });

overlay.addEventListener("click", function () {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});
