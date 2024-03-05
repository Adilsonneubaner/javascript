var agora = new Date()
var hora = agora.getHours()
var horario = window.document.getElementById('horario')
var fundo = window.document.getElementsByTagName('body')[0]
var imagem = window.document.getElementById('imagem_circular')
if(hora < 4){
    horario.innerHTML = `<p>Agora são ${hora} horas.</p>`
    fundo.style.backgroundColor = '#120A0D'
} else if(hora >= 4 && hora < 12){
    horario.innerHTML = `<p>Agora são ${hora} horas.</p>`
    fundo.style.backgroundColor = '#F3B067'
} else if(hora >= 12 && hora <= 18){
    horario.innerHTML = `<p>Agora são ${hora} horas.</p>`
    fundo.style.backgroundColor = '#9B431F'
} else if(hora > 18){
    horario.innerHTML = `<p>Agora são ${hora} horas.</p>`
    fundo.style.backgroundColor= '#241D39'
}