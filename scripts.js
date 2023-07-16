function changeTheme() {
  let themeButton = document.getElementById("theme_button");
  const boxPressed = () => {
    themeButton.classList.toggle("bx-brightness");
    themeButton.classList.toggle("bx-moon");
  };
  themeButton.addEventListener("click", boxPressed, { once: true });
}
