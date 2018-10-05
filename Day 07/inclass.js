class Student {
    constructor(name, age, gender, grade){
        this.name = name;
        this.age = age;
        this.gender =  gender;
        this.grade =  grade;
    }

    changeAge(newAge){
        this.age = newAge;
        console.log(this.name);
        console.log(this.age);
    }
}

const Tom = new Student('Tom', 28, 'M', 50)
const Sam = new Student('Sam', 30, 'M', 50)

console.log(Tom)

Tom.changeAge(99)