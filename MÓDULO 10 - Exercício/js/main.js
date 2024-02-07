$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        telefone: { 
            required: true
        },
        email: { 
            required: true
        },
        cpf: { 
            required: true
        },
        endereço: {
            required: true
        },
        cep: {
            required: true
        }
        
    },
    messages: {
        nome:'Por favor, informe seu nome completo'
        },
})










