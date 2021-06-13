let images = new Array();

setTimeout(()=>{
    checkDevice();
},1);

function checkDevice(){
    if(screen.width > 400 || screen.height > 850){
        showSth('screen');
    }
}

let planetDialogArray =[
    '我肚子有點餓.....', //0-4
    '謝謝你找東西給我吃！', //1-8
    '欸！那邊好香喔！！',  //2-9
    '有東西在發光耶',  //3-13
    '我們過去看看吧',  //4-14
    '哇～好多漂亮的花喔',  //5-17
    '可以挑一朵適合的給我嗎',  //6-18
    '我好喜歡～謝謝你！',  //7-19
    '哎呀...我好像該回去了...',  //8-21
    '其實我是新生的小星球',  //9-24
    '要在某處遊歷之後',  //10-26
    '才能回到宇宙的行列',  //11-27
    '成為一顆獨立的星球',  //12-28
    '這段日子',  //13-30
    '謝謝你的陪伴！',  //14-31
    '旅程已經結束了呢...',  //15-35
    '不知道你願不願意...',  //16-36
    '和我分享這趟旅程的心得呢！'  //17-37
];
let meDialogArray =[
    '是不是該找點喝的東西給它呢...',  //0-1
    '要喝什麼好呢？',  //1-2
    '找點食物給它吃吧',  //2-5
    '要吃什麼好呢？',  //3-6
    '所以你是從哪裡...',  //4-9
    '這傢伙完全無視我呢...',  //5-11
    '不要亂跑啊！！',  //6-15
    '剛剛發生了...什麼事？',  //7-20(自動)
    '你要回去哪裡？！', //8-22
    '......', //9-29
    '啊......已經回去了嗎', //10-32（自動）
    '不曉得是哪顆發亮的星星呢......' //11-33
];
let planetCont = [4,8,13,14,17,18,19,21,24,26,27,28,30,31,35,36,37];
let meCont = [1,2,5,6,9,11,15,22,29,32,33];

