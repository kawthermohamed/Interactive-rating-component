let spans = document.querySelectorAll(".rates-number span");
let submitbtn = document.querySelector(".rating-container a");
let neededfill = document.querySelector(".th-text span");
console.log(neededfill);

let ratingSec = document.querySelector(".rating-container ");
let thanksSec = document.querySelector(".thanking-container");

spans.forEach((span) => {
  span.onclick = function () {
    spans.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    neededfill.setAttribute("data-index", this.innerHTML);
  };
});

submitbtn.onclick = function () {
  thanksSec.style.display = "block";
  ratingSec.style.display = "none";
  neededfill.innerHTML = neededfill.dataset.index;
};
