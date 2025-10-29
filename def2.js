const prompt= require("prompt-sync")()
let n = Number(prompt("entrer un nombre "))
 if (n % 5 === 0 && n % 3 === 0){
    console.log(" techlead")
}else if (n % 3 ===0){
    console.log("tech ")

}else if (n % 5 === 0){
    console.log("lead")
}else if (n % 5 === 0 && n % 3 === 0){
    console.log(" techlead")
}else{
    console.log(n)
}