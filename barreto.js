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
     elemento.style.backgroundImage = "url('https://media.discordapp.net/attachments/543913056057688066/1233860875631464468/WhatsApp_Image_2024-04-27_at_16.21.52.jpeg?ex=662ea1fc&is=662d507c&hm=44c19ba6421bd75ded1544a134e37df15dad7c49c8406d09c3ff20aca193d44e&=&format=webp&width=351&height=468')"
     elemento.style.backgroundPosition = "15% 30%";
   

     audio.play();
     
     }
);

