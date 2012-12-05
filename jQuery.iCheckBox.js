
(function($) {

  var methods = {
    setDefault: function( obj, params ) {
      if( params.Default == 'Nay' ) {
        obj.find('.fm-checkbox').data('icheckbox-value', params.Nay);
        obj.find('.fm-nob').css({ 'right' : '50px'});
      }
      if( params.Default == 'Yay' ) {
        obj.find('.fm-checkbox').data('icheckbox-value', params.Yay);
        obj.find('.fm-nob').css({ 'right' : '0px'});
      }
    },
    slideLeft: function( params ) {
      $(this).find('.fm-nob').stop().animate({ 'right' : '50px' });
    },

    slideRight: function ( params ) {
      $(this).find('.fm-nob').stop().animate({ 'right' : '-2px' });
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