window.googleDocCallback = function () { return true; };
let num = 1;
function read(){
    $.ajax({
        type: "post",
        url: "https://script.google.com/macros/s/AKfycbxyq7f7N1DMjodmJUk0ldT5fZY-vTL2NsKgrOhmQ16NK-Vv8cNe7fOePC55vQ5anrwlkQ/exec",
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