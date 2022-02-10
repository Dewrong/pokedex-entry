function pokedexEntry() {
    let information = "replaced";
    let speciesName = '';
    let img = '';

    fetch('https://pokeapi.co/api/v2/pokemon/torterra')
        .then(species => species.json())
        .then(data => {
            speciesName = data.name.charAt(0).toUpperCase()+ data.name.slice(1);
            document.getElementById("speciesName").innerHTML = speciesName,
            document.getElementById("height").innerHTML = ((0.328084 * data.height).toFixed(2)+" feet")
            document.getElementById("weight").innerHTML = ((0.220462 * data.weight).toFixed(2) +" lbs")
            document.getElementById("photo").src = data.sprites.front_default             
            document.getElementById("shinyPhoto").src = data.sprites.front_shiny
        })
    //speciesName= getPokemonName(){
    //  return 0;
    //};
    //getPokemonHeight();
    //getPokemonWeight();
}
//species => species.json()
//(function(species){return species.json();})

pokedexEntry();