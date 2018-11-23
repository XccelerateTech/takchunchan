class Player {
    constructor (name) {
        this.name = name;
        this.health = 100;
    }
}

const player1 = new Player('player1')
const player2 = new Player('player2')

var round = 1

function randomAttack(){
    random = (Math.floor(Math.random() * (3 - 1) + 1));
    if (random == 1) {
      player1.health -=10
    } else {
      player2.health -=10
    };
    console.log('round' + round)
    console.log(player1);
    console.log(player2);
    round += 1
    }

while (player1.health !== 0 && player2.health !== 0) {
  randomAttack()
}
