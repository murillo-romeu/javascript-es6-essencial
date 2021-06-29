// os metodos static podem ser acessados sem que a classe
// seja isntanciada

class Person {
  static andar() {
    console.log('walk... walk... walk...');
  }
}

Person.andar();