$(document).ready(function(){
});

/* toast */
function toast(_type, _message, _time){
  var _toast = $('.toast');
  _toast.addClass('active '+_type).html("<spna>"+_message+"</span>");
  if(_type == 'auto'){
      setTimeout(function(){
          toast_close(_toast);
      }, _time);
  } else if(_type == 'confirm') {
      _toast.append('<a href="#none" onclick="toast_close($(this).parent());" class="btn_close">close</a>');
      setTimeout(function(){
          _toast.find('.btn_close').focus();
      });
  }
}

function toast_close(_toast){
    var _toast;
    _toast.attr('class','toast');
    setTimeout(function(){
        $('body').find('[tabindex="-1"]').focus().removeAttr('tabindex');
        _toast.empty();
    }, 200);
}

/* preloader : open */
function loading_active(){
    $('.preloader_wrap').addClass('active');
}

/* preloader : close */
function loading_close(){
    $('.preloader_wrap').removeClass('active');
}