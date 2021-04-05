window.googleDocCallback = function () { return true; };
let num = 1;
function read(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxnEjqrHHOa10-FTiVB2KBYcSoBju7WcYWPNnH4Bd26q2CWIXC1rzUDLNQ5nDhUl7dEhQ/exec?callback=googleDocCallback",
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