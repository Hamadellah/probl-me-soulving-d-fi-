const prompt= require("prompt-sync")()
let str = prompt("entrer le mots :")
let inversestr=str.split("").reverse().join("")
if (inversestr===str){
    console.log(str)
}else{
    console.log("le mots est n'est pas palindorm ")
}

