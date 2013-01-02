
(function($) {

  var methods = {
    setDefault: function( obj, params ) {
      if( params.Default == 'Nay' ) {
        obj.find('.fm-checkbox').data('icheckbox-value', params.Nay);
        obj.find('.fm-nob').css({ 'right' : '36px'});
        obj.find('.fm-filler').css({ 'background-position' : '95% 50%' })
        obj.find('.fm-left-label').hide();
      }
      if( params.Default == 'Yay' ) {
        obj.find('.fm-checkbox').data('icheckbox-value', params.Yay);
        obj.find('.fm-nob').css({ 'right' : '-2px'});
        obj.find('.fm-filler').css({ 'background-position' : '5% 50%' })
        obj.find('.fm-right-label').hide();
      }
    },
    slideLeft: function( params ) {
      $(this).find('.fm-nob').stop().animate({ 'right' : '36px' }, 'fast');
      $(this).find('.fm-filler').stop().animate({ 'background-position': '95% 50%' }, 'fast');
      // firefox doesn't seem to understand animation of background pos, so force the css
      if ($.browser.mozilla ){
        $(this).find('.fm-filler').css({ 'background-position': '95% 50%' });
      }
      $(this).find('.fm-left-label').stop().animate({'left' : '-36px'}, 'fast', function() {
        $(this).hide();
      });
      $(this).find('.fm-right-label').css({'left':'36px'}).show().stop().animate({'left' : '0px'}, 'fast');
    },

    slideRight: function ( params ) {
      $(this).find('.fm-nob').stop().animate({ 'right' : '-2px' }, 'fast');
      $(this).find('.fm-filler').stop().animate({ 'background-position': '5% 50%' }, 'fast')
      // force css
      if ($.browser.mozilla ) {
        $(this).find('.fm-filler').css({ 'background-position': '5% 50%' });
      }
      $(this).find('.fm-right-label').stop().animate({'left' : '36px'}, 'fast', function() {
        $(this).hide();
      });
      $(this).find('.fm-left-label').css({'left':'-36px'}).show().stop().animate({'left' : '0px'}, 'fast');
    }

  };

  $.fn.iCheckBox = function(params) {

    if (typeof params == "object" && !params.length) {

      var settings = $.extend({
        Yay: 'ON',
        Nay: 'OFF',
        Default: 'Nay'
      }, params);

    }

    this.html('<div class="fm-checkbox"><div class="fm-filler"><span class="fm-left-label">' 
      + settings.Yay + '</span><span class="fm-right-label">' 
      + settings.Nay + '</span><div class="fm-nob"></div></div></div>');
    
    methods.setDefault( $(this), settings);
    
    this.find('.fm-checkbox').on('click', function() {
      $this = $(this);

      value = $this.data('icheckbox-value');

      if ( value == settings.Nay ) {
        methods.slideRight.apply(this, params);
        $this.data('icheckbox-value', settings.Yay);
        if (settings.ON)
          settings.ON.call( $this.parent() );
        return false;
      }

      if ( value == settings.Yay ) {
        methods.slideLeft.apply(this, params);
        $this.data('icheckbox-value', settings.Nay);
        if (settings.OFF)
          settings.OFF.call( $this.parent() );
        return false;
      }

    });

  }

})(jQuery);