window.googleDocCallback = function () { return true; };
const planets = [];
let shineImg,planetImg,planetR,planetW,planetB;

//呼叫 Google Apps Script
function updatePlanets(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbw5jMnpWb8bCInqWOh_zWnGV9HDgJpM2k9dAj64ZwhGjaqDnW_EN61HIvF0PAS9SLmccQ/exec?callback=googleDocCallback",
        success: function(response) {
            planets.length = 0;
            let responseString = response.split(",");
            responseString.forEach(i => {
                planets.push(new Planet(i.charAt(2),i.charAt(4)));
            });
        }
    })
}

//畫圖囉
function preload(){
    planetR = loadImage('../material/planet_red.png');
    planetW = loadImage('../material/planet_white.png');
    planetB = loadImage('../material/planet_blue.png');
}
function setup(){
    frameRate(30);
    createCanvas(window.innerWidth,window.innerHeight);
    shineImg = createGraphics(window.innerWidth,window.innerHeight);
    planetImg = createGraphics(window.innerWidth,window.innerHeight);
}
function draw(){
    background(46,58,81);
    planets.forEach(p => {
        p.drawShine();
        p.drawPlanet();
        //p.updateShine();
    });
    image(shineImg, 0, 0);
    image(planetImg, 0, 0);
}
//設定星球物件
class Planet{
    constructor(color,shine) {
        this.pos = createVector(random(width), random(height));
        this.updatePos = this.pos;
        this.size = 6;
        this.color = color;
        if (color == 1){
            this.colorString = planetR;
        }
        else if(color == 2){
            this.colorString = planetW;
        }
        else if(color == 3){
            this.colorString = planetB;
        }
        this.shine = shine*3;
        this.fade = 1;
    }
    drawShine(){
        if(this.shine != 0){
            shineImg.noFill();
            shineImg.strokeWeight(1);
            shineImg.stroke(`rgba(255,255,255,${this.fade})`);
            shineImg.circle(this.updatePos.x+13,this.updatePos.y+13,this.size);
            console.log('draw');
        }
    }
    drawPlanet(){
        image(this.colorString,this.pos.x,this.pos.y)
    }
    /*updateShine(){
        if(this.size < this.shine){
            this.size = this.size + 3;
            this.updatePos.add(-3,-3);
            this.fade = this.fade -(3/this.shine);
        }
        else{
            this.size = 6;
            this.updatePos = this.pos;
            this.fade = 1;
        }
    }*/
}

//設定光暈物件
