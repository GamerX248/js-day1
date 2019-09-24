//DataTypes

//Value Types (Primative Types)
//NOTE Numbers
var x = 1
x = 1.232423
x = -21324

//NOTE Strings
var name = 'Mark'

//NOTE Boolean
var alive = true //false


//NOTE The Weird ones
var nothing = undefined
var lessThanNothing = null

//Refrence Types
var notANumber = NaN
var aFunction = function () { }

//NOTE Array
var staff = ['Mark', 'Jake', 'D$']
var students = [['JJ', 'Brian', 'Sarah'], ['Tom', 'Casey', 'Charlie']]

//NOTE Object (literal AKA (POJO))
var me = {
    name: "mark",
    age: 31,
    employeed: true,
    family: {
        sons: ['William', 'Alexander']
    }
}


//NOTE Truthy and Falsy

//Truthy
/**
 * true
 * "any string with contents"
 * []
 * {}
 * any non 0 numbers
 */

//Falsey
/**
 * false
 * '' empty strings
 * undefined
 * null
 * NaN
 * 0
 */

//NOTE Conditionals:
let idAge = 30
if (idAge >= 21) {
    console.log('Drive safe');
}
else if (idAge >= 18) {
    console.log('Gamble Up kiddo')
}
else {
    console.log("No soup for you.");
}

let temp = 9
//if temp is over 104 'go to hospital'
//if temp < 98.6 'get a blanket'
// if temp > 98.6 'drink some soup'
//if temp = 98.6 'you are fine'

if (temp > 104) {
    console.log('go to hospital');
}
else if (temp > 98.6) {
    console.log('drink some soup');
}
else if (temp == 98.6) {
    console.log('you are fine');
}
else {
    console.log('get a blanket');
}


var dayOfWeek = 3

switch (dayOfWeek) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log('friday')
    case 6:
    case 0:
        console.log("its the weekend!!!");
        break;
    default:
        console.log("thats not a day");
        break;
}

let response = 30
switch (true) {
    case (response > 20):
        console.log('Drink Up')
    case (response > 17):
        console.log('Smokem if you gotem');
        break;
    default:
        console.log('Git outa here kid');
        break;
}



//NOTE Object Accessors

let william = {
    name: 'William',
    age: 4,
    employeed: false,
    family: {
        children: []
    },
    eyes: {
        leftEye: {
            color: "green",
            visionCorrection: 0
        },
        rightEye: {
            color: "blue",
            visionCorrection: 0
        }
    }
}

let mark = {
    name: 'Mark',
    age: 31,
    employeed: true,
    family: {
        children: [william, "alex"],
    },
    eyes: {
        leftEye: {
            color: "blue",
            visionCorrection: -3.25
        },
        rightEye: {
            color: "blue",
            visionCorrection: -3.25
        }
    }
}


//dotnotation
mark.family.children

//bracket notation 
mark['family']['children']

//NOTE you must use bracket notation when accessing a propety from a variable
var info = window.prompt("What do you want to get?")

if (typeof mark[info] == 'object') {
    if (window.confirm('Do you wish for more details?')) {
        var details = window.prompt('What Detail do you want')
        console.log(mark[info][details])
    }
    else {
        console.log(mark[info])
    }
}
else {
    console.log(mark[info])
}



//Build an object from an item in the breakroom try and include one of each datatype
let bag = {
    color: "brown",
    isFull: true,
    weightOz: 100,
    contents: [{ name: 'popcorn', weightOz: 50 }, { name: 'air', weightOz: 50 }]
}

console.log(`My bag is a ${bag.color} bag, it weighs ${bag.weightOz} oz. It ${bag.isFull ? 'is full' : 'has room'}, its contents are ${bag.contents[0].name} & ${bag.contents[1].name}`)

let riceKrispy = {
    name: 'Rice Krispy Treat',
    brand: 'Kellogs',
    ingredients: ['marshmallows', 'rice'],
    isGood: true,
    exp: new Date("1/13/2020")
}






//write a sentance using interpolation about it 
//I have a ____ it has _____ and ____ 
