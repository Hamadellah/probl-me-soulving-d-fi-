const prompt= require("prompt-sync")()
let n = Number(prompt("Entrer un nombre :")); 

function nombreDeFacons(n) {
  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(nombreDeFacons(n));
