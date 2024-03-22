var array = [1,2,3,4,5]
var par = 0
for(pos in array){
    if(array[pos] % 2 == 0){
        par += array[pos]
    }
}
console.log(par)