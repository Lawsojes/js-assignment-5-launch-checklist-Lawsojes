// Write your JavaScript code here!

window.addEventListener("load", function() {
    
    let submitButton = document.getElementById("formSubmit");
    // let faultyItems =document.getElementById("faultyItems");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let mass = document.querySelector("input[name=cargoMass]");
    let faultyItems =document.getElementById("faultyItems");
    faultyItems.style.visibility ="hidden";
    let listedPlanets;
    //Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pickedPlanet = pickPlanet(listedPlanets)
        //console.log(pickedPlanet.name)
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);

    })

    
    submitButton.addEventListener("click", function(event) {
        console.log("Submit button was clicked");
        event.preventDefault();
        
        formSubmission(window.document,faultyItems,pilotName.value,copilotName.value,fuel.value,mass.value);
        
        
        
    })
    
   console.log("page loaded")
});

