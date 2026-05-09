console.log("JS loaded");

const items = document.getElementsByClassName("main-swiper__item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", expand);
  items[i].addEventListener("mouseleave", shrink);
}

function expand(e) {
  for (let i=0; i<items.length; i++){ items[i].querySelector("img").style.flex = 1; }
  e.currentTarget.style.flex = 4;
  e.currentTarget.querySelector("img").style.transform = "scale(1.2)";
}

function shrink(e) {
  for (let i=0; i<items.length; i++){ items[i].style.flex = 1; }
  e.currentTarget.querySelector("img").style.transform = "scale(1)";
}
