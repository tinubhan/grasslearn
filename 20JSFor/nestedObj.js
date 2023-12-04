// let student=new Object()  declare empty object

let student={
    name:"tinu",
    class:6,
    roll:41,
    namefunc:function(){
        console.log(`Name of the student is ${this.name} ok`)
        // return this.name
    },
    classFunc:function(){
        console.log(`class of the student is ${this.class} ok`)
    }
    

}
student.namefunc()