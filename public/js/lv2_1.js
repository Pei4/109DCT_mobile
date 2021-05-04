window.googleDocCallback = function () { return true; };
let check = 0; // Default/continue 0, overload/almost 1, ready 2

function callGas(method,successFnt){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbzmlZafI4Oec2xMk1qn98XPRBeYp8skmTwt0QxvlGQbiUvv_vhiSHfQrjCyzk19-BMuvA/exec?callback=googleDocCallback",
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
    if(check < 2){
        if(check == 0){  //快速檢查是否登錄
            let connectInternal = setInterval(function (){
                callGas("addPlayer", tryCheck);
                if(check == 2){
                    console.log("0-2");
                    clearInterval(connectInternal);
                }
                if(check == 1){
                    console.log("0-1");
                    clearInterval(connectInternal);
                    let retryInternal = setInterval(function (){
                        callGas("addPlayer", tryCheck);
                        if(check == 2){
                            console.log("0-1-2");
                            clearInterval(retryInternal);
                        }
                    },5000);
                }
            },2000);
        }
        if (check == 1) {  //太多人時過久一點再試
            let retryInternal = setInterval(function () {
                callGas("addPlayer", tryCheck);
                if (check == 2){
                    console.log("1-2");
                    clearInterval(retryInternal);
                }
            }, 5000);
        }
    }
};
function water(){
    callGas("goWater",test);
}