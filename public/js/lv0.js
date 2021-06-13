window.googleDocCallback = function () { return true; };
const planets = [];
let shineImg,planetImg,planetR,planetW,planetB;
let btn;

setTimeout(()=>{
    updatePlanets();
    preload(
        '../material/3.png',
        '../material/1.png',
        '../material/2.png'
    )
},1);

//呼叫 Google Apps Script
function updatePlanets(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbzvIkmSJkD8VmKg0plwFDD8PJX_2mwOvDqtHQnY1xI5oCDJPektLG6nUSY19MPsS4Q7tg/exec?callback=googleDocCallback",
        success: function(response) {
            planets.length = 0;
            let responseString = response.toString().split(",");
            responseString.forEach(i => {  //顏色 x 光暈 x X軸 x Y軸
                console.log(i);
                planets.push(new Planet(i.split('x')[0],i.split('x')[1],i.split('x')[2],i.split('x')[3]));
            });
            planets.forEach(p=>{
                p.createPlanet();
            })
        }
    })
}

//設定星球物件
class Planet{
    constructor(color,shine, x, y) { //顏色 x 光暈 x X軸 x Y軸
        this.x = x;
        this.y = y;
        this.shine = shine;
        this.color = color;
    }
    createPlanet(){
        let planet = document.createElement("div");
        planet.style.backgroundImage = `url(../material/${this.color}.png)`;
        planet.className = `size${this.shine}`;
        planet.style.left = `${this.x}vw`;
        planet.style.top = `${this.y}vh`;
        planet.style.transform = 'translate(0,0)';
        document.body.appendChild(planet);
    }
    /*drawShine(){
        if(this.shine != 0){
            shineImg.noFill();
            shineImg.strokeWeight(1);
            shineImg.stroke(`rgba(255,255,255,${this.fade})`);
            shineImg.circle(this.updatePos.x+13,this.updatePos.y+13,this.size);
            console.log('draw');
        }
    }
    drawPlanet(){
        image(this.colorString,this.pos.x,this.pos.y,this.size,this.size)
    }
    updateShine(){
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
/*
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
    background(223,223,223);
    planets.forEach(p => {
        p.drawPlanet();
        //p.drawShine();
        //p.updateShine();
    });
    //image(shineImg, 0, 0);
    image(planetImg, 0, 0);
}


//設定光暈物件
function goEnd(){
    console.log('end');
}*/