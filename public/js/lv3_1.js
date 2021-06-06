window.googleDocCallback = function () { return true; };
//初始設定
let checkpoint = 13;
let planetDialogNum = 3;
let meDialogNum = 5;
let id = parseInt(localStorage.getItem('id'));


window.onload = function(){
    preload(
        "../material/mbg_story1.png",
        "../material/mbg_story2.png",
        "../material/mbg_story3.png",
        "../material/mbg_universe.png",
        "../material/planet_smile_2.png",
    )
}

function callPlayer(){

}
