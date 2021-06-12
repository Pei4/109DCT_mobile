window.googleDocCallback = function () { return true; };
//初始設定
let id = parseInt(localStorage.getItem('id'));
let iosList = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
let letterList = [
    '樸實自然','單純可愛','活潑熱情', //A-0 B-1 C-2
    '享受豐富趣味的生活','顧及周遭人的感受','把善意回饋給世界',  //1-3 2-4 3-5
    '知足且樂觀','溫柔且堅定','勇敢且積極'  //1-6 2-7 3-8
]
let resStr;
let resArray;

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
            decideArray(response);
        }
    });
}

function decideArray(response){
    resStr = response.toString();
    resArray = resStr.split('');
    document.getElementById('photo').src = `../material/${resStr}.png`;
    document.getElementById('photo2').src = `../material/${resStr}.png`;
    document.getElementById('downloadBtn').href = `../material/${resStr}.png`;
    preload(`../material/${response.toString()}.png`);
    document.getElementById('a1').innerHTML = `跟你相處的時間雖然不長，但我能感覺到：你是個${letterList[resArray[0].charCodeAt(0)-65]}的好人，而且你很懂得${letterList[parseInt(resArray[1])+2]}。`;
    document.getElementById('a2').innerHTML = `即使未來遭遇困難，你也一定能${letterList[parseInt(resArray[2])+5]}地前進。`;
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
    },1000)
}