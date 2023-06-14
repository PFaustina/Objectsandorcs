// use array inside an object

// const adventurer = {
//     name: "Pauline",
//     hitPoints: 10,
//     belongings: ["sword", "potions", "medicine"]
//     companion: {
//         name: "stinky"
//         type: "cat"
//         belongings ["ball of yarn", "healing potion", "health insurance", "satchel of elements"]
//     }
// }


//access the values in the array

// console.log(adventurer.belongings)

//access the first belonging
// console.log(`first belonging: $(adventurer.belongings[0])}`);

//iterate over an array inside of an ojbect

// for(let i =0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i])}

// obj within an obj

// console.log(`my companion name is ${adventurer.companion.name}`);

//Use an object within an object within an object

// console.log(`one of my companions belonging is ${adventurer.companion.belongings[2]}`);


//Use an array of objects
// const movies = [ 
//     { title: "Tokyo Story" 
// },  
// { title: "Paul Blart: Mall Cop" 
// }, 
// { title: "L'Avventura" 
// } ];
// console.log(movies[0].title) //object

// //looping over array of objects

// for(let i = 0; < movies.length; i++) {
//     console.log(movies[i].title);
// }

//Combine objects, arrays, and functions

// const foo = {
//     arr: [1,2,3],
//     obj: {
//         prop: 'object property'
//     },
//     doSomething: () => {
//         console.log("I did something!")
//     }
// };
// console.log(foo.arr[0]); //1
// console.log(foo.obj.prop) //'object property'
// foo.doSomething();

//an array of arrays

// const foo = [
//     [1, 2, 3],
//     ["4", "5", "6"],
//     [7, 8, 9],
//     () => {
//         console.log("I am a function inside an array")
//     }
// ]

// console.log(foo[0]) //[]
// console.log(foo[0][1])  //2

// //Storing functions in an array
// console.log(foo[3]());

//creating a class

// class Character {
//     greet () {
//         console.log('hello');
//     }
// }

// // const me = new Character();
// // const you = new Character();

// // me.greet();
// // you.greet();



// // class Character {
// //     constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
// //         this.legs = 2;
// //         this.arms = 2;
// //         this.name = name;
// //         this.age = age;
// //         this.eyes = eyes;
// //         this.hair = hair;
// //         this.lovesCat = lovesCats;
// //         this.lovesDogs = lovesDogs
// //     }

// //     //method 1
// //     greet (otherCharacter) {
// //         console.log('Hello ${otherCharacter}');
// //     }
// //     //method2
// //     smite () {
// //         console.log(`I will smite you!`)
// //     }
// // }

// // const alexander = new Character();
// // const brock = new Character();

//     // // alexander.greet("brock");
//     // // brock.greet("alexander");
//     // alexander.smite()

//     //name, age, eyes, hair, cats, dogs
//     // const azreal = new Character ('azreal', '150', 'green', 'sliver', false, true);
//     // console.log(azreal);


//     class Character {
//         constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//           this.legs = 2;
//           this.arms = 2;
//           this.name = name;
//           this.age = age;
//           this.eyes = eyes;
//           this.hair = hair;
//           this.lovesCats = lovesCats;
//           this.lovesDogs = lovesDogs || true;
//         }
//         greet (otherCharacter) {
//           console.log('hi ' + otherCharacter + '!');
//         }
//         classyGreeting (otherClassyCharacter) {
//           console.log('Howdy ' + otherClassyCharacter.name + '!');
//         }
//         setHair (hairColor) {
//           this.hair = hairColor;
//         }
//         smite () {
//           console.log('i smited thee.');
//         }
      
//       }
//         const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
//     //   console.log(hobbit);

//     //   class Hobbit extends Character{
//     //         constructor (name, age, eyes, hair)
//     //         super(name, age, eyes, hair)
//     //         this.skills = ['thievery', 'speed']
//     //   }
//     //   {
//     //     steal () {
//     //         console.log("lets get away!")
//     //     }
//     //     smite (){
//     //         super.super();
//     //         this.steal();
//     //     }

//     //   }
//     //   const frodo = new Hobbit('frodo', 30, 'blue', 'black')
//     // //   console.log(frodo)
//     // frodo.classyGreeting(hobbit);
//     // frodo.smite()

// //Factory function

//     class Car {
// constructor(make, vin) {
//     this.make = make;
//     this.vin = vin;
// }
// //methods
//     drive(){
//         console.log('vroom vroom')
//     }
//     }

//     //creat an object

//     const mazda = new Car('mazda', 245345345);
//     // console.log(mazda)

//     class Factory (factory) {
//         constructor (company) {
//             this.company = company;
//             this.cars = [];
    
//         }
//         generateCar() {
//             const newCar = new Car(this.company, this.car.length);
//             this.cars.push(newCar)
//         }
//         findCar (index) {
//             return this.cars[index]

//         }
//     }

//     // const tesla = new Factory('Tesla');
//     // console.log(tesla)
//     // tesla.generateCar();
//     // console.log(tesla)

//     //find car

//     console.log(tesla.findCar(0))



// const porche = new Factory('Porche');
// porche.generateCar();
// porche.generateCar();
// porche.generateCar();
// porche.generateCar();

// console.log(porche);
// // console.log(porche.findCar(0));

