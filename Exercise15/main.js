//Q15:Changing Guest LIst:
var guest_list = ["shazia", "shafia", "saima"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/madam" + guest_list[i] + ",\n I invite you on a dinner at my house \n, Thank you.");
}
var not_coming = "shafia";
var new_guest = "Areeba memon";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/madam" + guest_list[i] + ",\n I invite you on a dinner at my house \n, Thank you.");
}
console.log(" Ms., ".concat(not_coming, ", will not coming on a dinner"));
