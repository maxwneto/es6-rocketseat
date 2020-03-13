function soma (a=0,b=0){
    return a + b;
}

console.log(soma());
console.log(soma(2))

//funcao valor padrao arrow function
const soma2 = (a = 0, b =0) => a + b;
console.log(soma2(4,6));