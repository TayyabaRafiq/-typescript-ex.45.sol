//Q28: Stages of life:
//person is less than 2 years old:
var age = 1;
if (age < 2) {
    console.log("The person is a baby.");
}
//person is at least 2 years old but less than 4:
age = 2;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
//person is at lest 4 years old but less than 13:
age = 4;
if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
//person is at least 13 years old but less than 20:
age = 13;
if (age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
//person is at least 20 years old but less than 65:
age = 20;
if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log(" The person is an adult.");
}
//person is age 65 or older:
age = 65;
if (age < 65) {
    console.log("The person is an adult.");
}
else if (age >= 65) {
    console.log("The person is an elder.");
}
