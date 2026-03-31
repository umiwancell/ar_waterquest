let tappedCount = 0;

AFRAME.registerComponent('clickable', {
  init: function () {
    this.el.addEventListener('click', () => {

      if (this.el.getAttribute("visible") === false) return;

      this.el.setAttribute("visible", false);
      tappedCount++;

      if (tappedCount === 3) {
        document.querySelector("#infoCard")
          .setAttribute("visible", true);
      }
    });
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {

  tappedCount = 0;

  document.querySelectorAll(".animal").forEach(el => {
    el.setAttribute("visible", true);
  });

  document.querySelector("#infoCard")
    .setAttribute("visible", false);
});

document.getElementById("startBtn").addEventListener("click", async () => {
  const sceneEl = document.querySelector("a-scene");
  await sceneEl.systems["mindar-image-system"].start();
});
