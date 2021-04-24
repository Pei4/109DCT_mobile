window.googleDocCallback = function () { return true; };
let nu;
let num;
let cate;
function callGas(m){
    nu = document.querySelector('#getNum').value;
    num = parseInt(nu) + 1;
    cate = document.querySelector('#getCate').value;
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxTfABwbU6aGDUnXc66Xe5fhIY5ykHKU8ItZPek_4IOH3qhkNDcbt0hiATTwe_7iYxCSw/exec?callback=googleDocCallback",
        data: {
            "method":m,
            "num":num,
            "cate":cate
        },
        success: function(response) {
            if (m == "read"){
                console.log(response);
                console.log(m);
            }
            else if(m == "write"){
                console.log(m);
            }
        }
    })
}
function readGas(){
    callGas("read");
}
function writeGas(){
    callGas("write");
}

/*function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}*/