
        $( document ).ready( function() {
            var Offset = $('.header_wrap').offset();
            $( window ).scroll( function() {
                if ( $( document ).scrollTop() > Offset.top ) {
                $('.header_wrap').addClass('fixed');
                }
                else {
                $('.header_wrap').removeClass('fixed');
                }
            });
            });
        
            
    
    