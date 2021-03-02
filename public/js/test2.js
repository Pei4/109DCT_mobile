window.googleDocCallback = function () { return true; };
function send() {
    console.log("go");
    let test1 = document.querySelector('#t1').value;
    let test2 = document.querySelector('#t2').value;
    $.ajax({
        url: "https://script.google.com/macros/library/d/1XiLjhss0MacrmkthWg3Cx_90iW21aslr-LyHq2HlCd95F6X4H_ZCuzyU/2",
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