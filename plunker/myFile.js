let marvel = new Set(["batman","superman","superman"]);

marvel.add("john cena");
marvel.add("batman");

console.log(marvel);

for(r of marvel){
    console.log(r);
    
}

console.log(marvel.has("Ravikaran"));

