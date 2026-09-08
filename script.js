function createStars() {
  const numOfStars = 100;

  for (let i = 0; i < numOfStars; i++) {
    setTimeout(() => {
      let eachStar = $("<div></div>");
      const size = Math.ceil(Math.random() * 3);
      const innerGlow = size * 1.5;
      const outerGlow = size * 3;
      eachStar
        .addClass("star")
        .width(size)
        .height(size)
        .css({
          boxShadow: `
            0 0 ${innerGlow}px rgba(255, 255, 255, 0.8),
            0 0 ${outerGlow}px rgba(255, 255, 255, 0.25)
          `,
          top: `${Math.floor(Math.random() * 100)}vh`,
          left: `${Math.floor(Math.random() * 100)}vw`,
          animationDuration: `${Math.ceil(Math.random() * 7)}s`,
        });

      $("body").append(eachStar);
    }, i * 25);
  }
}
const container1 = document.querySelector(".bigFireworks");
const container2 = document.querySelector(".smallFireworks");
const container3 = document.querySelector(".mediumFireworks");
const bigFireworks = new Fireworks.default(container1, {
  particles: 200,
  intensity: 8.7,
  friction: 0.97,
  acceleration: 1,
  sound: {
    enabled: true,
    files: [
      "./assets/sounds/explosion0.mp3",
      "./assets/sounds/explosion1.mp3",
      "./assets/sounds/explosion2.mp3",
    ],
    volume: {
      min: 70,
      max: 90,
    },
  },
  lineWidth: {
    explosion: {
      min: 4.35,
      max: 5.35,
    },
    trace: {
      min: 1.5,
      max: 3.06,
    },
  },
});
const smallFireworks = new Fireworks.default(container2, {
  particles: 15,
  intensity: 20,
  friction: 0.97,
  acceleration: 1,
  gravity: 1.75,
  sound: {
    enabled: true,
    files: [
      "./assets/sounds/explosion0.mp3",
      "./assets/sounds/explosion1.mp3",
      "./assets/sounds/explosion2.mp3",
    ],
    volume: {
      min: 20,
      max: 40,
    },
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 2,
    },
    trace: {
      min: 0.1,
      max: 0.15,
    },
  },
});
const mediumFireworks = new Fireworks.default(container3, {
  sound: {
    enabled: true,
    files: [
      "./assets/sounds/explosion0.mp3",
      "./assets/sounds/explosion1.mp3",
      "./assets/sounds/explosion2.mp3",
    ],
    volume: {
      min: 35,
      max: 65,
    },
  },
});
function fireworksSequence() {
  setTimeout(() => {
    smallFireworks.launch(4);
  }, 0);

  setTimeout(() => {
    smallFireworks.launch(3);
  }, 500);

  setTimeout(() => {
    smallFireworks.launch(4);
  }, 900);

  setTimeout(() => {
    mediumFireworks.launch(3);
  }, 1400);

  setTimeout(() => {
    smallFireworks.launch(5);
  }, 1900);

  setTimeout(() => {
    mediumFireworks.launch(3);
  }, 2300);

  setTimeout(() => {
    bigFireworks.launch(2);
  }, 3000);

  setTimeout(() => {
    smallFireworks.launch(5);
  }, 3700);

  setTimeout(() => {
    mediumFireworks.launch(4);
  }, 4100);

  setTimeout(() => {
    bigFireworks.launch(2);
  }, 4700);

  setTimeout(() => {
    smallFireworks.launch(6);
  }, 5400);

  setTimeout(() => {
    mediumFireworks.launch(4);
  }, 5700);

  setTimeout(() => {
    bigFireworks.launch(3);
  }, 6100);

  setTimeout(() => {
    smallFireworks.launch(8);
  }, 6500);
}
function hbdFireworks() {
  $("#hbdText").removeClass("hide").addClass("fireworks-text");
  $("#hbdParticle").addClass("particle-text");
}
function animationSeq() {
  const fireworksStartDelay = 2500;
  const hbdDelay = 1900;
  const fireworksDuration = 6500;

  createStars();
  setTimeout(() => {
    fireworksSequence();
  }, fireworksStartDelay);

  setTimeout(() => {
    hbdFireworks();
  }, fireworksStartDelay + hbdDelay);

  setTimeout(() => {
    fireworksSequence();
  }, fireworksStartDelay + fireworksDuration);
}

$(document).ready(function () {
  $("#play-btn").on("click", function () {
    $(this).fadeOut(350, function () {
      $(this).remove();
      animationSeq();
    });
  });
});
