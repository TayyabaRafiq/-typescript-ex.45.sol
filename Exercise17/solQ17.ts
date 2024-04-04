//Q17:Shrinking Guests:

let guests : string [] = ["Sir Bilal" , "Areeba Memon" , "Shazia" , "Saima" ];
console.log( "Unfortunately , I can only invite two people for dinner.");

while(guests.length>2){
    let removeGuest = guests.pop();
    console.log(`Sorry,${removeGuest}, I can not invite you to dinner`);
}
guests.forEach(guest=>{
    console.log(`Dear ${guest},
    you are still invited to dinner.`);
});
guests.splice(0,guests.length);
console.log(guests);