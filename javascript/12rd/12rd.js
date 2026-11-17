const box = document.getElementById("box");
const result = document.getElementById("result");

// Let box listen for mouseover
box.addEventListener("dblclick", function () {
  result.textContent = "더블 클릭 되었습니다";
});

// Let box listen for mouseout
box.addEventListener("click", function () {
  result.textContent = "한번 클릭 되었습니다";
});

box.addEventListener("mouseover", function () {
  result.textContent = "마우스 오버";
});

// Let box listen for mouseout
box.addEventListener("mouseout", function () {
  result.textContent = "마우스 아웃";
});

// document.addEventListener("click", function (event) {
//   document.getElementById("demo").innerHTML =
//   "X: " + event.clientX + " Y: " + event.clientY;
// });