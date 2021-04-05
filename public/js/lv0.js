window.googleDocCallback = function () { return true; };
let num = 1;
function read(){
    $.ajax({
        type: "post",
        url: "https://script.google.com/macros/s/AKfycbxd4UmVaIwRdI9nUXst8gZ-8rwgss7WzUHuVyf1m6gVwEBM-ntdGjMo5p5_WBi7fV1k7w/exec",
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