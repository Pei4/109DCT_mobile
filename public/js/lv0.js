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
    /*$.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbz7Zp1HdGHFDSyTU8vx-rE5IYiddFPHlewPtbq5e7XX8H5wYCm54VcNKuvL8BUhVLZyEw/exec?callback=googleDocCallback",
        data: {
            "method":"read",
            "num":num
        },
        success: function(response) {
            console.log(response);
            console.log('read');
        }
    });*/
}
function writeGas(){
    callGas("write");
    /*$.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbz7Zp1HdGHFDSyTU8vx-rE5IYiddFPHlewPtbq5e7XX8H5wYCm54VcNKuvL8BUhVLZyEw/exec?callback=googleDocCallback",
        data: {
            "method":"write",
            "num":num2,
            "cate":cate2
        },
        success: function (){
            console.log("write");
        }
    })*/
}

/*function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}*/