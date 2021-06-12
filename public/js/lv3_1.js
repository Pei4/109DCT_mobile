//初始設定
let checkpoint = 25;
let planetDialogNum = 9;
let meDialogNum = 8;
let id = parseInt(localStorage.getItem('id'));
//變數
let keyArray = ['S','T','A','R'];
let focusKey;  //indexOf keyArray
let inputHeight;  //trackInput 控制項
let checkPass = 0;  //確認是否過關

window.onload = function(){
    preload(
        "../material/mbg_story2.png",
        "../material/mbg_story3.png",
        "../material/mbg_universe.png",
        "../material/mbg_grass_6.png",
        "../material/planet_smile_2.png",
        "../material/planet_bigSmile.png"
    );
    keyArray.forEach(key=> {
        document.getElementById(`track_${key}`).addEventListener("focus",checkFocus);
        document.getElementById(`track_${key}`).addEventListener("blur",goBlur);
        document.getElementById(`track_${key}`).addEventListener("keyup",checkKey);
    })
}

setTimeout(()=>{
    document.body.className = 'small';
},1);

function goTrack(){
    document.body.style.backgroundImage = `url("../material/mbg_universe.png")`;
    hideSth('hand');
    hideSth('dialog');
    hideSth('instruct');
    hideSth('trackBtn');
    showSth('trackInput');
}
function checkFocus(e){
    focusKey = keyArray.indexOf(e.target.id.split('_')[1]);
    inputHeight = 85 - 25*focusKey;
    document.getElementById('trackInput').style.transform = `translate(-50%, ${inputHeight}%)`;
}
function goBlur(e){
    document.getElementById('trackInput').style.transform = `translate(-50%, 60%)`;
}
function checkKey(e){
    document.getElementById('trackInput').style.transform = `translate(-50%, 60%)`;
    document.getElementById(e.target.id).blur();
    if (e.target.value.toUpperCase() == keyArray[focusKey]){ //輸入正確
        checkPass ++;
        addClass(e.target.id,'correct');
        disableSth(e.target.id);
        //如果全都 disabled 就過關
        if(checkPass == 4){
            setTimeout(()=>{
                keyArray.forEach(key=> {
                    document.getElementById(`track_${key}`).value = '';
                    document.getElementById(`track_${key}`).style.transitionDuration = '1s';
                    document.getElementById(`track_${key}`).style.transitionTimingFunction = 'ease-out';
                    document.getElementById(`track_${key}`).style.margin = '0';
                    document.getElementById(`track_S`).style.transform='translate(-50%,110%)';
                    document.getElementById(`track_T`).style.transform='translate(-50%,30%)';
                    document.getElementById(`track_A`).style.transform='translate(-50%,-10%)';
                    document.getElementById(`track_R`).style.transform='translate(-50%,-30%)';
                    setTimeout(()=>{
                        hideSth('trackInput');
                        showSth('fly');
                        addClass('fly','fly');
                    },1000)
                    setTimeout(()=>{
                        changeSource('fly','../material/subtract.png');
                    },2400)
                })
                setTimeout(()=>{
                    meDialogNum --;
                    goMask();
                },4400)
            },1000)
        }
    }
    else{  //輸入錯誤
        addClass(e.target.id,'error');
        setTimeout(()=>{
            removeClass(e.target.id);
            document.getElementById(e.target.id).value = "";
        },1500)
    }
}