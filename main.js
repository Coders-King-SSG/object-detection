var tab = "bedroom";
var canvas;
var array = ["bedroom", "garden", "living_room", "street", "xmas"];
var objects;
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};

function preload() {
  img1 = loadImage("bedroom.jpg");
  img2 = loadImage("classroom.jpg");
  img3 = loadImage("living.jpg");
  img4 = loadImage("garden.jpg");
  img5 = loadImage("kitchen.jpg");
}

function setup() {
  canvas = createCanvas(600, 380);
  canvas.parent("canvas_div");
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}


function draw() {
  if (tab == "bedroom") {
    image(img1, 0,0,600, 380)
    objectDetector.detect(img1, gotResults)
  } else if (tab == "kitchen") {
    image(img5, 0,0,600, 380)
    objectDetector.detect(img5, gotResults)
  } else if (tab == "classroom") {
    image(img2, 0,0,600, 380)
    objectDetector.detect(img2, gotResults)
  } else if(tab == "garden") {
    image(img4, 0,0,600, 380)
    objectDetector.detect(img4, gotResults)
  }else if(tab == "living_room") {
    image(img3, 0,0,600, 380)
    objectDetector.detect(img3, gotResults)
  }
}

function gotResults(error, results) {
  if(error){
    console.error(error);
  } else {
    console.log(results);
    document.getElementById('number').innerHTML = results.length;
    for (let i = 0; i < results.length; i++) {
      noFill();
      stroke('lightcoral')
      strokeWeight(3);
      obj = results[i].label;
      obje = obj.charAt(0).toUpperCase() + obj.slice(1);
      wid = results[i].width;
      hgt = results[i].height;
      xpos = results[i].x;
      ypos = results[i].y;
      acr = results[i].confidence;
      textSize(18);
      textFont('Arial');
      rect(xpos, ypos, wid, hgt);
      fill('lightcoral')
      strokeWeight(1)
      text(obje, xpos, ypos-5);
    }
  }
}

function modelLoaded() {
  console.log('Model initialized.');
  document.getElementById('status').innerHTML = 'Model is loaded.';
}

function doubleClicked() {
  console.log(mouseX.toFixed(1) + ',' + mouseY.toFixed(1));
}
