window.googleDocCallback = function () { return true; };
function send() {
    let test1 = document.querySelector('#t1').value;
    let test2 = document.querySelector('#t2').value;
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxyq7f7N1DMjodmJUk0ldT5fZY-vTL2NsKgrOhmQ16NK-Vv8cNe7fOePC55vQ5anrwlkQ/exec",
        data: {
            "test1": test1,
            "test2": test2
        }
    });
};