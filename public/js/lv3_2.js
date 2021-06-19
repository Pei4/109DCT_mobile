window.googleDocCallback = function () { return true; };
//初始設定
let id = parseInt(localStorage.getItem('id'));
let iosList = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
let resStr;
let isDown = false;

setTimeout(()=>{
    runVid();
    callPlayer();
},1);

document.querySelectorAll('#view,#shotCanvas,#prepare').addEventListener('touchmove', function (event) {
    event.preventDefault();
}, {
    passive: false
});

function callPlayer(){
    $.ajax({
        type: "get",
        async: false,
        url: "https://script.google.com/macros/s/AKfycbzzGBNH-cmfYl_TCnqYRarZN-1M8pLOTzbKxQr8QzzK3UIqacmeJisiydb5mS8-4s9DLA/exec?callback=googleDocCallback",
        data: {
            "id":id+1,
            "time":-1
        },
        success: function(response) {
            resStr = response.toString();
        }
    });
}

function down() {
    isDown = true;
    console.log('down');
}

function over(event) {
    if (!isDown) return;
    let transX = event.touches[0].clientX/window.innerWidth*100-5;
    let transY = event.touches[0].clientY/window.innerHeight*100-25;
    document.getElementById('planet0').style.transform = `translate(${transX}vw,${transY}vh)`;
    //console.log(`${event.touches[0].clientX/window.innerWidth},${event.touches[0].clientY/window.innerHeight}`);
}

function up(){
    isDown = false;
    console.log('up');
}
/*const move = document.querySelector('#planet0');
move.addEventListener('mousedown', down);
move.addEventListener('mousemove', over);
move.addEventListener('mouseup', up);*/



//截圖（拍照）
/*function screenshot(){
    //影片比例
    context.fillRect(0, 0, w, h);
    context.drawImage(vid, 0, 0, w, h);
    html2canvas(document.getElementById('capture')).then(function(canvas) {
        if(iosList.includes(navigator.platform)==true|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)==true){
            let imageURL = canvas.toDataURL();
            let img = document.getElementById('screenShotImg');
            img.crossOrigin = "Anonymous";
            img.id = "getshot";
            img.src = imageURL;
            document.getElementById('capture').appendChild(img);
        }
        else {
            document.getElementById('capture').appendChild(canvas);
            let a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'photo.jpg';
            a.click();
        }
    });*/

 /*下載
    let a = document.createElement("a");
    a.href = getshot.src;
    a.download = "workout_log.png";
    a.click();
    document.getElementById('capture').removeChild(img);*/


