window.googleDocCallback = function () { return true; };
const planets = [];

setTimeout(()=>{
    updatePlanets();
    preload(
        '../material/3.png',
        '../material/1.png',
        '../material/2.png'
    )
    localStorage.clear();
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
}