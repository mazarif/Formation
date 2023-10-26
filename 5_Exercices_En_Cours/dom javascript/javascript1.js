//  quantité de chocolatine
// let nbrChoco = parseInt(prompt("Saisir le nombre de chocolatine"));
// //prix total
// let total = 0;
// //prix des chocolatines
// let prixChoco = [1.4, 1.3, 1.20];
// //tester le prix pour la quantité comprise entre 1 et 10
// if(nbrChoco > 0 && nbrChoco <= 10){
//     total = nbrChoco * prixChoco[0];
// }
// //tester le prix pour une quantité comprise entre 1 et 20
// else if(nbrChoco >= 11 && nbrChoco <= 20){
//     total = (10*prixChoco[0])+((nbrChoco-10)*prixChoco[1]);
// }
// //tester le prix pour une quantité supérieure 
// else{
//     total = (10*prixChoco[0])+(10*prixChoco[1])+((nbrChoco-20)*prixChoco[2]);
// }
// //afficher dans la console
// console.log("Le prix total est égal à : "+total);
// //afficher dans un popup
// alert("Le prix total est égal à : "+total);

const prix = document.querySelector('#resultat');
const nbr  = document.querySelector('#quantite');
//fonction recupération des valeurs

function calculer(){
let prixChoco = [1.4,1.3,1.2]
let nbrChoco = nbr.value
let total = 0
//tester le prix pour la quantité comprise entre 1 et 10
if(nbrChoco > 0 && nbrChoco <= 10){
    total = nbrChoco * prixChoco[0];
}
//tester le prix pour une quantité comprise entre 1 et 20
else if(nbrChoco >= 11 && nbrChoco <= 20){
    total = (10*prixChoco[0])+((nbrChoco-10)*prixChoco[1]);
}
//tester le prix pour une quantité supérieure 
else{
    total = (10*prixChoco[0])+(10*prixChoco[1])+((nbrChoco-20)*prixChoco[2]);
// }
// //afficher dans la console
// console.log("Le prix total est égal à : "+total);
//afficher dans un popup
// alert("Le prix total est égal à : "+total);
    


}
prix.textContent = "Le prix total est égal à : "+total;
}