function showSth(sth){
    document.getElementById(sth).style.display = 'block';
}
function hideSth(sth){
    document.getElementById(sth).style.display = 'none';
}
function disableSth(sth){
    document.getElementById(sth).style.pointerEvents = 'none';
}
function enableSth(sth){
    document.getElementById(sth).style.pointerEvents = 'auto';
}
function htmlContent(id,what){
    document.getElementById(id).innerHTML = what;
}
function changeSource(id,what){
    document.getElementById(id).src = what;
}
function changeAnimSrc(id,what){
    document.getElementById(id).style.backgroundImage = `url("../material/${what}.png")`;
}
function addClass(sth, what){
    document.getElementById(sth).className = what;
}
function removeClass(sth){
    document.getElementById(sth).className = '';
}
function goStar(state){
    showSth('flyStar');
    addClass('flyStar','starFly');
    addClass('hand',state);
}
function stopStar(starUrl){
    hideSth('flyStar');
    removeClass('flyStar');
    removeClass('hand');
    changeSource('starImg',starUrl);
}
function reUrl(url){
    //更新 localStorage
    location.href=`https://pei4.github.io/109DCT_mobile/public/html/${url}.html`;
}
function goMask(){
    showSth('mask');
    addClass('mask','shine');
    setTimeout(()=>{
        meDialogNum++;
        htmlContent('me', meDialogArray[meDialogNum]);
        showSth('dialog');
        showSth('next');
        enableSth('dialog');
        showSth('me');
        hideSth('planet');
    },1000);
    setTimeout(()=> {
        hideSth('mask');
    },2000);
}
function preload() {
    for (let i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

function dialogControl(){
    checkpoint ++;
    console.log(checkpoint);
    if(checkpoint == 1){  //飲料關
        showSth('lv1Btn');
        disableSth('dialog');
        if(localStorage.getItem('id') === null){
            lv1Gas('add','',getId);
        }
        else {
            id = parseInt(localStorage.getItem('id'));
            lv1Gas('add');
        }
    }
    if(checkpoint == 3){  //選完開始喝
        showSth('main');
        hideSth('lv1Btn');
        hideSth('dialog');
    }
    if(checkpoint == 4){  //喝完飲料換食物關
        showSth('dialog');
        enableSth('dialog');
        changeAnimSrc('hand','handplanet_3');
    }
    if(checkpoint == 5){  //食物關
        showSth('lv2Btn');
        disableSth('dialog');
    }
    if(checkpoint == 7){  //選完開始吃
        showSth('main');
        hideSth('lv2Btn');
        hideSth('dialog');
    }
    if(checkpoint == 8){  //吃完進過場
        showSth('dialog');
        enableSth('dialog');
        changeAnimSrc('hand','planet_smile');
        document.getElementById('hand').style.height = '30vh';
        document.getElementById('hand').style.bottom = '28vh';
    }
    if(checkpoint == 9){
        hideSth('next');
        setTimeout(()=>{
            checkpoint ++;
            planetDialogNum ++;
            htmlContent('planet',planetDialogArray[planetDialogNum]);
            showSth('planet');
            changeAnimSrc('hand','planet_smell');
            hideSth('me');
            showSth('next');
            setTimeout(()=>{
                hideSth('hand');
            },2000)
        },1000);
        setTimeout(()=>addClass('hand','planetMove1'),1300);
    }
    if(checkpoint == 12){
        reUrl('lv2_1');
    }
    if(checkpoint == 14){
        disableSth('dialog');
        changeAnimSrc('hand','planet_run');
        setTimeout(()=>{
            changeAnimSrc('hand','planet_runaway');
            addClass('hand','planetMove2');
        },1000)
        setTimeout(()=>{
            hideSth('hand');
            enableSth('dialog');
            showSth('next');
        },2300)
    }
    if(checkpoint == 16){
        hideSth('dialog');
        document.body.className = '';
        showSth('instruct');
        showSth('readBtn');
    }
    if(checkpoint == 17){
        showSth('dialog');
        enableSth('dialog');
        removeClass('hand');
        addClass('hand','planetReset');
        showSth('hand');
        changeAnimSrc('hand','planet_watereye');
        hideSth('finish');
    }
    if(checkpoint == 18){
        disableSth('dialog');
        enableSmall();
    }
    if (checkpoint == 19){
        enableSth('dialog');
    }
    if (checkpoint == 20){
        goMask();
        setTimeout(()=>{
            changeAnimSrc('hand','planet_sadsmile_2');
            addClass('hand','planetShine');
            hideSth('star');
        },1200);
    }
    if (checkpoint == 23){
        reUrl('lv3_1');
    }
    if (checkpoint > 25 && checkpoint < 28){
        enableSth('dialog');
        document.body.style.backgroundImage = `url("../material/mbg_story${checkpoint-24}.png")`;
    }
    if (checkpoint == 28){
        document.body.style.backgroundImage = `url("../material/mbg_story3.png")`;
    }
    if (checkpoint == 29){
        document.body.style.backgroundImage = `url("../material/mbg_grass_6.png")`;
        document.body.className = "";
        changeAnimSrc('hand','planet_smile_2');
    }
    if (checkpoint == 31){
        changeAnimSrc('hand','planet_bigSmile');
    }
    if (checkpoint == 32){
        hideSth('dialog');
        disableSth('dialog');
        showSth('instruct');
        showSth('trackBtn');
    }
    if (checkpoint == 34){
        goMask();
        setTimeout(()=>{
            reUrl('lv4');
        },1000)
    }
    if(checkpoint == 36){
        preload('../material/planet_water_2.png');
    }
    if (checkpoint == 37){
        changeAnimSrc('hand','planet_water_2');
    }
    if (checkpoint == 38){
        hideSth('dialog');
        showSth('toEnd');
        showSth('cake');
    }
    if(meCont.includes(checkpoint)){
        meDialogNum ++;
        htmlContent('me',meDialogArray[meDialogNum]);
        showSth('me');
        hideSth('planet');
    }
    else if(planetCont.includes(checkpoint)){
        planetDialogNum ++;
        htmlContent('planet',planetDialogArray[planetDialogNum]);
        showSth('planet');
        hideSth('me');
    }
    if(checkpoint == 9){
        hideSth('next');
    }
    else if(document.getElementById('dialog').style.pointerEvents == 'auto'){
        showSth('next');
    }
    else{
        hideSth('next');
    }
}