//初始設定
let id = parseInt(localStorage.getItem('id'));

setTimeout(()=>{hideSth('mask2');},1000);
window.onload = function (){
    preload(
        '../material/letter_after.png'
    );
}

function openLetter(){
    changeSource('letter','../material/letter_after.png');
    document.getElementById('letter').style.transform = 'translate(0,-10%)';
    hideSth('notice');
    setTimeout(()=>{
        hideSth('title');
        hideSth('letter');
        showSth('word');
        showSth('photo');
    },1000)
}
function browse(){
    showSth('photoMask');
}
function back(){
    hideSth('photoMask');
}