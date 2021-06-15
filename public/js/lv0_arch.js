/*window.googleDocCallback = function () { return true; };
let nu;
let num;
let cate;
function callGas(m){
    nu = document.querySelector('#getNum').value;
    num = parseInt(nu) + 1;
    cate = document.querySelector('#getCate').value;
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxTfABwbU6aGDUnXc66Xe5fhIY5ykHKU8ItZPek_4IOH3qhkNDcbt0hiATTwe_7iYxCSw/exec?callback=googleDocCallback",
        data: {
            "method":m,
            "num":num,
            "cate":cate
        },
        success: function(response) {
            if (m == "read"){
                console.log(response);
                console.log(m);
            }
            else if(m == "write"){
                console.log(m);
            }
        }
    })
}
function readGas(){
    callGas("read");
}
function writeGas(){
    callGas("write");
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}*/

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
 }
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
    background(223,223,223);
    planets.forEach(p => {
        p.drawPlanet();
        //p.drawShine();
        //p.updateShine();
    });
    //image(shineImg, 0, 0);
    image(planetImg, 0, 0);}


//設定光暈物件
function goEnd(){
    console.log('end');
}*/