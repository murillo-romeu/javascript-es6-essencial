// in
// something in somthingItems

// in em arrays
var arvores = new Array('pau-brasil', 'cedro', 'carvalho', 'aroeira')

//considera o índice e propriedades e não o valor
console.log(0 in arvores);
console.log(3 in arvores);
console.log(7 in arvores);
console.log('cedro' in arvores);
console.log('length' in arvores);

// in em objetos pre definidos
console.log('PI' in Math);

var minhaString = new String('coral')
console.log('length' in minhaString);

// in objetos personalizados
var meuCarro = {
  marca: 'Ford',
  modelo: 'Ka',
  ano: '2010'
}

console.log('marca' in meuCarro);
console.log('Ford' in meuCarro);

// instanceof - verificar se é uma instancia de um objeto específico
// objeto instanceof tipoObjeto

var dia = new Date()
console.log(dia instanceof Date);