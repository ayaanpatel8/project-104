Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90

});
function captureimg(){
    webcam.snap(function(data_uri){

        document.getElementById("captured_img").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });

    

    
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XU7W802Nx/model.json', modelLoaded);