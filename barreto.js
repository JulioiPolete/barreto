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
     elemento.style.backgroundImage = "url('https://www.instagram.com/p/CnpBiuirAUN/')"
     elemento.style.backgroundPosition = "15% 30%";
   

     audio.play();
     
     }
);

