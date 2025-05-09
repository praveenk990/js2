
// const student = {
//     fullName: "PeterParker",
//     marks: 98.8,
//     printMarks: function () {
//       console.log(this.marks);
//     },
//   };

//class and object
// class Toyotacar {
//     constructor(brand,milage){
//         console.log("creating new object");
//         this.brand=brand
//         this.milage=milage
//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }

// }

// let fortuner = new Toyotacar("fortuner",10);
// let lexus = new Toyotacar("lexus",20)

//inhertence
class Person{
    constructor(name){
        this.species="homo sapiens";
        this.name = name
    }
    eat(){
        console.log("eat")
    } 
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("do nothing")
    }
}

class Engineer extends Person{
    constructor(name){
        super(name)
    }
    work(){
        super.eat()
        console.log("solve problem")
    }
}

let engobj = new Engineer("praveen")