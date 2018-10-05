class Person {
    constructor(options){
        this.name = options.name
        this.age = options.age
    }

    info(){
        return "The person is called " + this.name + " and is " + this.age + " years old"
    }

}

const person = new Person( {age: 44, name: 'Tom' });

person.info() // The person is called Tom and is 44 years old

class Student extends Person {
    constructor(options){
        super(options);
        this.gpa = options.gpa;
    }

    info(){
        return "The person is called " + this.name + " and is " + this.age + " years old." + " He has an overall GPA of " + this.gpa.toFixed(1) + " in the university."
    }
}

const person2 = new Student( {age: 44, name: 'Tom', gpa: 4});

person2.info() //The person is called Tom and is 44 years old. He has an overall GPA of 4.0 in the university
