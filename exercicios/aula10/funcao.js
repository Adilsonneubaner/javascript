function par_impar(n){
    if(n % 2 == 0){
        return 'Par'
    } else{
        return 'Impar'
    }
}

var res = par_impar(5050)
console.log(res)