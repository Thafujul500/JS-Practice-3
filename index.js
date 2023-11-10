// function and Object


function fa(){
    this.name = "Thafujul"
}

fa()
// console.log(name);

var myName = {
    name : "Zihad",
    address : "Saidpur",
    msg : function(){
        // console.log(this);
    }
}

myName.msg()

var parent = {
    name : "Nishad",
    age : 23,
    child : {
        name : "Zihad",
        age : 30,
        msg : function (){
            // console.log(this.age);
        }
    }
}
parent.child.msg()

var papa = {
    name : "Papa",
    age : 60,
    baby : {
        name : "Baby",
        age : 15,
        value : function (){
            // console.log(this.age);
        }
    }
}
papa.baby.value.call(papa)

var karim = {
    name : "Karim Rahman",
    dob : 1970,
    age : function(currentYear){
        // console.log(this.name + " is " + (currentYear - this.dob) + " years old!");
    }
}

var rahim = {
    name : "Rahim Rahman",
    dob : 1980
}

karim.age(2000)
karim.age.bind(rahim,2000)

var thafujul = {
    name : "Thafujul Islam",
    dateOfBirth : 2000,
    age : function(year){
        // console.log(this.name + " is " + (year - this.dateOfBirth) + " year's old!");

    }
}

thafujul.age(2023);

var bijoy = {
    name : "Bijoy",
    dateOfBirth : 2000,
}

thafujul.age.bind(bijoy,2023);

// Apply

var Obj = {
    name : "Zunayed Ahmed",
    age : 21,
    anotherObj : {
        name : "Ahmed Zunayed",
        value : function (){
            // console.log(this.name);
        }
    }
}

Obj.anotherObj.value.apply(Obj);

var firoj = {
    name : "Firoj Sarker Tamim",
    dob : 1996,
    age : function(year,msg){
        console.log(msg + " " + this.name + " is " + ( year - this.dob ) + " year's old!");

    }
};

var sagor = {
    name : "Sagor Roy",
    dob : 1986
}

firoj.age(2023,"Hellow")
firoj.age.apply(sagor, [2023,"Hey!"])

// Bind

var myCustomObj = {
    name : "Zonayed Ahmed",
    age : 21,
    anotherobj : {
        name : "Ahmed Zonayed",
        value : function(){
            // console.log("My name is " , this.name);
        }
    }
}

myCustomObj.anotherobj.value.apply(myCustomObj)

// var anotherobj = myCustomObj.anotherobj.value.bind(myCustomObj);
// anotherobj()

var karim = {
    name : "Karim Rahman",
    dob : 1996,
    age : function(year,msg){
        // console.log(msg + " is " + this.name + " is " + ( year - this.dob ) + " year's old!");
    }
}
var rahim = {
    name : "Rahmin Ahmed",
    dob : 1986
}

var rahinAge = karim.age.bind(rahim,2018);
rahinAge("Assalamualicum")

var a = 10;
var b = 20;

console.log("Before swap outside function" + "a = " + a + " b = " + b );
function swap(a,b){
    console.log("Before swap inside function " + "a = " + a + " b = " + b );
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap inside function" + "a = " + a + " b = " + b );
}
swap(a,b);

console.log("After swap " + "a = " + a + " b = " + b );

console.log("Another Methed");

var Obj = {
    a : 10,
    b : 20
}

console.log("Before swap outside function " + "a = " + Obj.a + " b = " + Obj.b );

function swap(x){
    console.log("Before swap inside function " + "a = " + x.a + " b = " + x.b );
    var trap = x.a;
    x.a = x.b;
    x.b = trap;
    console.log("After swap inside function " + "a = " + x.a + " b = " + x.b );
}
swap(Obj)

console.log("After swap outside function " + "a = " + Obj.a + " b = " + Obj.b );

var Person = function(name,age){
    this.name = name;
    this.age = age;
}

var zihad = new Person("Thafujul" , 25);
var Labib = new Person("Labib" , 25);
var zihad = new Person("Shad" , 25);

console.log(zihad.name, zihad.age);
