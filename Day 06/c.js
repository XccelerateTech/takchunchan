var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

//1.//
var result = players.filter(function(player) {
    return player.club === 'FC Barcelona';
});

console.log(result)

//2.//

var result3 = [];

var result2 = players.map(function(player){
    if (player.club === 'FC Barcelona') {
        result3.push(player.name);
    }
})
console.log(result3)