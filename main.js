function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lj_hApBc6/model.json" , modelReady)
}
function modelReady(){
    console.log("Model Loaded!");
    classifier.classify(gotResults);
}
function gotResults(error , results){
if (error) {
console.log("Error")
    
} else {
    console.log(results);
}
}
