quiz = {
    "Você tem dificuldades para perder peso?": ['SIM', 'NÃO'],
    'Você se sente motivada para praticar exercícios?': ['SIM', 'NÃO'],
    'Você já fez alguma dieta e não teve os resultados esperados?': ['SIM', 'NÃO'],
    'O vídeo de apresentação a seguir é exclusivo e tem um limite de pessoas que podem acessar ao mesmo tempo. Você pretende assistir até o final?': ['SIM', 'NÃO']
}


$(document).ready(function () {

       $('#start_quiz').click(start_quiz);
       $('#option_1, #option_2').click(next);

});

function start_quiz(){
    update_quiz(0);
    $('#box_1_container').removeClass("hidden")
    $('#start_quiz_container').addClass("hidden")
}

function next(){
    var current_question = $('#box_1_container').attr('page');
    var new_page = parseInt(current_question) + 1;

    $('#box_1_container').attr('page', new_page)
    update_quiz(new_page);



}

function update_quiz(next_question){
    var quiz_indexes = Object.keys(quiz);
    var question_label = quiz_indexes[next_question]

    //todo check if is last question

    $('#question_text_0').html(question_label)

    for (let j = 1; j <= quiz[question_label].length; j++){
        $('#label_option_'+ j).text(quiz[question_label][j-1])
    }

}