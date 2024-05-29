import { Howl } from "howler";

export const soundLeft = new Howl({
  src: "https://firebasestorage.googleapis.com/v0/b/emdr-tappers.appspot.com/o/challice_left.wav?alt=media&token=fcc0c7e9-e46f-4d68-88a8-f182f3f3a334",
  autoplay: false,
  loop: false,
  volume: 0.8,

  onend: function () {
    console.log("Finished playing");
  },
});

export const soundRight = new Howl({
  src: "https://firebasestorage.googleapis.com/v0/b/emdr-tappers.appspot.com/o/challice_right.wav?alt=media&token=c715d5a4-cbcc-4b40-8e39-fa3c8a0d09ea",
  autoplay: false,
  loop: false,
  volume: 0.8,

  onend: function () {
    console.log("Finished playing");
  },
});

// export const playSound = () => {
//   sound.play();
// };

// -1.0 left, 1.0 right
export const playInLeftEar = () => {
  // sound.stereo(-1);

  soundLeft.play();
};

export const playInRightEar = () => {
  soundRight.play();
};
