//rest
const usuario = {
    nome: 'Max',
    idade: 39,
    empresa: 'Gerdau'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5,6];

const [a, b, ...c ] = arr;
console.log(`${a}\n${b}\n${c}`);


function soma(a,b,...params){
    return params.reduce((total,next) => total + next);
}

console.log (soma(1,2,3,5,8,11,54));

//spred
const arrX = [1,2,3];
const arrY = [4,5,6];
const arrayz = [...arrX,...arrY];

console.log(arrayz);

const aluno1 = {
    nome : 'Max',
    idade : 39,
    empresa: 'Gerdau',
};

const aluno2 = {...aluno1, nome:'Heitor'};

console.log(aluno2);