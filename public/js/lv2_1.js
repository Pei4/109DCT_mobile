window.googleDocCallback = function () { return true; };
let check = 0; // Default/continue 0, overload/almost 1, ready 2
function callGas(method,successFnt){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxm6TgIaHS9LtBMZLyahdC-CX_Ldgfhnqw-jZIqhzaeSZ1DLWaI1x7lpw8Bt6kivtJOIQ/exec?callback=googleDocCallback",
        data: {
            "method": method,
            "id":parseInt(document.querySelector('#id').value)+1
        },
        success: function(response) {
            successFnt(response);
        }
    });
}
let test = function(e){
    console.log(e);
};
let tryCheck = function(e){
    if(e == "overload"){
        alert("overload, wait for 5 sec");
        check = 1;
    }
    if(e == "almost, wait for 5 sec"){
        alert("almost");
        check = 1;
    }
    if(e == "continue"){
        alert("connecting");
        check = 0;
    }
    if(e == "ready"){
        alert("success");
        check = 2;
    }
}
function read() {
    callGas("addPlayer",tryCheck);
    for(check < 2 ;check += 0;){
        if(check == 1){  //太多人時過久一點再試
            window.setTimeout(function (){
                callGas("addPlayer", tryCheck);
                console.log("try again");
            },5000);
        }
        else if(check == 0) {  //快速檢查是否登錄
            window.setTimeout(function () {
                callGas("addPlayer", tryCheck);
                console.log("doubleCheck");
            }, 2000);
        }
    }
};
function water(){
    callGas("goWater",test);
}