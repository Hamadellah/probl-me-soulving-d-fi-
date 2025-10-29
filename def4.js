let tab= [2, 4, -6,5 ,3, 5, 7]
let som=0
function somme(){

    for (let i = 0; i < tab.length; i++) {

        if(tab[i]<0){
            break;}
        else {
            som=som+tab[i]
        }

    }
    return som
}
console.log(somme());