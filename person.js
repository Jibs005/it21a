class Person {
    constructor(name, age,occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
     getName() {
        return this.name;
    }   

    displayInfo() {
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("occupation: " + this.occupation);
        console.log("--------------");
    }


}

const person1 = new Person("Coco Martin", 24, "Masahista");

person1.getName();
person1.displayInfo();