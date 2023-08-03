// Write your JavaScript code here!




window.addEventListener("load", function() {
    
    let submitButton = document.getElementById("formSubmit");
    // let faultyItems =document.getElementById("faultyItems");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let mass = document.querySelector("input[name=cargoMass]");
    let list ="";
    
    let listedPlanets;
    //Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch() ;
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
        addDestinationInfo(document, 'name', 'diameter', 'star', 'distance', 'moons', 'imageUrl');

    })

    
    submitButton.addEventListener("click", function(event) {
        console.log("Submit button was clicked");
        
        formSubmission(window.document,list,pilotName.value,copilotName.value,fuel.value,mass.value);
        
        
        
        event.preventDefault();
    })
    
   console.log("page loaded")
});

