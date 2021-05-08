window.googleDocCallback = function () { return true; };
let check = 0; // Default/continue 0, overload/almost 1, ready 2
window.onload = function(){
    dialogControl();
}


function callGas(method,successFnt){
    $.ajax({
        type: "get",
        async: false,
        url: "https://script.google.com/macros/s/AKfycbyI5hk18g3cu6F_hFDxqorwd4axTcfA5hGdjOZ8l70IGGknHbdOoOwmI_D-NeHBUROQlQ/exec?callback=googleDocCallback",
        data: {
            "method": method,
            "id":id+1
        },
        success: function(response) {
            successFnt(response);

        }
    });
}

function test(e){
    console.log(e);
};
function tryCheck(e){
    console.log(check);
    if(e == "overload"){
        alert("overload, wait for 5 sec");
        check = 1;
    }
    if(e == "almost, wait for 5 sec"){
        alert("almost");
        check = 1;
    }
    if(e == "continue"){
        alert("connecting2");
        check = 0;
    }
    if(e == "ready"){
        alert("success");
        check = 2;
    }
    //return new Promise(resolve => setTimeout(resolve, 10));
}
function goCheck(){
    console.log('goCheck');
    if(check < 2){
        if(check == 0){  //快速檢查是否登錄
            console.log('check0');
            let connectInterval = setInterval(function (){
                callGas("addPlayer", tryCheck)
                if(check == 2){
                    console.log("0-2");
                    clearInterval(connectInterval);
                }
                if(check == 1){
                    console.log("0-1");
                    clearInterval(connectInterval);
                    let retryInterval = setInterval(function (){
                        callGas("addPlayer", tryCheck);
                        if(check == 2){
                            console.log("0-1-2");
                            clearInterval(retryInterval);
                        }
                    },5000);
                }
            },2000);
        }
        if (check == 1) {  //太多人時過久一點再試
            let retryInternal = setInterval(async function () {
                console.log('retry');
                callGas("addPlayer", tryCheck);
                if (check == 2){
                    console.log("1-2");
                    clearInterval(retryInternal);
                }
            }, 5000);
        }
    }
}

function read() {
    alert('connecting');
    callGas("addPlayer",tryCheck);
    goCheck();
};
function water(){
    callGas("goWater",test);
}