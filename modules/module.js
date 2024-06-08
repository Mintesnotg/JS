
var userCount = 0;
export default class User {

    constructor(text, age) {
        this.text = text;
        this.age = age;
        userCount++;
    }

    printname(user) {
        console.log(` User has the name ${this.text}`)
    }
    printAge(user) {
        console.log(` User has the name ${this.age}`);



    }

}

 export function outsideclass () {

        console.log("this method is out side of class")
}



