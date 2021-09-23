import "./style/main.css";
import "./js/original-template/main"
import "@fortawesome/fontawesome-free/js/all"

import "./js/collapsibles";

window.addEventListener("load", () => {
  document.getElementById("wrapper").style.display = "flex";
})


var c = document.querySelector("canvas.background");
/** @type CanvasRenderingContext2D */
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 300, 300, 300);

grd.addColorStop(0, "#000000");
// grd.addColorStop(0.3, "#000000");
grd.addColorStop(.5, "#808080");
grd.addColorStop(1, "#000000");

// Fill with gradient
ctx.fillStyle = grd;
// ctx.fillRect(0, 0, window.screen.width, window.screen.height);
ctx.fillRect(0, 0, 300, 150);



