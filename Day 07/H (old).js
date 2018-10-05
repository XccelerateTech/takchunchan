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


class Bat {
    constructor(){
    this.animal = new FlyAnimal()
    this.feed_milk = true;
    this.lay_eggs = false;
}}

class Fish {
    constructor(){
    this.animal = new SwimAnimal();
    this.lay_eggs = true;
    this.feed_milk = false;
}}

class Whale {
    constructor(){
    this.animal = new SwimAnimal();
    this.feed_milk = true;
    this.lay_eggs = false;
}}

class Bird {
    constructor(){
    this.animal = new FlyAnimal();
    this.lay_eggs = true;
    this.feed_milk = false;
}}

const fish = new Fish()

console.log(fish.lay_eggs)