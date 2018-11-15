//new WOW().init();
window.addEventListener('load', ()=>{
  escribir("write",texto,150);
});

window.addEventListener('scroll', ()=> {
  
  changeClass();
});

var navBar = document.querySelector(".navbar");


var texto =  "CARMEN ARIAS";
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

function changeClass(){
  var scrollPosY = window.scrollY;
  if(scrollPosY > 300) {
    navBar.classList.add('added-classname');
  } else if(scrollPosY <= 300) {
      navBar.classList.remove ("added-classname");
  }
}
var canvasDiv = document.getElementById('inicio');
var options = {
  particleColor: '#66d7d1',
  background: 'img/banner.png',
  interactive: true,
  speed: 'slow',
  density: 'medium'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);

