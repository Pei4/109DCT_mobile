window.googleDocCallback = function () { return true; };
let num = 1;
function read(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxczugTBSFn2zVudV0D0rf61q7o7WMJ7UVBfAYtZIzsu-aqry0_udg9LA/exec?callback=googleDocCallback",
        data: {
            "method":"read",
            "num":num
        },
        success: function(response) {
            console.log(response);
            console.log('read');
        },
    });
}


/*function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}*/