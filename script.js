const fetchDataBtn = document.querySelector('#submit')
const saveDataBtn = document.querySelector('#save-data')
const card = document.querySelector('#activity-card')
const savedData = document.getElementById('#content-2')
const title = document.querySelector('#activitytitle')
const type = document.querySelector('#activitytype')
const pax = document.querySelector('#activityparticipants')
const price = document.querySelector('#activityprice')

let div = document.querySelector("#content-2")

const getData = function() {
  title.innerText = 'Loading....'
  type.innerText = ''
  pax.innerText = ''
 price.innerText = ''

  fetch("https://www.boredapi.com/api/activity")
    .then(res => res.json())
    .then( (data) => {
      console.log(data);

      if (data.price == 0){

        data.price = "Yes";
      }

      else {

        data.price = "No"
      }

     title.innerHTML = data.activity 
      type.innerHTML = 'Type : ' + data.type  
      pax.innerHTML =  'Participants : ' + data.participants
      price.innerHTML = 'Free?  ' + data.price 


console.log(data.length)

      var refTable = document.getElementById('TableA');

  // Insère une ligne dans la table à l'indice de ligne 0
  var nouvelleLigne = refTable.createElement("tr");

  for (var j = 0; i < 4; i++) {
  var nouvelleCellule = nouvelleLigne.createElement("td");

  // Ajoute un nœud texte à la cellule
  var cardText = document.createTextNode(card.innerText)


  nouvelleCellule.appendChild(cardText);
}

    })
    .catch(error => console.log(error))
}


fetchDataBtn.addEventListener('click', getData)
