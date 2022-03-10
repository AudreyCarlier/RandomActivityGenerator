const fetchDataBtn = document.querySelector('#submit')
const result = document.querySelector('#content')


const getData = function() {
  result.innerText = 'Loading....'
  fetch("data.json")
    .then(res => res.json())
    .then( (data) => {

        for (let i in data){
document.getElementById("content").innerText = JSON.stringify(data[i]);
}
    })
    .catch(error => console.log(error))
}


fetchDataBtn.addEventListener('click', getData)