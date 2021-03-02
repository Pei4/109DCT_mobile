window.googleDocCallback = function () { return true; };
function send() {
    console.log("go");
    let test1 = document.querySelector('#t1').value;
    let test2 = document.querySelector('#t2').value;
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxczugTBSFn2zVudV0D0rf61q7o7WMJ7UVBfAYtZIzsu-aqry0_udg9LA/exec?callback=googleDocCallback",
        data: {
            "test1": test1,
            "test2": test2
        },
        success: function(response) {
            if(response == "成功"){
                alert("成功");
            }
        },
    });
};