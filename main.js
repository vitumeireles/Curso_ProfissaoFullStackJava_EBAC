$(document).ready(function() {
    // Adicionar tarefa
    $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#task-input').val();
        if (taskName.trim() !== '') {
            $('#task-list').append('<li>' + "•" + " " + taskName + '</li>');
            $('#task-input').val('');
        }
    });

    // Marcar como concluído
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});

