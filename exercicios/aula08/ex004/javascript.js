function testar(){
    var inicio = window.document.getElementById('inicio').value
    var fim = window.document.getElementById('fim').value
    var passo = window.document.getElementById('passo').value
    var res = window.document.getElementById('res')
    var inicio_repeticao = Number(inicio)
    var fim_repeticao = Number(fim)
    var passo_repeticao = Number(passo)
    
    if(inicio.length == 0 || fim.length == 0) {
        res.innerHTML = 'IMPOSSÍVEL CONTAR, preencha os dados!'
    }else if(passo_repeticao == 0){
        window.alert('Você não pode usar Passo 0, o valor será substituido por 1')
        passo_repeticao = 1
        if(inicio_repeticao < fim_repeticao){
            res.innerHTML = 'Contando...<br>'
            while(inicio_repeticao <= fim_repeticao){
                res.innerHTML += `${inicio_repeticao} \u{1F449} `
                inicio_repeticao = inicio_repeticao + passo_repeticao
            }
        } else{
            res.innerHTML = 'Contando...<br> '
            while(inicio_repeticao >= fim_repeticao){
                res.innerHTML += `${inicio_repeticao} \u{1F449}`
                inicio_repeticao = inicio_repeticao - passo_repeticao
            }
        }
    }else{
        if(inicio_repeticao < fim_repeticao){
            res.innerHTML = 'Contando...<br> '
            while(inicio_repeticao <= fim_repeticao){
                res.innerHTML += `${inicio_repeticao} \u{1F449} `
                inicio_repeticao = inicio_repeticao + passo_repeticao
            }
        } else{
            res.innerHTML = 'Contando...<br> '
            while(inicio_repeticao >= fim_repeticao){
                res.innerHTML += `${inicio_repeticao} \u{1F449} `
                inicio_repeticao = inicio_repeticao - passo_repeticao
            }
        }
    }
    res.innerHTML += '\u{1F3C1}'
}
/*function testar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res =window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] digite os dados')
    } else {
        res.innerHTML ='Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(c = i; c <= f; c +=p){
            res.innerHTML += `${c}`
        }
    }
}*/ 