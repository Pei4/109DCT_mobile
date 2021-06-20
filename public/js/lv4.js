window.googleDocCallback = function () { return true; };
//初始設定
let id = parseInt(localStorage.getItem('id'));
let iosList = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
let letterList = [
    '樸實自然','單純可愛','活潑熱情', //A-0 B-1 C-2
    '享受豐富趣味的生活','顧及周遭人的感受','把善意回饋給世界',  //1-3 2-4 3-5
    '知足且樂觀','溫柔且堅定','勇敢且積極'   //1-6 2-7 3-8
]
let resStr;
let resArray;
let done = 0;
let open = 0;

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
        url: "https://script.google.com/macros/s/AKfycbzzGBNH-cmfYl_TCnqYRarZN-1M8pLOTzbKxQr8QzzK3UIqacmeJisiydb5mS8-4s9DLA/exec?callback=googleDocCallback",
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
    document.getElementById('a1').innerHTML = `跟你相處的時間雖然不長，但我能感覺到你是個${letterList[resArray[0].charCodeAt(0)-65]}的好人，而且你很懂得${letterList[parseInt(resArray[1])+2]}。`;
    document.getElementById('a2').innerHTML = `即使未來遭遇困難，你也一定能${letterList[parseInt(resArray[2])+5]}地前進。`;
}

function openLetter(){
    changeSource('letter','../material/letter_after.png');
    document.getElementById('letter').style.transform = 'translate(0,-5%)';
    hideSth('notice');
    setTimeout(()=>{
        callPlayer();
    },900);
    setTimeout(()=>{
        addClass('title','shine2');
        addClass('letter','shine2');
        setTimeout(()=>{
            hideSth('title');
            hideSth('letter');
            addClass('word','show');
            addClass('photo','show');
            addClass('talk','show');
            addClass('endBtn','showBtn');
            addClass('downloadBtn','showBtn');
            showSth('word');
            showSth('photo');
            showSth('talk');
            showSth('endBtn');
            showSth('downloadBtn');
            setTimeout(()=>{
                addClass('photo','jump');
                removeClass('talk');
            },1000);
        },500)
    },1000);
}
function browse(){
    showSth('photoMask');
    showSth('eggNotice');
    showSth('eggBtn');
    removeClass('photo');
    document.getElementById('talk').style.visibility = 'hidden';
    if(done == 1){
        hideSth('universeBtn');
    }
}
function back(){
    if (open == 0){
        hideSth('photoMask');
        hideSth('iosNotice');
        hideSth('universeBtn');
        hideSth('eggNotice');
        hideSth('eggBtn');
        if(done == 1){
            showSth('universeBtn');
        }
    }
    else if(open == 1){
        hideSth('egg');
        open = 0;
    }
}
function goiOS(){
    showSth('photoMask');
    showSth('iosNotice');
    showSth('universeBtn');
}
function goDownload(){
    done = 1;
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
function goEgg(){
    open = 1;
    showSth('egg');
    document.getElementById('egg').setAttribute('src','lv3_2.html');
    window.addEventListener('message', function(e) {
        console.log(e.data);
        if(e.data == 'open'){
            showSth('back');
        }
        else if(e.data == 'close'){
            hideSth('back');
        }
    }, false);
}