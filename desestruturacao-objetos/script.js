const usuario = {
    nome : 'Max',
    idade: 39,
    endereco: {
        cidade: 'Ouro Branco',
        estado: 'MG',        
    },
};
console.log(usuario);

const {nome, idade, endereco: {cidade}} = usuario;
console.log(`${nome}\n${idade}\n${cidade}`)

function mostraNome ({nome,idade}){
    console.log(nome,idade);
}

mostraNome(usuario);