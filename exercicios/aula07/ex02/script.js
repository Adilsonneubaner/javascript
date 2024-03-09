function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano').value
    var res = window.document.querySelector('div#res')
    if(fano.length == 0 || fano > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('test')
        var idade = ano - fano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('src', 'homem-jovem.png')
        if(fsex[0].checked){
            var genero = 'Homem'
            if(idade < 11){
                img.setAttribute('src', 'menino.png')  
            }else if(idade < 21){
                img.setAttribute('src', 'homem-jovem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'homem-adulto.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
        } else{
            var genero = 'Mulher'
            if(idade < 11){
                img.setAttribute('src', 'menina.png')   
            }else if(idade < 21){
                img.setAttribute('src', 'mulher-jovem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'mulher-adulta.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}