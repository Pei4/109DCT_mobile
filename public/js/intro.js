$(function(){
    $('#introVid').css({ width: $(window).innerHeight() + 'px', height: $(window).innerWidth() + 'px' });
    $(window).resize(function(){
        $('#introVid').css({ width: $(window).innerHeight() + 'px', height: $(window).innerWidth() + 'px' });
    });
});

function start(){
    hideSth('main');
    showSth('introVid');
    document.getElementById('introVid').play();
    document.getElementById('introVid').autoplay = false;
    document.getElementById('introVid').controls = false;
    document.getElementById('introVid').addEventListener('ended',()=>{end()});
}

function end(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }
    else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    }
    hideSth('introVid');
}
/*function onYouTubeIframeAPIReady() {
    let player;
    player = new YT.Player('YouTubeVideoPlayerAPI', {
        videoId: 'Xj3gU3jACe8',   // YouTube 影片ID
        width: newWidth,            // 播放器寬度 (px)
        height: newHeight,           // 播放器高度 (px)
        playerVars: {
            autoplay: 1,            // 自動播放影片
            controls: 0,            // 顯示播放器
            showinfo: 0,            // 隱藏影片標題
            modestbranding: 0,      // 隱藏YouTube Logo
            loop: 0,                // 重覆播放
            playlist:'Xj3gU3jACe8', // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
            fs: 0,                  // 隱藏全螢幕按鈕
            cc_load_policty: 0,     // 隱藏字幕
            iv_load_policy: 3,      // 隱藏影片註解
            autohide: 0             // 影片播放時，隱藏影片控制列
        },
        events: {
            onReady: function(e) {
                e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
            }
        }
    });
}*/