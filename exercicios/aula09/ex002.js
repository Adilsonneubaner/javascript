var num = [1,5,2,7,4]

for(var pos = 0;pos < num.length;pos ++){
    console.log(num[pos])
}
console.log('Escrevendo na tela usando o método simplificado e colocado em ordem')
num.sort()
for(var pos in num){
    console.log(num[pos])
}