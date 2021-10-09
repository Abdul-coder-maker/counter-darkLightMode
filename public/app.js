const btns = document.querySelectorAll(".btn");
let countEl = document.querySelector("#count-el");
let count = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    let classOfEl = e.currentTarget.classList;
    if (classOfEl.contains("decrease")) {
      count--;
      countEl.style.color = "#F0572F";
    } else if (classOfEl.contains("increase")) {
      count++;
      countEl.style.color = "#31CB53";
    } else {
      count = 0;
      countEl.style.color = "rgba(17, 24, 39)";
    }
    countEl.textContent = count;
  })
})