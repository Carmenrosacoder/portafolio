//new WOW().init();
window.addEventListener('load', ()=>{
  escribir("write",texto,250);
})


var texto =  "FRONTEND DEVELOPER";
$('.responsive').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

function escribir(contenedor,writer,speed){

  longitud = writer.length;

  cnt = document.getElementById(contenedor);
  var i=0;
  tiempo = setInterval(function(){
     cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + writer.charAt(i)+ " ";
     if(i >= longitud){
        clearInterval(tiempo);
        cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
        return true;
     } else {
        i++;
     }},speed);
};



