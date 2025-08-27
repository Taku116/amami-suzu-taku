document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".dropdown-toggle");

  toggles.forEach(toggle => {
    const menu = toggle.nextElementSibling; // 一つ下の ul.dropdown-menu を想定

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");

      if (toggle.classList.contains("active")) {
        menu.style.maxHeight = menu.scrollHeight + "px";
        menu.style.opacity = 1;
        menu.style.paddingTop = "10px";
        menu.style.paddingBottom = "10px";
      } else {
        menu.style.maxHeight = 0;
        menu.style.opacity = 0;
        menu.style.paddingTop = 0;
        menu.style.paddingBottom = 0;
      }
    });
  });
});
