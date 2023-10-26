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
// let age = parseInt(prompt("Saisir l'age"));
// switch(true) {
// case age >=6 && age <=7:
//  console.log("poussin");
//  break;
//  case age >=8 && age <=9:
//  console.log("pupille");
//  break;
//  case age >=10 && age <=11:
//     console.log("minime");
//     break;
//     case age >=12:
//  console.log("cadet");
//  break;
// } 
// let valeur1 = (prompt("Saisir valeur1 numerique"));
// let valeur2 = (prompt("Saisir valeur2 numerique"));
// let valeur3 = (prompt("Saisir valeur3 numerique"));
// let tab = [];
// tab[0] = valeur1;
// tab[1] = valeur2;
// tab[2] = valeur3;
// if(valeur1 <= valeur2 && valeur2<=valeur3){
// console.log('valeur trié par ordre croissant');
// }
// else{
//     console.log('valeur non trié par ordre croissant');
// let tab = [] 
// tab[0] = (prompt("Saisir nom"));
// tab[1] = parseFloat(prompt("Saisir prix"));
// tab[2] = (prompt("Saisir quantite"));
// let prixTTC = tab[1]*tab[2]*1.20
// tab.push(prixTTC)
// console.log('Le prix TTC est :'+ tab[3]);

let indice = 0;
let users = [];
for(let i = 0; i<5; i++){
    let user = {
        'nom': prompt("user num "+(i+1)+" Saisir le nom :"),
        'prenom':prompt("user num "+(i+1)+" Saisir le prénom"),
        'age':prompt("user num "+(i+1)+" Saisir l'age"),
        'tel':prompt("user num "+(i+1)+" Saisir le numéro")
    }
    //version avec indice
    //users[i] = user;
    //version avec push
    users.push(user);
}
let minAge = users[0].age;
for(let i = 0; i<users.length; i++){
    //compare si l'age de la colonne est plus petit que l'age de minAge
    if(users[i].age < minAge){
        //remplacer les valeur age minimum
        minAge = users[i].age;
        //remplacer la valeur de la colonne (indice du tableau)
        indice = i;
    }
}
console.log("L'utilisateur le plus jeune est : "+users[indice].prenom+" "+users[indice].nom);