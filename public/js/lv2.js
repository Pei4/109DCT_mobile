window.googleDocCallback = function () { return true; };
function send() {
    let test1 = document.querySelector('#t1').value;
    let test2 = document.querySelector('#t2').value;
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbzpU-RGzt4Ixh_ry7NnvMWQijOelxgNHPTHCF5qI3IE5Q0HB06to0e0nwCbGM6LHiLKYg/exec?callback=googleDocCallback",
        data: {
            "test1": test1,
            "test2": test2
        },
        success: function(response) {
            if (response == "成功") {
                alert("成功");
            }
        }
    });
};