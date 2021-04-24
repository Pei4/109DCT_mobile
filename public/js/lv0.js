window.googleDocCallback = function () { return true; };
const planets = [];

//呼叫 Google Apps Script
function updatePlanets(){
    //nu = document.querySelector('#getNum').value;
    //num = parseInt(nu) + 1;
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxtQIAYMvh3d6SK_ya-jK0RIBpWmzTbwMmeGhaPUuQ1U-DCQPDqePs_6yNuVoXOElxOaQ/exec?callback=googleDocCallback",
        success: function(response) {
            planets.length = 0;
            let responseString = response.split(",");
            responseString.forEach(i => {
                planets.push(new Planet(i.charAt(2),i.charAt(4)));
            });
            console.log(planets);
        }
    })
}

//畫圖囉
function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}
function draw(){
    background(46,58,81);
    planets.forEach(p => {
        p.draw(p.colorString);
    });

}
//設定星球物件
class Planet{
    constructor(color,shine) {
        this.pos = createVector(random(width), random(height));
        this.size = 5;
        this.color = color;
        if (color == 1){
            this.colorString = "rgb(219,26,26)";
        }
        else if(color == 2){
            this.colorString = "rgb(255,255,224)";
        }
        else if(color == 3){
            this.colorString = "rgb(0,123,184)";
        }
        this.shine = shine;
    }
    draw(color){
        noStroke();
        fill(color);
        circle(this.pos.x,this.pos.y,this.size);
    };
}

//設定光暈物件