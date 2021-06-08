window.googleDocCallback = function () { return true; };
let localArray = [];  //Default 空 Array
let gasArray = [];
let player = 0;  //紀錄人數

function update(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbyO9KaqyTC4ncTruqa2X37Yp_-6ICXB02VMsaczsEXAPb4kGPYnBe5TkPipMb6-ZUWMuw/exec?callback=googleDocCallback",
        success: function(response) {
            if (response == "finish") {
                //重設
            }
            else{
                goCheck(response);
            }
        }
    });
};

function setDrop(id, size){
    document.getElementById(id).style.width=`${size/7*5}vw !important`;
}

async function dropDown(id){
    await addClass(`d${id+1}`,'dropDown');
    await setTimeout(()=>{},1000);
}

function goCheck(e){
    console.log(gasArray);
    gasArray = e.split(',');
    if(gasArray == localArray){} //檢查有沒有變
    else {  //有變的話就更新
        player = gasArray.length;
        for(let i=0;i<player;i++){
            //紀錄使用者 point0
            if(localArray[i] == NaN){ //如果沒有紀錄
                showSth(`p${i+1}`);  //新增水桶數
                setDrop(i+1,gasArray[i]);  //初始設定玩家水滴大小
                dropDown(i+1).then(()=>{removeClass(`d${i+1}`,'dropDown')}) //滴完後消失
            }
            else if(localArray[i]<gasArray[i]){
                dropDown(i+1).then(()=>{removeClass(`d${i+1}`,'dropDown')})
                localArray[i] = gasArray[i];
            }
        }
        //改變花和進度條
    }
}


setInterval(function (){
    update();
})

/*
function callWater(){
    $.ajax({
        type: "get",
        async: false,
        url: "https://script.google.com/macros/s/AKfycbxTho3IqNqjynhM19BZSAosRXLPFjJe-HaFmrY6CCxW/dev?callback=googleDocCallback",
        data: {
            "id2":id2,
            "point":point
        },
        success: function(response) {
            console.log(response);
            if (response>=50){
                changeSource('flower','../material/sprout.png');
            }
            else if(response=='full'){
                countStop = 1;
                explose();
            }
        }
    });
}
function tryCheck(e){
    if(e == "overload"){
        console.log("overload");
        htmlContent('instruct',`<br>人數已達上限<br>請靜待下一輪`);
        check = 1;
    }
    if(e == "almost"){
        console.log("almost");
        htmlContent('instruct',`<br>即將有小花成長茁壯<br>請靜待下一輪`);
        check = 1;
    }
    if(e.toString().includes('continue') == true){
        console.log('true');
        check = 0;
        id2 = e.toString().split(',')[1];
        console.log(id2);
    }
    else{
        point = e;
        console.log(point);
        check = 2;
        showSth('waterBtn');
        hideSth('loader');
        enableSth('readBtn');
        htmlContent('instruct',`<br>請點擊澆水器<br>幫花澆水`);
        document.getElementById('readBtn').value = '確定';
        if(id2 == 2){
            changeAnimSrc('waterBtn','waterer_red');
        }
        else if(id2 == 3){
            changeAnimSrc('waterBtn','waterer_purple');
        }
        else if(id2 == 4){
            changeAnimSrc('waterBtn','waterer_orange');
        }
        else if(id2 == 5){
            changeAnimSrc('waterBtn','waterer_green');
        }
        else{
            changeAnimSrc('waterBtn','waterer_blue');
        }
        document.getElementById('waterDrop').style.transform = 'translate(-50%,0) scale(0.3, 0.3)';
    }
}
function goCheck(){
    callPlayer();
    if(check < 2){
        if(check == 0){  //快速檢查是否登錄
            let connectInterval = setInterval(function (){
                callPlayer();
                if(check == 2){
                    clearInterval(connectInterval);
                }
                if(check == 1){
                    clearInterval(connectInterval);
                    let retryInterval = setInterval(function (){
                        callPlayer();
                        if(check == 2){
                            clearInterval(retryInterval);
                        }
                    },5000);
                }
            },2000);
        }
        if (check == 1) {  //太多人時過久一點再試
            let retryInternal = setInterval(async function () {
                callPlayer();
                if (check == 2){
                    clearInterval(retryInternal);
                }
            }, 5000);
        }
    }
}
*/