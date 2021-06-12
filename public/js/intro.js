$(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    $(window).resize(function(){
        $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });
});

function start(){
    hideSth('main');
    showSth('introVid');
    document.getElementById('introVid').play();
}