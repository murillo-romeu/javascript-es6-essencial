// let aceita escopo de bloco, escopo de função e escopo global.
let test = 'example';

(() => {
  let test = 'example função'
  console.log(`Valor dentro da função: ${test}`);

  if (true) {
    let test = 'example if'

    console.log(`Valor dentro do if: ${test}`);
  }

  console.log(`Valor após a execução do if: ${test}`);
})();