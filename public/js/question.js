let checkpoint = 35;
let planetDialogNum = 15;
window.onload = function (){
    enableSth('dialog');
}
function backToMain(){
    window.parent.postMessage('toQA','*');
    console.log('back');
}