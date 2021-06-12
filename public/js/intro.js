$(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    $(window).resize(function(){
        $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });
});

function open(){
    window.open( this.href, '_system' );
    this.href = "javascript:void(0)";
    this.preventDefault();
}