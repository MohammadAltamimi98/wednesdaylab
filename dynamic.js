alert("Hello and Welcome to my website. In this we page you will be able to view some of the most beautiful quotes");

// prompt("Please enter your name");//
// prompt("Please state your age");//



if (confirm("You are about to join the most awesome quotes website. Are you ready?"))
{
    alert("Here we go!");
}
else
{
    var Reason =prompt("why?");
}





var Name= prompt("Please enter your name");
var Age= prompt("Please state your age")

console.log(Name);
console.log(Age);



var ask=function(){
    var ans1=prompt("2+2=");
    var ans2=prompt("2+5");
    console.log(ans1);
    console.log(ans2);
}

var again=function(){
    while (ans1 != "4" && ans2 != "7")
    { var ans1=prompt("2+2=");
    var ans2=prompt("2+5");
    console.log(ans1);
    console.log(ans2);
    }}

if (Age!=18 && Age<18)
{
    ask();

    alert ("leave!");
    again();

}
else
{
alert("Welcome!");
}



