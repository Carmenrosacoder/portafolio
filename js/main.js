/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
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
    if($(this).scrollTop() > 220)  /*height in pixels when the navbar becomes non opaque*/
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
    }, 2000);
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
      //Move & fade the H1 on scroll.
      $(`${this.element} h1`).css({
        'top':`${scrolled * 0.7}px`,
        'opacity':`${1-(scrolled/$(this.element).outerHeight())*1.8}`
      });
      //Move & zoom the hero background image
      $(this.element).css({
        'background-position':`50% calc(50% + ${scrolled * 0.2}px)`,
        'background-size': `${200 + (scrolled*50/$(this.element).outerHeight())}%`
      });
      //Fade the extra rainbow div just in case it's visible
      $(`${this.element} .optional-rainbow`).css('opacity', `${0.4 + (scrolled/$(this.element).outerHeight())}`);
    });
    //added control to toggle the extra rainbow div, just for s&g
    $('.selectable').on('click', (e)=>{
      $('.selectable').toggleClass('on');
      $('.hero').toggleClass('fadeout');
    });
  }
  sampleScroll(){
    //move it so that it shows in portfolio
    setTimeout(function(){$.scrollTo(500, 2000)}, 500);
  }

}
