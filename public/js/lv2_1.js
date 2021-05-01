window.googleDocCallback = function () { return true; };
let check = 0;
function callGas(method,successFnt){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbyfRZEpj626zEXBiERdrAu3v8faaXluQgQUR4Xffye2sTeRXKflK5KoNJcCTuSkeG3Tlw/exec?callback=googleDocCallback",
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
        console.log("retry");
        check = 0;
    }
    if(e == "access"){
        console.log("access");
        check = 1;
    };
}
function read() {
    callGas("addPlayer",test);
    for(check !== 1;check += 0;){
        window.setTimeout(function(){
            callGas("checkPlayer",tryCheck);
            console.log("tryCheck");
        },2000);
        callGas("addPlayer",test);
    }
};
function water(){
    callGas("goWater",test);
}