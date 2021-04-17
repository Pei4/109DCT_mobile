window.googleDocCallback = function () { return true; };
function callGas(m,v1,v2){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbz7Zp1HdGHFDSyTU8vx-rE5IYiddFPHlewPtbq5e7XX8H5wYCm54VcNKuvL8BUhVLZyEw/exec?callback=googleDocCallback",
        data: {
            "method":m,
            "num":v1,
            "cate":v2
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
function read(){
    let nu = document.querySelector('#getNum').value;
    let num = parseInt(nu) + 1;
    console.log(num);
    callGas("read",num);
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
function write(){
    let nu = document.querySelector('#getNum').value;
    let nu2 = parseInt(nu) + 1;
    let cat = document.querySelector('#getCate').value;
    callGas("write",nu2,cat);
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