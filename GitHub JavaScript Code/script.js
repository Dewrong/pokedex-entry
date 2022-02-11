function pokedexEntry() {
    let information = "";
    let speciesName = '';
    let img = '';
    let pokeTypeString = '';

    fetch('https://pokeapi.co/api/v2/pokemon/oddish')
        .then(species => species.json())
        .then(data => {
            const typestring = data.types[0].type.name;
            pokeTypeString = typestring.charAt(0).toUpperCase() + typestring.slice(1)
                if(data.types[1]){
                    let secondType = data.types[1].type.name
                    pokeTypeString = typestring.charAt(0).toUpperCase() + typestring.slice(1) +"/"+ secondType.charAt(0).toUpperCase()+secondType.slice(1)
                }
            speciesName = data.name.charAt(0).toUpperCase()+ data.name.slice(1);
            document.getElementById("speciesName").innerHTML = speciesName,
            document.getElementById("speciesNumber").innerHTML = "#"+data.id
            document.getElementById("speciesType").innerHTML = "Type: " + pokeTypeString
            document.getElementById("height").innerHTML = ("Height: "+(0.328084 * data.height).toFixed(2)+" ft")
            document.getElementById("weight").innerHTML = ("Weight: "+(0.220462 * data.weight).toFixed(2) +" lbs")
            document.getElementById("photo").src = data.sprites.other.home.front_default             
            document.getElementById("shinyPhoto").src = data.sprites.other.home.front_shiny
        })
}

pokedexEntry();