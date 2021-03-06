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
