const arr = [1,3,4,5,8,9];

//novo vetor receber valores e posição de cada vetor.
const newArr = arr.map(function(item,index){
    return item + index;
});

console.log(newArr);

//consumir todo vetor e transformar em uma unica variavel
const sum = arr.reduce(function(total,next){
    return total + next;
});

console.log(sum);

//filtrar
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//verificar se existe alguma informação dentro do array
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);