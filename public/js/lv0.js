window.googleDocCallback = function () { return true; };
const num = 2;
function read(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbzrScWJX4Jk42ckUKAZ6HKHbBxCR5PZWVnzkHpj2dPBJDaQ5_wvuS3WfYVikkb9kjszHg/exec?callback=googleDocCallback",
        data: {
            "num":num
        },
        success: function(response) {
            console.log(response);
            console.log('read');
        }
    });
}


/*function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}*/