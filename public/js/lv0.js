window.googleDocCallback = function () { return true; };
function read(e){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbzrScWJX4Jk42ckUKAZ6HKHbBxCR5PZWVnzkHpj2dPBJDaQ5_wvuS3WfYVikkb9kjszHg/exec?callback=googleDocCallback",
        data: {
            "num":e+1
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