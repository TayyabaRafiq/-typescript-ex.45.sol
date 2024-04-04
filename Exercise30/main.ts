//Q30: Hello Admin:

let users :string [] = [ `Shazia`, `Shafia`, `Saima`, `Arbish`, `Admin`];

for(let user of users){
    if(user === "Admin"){
        console.log( "Hello Admin, would you like to see a status report?")
    }

else {
    console.log(` Hello ${user}, thank you for logging in again.`)
}
}