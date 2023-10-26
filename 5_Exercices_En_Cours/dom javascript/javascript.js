const user = {
    'id' : 1,
    'nom': 'Mazari',
    'prenom': 'Farid',
    'age': 45,
    'image' :'./logo.jpg'
  }

  const div = document.querySelector("div");
  div.setAttribute = ("user.id",user.id)

  const p1 = document.querySelector("p : nth-child(2)");
  const p2 = document.querySelector("p : nth-child(3)");
  const p3 = document.querySelector("p : nth-child(4)");

  p1.textContent = user.nom;
  p2.textContent =  user.prenom;
  p3.textContent =  user.age;

  const img = document.querySelector ("img");
  img.textContent = "user.image";
  img.setAttribute = ("src", user.image);

p.style.fontSize = "11px";
p.style.color = "blue";

img.size = "width = 100px ";
img.size = "height = 100px";

p1.style.fontSize = "11px";
p1.style.color = "blue";

p2.style.fontSize = "11px";
p2.style.color = "blue";

p3.style.fontSize = "11px"
p3.style.color = "blue"

div.style.background = "rgb(220,220,220)"

