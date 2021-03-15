const body = document.body;
const toggle = document.getElementById("dark-mode-toggle"); // CSS toggle element

// setTimeout(() => body.classList.remove("notransition"), 75);

// Run this every time the page loads to set the correct toggle image
if (cachedTheme == "light") {
  document.getElementById("dark-mode-img").src = "/assets/img/sun.png";
} else {
  document.getElementById("dark-mode-img").src = "/assets/img/moon.png";
}

const toggleTheme = (state) => {
  if (state === "dark") {
    localStorage.setItem("theme", "light");
    body.setAttribute("site-theme", "light");
    document.getElementById("dark-mode-img").src = "/assets/img/sun.png";
  } else if (state === "light") {
    localStorage.setItem("theme", "dark");
    body.setAttribute("site-theme", "dark");
    document.getElementById("dark-mode-img").src = "/assets/img/moon.png";
  } else {
    initTheme(state);
  }
};

toggle.addEventListener("click", () =>
  toggleTheme(localStorage.getItem("theme"))
);

// Blur the content when the menu is open
// const cbox = document.getElementById("menu-trigger");

// cbox.addEventListener("change", function () {
//   const area = document.querySelector(".wrapper");
//   this.checked
//     ? area.classList.add("blurry")
//     : area.classList.remove("blurry");