const moreBtn = document.querySelector(".info .metadata .morebutton");
const title = document.querySelector(".info .metadata .title");
const icons = document.querySelector(".info .actions button");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

icons.addEventListener("click", (e) => {
  e.target.classList.toggle("actions");
});
