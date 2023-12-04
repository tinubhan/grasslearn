let student = {
    name:"harsh",
    age:22,
    cars:{
        name:"mustang",
        model:2013,
        sound:function(){
            console.log(`The sound of ${this.name} is very loud`)
        }
    },
    profile: function(){       //methods
        // console.log("hello")
        console.log(`Student name is ${this.name} and his age is ${this.age}`)
    }
}
student.cars.sound()
student.profile()