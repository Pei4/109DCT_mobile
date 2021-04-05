window.googleDocCallback = function () { return true; };
let num = 1;
function read(){
    console.log('read');
    $.ajax({
        type: "read",
        url: "https://script.google.com/macros/s/AKfycbxczugTBSFn2zVudV0D0rf61q7o7WMJ7UVBfAYtZIzsu-aqry0_udg9LA/exec?callback=googleDocCallback",
        data: {
            "num":num
        },
        success: function(response) {
            console.log(response);
        },
    });
}


/*function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}*/