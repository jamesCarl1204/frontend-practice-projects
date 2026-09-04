 

async function pokemon() {
    const img = document.getElementById("charImg")
    const input = document.getElementById("pokemonName").value
    const info = document.getElementById("info")
    
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    const json = await data.json() 

    
    img.src = json.sprites.front_shiny;

    info.innerHTML = `<h1>ID:${json.id}</h1> 
                      <h1>Name:${json.name}</h1> 
                      <h1>Height:${json.height}</h1>
                      <h1>Weight:${json.weight}</h1> 
                      `
}

pokemon() 