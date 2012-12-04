
(function($) {

  var methods = {
    setDefault: function( obj, params ) {
      if( params.Default == 'Nay' ) {
        obj.find('.checkbox').data('icheckbox-value', params.Nay);
        obj.find('.nob').css({ 'right' : '50px'});
      }
      if( params.Default == 'Yay' ) {
        obj.find('.checkbox').data('icheckbox-value', params.Yay);
        obj.find('.nob').css({ 'right' : '0px'});
      }
    },
    slideLeft: function( params ) {
      $(this).find('.nob').stop().animate({ 'right' : '50px' });
    },

    slideRight: function ( params ) {
      $(this).find('.nob').stop().animate({ 'right' : '0px' });
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

    this.html('<div class="checkbox"><div class="filler"><span class="left-label">' 
      + settings.Yay + '</span><span class="right-label">' 
      + settings.Nay + '</span><div class="nob"></div></div></div>');
    
    methods.setDefault( $(this), settings);


    
    this.find('.checkbox').on('click', function() {
      $this = $(this);

      value = $this.data('icheckbox-value');

      if ( value == settings.Nay ) {
        methods.slideRight.apply(this, params);
        $this.data('icheckbox-value', settings.Yay);
        settings.ON.call( $this.parent() );
        return false;
      }

      if ( value == settings.Yay ) {
        methods.slideLeft.apply(this, params);
        $this.data('icheckbox-value', settings.Nay);
        settings.OFF.call( $this.parent() );
        return false;
      }

    });

  }

})(jQuery);