window.googleDocCallback = function () { return true; };
function send() {
    console.log("go");
    let test1 = document.querySelector('#t1').value;
    let test2 = document.querySelector('#t2').value;
    $.ajax({
        type: "post",
        url: "https://script.google.com/macros/s/AKfycbxd4UmVaIwRdI9nUXst8gZ-8rwgss7WzUHuVyf1m6gVwEBM-ntdGjMo5p5_WBi7fV1k7w/exec?callback=googleDocCallback",
        data: {
            "method":"write",
            "test1": test1,
            "test2": test2
        }
    });
};