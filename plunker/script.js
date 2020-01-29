let pikachu = {
    name: "Pikachu",
    power: "I can electrify"
}

let charmander = {
    name: "Charmander",
    power: "I throw fire"
}

let Gastly = {
    name: "Gastly",
    power: "Ghost"
}

let pokemon = new Map();

pokemon.set("pika",pikachu);
pokemon.set("char",charmander);
pokemon.set("gas",Gastly);

// console.log(pokemon.size);
// console.log(pokemon.get("char"));
console.log(pokemon.keys());

for(key of pokemon.keys()){
    console.log(key);
    
}





