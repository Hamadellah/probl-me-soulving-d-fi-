const prompt= require("prompt-sync")()
let t = prompt("entrer votre mots ")
let voylle =["a","e","y","u","i"]
let comp=0
for (let i =0;i<=t.length;i++){
    if (voylle.includes(t[i]))
        comp++
}
console.log ("le nombre dde voyelle est "+comp)