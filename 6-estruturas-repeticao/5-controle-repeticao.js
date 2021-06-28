// break

var index = 0;

while (true) {
  index += 1;

  if ( index > 2 ) {
    break;
  }

  console.log(index);
}

console.log('--------');

// continue
const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index += 1) {
  const element = array[index];

  if (element % 2 === 0) {
    continue
  }

  console.log(element);
}