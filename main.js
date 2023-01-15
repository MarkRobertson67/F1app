const drivers = "http://ergast.com/api/f1/drivers/alonso.json"
const constructors = "http://ergast.com/api/f1/constructors"
const limit = "?limit = 1000"
const driver = "{driver}"
const json1 = ".json"
const DriversNames = []

fetch(drivers)
.then((response) => response.json())
.then((data) => console.log(data));

const p = document.createElement("p");
p.innerText = "We are Connected to the ergast API";
document.body.appendChild(p);

