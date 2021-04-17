window.googleDocCallback = function () { return true; };
function read(e){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxfYrEDZL_a5ucDguu3T6N1qhavP9J5hJ8ONTUzqvjyJ8cs9SUGBeHrjzSe81yRJ_SKww/exec?callback=googleDocCallback",
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