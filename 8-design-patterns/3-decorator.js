// Decorator
// uma função decorator recebe outra função como parâmetro e estende
// o seu comportamento sem modificá-la explicitamente
let loggedIn = false;

function callIfAuthenticator(fn) {
  return !!loggedIn && fn()
}

function sum(a, b) {
  return a + b;
}

console.log(callIfAuthenticator(() => sum(2, 3)));
loggedIn = true;
console.log(callIfAuthenticator(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAuthenticator(() => sum(2, 3)));