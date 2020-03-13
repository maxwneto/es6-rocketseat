//constantes não pode ter valores reatribuidos apenas mutados

//exemplo mutação
const usuario = {
    nome:'Max Wilson',
    idade:'30',
    estadoCivil:'casado'
};

console.log(usuario);

usuario.nome ='Heitor';
usuario.idade =4;
usuario.estadoCivil = 'solteiro';

console.log(usuario);