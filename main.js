Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  })

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function takeSnapshot()
{
Webcam.snap(function(data_uri) {
  document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'" />';
});
}

console.log('versão ml5:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uoBQyDF5Y/model.json', modelLoaded);