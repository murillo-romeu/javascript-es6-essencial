// Objetos e Arrays são imutáveis
const user = {
  name: 'Murillo',
  lastName: 'Romeu'
}

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);