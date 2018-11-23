class Gambler {
    constructor(name, loseProbability) {
      this.name = name;
      this.loseProbability = loseProbability;
      this.chip = 100;
    }
  
    gambling() {
      var random = Math.random()
      if (random <= this.loseProbability) {
        this.chip -= 10;
        console.log(this.chip);
      } else {
        this.chip += 10;
        console.log(this.chip);
      }
      if (this.chip > 0) {
        this.gambling()
      } else {
        console.log(this.name + " lose!!!")
      }
    }
  
  }
  
  const tom = new Gambler('Tom', 0.8)
  const ken = new Gambler('Ken', 1)
  
  tom.gambling()
  ken.gambling()
  