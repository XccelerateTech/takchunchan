class Player {
  constructor (name) {
      this.name = name;
      this.health = 100;
      this.bonus = 0
  }

  heal (){
     this.health += 5;
     this.bonus = 0;
     console.log(this.name + ' heal')
  }
}

const player1 = new Player('player1')
const player2 = new Player('player2')

var round = 1 //round counter

function randomAttack(){
/* random attack*/
  random = (Math.floor(Math.random() * (3 - 1) + 1));

  if (random == 1) {
    player1.health -=10;
    player2.bonus +=1; // consecutive attack counter
    player1.bonus = 0;
  } else {
    player2.health -=10;
    player1.bonus +=1;
    player2.bonus = 0;
  };
  
  /* Heal when attack 3 times consequetively*/
  if (player1.bonus == 3){
    player1.heal()
  };
  if (player2.bonus == 3){
    player2.heal()
  };

  /* To avoid overkill*/
  if (player1.health == -5){
    player1.health += 5
  }
  if (player2.health == -5){
    player2.health += 5
  }

  console.log('round' + round)
  console.log(player1);
  console.log(player2);  
  round += 1  
}

while (player1.health > 0 && player2.health > 0) {
  randomAttack()
}
