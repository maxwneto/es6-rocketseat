const usuarios = [
    {nome: 'MaX Wilson', idade: 39, empresa: 'Gerdau'},
    {nome: 'Sara Santos', idade: 41, empresa: 'Familia'},
    {nome: 'Heitor Neto', idade: 4, empresa: 'Sesi'},
]
//2.1
const mapIdade = usuarios.map(usuario => usuario.idade);
console.log(mapIdade);


//2.2
const filterEmpresa = usuarios.filter(usuario => usuario.idade > 3 && usuario.empresa === 'Sesi');
console.log(filterEmpresa);

//2.3
const findEmpresa = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(findEmpresa);

//2.4
const calculo = usuarios.map(usuario => ({...usuario, idade: usuario.idade * 2}))
.filter(usuario => usuario.idade >= 50);
console.log(calculo);