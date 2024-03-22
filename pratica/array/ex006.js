var array = [20,1]
if(array[0] < array[1]){
    for(pos in array){
        console.log(array[pos])
    }
}else{
    for(var pos = array.length - 1; pos >= 0; pos--){
        console.log(array[pos])
    }
}