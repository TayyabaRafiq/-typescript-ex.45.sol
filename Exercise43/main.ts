//Q43:Unchanged Magicians:

function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// 2nd function:
function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names:
let magician_names = ["Herry Poter", "Ali", "Hamza"]

//Making a copy of original array through .slice() function:
let copy_magician_names =magician_names.slice();

//Modify the copied array to include "The Great" with thier names:
let copy_great_magicians = make_great(copy_magician_names);

//Show both arrays original and copied:
//Original:
console.log("Original Array\n");
show_magicians(magician_names);

//copied:
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
