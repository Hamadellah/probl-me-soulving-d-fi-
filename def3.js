let tableau1 = [1, 2, 2, 3, 4, 4, 5];
let tableau2 = [];


for(let i = 0 ; i < tableau1.length; i++){
    let exist = false ; 
    for (let j = 0 ; j < tableau2.length; j++){
        if(tableau2[j] === tableau1[i]){
            exist = true; 
            break;
        } 
    }
       if (!exist){
            tableau2.push(tableau1[i]);

        }
}
console.log(tableau2)