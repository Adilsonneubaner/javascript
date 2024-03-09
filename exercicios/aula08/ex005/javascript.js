function gerar(){
    var num = window.document.getElementById('num')
    var tabuada = window.document.getElementById('tabuada')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número')
    }else{
        var numero = Number(num.value)
        var c = 1
        tabuada.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}