function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WQrOi_pIv/.model.json', modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear: "+ results[0].label;
        document.getElementById("result_label").style.color="rgb("+r+", "+g+", "+b+")";

        document.getElementById("result_confidence").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_confidence").style.color="rgb("+r+", "+g+", "+b+")";

        img1=document.getElementById("dog");
        img2=document.getElementById("cat");
        img3=document.getElementById("cow");
        img4=document.getElementById("parrot");
        img5=document.getElementById("ape");
        img6=document.getElementById("whale");

        if(results[0].label=="Dog"){
      img1.src="dog1.png";
      img2.src="cat.png";
      img3.src="cow.png";
      img4.src="parrot.png";
      img5.src="ape.png";
      img6.src="whale.png";
        }
        else if(results[0].label=="Cat"){
            img1.src="dog.png";
            img2.src="cat1.png";
            img3.src="cow.png";
            img4.src="parrot.png";
      img5.src="ape.png";
      img6.src="whale.png";
              }
              else if(results[0].label=="Cow"){
                img1.src="dog.png";
                img2.src="cat.png";
                img3.src="cow1.png";
                img4.src="parrot.png";
          img5.src="ape.png";
          img6.src="whale.png";
                  }
                  else if(results[0].label=="African Grey Parrot"){
                    img1.src="dog.png";
                img2.src="cat.png";
                img3.src="cow.png";
                img4.src="parrot1.png";
          img5.src="ape.png";
          img6.src="whale.png";
                  }
                 else if(results[0].label=="Ape"){
                    img1.src="dog.png";
                    img2.src="cat.png";
                    img3.src="cow.png";
                    img4.src="parrot.png";
              img5.src="ape1.png";
              img6.src="whale.png";
                 }
                 else{
                    img1.src="dog.png";
                    img2.src="cat.png";
                    img3.src="cow.png";
                    img4.src="parrot.png";
              img5.src="ape.png";
              img6.src="whale1.png";
                 }
    }
}