// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget")
   missionTarget.innerHTML = ` 
   
   <h2>Mission Destination</h2>
   <ol>
   <li>Name: ${name}</li>
   <li>Diameter: ${diameter} </li>
   <li>Star: ${star}</li>
   <li>Distance from Earth: ${distance}</li>
   <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   
   `
}

function validateInput(testInput) {
   
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // console.log(document, list, pilot, copilot, fuelLevel, cargoLevel);
    
    let fuelLevelNumber = Number(fuelLevel);
    let cargoLevelNumber = Number(cargoLevel);
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    
    console.log(`fuel level ${fuelLevelNumber}`);
    console.log(`cargo level ${cargoLevelNumber}`);
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
        return alert("All fields must have a value")
        
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        return alert("Please enter a valid number")
    } 
    
    if (fuelLevelNumber < 10000 && cargoLevelNumber > 10000) {
        list.style.visibility = "visible";
        let fuel = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargo = document.getElementById("cargoStatus");
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "#C7254E"
        fuel.innerHTML = "Fuel level too low for launch";
        cargo.innerHTML = "Cargo mass too heavy for launch"
    } else if (fuelLevelNumber < 10000 && cargoLevelNumber <= 10000) {
        list.style.visibility = "visible";
        let fuel = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargo = document.getElementById("cargoStatus");
        fuel.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "#C7254E"
        cargo.innerHTML = "Cargo mass low enough for launch"
    } else if (cargoLevelNumber > 10000 && fuelLevelNumber >= 10000) {
        list.style.visibility = "visible";
        let fuel = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargo = document.getElementById("cargoStatus");
        cargo.innerHTML = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuel.innerHTML = "Fuel level high enough for launch"
        launchStatus.style.color = "#C7254E"
    } else {
        list.style.visibility = "visible";
        let fuel = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargo = document.getElementById("cargoStatus");
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "#419F6A"
        fuel.innerHTML = "Fuel level high enough for launch"
        cargo.innerHTML = "Cargo mass low enough for launch"
        
    }

    
    
    
    
}

async function myFetch() {
    let planetsReturned;
    
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        
               //console.log(json)
            //    return planetsReturned 
                if (response.status >= 400){
                    throw new Error("bad response");
                } else {
                    return response.json();
                }
            
        });
        //console.log("json maybe", planetsReturned);
        
        return planetsReturned;
    
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    let planet = planets[index];
// console.log(planets.length)   
// console.log(randomNumber)   
 //console.log(planet)
return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
