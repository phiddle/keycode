// document.addEventListener("keydown", function (event) {
//   let h1 = document.getElementById("set");
//   h1.textContent = `${event.key}' | '${event.code}' | '${event.which}'`;
//   let hiddenList = document.getElementsByClassName("container");
//   for(let element of hiddenList) {
//     element.classList.remove("container");
//   }
// });
document.addEventListener("keydown", function (event) {
  let h1 = document.getElementById("which");
  h1.textContent = `${event.which}`;
  let key = document.getElementById("key");
  key.textContent = `Key: ${event.key}`;
  let code = document.getElementById("code");
  code.textContent = `code: ${event.code}`;
  let num = document.getElementById("num");
  num.textContent = `which: ${event.which}`;
});


// document.addEventListener("keydown", function (event) {
//   let div = document.getElementById("key");
//   div.textContent = `Key: ${event.key}`;
// });
// document.addEventListener("keydown", function (event) {
//   let div = document.getElementById("code");
//   div.textContent = `code: ${event.code}`;
// });
// document.addEventListener("keydown", function (event) {
//   let div = document.getElementById("num");
//   div.textContent = `which: ${event.which}`;
// });

// find the element
// insert the data into the element, event.key?
