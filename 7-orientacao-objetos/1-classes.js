// declaração da classe
class Animal {
  constructor(patas){
    this.patas = patas;
  }

  andar() {
    console.log('walk... walk... walk...');
  }
}

// herdando a classe animal para cachorro
class Cachorro extends Animal {
  constructor(patas, morde) {
    super(patas);
    this.morde = morde;
  }

  latir() {
    console.log('au... au.. au.. au... au...');
  }
}

const pug = new Cachorro(4, false);

console.log(pug);
pug.latir()
pug.andar()