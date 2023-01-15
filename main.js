const drivers = "http://ergast.com/api/f1/drivers/alonso.json"
const constructors = "http://ergast.com/api/f1/constructors"
const limit = "?limit = 1000"
const driver = "(event)"
const json1 = ".json"
const DriversNames = []
const questionButton = document.querySelector("button")

fetch(drivers)
.then((response) => response.json())
// .then((data) => console.log(data));
.then (function(response) {
    if (response) {
        const p = document.createElement("p");
        p.innerText = "We are Connected to the ergast API";
        document.body.appendChild(p); 
    }
})

questionButton.addEventListener('submit', (event) => {
    event.preventDefault()

    fetch(`${drivers}${driver}${json1}`)
  .then((res) => res.json())
    .then((response) => {
        console.log(response.results)

    })

