var km = new Vue({
    el: "#km",
    data: {
        kmLBL: 0
    },
    computed: {
        miles: function() {
            return this.kmLBL * 0.62137119
        }
    }//,
//      methods: {
//          clearInput: function () {
//              this.kmLBL = 0
//          }
//      }
})
            
function convert() {
    const mi = document.getElementById("milesLBL").value;
    const result = (mi * 1.609344) + " km"
    document.getElementById("kilometersLBL").innerHTML = result;
    
    //localstorage to store number of times the converter was used
    if (localStorage.counter) {
        localStorage.counter = Number(localStorage.counter) + 1;
    }
    else {
        localStorage.counter = 0;
    }
    document.getElementById("numOfConverts").innerHTML = localStorage.counter;
}


function getPokemon () {
    const pokeURI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let randomPokemon = Math.floor(Math.random() * 807) + 1;
    const fullPokeURI = pokeURI + randomPokemon + ".png";
    document.getElementById("pokeResult").src = fullPokeURI;
}