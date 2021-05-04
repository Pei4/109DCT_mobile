let id = parseInt(localStorage.getItem('id'));
let checkpoint = parseInt(localStorage.getItem('checkPoint'));
let planetDialogNum = parseInt(localStorage.getItem('planetDialogNum'));
let meDialogNum = parseInt(localStorage.getItem('meDialogNum'));

let planetDialogArray =[
    '我...好餓', //0-3
    '我小星球啦',  //1-7
    '那邊好香喔！',  //2-8
    '有東西在發光耶',  //3-9
    '我們過去看看吧',  //4-10
    '哇~好多漂亮的花喔',  //5-11
    '可以挑一朵適合的給我嗎',  //6-12
    '我好喜歡~謝謝你！',  //7-13
    '風好大ㄛ',  //8-14
    '我好像該回去了...',  //9-17
    '其實我是新生的小星球',  //10-19
    '要在某處遊歷之後',  //11-20
    '才能回到宇宙的行列',  //12-21
    '成為一顆獨立的星球',  //13-22
    '這段日子......',  //14-23
    '謝謝你的陪伴！',  //15-24
    '在回去之前\n想和你留下最後的回憶'];  //16-25
let meDialogArray =[
    '是不是該找點喝的東西給它呢...',  //0-1
    '要喝什麼好呢？',  //1-2
    '找點食物給它吃吧',  //2-4
    '要吃什麼好呢？',  //3-5
    '你誰',  //4-7
    '唉呦好痛啊！哪來的垃圾？',  //5-16
    '該丟進哪個垃圾桶好呢？',  //6-17
    '你要回去哪裡？'  //7-19
];
let planetCont = [3,7,8,9,10,11,12,13,14,17,19,20,21,22,23,24,25];
let meCont = [1,2,4,5,7,16,17,19];

function showSth(sth){
    document.getElementById(sth).style.display = 'block';
}
function hideSth(sth){
    document.getElementById(sth).style.display = 'none';
}
function disableSth(sth){
    document.getElementById(sth).disabled = true;
}
function enableSth(sth){
    document.getElementById(sth).disabled = false;
}
function htmlContent(id,what){
    document.getElementById(id).innerHTML = what;
}
function changeSource(id,what){
    document.getElementById(id).src = what;
}

function dialogControl(){
    checkpoint ++;
    if(checkpoint == 1){
        showSth('lv1Btn');
        disableSth('nextBtn');
    }
    if(checkpoint == 6){
        localStorage.setItem('id', id.toString());
        localStorage.setItem('checkPoint', checkpoint.toString());
        localStorage.setItem('planetDialogNum', planetDialogNum.toString());
        localStorage.setItem('meDialogNum', meDialogNum.toString());
        location.href='http://localhost:63342/109DCT_mobile/public/html/lv2_1.html';
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
}