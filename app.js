const btn = document.querySelector("button");

const updateButton = () => {
  btn.innerHTML = `<img src="Full snake.gif" /> Loading..`;
  const img = btn.querySelector("img");
  img.style.width = "14px";
  img.style.background = "transparent";

  setTimeout(() => {
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Donne.`;
    btn.style.pointerEvents = "none";
  }, 1500);
};

btn.addEventListener("click", updateButton);
