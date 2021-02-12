function triggerInstas(){
    this.scanner = new Instascan.scanner({video: {facingMode: { exact: "environment" } }});
    this.scanner.addEventListener('scan', function(content, image){
        alert('scan!');
    });
    Instascan.Camera


    let scanner = new Instascan.Scanner({video: {facingMode: { exact: "environment" } }});
    let video = document.querySelector('#preview');
    function handleSuccess(stream) {
        window.stream = stream;
        video.srcObject = stream;
    }
    function handleError(error) {
        console.log('getUserMedia error: ', error);
    }
    scanner.addEventListener('scan',function(content){
        alert('scan!');
    });
}