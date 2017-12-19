// ********** EXCERCISE NO.1***********

// Create objects using literal notation

// let hero = {

//     name: "Hercules",
//     place:"Olympus",
//     findHero:function(){
//         console.log(hero.name + " from " + hero.place);
//     }

// }
// hero.findHero();


// ********** EXCERCISE NO.2***********

// Create objects using the object constructor and this keyword

// let hero = new Object();

// this.name= "Achiles";
// this.status = "legend";

// hero.troya = function(){
//     console.log("Here died " + name + " and he will be rememebred as " + status);
// }
// hero.troya();


// ********** EXCERCISE NO.3***********

// Create objects using the Object function

// function Football(gk,def,mid,att){
//     this.gk="Buffon";
//     this.def="Nesta";
//     this.mid="Xavi";
//     this.att="Messi";
// }

// let team = new Football();
// console.log(team);


// ********** EXCERCISE NO.4***********

// Create an object called Student
// Object should have following properties: First Name,Last Name, Course, Academy
// Create method that returns FIRSTNAME + LASTNAME is a student in STUDY in PLACE

// let student = {

//     firstName: "Dejan",
//     lastName: "Obradovic",
//     course: "JS",
//     academy: "SEDC",

//     whoAreYou:function(){
//         console.log(student.firstName +" "+ student.lastName + " is a student in " + student.course + " in " + student.academy);
//     }

// }
// student.whoAreYou();


// ********** EXCERCISE NO.5***********

// Create an array of Objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". .
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


// let books = [{
//     title: "Hobbit",
//     author: "J.R.R. Tolkien",
//     alreadyRead: true
// },{
//     title: "The Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     alreadyRead: false
// }];


// for(i=0;i<books.length;i++){

// if(books[i].alreadyRead ===true){
//     console.log("You already read " + books[i].title +" by "+books[i].author);
// }
// else{
//     console.log("You still need to read " + books[i].title +" by "+books[i].author);
// }
// }


// ********** EXCERCISE NO.6***********

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like example: 

// Movie: Rogue One: A Star Wars Story 
// Duration: 2h 30 minutes. 
// Stars: Felicity Jones, Mads Mikkelsen, Ben Mendelsohn.


// let favoriteMovie = {
//     title: "Gladiator",
//     duration: [2,50],
//     stars: ["Russel Crow","Joaquin Phoenix", "Connie Nielsen"],

//     information: function(){
//         console.log("Movie: "+this.title);
//         console.log("Duration: "+this.duration[0]+"h"+" "+this.duration[1]+"min");
//         console.log("Stars: "+this.stars);
//     }
// }
// favoriteMovie.information();


// ********** EXCERCISE NO.7***********

// We’ve got a constructor to create coffee drinks methods
// We need a method, getSize, that returns a string depending on the number of ounces of coffee:
// 0.2 is a small
// 0.4 is a medium
// 0.6 is a large
// We also need a method, toString, that returns a string that represents your order, like “You’ve ordered a small House Blend coffee.
// Write your code below, and then test it in the browser. Try creating a few different sizes of coffee




// function Coffe(ounce,type){
   
//         this.type = type;
//         if(ounce <= 0.2){
//             this.ounce ="small";
//         }
//         else if(ounce <= 0.4){
//             this.ounce ="medium";
//         }
//         else{
//             this.ounce ="large";
//         }
//         this.order = function(){
//             console.log("You've ordered a " + this.ounce +" "+ this.type);
//         }
       
//     }

// let coffe = new Coffe(0.2,"House Blend");
// coffe.order();


// ********** EXCERCISE NO.8***********

// Write a JavaScript program to get the volume of a Cylinder with Four decimal places using object method.
// Object constructor has inputs parameters diameter and height
// Object must have method for calcuate Volume
// formula: V = πr2h


//  function Cylinder(diameter,height){
//     let p = 3.1415;
//     let radius = diameter/2;
//     let volume = p*(radius*radius)*height;
//     console.log(volume.toFixed(4));
// }

// let cylinder = new Cylinder(50,10);


// ********** EXCERCISE NO.9***********

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// Cocoa

// let favoriteRecipe = {
//     title: "Mole",
//     servings: 4,
//     ingredients:["cinnamon","cumin","Cocoa"],
//     information: function(){
//         console.log("Recipe: "+this.title);
//         console.log("Serves: "+this.servings[0]);
//         console.log("ingredients: ");
//         console.log(this.ingredients[0]);
//         console.log(this.ingredients[1]);
//         console.log(this.ingredients[2]);
//     }
// }
// favoriteRecipe.information();



// ********** HOMEWORK **********

// Create the constructor function for a Video object. The function should take in arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object.
// Create a method on the Video object called watch(). When that method is called, it should use console.log to output a string like "You watched all 60 seconds of Otters Holding Hands!"
// Instantiate a new Video object and call the watch() method on it.
// Instantiate another Video object with different constructor arguments 


// function Video(title,uploader,duration){

//     this.title = title;
//     this.uploader = uploader;
//     this.duration = duration;
//     this.whatch = function(){
//         console.log("You whatched " + duration + "min of " + title + " uploaded by " + uploader);
//     }
// }

// let theVideo = new Video("Batman","Deko",2);
// let anotherVideo = new Video("Messi","Barca",4);
