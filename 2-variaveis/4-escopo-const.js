// const - escopo bloco, função, global
(() => {
  const test = 'valor função';
  console.log(`Valor dentro da função: ${test}`);

  if (true) {
    const test = 'valor if';
    console.log(`Valor dentro do if: ${test}`);
  }

  console.log(`Valor após a função: ${test}`);
})();