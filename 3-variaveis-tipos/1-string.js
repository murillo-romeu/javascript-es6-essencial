// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`Array com as posições separadas pelo delimitador: `, splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('ex', '--');
console.log('Substituição de valor:', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('Ultima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('Valor da string da primeira letra menos a ultima:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('Valor da string da segunda letra até a ultima:', secondToEnd);

// Retorna N caracteres a partir de uma posição
const twoCharBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('As duas letras primeiras são:', twoCharBeforeFirstPos)