window.googleDocCallback = function () { return true; };
let num = 1;
function read(){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxAl9GvX2nAfEUnCi-v8DT-I0jCHJDH-WWNYetDKh4oFkX0RVxiEugGLLTJLGQtDzdZGQ/exec?callback=googleDocCallback",
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