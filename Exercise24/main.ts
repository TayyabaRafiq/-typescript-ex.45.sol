//Q24: More conditional Tests:

let car: string = `subaru`;
let age: number = 25;
let array: number[] =[ 1, 2, 3, 4];

//"String Tests":
//Test 1: Equality (True)
console.log("Is car ==`subaru`? I predict True");
console.log(car == `subaru`); //True

//Test 2: Strict equality (False)
console.log("Is car === `Subaru`? I predict False.");
console.log(car === `Subaru`); //False (case sensitive)

//Test 3: Inequality (True)
console.log("Is car != `Toyota` ? I predict True.");
console.log(car != `Toyota`); //True

//Test 4: Inequality (False)
console.log("Is car != `subaro` ? I predict False.");
console.log(car != `subaru`); //False

//Test 5:Lowercase conversion (True)
console.log("Is car.toLowerCase() == `subaru`? I predict True.");
console.log(car.toLowerCase() == `subaru`);//True

//Test 6: Lower conversion (False)
console.log("Is car !== car.toLowerCase()? I predict False.");
console.log(car !== car.toLowerCase()); //False 

//"Numercal Tests":
//Test 7: Equality (True)
console.log("Is age == 25 ? I predict True");
console.log(age == 25);

//Test 8 Inequality (False)
console.log("Is age != 25? I predict False.");
console.log(age != 25);

//Test 9:Greater than & less than:
console.log("Is age > 20? I predict True.");
console.log(age > 20); // True
console.log("Is age < 20 ? I predict False.");
console.log(age < 20); //False

//Test 10: Greater than or equal to, & less than or equal to:
console.log("Is age >= 25? I predict True.");
console.log(age >= 25);//True
console.log("Is age <= 20 ? I predict False.");
console.log(age <= 20);// False

//"Logical operators":
// Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30);// True (both conditions met)

//Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18); //False (neither conditions met)

//"Array Tests":

// Test 13: In Array (True)
console.log("Is 3 in array ? I predict True.");
console.log(3 in array); //True (check for index existance)

//Test 14: Not in Array (False)
console.log("Is 5 in array ? I predict False.");
console.log(5 in array); //False (Not in array)
