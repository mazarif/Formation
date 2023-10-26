// function calculer(){
//     let quantite = parseInt(document.querySelector('#quantite').value);
//     let prixHt = parseFloat(document.querySelector('#prixHt').value);
//     let total = 0;
//     if(quantite =="0"){
//         total = "Veuillez saisir une valeur supérieure à 0";
//     }
//     if(quantite ==""){
//         total = "Veuillez renseigner la quantite";
//     }
//     if(isNaN(quantite)){
//         total = "Veuillez saisir une valeur numérique";
//     }
//     else{
//         total = (prixHt*quantite*1.20).toFixed(2) + " €"
//     }
//     resultat.textContent = total;
// }

// corrigé

// function calculer(){
//     //Récupération des 3 inputs de la page HTML
//     const nom = document.querySelector('#nom').value;
//     const prixHt = parseFloat(document.querySelector('#prixHt').value);
//     const quantite = parseInt(document.querySelector('#quantite').value);
//     //Récuperation de la zone (afficher le résultat)
//     const resultat = document.querySelector('#resultat');
//     let total = 0;
//     //tester si les champs sont bien remplis
//     if(prixHt == "" || quantite=="" || isNaN(prixHt) || isNaN(quantite) || nom ==""){
//         total = "Veuillez renseigner les valeurs avec des nombres";
//     }
//     else{
//         total = "Le prix total de "+nom+" est égal à : "+(prixHt*quantite*1.20).toFixed(2)+" €";
//     }
//     resultat.textContent = total;
// }



// function addTask(){
//     //récupération de l'élément HTML (ajouter des titres)
//     const liste = document.getElementById('tasks');
//      //récupération de l'input HTML (#task)
//      const task = document.querySelector('#task').value;
//     //Créer un paragraphe
//     const paragraphe = document.createElement('p');
//     // Ajouter la valeur de l'input (id task)  au paragraphe,
//     paragraphe.textContent = task ;
//     liste.appendChild(paragraphe);
// }
// function delAllTask(){
//     const liste = document.getElementById('tasks'); 
//     while (liste.firstChild) {
//         liste.removeChild(liste.firstChild);
// }
// }

// function reload(){
//     location.reload();
// }



let statut = true
function updateTask(e){
    const input = document.createElement('input');
    input.setAttribute('type,text');
    const valeur = document.querySelector('#task').value;
    if(statut = true){
        const paragraphe =document.querySelector('paragraphe').value;
        replaceChild(input,paragraphe);
        input.value = 1
        statut.value = false
    }
    else{
        const input = document.createElement('input').value;
        const paragraphe =document.createElement('paragraphe');
        replaceChild(paragraphe,input);
        paragraphe.value = 1
        statut.value = true
    }

      }
    
