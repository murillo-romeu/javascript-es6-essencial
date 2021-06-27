// A declaraçãod avariável são elevadas no escopo que ela está
// não é atribuido o valor, apenas realizado a declaração da variável
function fn(){
  // Variável já vai estar declara com undefined
  console.log(text);

  var text = 'Exemplo';

  // variável vai estar com o conteúdo que lhe foi atribuido
  console.log(text);
}

fn();