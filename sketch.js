//colors
let r = 1;
let g = 1;
let b = 1;

//letters
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
];

//title font
let drukWideFont;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  drukWideFont = loadFont("DrukWide-Medium.otf");
  noStroke();
}

function draw() {
  background(255);
  //title
  push();
  textSize(15);
  textAlign(CENTER);
  fill(0);
  textFont(drukWideFont);
  text("ORDINE E DISORDINE", windowWidth / 2, 30);
  pop();
  // grid;
  for (let x = 19; x < windowWidth - 25; x += 50) {
    for (let y = 50; y <= windowHeight - 25; y += 50) {
      //random colors for the rectangle
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
      fill(r, g, b);
      rect(x, y, 50, 50);
      //random colors for the letter
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
      fill(r, g, b);
      let myLetter = random(alphabet);
      //letter graphic adjustments
      textAlign(CENTER);
      textFont("Helvetica Neue Bold");
      textSize(65);
      text(myLetter, x + 25, y + 48);
    }
  }
}
