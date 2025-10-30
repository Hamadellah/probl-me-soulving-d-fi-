const prompt= require("prompt-sync")()

let tableau1=prompt("entrer le mots ")


let compt={}
for (let i=0 ;i<=tableau1.length;i++){
let element = tableau1[i]
if (compt[element]){
    compt[element]++
}else{
    compt[element]=1
}
}
console.log(compt)

