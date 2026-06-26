// var ptr=""

// for(var i=1;i<=4;i++){
//     for(var j=1;j<=4;j++){
//         ptr+="*"
//     }
//     ptr+="\n"
// }
// console.log(ptr);

// for(var i=1;i<=4;i++){
//     for(var j=1;j<=i;j++){
//         ptr+="*"
//     }
//     ptr+="\n"
// }
// console.log(ptr);

// let ptr = "";

// for (let i = 1; i <= 4; i++) {
//     // spaces
//     for (let j = 1; j <= 4 - i; j++) {
//         ptr += " ";
//     }
//     // stars
//     for (let k = 1; k <= i; k++) {
//         ptr += "* ";
//     }
//     ptr += "\n";
// }
// console.log(ptr);

// let n = 6;
// let ptr = "";

// for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= i; j++) {
//         ptr += " ";
//     }

//     for (let k = 1; k <= (i * 2 - 1); k++) {
//         ptr += "*";
//     }

//     ptr += "\n";
// }

// for(i=n-1;i<n;i--){
//      ptr +="";
//     for (let j = 1; j <= n - i; j++) {
//         ptr += " ";
//     }

//     for (let k = 1; k <= (i * 2 - 1); k++) {
//         ptr += "*";
//     }

//     ptr += "\n";
// }

// console.log(ptr);



let ptr = "";

for (let i = 1; i <= 5; i++) {
    
    for (let j = 1; j <= 5 - i; j++) {
        ptr += " ";
    }
    // stars
    for (let k = 1; k <= i; k++) {
        if(i==5||k==1||k==i)
        ptr += "* ";
        else
            ptr+=" "
    }
    ptr += "\n";
}
console.log(ptr);