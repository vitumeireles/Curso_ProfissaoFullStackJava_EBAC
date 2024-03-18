$(document).ready(function(){
    // Aplicando máscara ao CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});
    // Aplicando máscara ao telefone
    $('#telefone').mask('(00) 0000-00009');
    // Aplicando máscara ao CEP
    $('#cep').mask('00000-000');

    // Interceptando o envio do formulário
    $('#cadastroForm').submit(function(event){
        // Evitando o comportamento padrão de envio do formulário
        event.preventDefault();
        
        // Limpar os campos do formulário
        $('#cadastroForm')[0].reset();
    });
});
