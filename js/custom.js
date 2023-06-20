window.onload = function () {
  var i = 0;
  const tabImage = [
    "./images/WebP/Image pour Stop Motion/Red-Raven-Videographer.webp",
    "./images/WebP/Pourquoi Nous_/02-Dji-Mavic-3-Cine-Studio-Droneoperator.webp",
    "./images/WebP/Pourquoi Nous_/03-FollowFocus-Red-Raven-Ronin.webp",
    "./images/WebP/Pourquoi Nous_/04-VideoProduction-Red-Raven-Cinema-Promotion.webp",
    "./images/WebP/Pourquoi Nous_/05-Drone-Droneoperator-Waterfall-Dji.webp",
  ];
  document.getElementById(
    "imagechanger"
  ).style.backgroundImage = `url('${tabImage[i]}')`;

  function changeImage(side) {
    if (side == "right") {
      i = (i + 1) % tabImage.length;
    }
    if (side == "left") {
      i = (i - 1 + tabImage.length) % tabImage.length;
    }
    console.log(i);
    document.getElementById(
      "imagechanger"
    ).style.backgroundImage = `url('${tabImage[i]}')`;
  }

  let touchstartX = 0;
  let touchendX = 0;

  function checkDirection() {
    if (touchendX < touchstartX) changeImage("left");
    if (touchendX > touchstartX) changeImage("right");
  }


  // Add event listeners for each tab
  const elem2 = document.getElementById("clickimageleft");
  const elem = document.getElementById("clickimagright");

  if (elem) {
    elem.addEventListener("click", () => {
      changeImage("right");
    });
  }

  if (elem2) {
    elem2.addEventListener("click", () => {
      changeImage("left");
    });
  }

  const elem3 = document.getElementById("swipeimage");

  elem3.addEventListener("touchstart", (e) => {
    touchstartX = e.changedTouches[0].screenX;
  });

  elem3.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  });
};
