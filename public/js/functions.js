let images = new Array();

function preload() {
    for (let i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
        enableSth('dialog');
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
    '我好像該回去了...',  //9-
    '其實我是新生的小星球',  //10-
    '要在某處遊歷之後',  //11-
    '才能回到宇宙的行列',  //12-
    '成為一顆獨立的星球',  //13-
    '這段日子',  //14-
    '謝謝你的陪伴！',  //15-
    '在回去之前\n想和你留下最後的回憶'];  //16-
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
    '......' //9-
];
let planetCont = [4,8,13,14,17,18,19,21];
let meCont = [1,2,5,6,9,11,15,22];

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
    localStorage.setItem('id', id.toString());
    location.href=`http://localhost:63342/109DCT_mobile/public/html/${url}.html`;
}

function dialogControl(){
    checkpoint ++;
    console.log(checkpoint);
    if(checkpoint == 1){  //飲料關
        showSth('lv1Btn');
        disableSth('dialog');
        callGas('add','',getId);
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
        showSth('mask');
        addClass('mask','shine');
        setTimeout(()=>{
            changeAnimSrc('hand','planet_sadsmile_2');
            addClass('hand','planetShine');
            meDialogNum ++;
            htmlContent('me',meDialogArray[meDialogNum]);
            showSth('me');
            hideSth('planet');
        },1200);
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