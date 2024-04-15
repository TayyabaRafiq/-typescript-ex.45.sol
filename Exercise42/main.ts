//Q42: Great Magicians:

function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// 2nd function:
function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names:
let magician_names = ["Herry Poter", "Ali", "Hamza"]

// Call make_great function to modify magicians names:
let great_magicians = make_great(magician_names);

// Call show-magicians that show modified list of magicians names:
show_magicians(great_magicians)


