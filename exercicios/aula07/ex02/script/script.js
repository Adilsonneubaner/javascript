function verificar(){
    var anoatual = new Date()
    var ano = anoatual.getFullYear
    var fano = window.document.getElementById('iano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Dados incorretos')
    } else{
        window.alert('Tudo ok')
    }

}