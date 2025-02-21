function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/J_1KqslVe/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
    
        if (results[0].label == "Ayuda") {
          window.location.href='tel: 911'  
        } else if (results[0].label == "Auxilio") {
          window.location.href='tel: 911'  
        } else if (results[0].label == "Llamar a emergencias") {
          window.location.href='tel: 911'  
        } else if (results[0].label == "Peligro") {
          window.location.href='tel: 911'  
        } else if (results[0].label == "Socorro") {
          window.location.href='tel: 911'  
        }else{

        }
      }   

}