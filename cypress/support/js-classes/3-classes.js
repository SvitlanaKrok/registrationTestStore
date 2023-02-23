class Parent {

    constructor(firstName, age){
        this.firstName = firstName
        this.age = age
        this.lastName = "Krokhmalna"
    }

    greeting(){
        console.log('Hi!')
    }

    tellName(){
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }

    tellAge(){
        console.log(`I am ${this.age} yers old!`)
    }

    tellJobTitle(){
        if(this instanceof Child){
            console.log('I do not have job title')
        }else{
            this.job = "QA";
            console.log(`My job title is ${this.job}`)  
        }

    }
}

//щоб клас Child наслідував клас Parent ми використ. ключове слово extends
class Child extends Parent{
    greeting(){
        console.log('Hi! This is new greeting')
    }

    goToSchool(){
        console.log('I like go to school')
    }
}

const parent =new Parent('Svitlana', 39);
const child = new Child('Lida', 10);

parent.greeting();
parent.tellName();
parent.tellAge();
parent.tellJobTitle();

child.greeting();
child.tellName();
child.tellAge();
child.goToSchool();
child.tellJobTitle();