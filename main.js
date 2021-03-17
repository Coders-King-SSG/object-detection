var tab = "bedroom";
var canvas;

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
  img5 = loadImage("kitchen.png");
}

function setup() {
  canvas = createCanvas(600, 380);
  canvas.parent("canvas_div");
}

function fillup() {
  
    noFill();
    if(tab != 'kitchen') {

    stroke('red');
    } else {
      stroke('#fff')
    }
    strokeWeight(3)
    textSize(20)
}

function textfillup() {
  
    strokeWeight(1)
    if (tab!="kitchen") {
      
    fill('red');
    } else {
      fill('#fff')
    }
}

function draw() {
  if (tab == "bedroom") {
    image(img1, 0, 0, 600, 380);
    fillup();
    rect(125,81,180,150);
    textfillup();
    text('Window',115,75);
    fillup();
    rect(33.3,110.3, 90, 220);
    textfillup();
    text('Mirror', 30, 105)
    fillup();
    rect(321.7,169.1,40,50)
    textfillup();
    text('Lamp', 316.7,164.1);
    fillup();
    rect(212.8,188.4,300,150)
    textfillup();
    text('Bed', 447.8,183.4)
    fillup();
    rect(519.3,190.4,30,50)
    textfillup();
    text('Vase', 510.3,190.4)
    
    fillup();
    rect(396.3,104.3,100,50)
    textfillup();
    textSize(15)
    text('Photo Frames', 390.3,100.3)
  } /*garden*/else if (tab == "garden") {
    image(img4, 0, 0, 600, 380);
    
    fillup();
    rect(156.3,174.2,75,150);
    textfillup();
    text('Spade',156.3,165.2);
    fillup();
    rect(432.6,210.7, 60, 70);
    textfillup();
    text('Bucket',432.6,200.7)
    fillup();
    rect(13.1,289.7,130,70)
    textfillup();
    text('Can', 35.1,283.7);
    fillup();
    rect(196.6,303.9,400,100)
    textfillup();
    text('Bedding', 246.6,293.9)
    fillup();
    rect(317.6,12.0,250,150)
    textfillup();
    text('House', 320.6,30)
    
    fillup();
    rect(12.1,10.0,120,90)
    textfillup();
    text('Tree',16.1,27.0)
  } else if (tab == "living_room") {
    image(img3, 0, 0, 600, 380);
    
    fillup();
    rect(448.5,40.6,120,60);
    textfillup();
    text('Shelf',448.5,40.6 - 5);
    fillup();
    rect(476.8,152.4, 70, 75);
    textfillup();
    text('Lamp',476.8,152.4 - 5)
    fillup();
    rect(135.4,155.5,350,170)
    textfillup();
    text('Sofa', 135.4,155.5 - 5);
    fillup();
    rect(16.2,94.5,130,160)
    textfillup();
    text('Vase', 16.2,94.5 - 5)
    fillup();
    rect(176.8,37.6,200,70)
    textfillup();
    text('Photo Frames', 176.8,37.6 - 5)
  } else if (tab == "kitchen") {
    image(img5, 0, 0, 600, 380);
    
    fillup();
    rect(39.4,110.8,125,180);
    textfillup();
    text('Fridge',39.4,110.8 - 5);
    fillup();
    stroke('red')
    noFill();
    rect(402.6,210.7, 130, 80);
    textfillup();
    stroke('red')
    fill('red')
    text('Oven',402.6+5,200.7 + 30)
    fillup();
    rect(177.8,218.4,230,70)
    textfillup();
    text('Shelf', 177.8,218.4 - 5);
    fillup();
    stroke('red')
    noFill()
    rect(401.0,195.1,100,20)
    textfillup();
    text('Stove', 401.0,195.1 - 5)
    fillup();
    rect(519.2,182.9,50,30)
    textfillup();
    text('Toaster', 519.2,182.9 - 5)
    fillup();
    rect(399.0,128.0,130,30)
    textfillup();
    text('Chimney', 399.0,128.0 - 5);
    fillup();
    rect(162.6,1.0,60,100)
    textfillup();
    text('Lamp', 166.6,1.0 + 85)
    fillup();
    rect(296.0,175.8,70,50)
    textfillup();
    text('Basin', 296.0,175.8 - 5)
  } else if (tab == "classroom") {
    image(img2, 0, 0, 600, 380);
    
    fillup();
    rect(253.5,14.2,320,180);
    textfillup();
    text('Blackboard',253.5,14.2 - 5);
    fillup();
    rect(56.6,14.2, 180, 160);
    textfillup();
    text('World Map',56.6,14.2 - 5)
    fillup();
    rect(21.2,230.6,180,145)
    textfillup();
    text('Desk', 21.2,230.6 - 5);
    fillup();
    rect(212.2,230.6,180,145)
    textfillup();
    text('Desk', 212.2,230.6 - 5)
    fillup();
    rect(412.2,230.6,180,145)
    textfillup();
    text('Desk', 412.2,230.6 - 5)
  }
}

function doubleClicked() {
  console.log(mouseX.toFixed(1) + ',' + mouseY.toFixed(1));
}
