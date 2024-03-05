function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var horario = window.document.getElementById('horario')
    var fundo = window.document.getElementsByTagName('body')[0]
    var img = window.document.getElementById('foto')
    horario.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if(hora < 4){
        fundo.style.backgroundColor = '#120A0D'
        img.src = 'madrugada_circulo.png'
    } else if(hora >= 4 && hora < 12){
        fundo.style.backgroundColor = '#F3B067'
        img.src = 'manha_circulo.png'
    } else if(hora >= 12 && hora <= 18){
        fundo.style.backgroundColor = '#9B431F'
        img.src = 'tarde_circulo.png'
    } else if(hora > 18){
        fundo.style.backgroundColor= '#241D39'
        img.src = 'noite_circulo.png'
    }
}