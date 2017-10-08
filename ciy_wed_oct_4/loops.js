
// var  mul = function (n,m){
//     return (n * m);
// }

// for (var outer=2; outer<13; outer++){
//     console.info("\Multipcation table:%d", outer)
//     for (var inner =1; inner<13; inner++){

    
//     console.log("%d * %d =%d ", outer,inner, mul(outer,inner));
// }
// }

// var i = 0;
//  While (i < 10) {
//      console.log("i = %d", i);
//      i++;

//  }


//  var num = parseInt(prompt("Number between 1 and 10")){
//     if (num<5)
//     return ("higher")

//  }
var TIMES=5;
var toGuess=7;
var counter=1;
var myGuess=-1;
var result="";
var evaluate = function(myNum, toGuess){

    if (myNum < toGuess)
    return("higher");

    else if (myNum == toGuess)
    return ("CORRECT!");

    return ("lower");

}
while (counter<=TIMES){

   //myGuess = parseInt(prompt("Number between 1 and 10"));
 result = evaluate(myGuess, toGuess);
    console.log("Times: %d my guess: %d, result: %s"
    , counter , myGuess, result);

    if (result == "CORRECT")
    break; //exit from the loop
    //counter=TIMES;

    counter++;
}

//console.log("counter = %d", counter);
if (myGuess !=TIMES)
//     if (num<5){
//         console.log("Guess :"+ i + " higher");
        
//     } else if ( numb > 5){
//         console.log("Guess "+ i + "lower");
        
//     } else (num=5) {
//         console.log("Guess "+ i + "correct");
//         i=5;
//         i++;
//     }
//     i++
// }
//}

// var num = function(guess){
//     //var price=0;
// while guess<5
//     if (guess<1)
//      return (-1)

//     if (age<5){
//         return("higher");
//         //price=20; 
//     }
//     else if (age>5) {
//         return("lower");
//         //price=30;

//     } //else price =40;
//     return(40)
//     //return (price);

//     }

//     console.log("age =9: $" + buffetPrice(-1));
//     console.log("age =15: $" + buffetPrice(15));
//     console.log("age =25: $" + buffetPrice(25));



