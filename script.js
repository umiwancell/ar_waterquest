document.getElementById("start").addEventListener("click", async () => {

  const scene = document.querySelector("a-scene");

  // scene読み込み待つ
  if (!scene.hasLoaded) {
    await new Promise(resolve => {
      scene.addEventListener("loaded", resolve);
    });
  }

  // mindar準備待つ
  let mindar;
  while (!mindar) {
    mindar = scene.systems["mindar-image-system"];
    await new Promise(r => setTimeout(r, 100));
  }

  try {
    await mindar.start();
    document.getElementById("start").style.display = "none";
  } catch (e) {
    alert("カメラ起動できない：" + e);
  }

}, { once: true });
