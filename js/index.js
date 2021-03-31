$(document).ready(function(){
        $('.preload').addClass('preload--closeAnim');
        window.setTimeout(function () {
                $('.preload').removeClass('preload--closeAnim');
        }, 500);
})

$(function(){

    var note = $('.main__timer'),
            ts = new Date(2012, 0, 1),
            newYear = true;
    if((new Date()) > ts){
            // The new year is here! Count towards something else.
            // Notice the *1000 at the end - time must be in milliseconds
            ts = (new Date()).getTime() + 10*24*60*60*1000;
            newYear = false;
    }
    $('#countdown').countdown({
            timestamp        : ts,
            callback        : function(days, hours, minutes, seconds){
                    var message = "";
                    message += hours + " часов" + " ";
                    message += minutes + " минут" + " ";
                    message += seconds + " секунд";
                    note.html(message);
            }
    });
});

function arrowAnim(name){
        name.mouseenter(function(){
                name.children('.animated-arrow').addClass('animated-arrow__anim');
                window.setTimeout(function () {
                        $('.animated-arrow__anim').removeClass('animated-arrow__anim');
                }, 1000);
                        // alert('hhh');
        })
}

steps1 = $('#steps1');
steps2 = $('#steps2');
steps3 = $('#steps3');

arrowAnim(steps1);
arrowAnim(steps2);
arrowAnim(steps3);
