const myNumber = 3.142344

// Transformar numero para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string: ', typeof numberAsString);

// Retonar numero com um numero de casas deciamsi
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('Número com duas casas decimais: ', fixedTwoDecimals);

// Transformar uma string em float
console.log('String parseada para float:',parseFloat('3.14'), typeof parseFloat('3.14'));

// Transformar uma string em int
console.log('String parseada para int',parseInt('3.14'), typeof parseInt('3.14'));
