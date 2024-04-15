//Q42: Great Magicians:
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// 2nd function:
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names:
var magician_names = ["Herry Poter", "Ali", "Hamza"];
// Call make_great function to modify magicians names:
var great_magicians = make_great(magician_names);
// Call show-magicians that show modified list of magicians names:
show_magicians(great_magicians);
//console.log(great_magicians);
