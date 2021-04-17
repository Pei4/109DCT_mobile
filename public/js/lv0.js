window.googleDocCallback = function () { return true; };
let num = document.querySelector('#getNum');
function read(){
    console.log(num);
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxglC7c18FzZSSM4dYG_-00OhIKOY6dmIONl3ZGOELAZBM7MGVZpmWjGNrOhKcTQ7VkUQ/exec?callback=googleDocCallback",
        data: {
            "num":num+1
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