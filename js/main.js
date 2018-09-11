new WOW().init();

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$('a[href^="#"]').on('click', function(event) {
  var target = $( $(this).attr('href') );

  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(window).scroll(function() {
    if($(this).scrollTop() > 150)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});


$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
        $('.navbar-default').removeClass("x").addClass('navbar');

    }, 1000);
});

/**/
window.onload=()=>{
  const ph = new ParallaxHero('.hero')

}
class ParallaxHero{
  constructor(q){
    this.element = q;
    this.bindScroll();
    this.sampleScroll();
  }
  bindScroll(){
    $(window).on('scroll', ()=>{
      const scrolled = $(window).scrollTop();
      //Move & fade the H2 on scroll.
      $(`${this.element} h2`).css({
        'top':`${scrolled * 0.7}px`,
        'opacity':`${1-(scrolled/$(this.element).outerHeight())*1.8}`
      });
      //Fade the extra rainbow div just in case it's visible
      $(`${this.element} .optional-rainbow`).css('opacity', `${0.4 + (scrolled/$(this.element).outerHeight())}`);
    });
    //added control to toggle the extra rainbow div, just for s&g
    $('.selectable').on('click', (e)=>{
      $('.selectable').toggleClass('on');
      $('.hero').toggleClass('fadeout');
    });
    $('')
  }
  sampleScroll(){
    //move it so that it shows in portfolio
    setTimeout(function(){$.scrollTo(500, 2000)}, 500);
  }

}
$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});
