let tappedCount = 0;

// タップで動物消す
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

// 画面タップでカメラ起動（超重要）
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", async () => {
  const sceneEl = document.querySelector("a-scene");

  try {
    await sceneEl.systems["mindar-image-system"].start();
    overlay.style.display = "none"; // オーバーレイ消す
  } catch (e) {
    alert("カメラ起動エラー: " + e);
  }
}, { once: true });

// リセット
const resetBtn = document.getElementById("resetBtn");

if (resetBtn) {
  resetBtn.addEventListener("click", () => {

    tappedCount = 0;

    document.querySelectorAll(".animal").forEach(el => {
      el.setAttribute("visible", true);
    });

    document.querySelector("#infoCard")
      .setAttribute("visible", false);
  });
}
