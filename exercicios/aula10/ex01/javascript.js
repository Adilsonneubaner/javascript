let num = document.getElementById('num')
let lista = document.getElementById('mostrar')
let res = document.getElementById('res')
let valores = []
let contador = 0
let soma = 0
let maior = 0
let menor = 0

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return false
    } else{
        return true
    }
}

function adicionar(){
    if(isNumero(num.value) && inLista(num.value, valores)){
        valores[contador] = Number(num.value)
        if(contador == 0){
            maior = valores[contador]
        } else if(valores[contador] > valores[contador - 1]){
            maior = valores[contador]
        }
        if(contador == 0){
            menor = valores[contador] 
        }else if(valores[contador] < valores[contador - 1]){
            menor = valores[contador]
        }
        soma = soma + valores[contador]
        lista.innerHTML += `<option value="">O valor ${valores[contador]} foi adicionado</option>`
        res.innerHTML = ''
        contador++
        
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus() 
}


function finalizar(){
    if(valores == 0){
        window.alert('Você não pode executar essa ação pois não declarou nenhum valor.')
    } else{
        res.innerHTML = ''
        res.innerHTML += `<p>Você adicionou ${valores.length} números.</p>`
        res.innerHTML += `<p>O maior número adicionado foi ${maior}.</p>`
        res.innerHTML += `O menor número adicionado foi ${menor}.`
        res.innerHTML += `<p>A soma dos valores adicionados foi ${soma}.</p>`
        let media = soma / valores.length
        res.innerHTML += `<p>A média dos valores foi ${media.toFixed(2)}</p>`
    }
    
}
