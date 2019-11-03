$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $('.has-animation').each(function(index) {
                $(this).delay($(this).data('delay')).queue(function(){
                  $(this).addClass('animate-in');
                });
            });
        } else {
            $('.has-animation').each(function(index) {
                $(this).delay($(this).data('delay')).queue(function(){
                  $(this).addClass('animate-in');
                });
            });
        }

        if(scroll_pos>1500){
            $('#skills').addClass('dark');
            $('.sk').addClass('yellow-gold');
            $('.sk').removeClass('text-dark');
        }
        else{
            $('#skills').removeClass('dark');
            $('.sk').removeClass('yellow-gold');
           
        }

        if(scroll_pos>2500){
            $('#skills').removeClass('dark');
        }

    });
});

