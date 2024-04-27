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
     elemento.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/543913056057688066/1233842737053171762/fb86aa1e-b87b-407f-be57-ff4991bbe6ff.jpeg?ex=662e9118&is=662d3f98&hm=9e2d10b4f8f479439d6f4a7866f3c131f960430ef5138b18adf4d2d680d84322&')"
     elemento.style.backgroundPosition = "15% 30%";
   

     audio.play();
     
     }
);

