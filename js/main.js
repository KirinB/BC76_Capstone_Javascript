const menuButton = document.querySelector(".nav_toggle button");
const closeButton = document.querySelector(".nav_close button");
const menu = document.querySelector(".nav_center");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("show"); // Thêm hoặc xóa lớp show để hiển thị hoặc ẩn menu
});

closeButton.addEventListener("click", function () {
  menu.classList.toggle("show"); // Thêm hoặc xóa lớp show để hiển thị hoặc ẩn menu
});
