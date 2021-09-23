import { pauseVideosWithoutAutoplay } from "./original-template/custom";

/** @param {HTMLButtonElement} button   */
const closeCollapsible = (button) => {
  /** @type HTMLElement */
  var content = button.nextElementSibling;
  if (!content.style.display || content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }

  pauseVideosWithoutAutoplay();
}

function setupCollapsibles() {
  var collapsibles = document.querySelectorAll("button.collapsible");

  for (var i = 0; i < collapsibles.length; i++) {

    const collapsible = collapsibles[i];
    // TODO: try query selector on this?
    const collapsibleCloser = collapsibles[i].nextElementSibling .getElementsByClassName("close-collapsible")[0];

    collapsible.addEventListener("click", () => {
      closeCollapsible(collapsible);
    });

    collapsibleCloser.addEventListener("click", () => {
      closeCollapsible(collapsible);
    });
  }
}

setupCollapsibles();