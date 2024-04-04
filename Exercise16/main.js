//Q16: More Guests:
var guest = ["Ali", "Sir Ubaid", "shazia", "Areeba Memon", "saima"];
console.log("Great news! I found a bigger dinner table.");
//Adding more guests:
guest.unshift("Sir Bilal");
for (var i = 0; i < guest.length; i++) {
    console.log("Respected Sir/Madam" + guest[i] + ",\n I invite you at my home on dinner tomorrow./n");
}
;
