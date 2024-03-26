function calcular(){
    var res = window.document.getElementById('res')
    var a = Number(window.prompt('Qual é o valor de a?'))
    var b = Number(window.prompt('Qual é o valor de b?'))
    var c = Number(window.prompt('Qual é o valor de c?'))

    var delta = b ** 2 - 4 * a * c

    res.innerHTML = `<p>A equação atual é <strong>${a}</strong>x<sup>2</sup> + <strong>${b}</strong>x + <strong>${c}</strong> = 0</p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `O valor calculado foi <strong>Δ = ${delta}</strong>`

    if(delta > 0){
        res.innerHTML += `<p>O valor resultante tem duas raízes reais e distintas.</p>`

        var bhaskara1 = (- b + Math.sqrt(delta)) / 2 * a
        var bhaskara2 = (- b - Math.sqrt(delta)) / 2 * a

        res.innerHTML += `<p>Raiz 1:<strong> ${bhaskara1}</strong></p>`
        res.innerHTML += `<p>Raiz 2:<strong> ${bhaskara2}</strong></p>`
    }else if(delta == 0){
        res.innerHTML += `<p>O valor resultante tem apenas uma raiz real.</p>`
        
        var bhaskara1 = (- b + Math.sqrt(delta)) / 2 * a
        var bhaskara2 = (- b - Math.sqrt(delta)) / 2 * a

        res.innerHTML += `<p>Raiz 1:<strong> ${bhaskara1}</strong></p>`
        res.innerHTML += `<p>Raiz 2:<strong> ${bhaskara2}</strong></p>`
    }else if(delta < 0){
        res.innerHTML += `<p>O valor resultante não tem raiz real.</p>`
    }
}