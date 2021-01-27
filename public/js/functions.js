let checkpoint = 0;
let planetDialogNum = -1;
let meDialogNum = -1;
let planetDialogArray =[
    '我...好餓',
    '我小星球啦',
    '那邊好香喔！',
    '有東西在發光耶',
    '我們過去看看吧',
    '哇~好多漂亮的花喔',
    '可以挑一朵適合的給我嗎',
    '我好喜歡~謝謝你！',
    '風好大ㄛ',
    '我好像該回去了...',
    '其實我是新生的小星球',
    '要在某處遊歷之後',
    '才能回到宇宙的行列',
    '成為一顆獨立的星球',
    '這段日子......',
    '謝謝你的陪伴！',
    '在回去之前\n想和你留下最後的回憶'];
let meDialogArray =[
    '是不是該找點喝的東西給它呢...',
    '要喝什麼好呢？',
    '找點食物給它吃吧',
    '要吃什麼好呢？',
    '你誰',
    '唉呦好痛啊！哪來的垃圾？',
    '該丟進哪個垃圾桶好呢？',
    '你要回去哪裡？'
];
let planetCont = [3,7,8,9,10,11,12,13,14,17,19,20,21,22,23,24,25];
let meCont = [1,2,4,5,6,15,16,18];

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
function changeHtml(id,what){
    document.getElementById(id).innerHTML = what;
}

function dialogControl(){
    checkpoint ++;
    if(checkpoint == 1){
        showSth('lv1Btn');
        disableSth('nextBtn');
    }
    if(meCont.includes(checkpoint)){
        meDialogNum ++;
        changeHtml('me',meDialogArray[meDialogNum]);
        showSth('me');
        hideSth('planet');
    }
    else if(planetCont.includes(checkpoint)){
        planetDialogNum ++;
        changeHtml('planet',planetDialogArray[planetDialogNum]);
        showSth('planet');
        hideSth('me');
    }
}

function btnCheck(){
    checkpoint ++;
    meDialogNum ++;
    changeHtml('me',meDialogArray[meDialogNum]);
    showSth('me');
    showSth('insta');
    hideSth('planet');
    hideSth('main');
    document.getElementById('preview').play();
    //instascan
    let scanner = new Instascan.Scanner({continuous: true,video: document.getElementById('preview'),scanPeriod:5});
    scanner.addListener('scan', function (content) {
        alert(content);
    });
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        }
        else {
            alert('No cameras found.');
        }
    }).catch(function (e) {
        alert(e);
    });
}
