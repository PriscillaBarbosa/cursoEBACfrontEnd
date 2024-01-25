$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nomeNovaTarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);

        $(novaTarefa).appendTo(novoItem);
        $(novoItem).appendTo('ul'); 
        $('#nomeNovaTarefa').val('');
    })

        $('ul').on('click', 'li', function() {
        $('li').addClass('remover-tarefa');
    
    })

})
