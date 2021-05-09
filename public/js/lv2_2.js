window.googleDocCallback = function () { return true; };
let localArray = [];  //Default 空 Array
let gasArray = [];
let player = 0;  //紀錄人數

function update(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxTho3IqNqjynhM19BZSAosRXLPFjJe-HaFmrY6CCxW/dev?callback=googleDocCallback",
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
    $(`d${id}`).attr('style',`width: ${size/7*5}vw !important;`);
}

async function dropDown(id){
    await addClass(`d${i+1}`,'dropDown');
    await setTimeout(()=>{},3000);
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
                dropDown(`i+1`,'dropDown').then(()=>{removeClass(`d${i+1}`,'dropDown')}) //滴完後消失
            }
            else if(localArray[i]<gasArray[i]){
                dropDown(i+1,'dropDown').then(()=>{removeClass(`d${i+1}`,'dropDown')})
                localArray[i] = gasArray[i];
            }
        }
        //改變花和進度條
    }
}


setInterval(function (){
    update();
})