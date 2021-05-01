window.googleDocCallback = function () { return true; };
let check = 0;
function callGas(method,successFnt){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbykVhu7hk1sWNbZe2n9FQV84mxhxCSrMAA4WphTOpSMsNbUURAfo79jEdgkLI9Jp-1bnQ/exec?callback=googleDocCallback",
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
    if(e == "retry"){
        check = 0;
    }
    if(e == "access"){
        check = 1;
    };
}
function read() {
    callGas("addPlayer",test);
    for(check !== 1;check += 0;){
        window.setTimeout(callGas("checkPlayer",tryCheck),2000);
        callGas("addPlayer",test);
    }
};
function water(){
    callGas("goWater",test);
}