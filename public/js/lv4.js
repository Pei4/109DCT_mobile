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
    document.getElementById('download').addEventListener('mousedown',()=>{
        setTimeout(()=>{showSth('doneDownload');},2000);
    });
    setTimeout(()=>{
        addClass('title','shine2');
        addClass('letter','shine2');
        addClass('word','show');
        addClass('photo','show');
        addClass('end','showBtn');
        addClass('download','showBtn');
        showSth('word');
        showSth('photo');
        showSth('end');
        showSth('download');
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
}