// "use strict";

// let message;
// message = "Hello";

// console.log(document.getElementById("id").innerHTML = message);

// alert(message)


// let admin, name;
// name = "John";
// admin = name;
// alert(admin);
// alert(2**53-1) 

// let house = `${admin}`;
// alert(house)

// let age = prompt("How old are you? ");
// alert(age);


// let visitorName = prompt("What is your name? ");
// alert(`My name is ${visitorName}, Thanks for having me here`);

// alert("You must be atleast 18 or above to view this content!");

// let ageConfirmation = prompt("Are you 18 or above?");
// if(ageConfirmation < 18){
//     alert("Sorry you are not allowed to view this content not until you are 18 already. Thanks.");
// }
// else{
//     let name = prompt("What is your name?");
//     alert(`Welcome ${name}.`)
// }




// let girlfriend = "ibukunayo";

// let guest = prompt("What is your name?")

// if (guest == girlfriend){
    
// } else if (guest == "motorola"){
//     alert(`Welcome motorola we were epecting ${girlfriend} we would have addressed you as Girlfriend`);
// }else{
//     alert("Sorry we dont know you!!!");
// }

// let result = (guest == "ibukunayo") ? alert("Welcome Atech Girlfriend!") : alert("Sorry we dont know you!!!");


// Asking javascript name

// let javascriptName = prompt("What's the 'official' name of JavaScript?");

// if(javascriptName == "ECMAScript"){
//     alert("Right");
// }else{
//     alert("You don't know? 'ECMAScript'!");
// }


// let question = prompt("Who is there ?");

// function ADMIN(){
//     let adminpassword = "TheMaster"
//     let inputpass = prompt("Password? ")
//     if (inputpass == adminpassword){
//         alert("Welcome");
//     }else if(inputpass == "other"){
//         alert("Wrong password");
//     }else{
//         alert("Canceled!");
//     }
// }

// if(question == "Admin"){
//     ADMIN();
// }else if(question == "Other"){
//     alert("I don't know you");
// }else{
//     alert("Canceled!")
// }

// let i = 1;

// while (i <= 3){
//     alert(i);
//     i++;
// }

// for(let b = 0; b<10; b++){
//     alert(b);
//     if(b == 5){
//         break;
//     }
// }

// Switch case

// let y = parseInt(prompt("Insert a number")) + 2;

// switch(y){
//     case 4:
//         alert("Correct!");
//         break;
    
//     case 3:
//         alert("too small");
//         break;
// }
// function showMessage(text){

//     alert(text ?? "unknonwn");
// }
// showMessage();
// showMessage(prompt("This message is from? "), prompt("What did you have to say?"));

// function sum(a, b){
//     return a + b;
// }

// alert(sum(1, 2));


// let car ={
//     model: 500,
//     color: "red"
// };

// car.name = "camry";

// alert(car);

// arrow function

// let sum = (a, b) => a + b;

// alert(sum(2, 5));

// let age = parseInt(prompt("How old are you?"));

// let message = (age >= 18) ? 
//                 () => alert("hello") : 
//                 () => alert("Hey you are underage!");

// message();

// let ask = (question, yes, no) => {
//     if(confirm(question)){
//         return yes();
//     }else{
//         return no()
//     }
// }

// ask("Do you agree?", function(){alert("You agreed.");},
// function() {alert("You canceled the execution.");});

// let Btn = document.querySelector(".button");

// Btn.addEventListener("click", () => {
//     let i = 0;
//     while(true){
//       i +=1;
//       console.log(i);
      
//     }
// })





