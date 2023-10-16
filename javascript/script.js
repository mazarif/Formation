// console.log("texte");
// var text = 'texte';
// let text2 = "texte2";
// let nb1 = 10;
// let nb2 = 5;
// let nb3 = nb1;
// nb1 = nb2;
// nb2 = nb3;
// console.log(nb1,nb2);
// let nbr1 = -2
// if ( nbr1 > 0) {
// console.log(`nbr1 est positif`);
// }else{ (nbr1 < 0) 
// console.log(`nbr1 est negatif`);
// }
// let nbr1 = -6
// let nbr2 = 3
// if (nbr1 + nbr2 > 0){
//     console.log(`la somme est positive`);
// }else{
// console.log(`la somme est negative`);
// }
// let nbr1 = prompt("Saisir le nombre 1");
// let nbr2 = prompt("Saisir le nombre 2");
// let multiplication = nbr1 * nbr2
// if (nbr1 > 0 && nbr2 >0){
//     console.log("positif");
// }
// else if(nbr1<0 &&nbr2<0){
//     console.log("positif");
// }
// else if(nbr1 == 0||nbr2 ==0){
//     console.log("nul");
// }
// else{console.log("negatif");
// }

// let age = prompt("saisir l'age");
// if (age=>6 && age<=7 ) {
//     console.log("Poussin");}
//     else if (age>=6 && age<=9) {
//         console.log("Pupille");
//     }
//     else if (age>=10 && age<=11) {
//         console.log("Minime");
//     }
//     else{
//         console.log(Cadet);
//     }
let age = parseInt(prompt("Saisir l'age"));
switch(true) {
case age >=6 && age <=7:
 console.log("poussin");
 break;
 case age >=8 && age <=9:
 console.log("pupille");
 break;
 case age >=10 && age <=11:
    console.log("minime");
    break;
    case age >=12:
 console.log("cadet");
 break;
} 
