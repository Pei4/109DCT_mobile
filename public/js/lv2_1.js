window.googleDocCallback = function () { return true; };
function callGas(method){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxTho3IqNqjynhM19BZSAosRXLPFjJe-HaFmrY6CCxW/dev?callback=googleDocCallback",
        data: {
            "method": method,
            "id":parseInt(document.querySelector('#id').value)+1
        },
        success: function(response) {
            console.log(response);
        }
    });
}
function read() {
    callGas("addPlayer");
};
function water(){
    callGas("goWater");
}