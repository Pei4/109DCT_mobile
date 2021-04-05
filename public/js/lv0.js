window.googleDocCallback = function () { return true; };
let num = 1;
function read(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbwU8IvoL42RzKqYUT8xcm6fxDG00ve5oNfVVQvKCE2lUdO3JgdUWzWsy_kc2FGQsD5Crw/exec?callback=googleDocCallback",
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