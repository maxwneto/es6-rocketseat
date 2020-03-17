//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome,endereco:{cidade},endereco:{estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

//4.2
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
  }
  
  console.log(mostraInfo({nome: 'Max', idade: 39}))
  console.log(mostraInfo({nome: 'Heitor', idade: 04}))
  console.log(mostraInfo({nome: 'Sara', idade: 39}))
  console.log(mostraInfo({nome: 'Scooby', idade: 9}))

