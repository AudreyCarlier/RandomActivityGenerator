// google translate
// TRADUCTION

function googleTranslateElementInit() { 
    new google.translate.TranslateElement(
        {pageLanguage: 'en'}, 
        'google_translate_element'
    ); 
} 

// MÉTHODES DOM

const fetchDataBtn = document.querySelector('#submit')
const showHistoryBtn = document.querySelector('#historybutton')
const card = document.querySelector('#activity-card')
const title = document.querySelector('#activitytitle')
const type = document.querySelector('#activitytype')
const pax = document.querySelector('#activityparticipants')
const price = document.querySelector('#activityprice')
const history = document.querySelector('tbody')
const paxselect = document.getElementById('participantsSelect')
const typeselect = document.getElementById('typeSelect')
const priceCheckbox = document.getElementById('price-checkbox')
const historyTable = document.getElementById('tableContainer')

let historyArray = []

let div = document.querySelector("#content-2")



// FONCTION POUR FETCH LES DONNÉES

const getData = function() {
fetchDataBtn.innerText = 'Loading....'

if (priceCheckbox.checked) {priceCheckbox.value = 0}
else { priceCheckbox.value = ""}


  fetch("https://www.boredapi.com/api/activity?participants=" + paxselect.value + '&type=' + typeselect.value + "&price=" + priceCheckbox.value)
 
    .then(res => res.json())
   
    .then( (data) => {
      console.log(data);

      if (data.price == 0){

        data.price = "Yes";
      }

      else {

        data.price = "No"
      }

      console.log(historyArray)
      console.log(historyArray.includes(title.textContent))

      if (data.activity != undefined) {
      let activityTitle = data.activity 

     title.innerHTML = '<a id="activitylink" href="https://google.com/search?q=' + activityTitle +'" target="_blank">' + activityTitle +' <i class="fa-solid fa-white fa-arrow-up-right-from-square"></i></a>'
      type.innerHTML = '<b>Type: </b>' + data.type  
      pax.innerHTML =  '<b>Participants: </b> ' + data.participants
      price.innerHTML = '<b> Free?  </b>' + data.price 


    }
    else {
      title.innerHTML = 'No results found'
      type.innerHTML = "Please change your search criteria and try again"  
      pax.innerHTML =  ''
      price.innerHTML = '' 
    }
   
    fetchDataBtn.innerText = "Generate random activity"

    })
    .catch(error => console.log(error))

}  


// AJOUT A L'HISTORIQUE

function addToHistory() {

  
 
  if(title.innerHTML != "" && title.innerHTML != "undefined" && title.innerHTML !='No results found' && historyArray.includes(title.textContent) == false) {

let newRow = document.createElement('tr');

history.append(newRow)

newRow.innerHTML = '<td><a href="https://google.com/search?q=' + title.textContent + '"target="_blank">'+ title.textContent + '</td><td>' + type.textContent + '</td><td>' + pax.textContent + '</td><td>' + price.textContent + '</td><td>'

historyArray.push(title.textContent)
  

}
}

// SHOW/HIDE HISTORY

function showHistory(){

  if (historyTable.style.visibility === "hidden"){

  historyTable.style.visibility = "visible";

}

else {

  historyTable.style.visibility = "hidden";

}
  
}


// ÉVÉNEMENTS BOUTONS

fetchDataBtn.addEventListener('click', getData)

fetchDataBtn.addEventListener('click', addToHistory)

showHistoryBtn.addEventListener('click', showHistory)



