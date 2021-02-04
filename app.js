window.addEventListener("keydown", function (event) {
  let h1 = document.getElementById("set");
  h1.textContent = `'${event.which}'`;
});