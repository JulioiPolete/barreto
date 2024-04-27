const button = document.getElementById('button');

button.addEventListener('click',function(){

    var elemento = document.getElementById('barreto')
    var audio = document.getElementById("myAudio");
     elemento.style.border = "2px solid";
     elemento.style.boxSizing = "border-box";
     elemento.style.height = "200px";
     elemento.style.position = "fixed";
     elemento.style.width = "300px";
     elemento.style.marginLeft = "510px";
     elemento.style.marginTop = "-150px";
     elemento.style.marginRight = "500px";
     elemento.style.radius = "20px";
     elemento.style.backgroundImage = "url('https://media.discordapp.net/attachments/543913056057688066/1233862282606284950/ecc7bcf0-a770-4f2d-9647-ebe6c985d52e.jpeg?ex=662ea34c&is=662d51cc&hm=d46cb636cfecc103f9235fa196e1a37df98cbd23dfd835adb75f70f80da74b0b&=&format=webp&width=351&height=468')"
     elemento.style.backgroundPosition = "15% 30%";
   

     audio.play();
     
     }
);

