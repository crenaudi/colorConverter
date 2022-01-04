const app = document.getElementById("app");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const rgb = {
  r : getRandomInt(256),
  g : getRandomInt(256),
  b : getRandomInt(256)
}

app.innerText = `color rgb = ${rgb.r} ${rgb.g} ${rgb.b}`;

function fillCircle(rgb)
{
  const canvas = document.getElementById("cercle");
  const context = canvas.getContext("2d");
  const color = '#'+ rgb.r.toString(16) + rgb.g.toString(16) + rgb.b.toString(16)

  console.log(color)

  context.beginPath();
  context.fillStyle = color
  context.arc(80, 80, 70, 0, 2 * Math.PI);
  context.fill();
}
fillCircle(rgb); 