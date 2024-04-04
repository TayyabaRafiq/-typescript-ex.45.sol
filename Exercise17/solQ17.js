var guests = ["Sir Bilal", "Areeba Memon", "Shazia", "Saima"];
console.log("Unfortunately , I can only invite two people for dinner.");
while (guests.length > 2) {
    var removeGuest = guests.pop();
    console.log("Sorry,".concat(removeGuest, ", I can not invite you to dinner"));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n    you are still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
