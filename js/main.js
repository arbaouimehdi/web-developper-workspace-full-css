/* ================================================ /*
/*                                                  /* 
/*               Clock By  Martin Grand             /*
/*    http://codepen.io/martingrand/details/aAldc   /*
/*                                                  /*
/* ================================================ */
$('.hour, .minute, .second').data('plus-deg', 0)
calcTime();
$('#clock').addClass('aminate');
var int = setInterval(calcTime, 1000);
function calcTime () {
  var d = new Date();
  var h = d.getHours();
  rotate($('.hour'),  ((h > 12 ? h - 12 : h)*30)-90);
  rotate($('.minute'), (d.getMinutes()/*0-59*/*6)-90);
  rotate($('.second'), (d.getSeconds()/*0-59*/*6)-90);
}
function rotate ($object, deg) {
  var original_deg = deg;
  if(deg != $object.data('deg')){
    if(deg == -90) {
      $object.data('plus-deg', $object.data('plus-deg')+360);
    }
    deg += $object.data('plus-deg');
    $object.css({
      '-webkit-transform' : 'rotate('+deg+'deg)',
      '-moz-transform' : 'rotate('+deg+'deg)',  
      '-ms-transform' : 'rotate('+deg+'deg)',  
      '-o-transform' : 'rotate('+deg+'deg)',  
      'transform' : 'rotate('+deg+'deg)',  
      'zoom' : 1
    });
    $object.data('deg', original_deg);
  }
}
