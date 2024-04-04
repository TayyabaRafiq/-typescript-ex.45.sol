//Q27: Alien colour # 3 :
//version 1:
var alien_colour = "green";
if (alien_colour == "green") {
    console.log("The player earned 5 points.");
}
//version 2:
alien_colour = "yellow";
if (alien_colour == "green") {
    console.log("The player earned 5 points");
}
else if (alien_colour == "yellow") {
    console.log("The player just earned 10 points.");
}
//version 3:
alien_colour = "red";
if (alien_colour == "green") {
    console.log("The player earned 5 points.");
}
else if (alien_colour == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select right colour.");
}
