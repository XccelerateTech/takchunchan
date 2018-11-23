class Monster {
    constructor (name){
        this.name = name
        this.health = 100
    }

    wound(damage){
        this.health = this.health - damage ;
        console.log(boku);
        if (this.health <= 0){
          console.log ("monster dead");}
    }
}


function hero(monster){
    damage = Math.floor((Math.random() * 15) + 5);
    while (monster.health > 0) {  // show mercy and stop killing it after it is dead
    monster.wound(damage);}
}

const boku = new Monster ('boku')

hero(boku) //attack the target