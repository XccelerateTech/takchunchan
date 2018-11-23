class FlyAnimal{
    constructor(){
    this.can_fly = true;
    this.can_swim = false;
}}

class SwimAnimal{
    constructor(){
    this.can_swim = true;
    this.can_fly = false
}}


class Bat extends FlyAnimal{
    constructor(){
    super();
    this.feed_milk = true;
    this.lay_eggs = false;
}}

class Fish extends SwimAnimal{
    constructor(){
    super();
    this.lay_eggs = true;
    this.feed_milk = false;
}}

class Whale extends SwimAnimal{
    constructor(){
    super();
    this.feed_milk = true;
    this.lay_eggs = false;
}}

class Bird extends FlyAnimal{
    constructor(){
    super();
    this.lay_eggs = true;
    this.feed_milk = false;
}}

const fish = new Fish()

console.log(fish.lay_eggs)