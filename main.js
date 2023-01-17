
const constructors = "http://ergast.com/api/f1/constructors.json"
const URL_START = "http://ergast.com/api/f1/constructors/"



fetch(`${constructors}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
//   let listItem = document.getElementById('teamNames');
//   listItem.onchange = (ev) =>{
//     console.log("Selected value is: " + listItem.value);
//  }

  
  document.getElementById("teamNames").addEventListener('change', (event) => {
    event.preventDefault();
        let teamPic = event.target.value
        //console.log(event.target.value)
        //console.log(teamPic)
   
    fetch(`${URL_START}${teamPic}.json`)
    .then((response) => response.json())
    .then((data) => {console.log(data)
        
        document.getElementById("urllink").setAttribute("href", data.MRData.ConstructorTable.Constructors[0].url)
        document.getElementById("urllink").innerText = teamPic
        
        document.getElementById("name").innerText = data.MRData.ConstructorTable.Constructors[0].name
        
        document.getElementById("nationality").innerText = data.MRData.ConstructorTable.Constructors[0].nationality
})
})
