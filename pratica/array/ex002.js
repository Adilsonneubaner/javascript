let array = [1,2,3,4,5]
var maior = array[0]
for(pos in array){
    if(maior < array[pos]){
        maior = array[pos]
    }
}
console.log(maior)