// var hungry =true;
// var thirsty=true;

// if(hungry) {
//     console.error("i am Hugry");
//     console.warm("iam very hungry");
// } else if (thirsty){
//     console.info("but i'm trirsty");
// } else {
//     console.log("i'm bored")
// }

var buffetPrice = function(age){
    //var price=0;

    if (age<=0)
     return (-1)

    if (age<10){
        return(20);
        //price=20;
        
    } else if ((age>=10) && ( age<21)){
        return(30);
        //price=30;

    } //else price =40;
    return(40)
    //return (price);

    }

    console.log("age =9: $" + buffetPrice(-1));
    console.log("age =15: $" + buffetPrice(15));
    console.log("age =25: $" + buffetPrice(25));

