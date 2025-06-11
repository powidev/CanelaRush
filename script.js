const dog = document.getElementById("dog");
let posX = 340;
let posY = 305;
let moving = false;
let moveTimer;

document.addEventListener("keydown", (e) => {
  const step = 12;
  const maxX = 600 - dog.offsetWidth;
  const maxY = 400 - dog.offsetHeight;

  if (!moving) {
    dog.src = "walk_dog.gif";
    dog.style.top = (posY + 5) + "px";
    moving = true;
  }

  clearTimeout(moveTimer);

  switch (e.key) {
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
    case "ArrowLeft":
      posX = Math.max(0, posX - step);
      dog.style.transform = "scaleX(-1)";
      break;
    case "ArrowRight":
      posX = Math.min(maxX, posX + step);
      dog.style.transform = "scaleX(1)";
      break;
  }

  dog.style.left = posX + "px";
  dog.style.top = (moving ? posY + 5 : posY) + "px"; 

  moveTimer = setTimeout(() => {
    dog.src = "static_dog.png";
    dog.style.top = posY + "px";
    moving = false;
  }, 100);
});
