let Data = "some data"

class User{
    constructor(name,email){
        this.name = name;
        this.email= email;
    }

    viewData(){
        console.log("data",Data);

    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        Data="its a new data"
    }
}

let student1= new User("praveen","wed@email.com")
let student2= new User("ram","ram@email.com")

let admin1 = new Admin ("admin","admin@mail.com")