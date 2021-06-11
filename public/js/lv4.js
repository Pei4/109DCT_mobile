window.googleDocCallback = function () { return true; };
//初始設定
let id = parseInt(localStorage.getItem('id'));
let iosList = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];

window.onload = function (){
    preload('../material/letter_after.png')
}

setTimeout(()=>{
    hideSth('mask2');
    document.getElementById('downloadBtn').addEventListener('mousedown',()=>{
        if(iosList.includes(navigator.platform)==true|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)==true){
            goiOS();
        }
        else {goDownload();}
    });
},1000);

function callPlayer(){
    $.ajax({
        type: "get",
        async: false,
        url: "https://script.google.com/macros/s/AKfycbw3hxg6B4nHICo42o3pOYCbDHneZxYLG0Q01_KjYqJoUUjhSOrlHJa4PLlTki3VRk7JPw/exec?callback=googleDocCallback",
        data: {
            "id":id+1,
            "time":-1
        },
        success: function(response) {
            document.getElementById('photo').src = `../material/${response.toString()}.png`;
            document.getElementById('photo2').src = `../material/${response.toString()}.png`;
            document.getElementById('downloadBtn').href = `../material/${response.toString()}.png`;
            preload(`../material/${response.toString()}.png`);
        }
    });
}

function openLetter(){
    changeSource('letter','../material/letter_after.png');
    document.getElementById('letter').style.transform = 'translate(0,-10%)';
    hideSth('notice');
    setTimeout(()=>{
        callPlayer();
    },10);
    setTimeout(()=>{
        addClass('title','shine2');
        addClass('letter','shine2');
        addClass('word','show');
        addClass('photo','show');
        addClass('endBtn','showBtn');
        addClass('downloadBtn','showBtn');
        showSth('word');
        showSth('photo');
        showSth('endBtn');
        showSth('downloadBtn');
    },1000);
    setTimeout(()=>{
        hideSth('title');
        hideSth('letter');
    },2000);
}
function browse(){
    showSth('photoMask');
}
function back(){
    hideSth('photoMask');
    hideSth('iosNotice');
    hideSth('universeBtn');
    hideSth('endBtn2');
}
function goiOS(){
    showSth('photoMask');
    showSth('iosNotice');
    showSth('universeBtn');
}
function goDownload(){
    hideSth('endBtn');
    hideSth('downloadBtn');
    showSth('universeBtn');
    showSth('doneDownload');
    addClass('doneDownload','show');
    setTimeout(()=>{
        addClass('doneDownload','shine2');
        setTimeout(()=>{
            hideSth('doneDownload');
        },1000)
    },1000)}