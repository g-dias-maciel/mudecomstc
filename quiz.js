$(document).ready(function () {

        $('#start_quiz').click(start_quiz);

});

function start_quiz(){
        $('#box_1_container').removeClass("hidden")
        $('#start_quiz_container').addClass("hidden")
}