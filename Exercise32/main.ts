//Q32:Checking Usernames:

let current_users = ["Shazia", "Saima", "ali", "Shafia", "Arbish"];
let new_users = ["Hani", "Arbish", "Abdulhadi", "Ali", "Owais"];

//Loop through new_users to check for usernames avaibility:

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log( `Sorry ${new_one_user} is already taken.`)
    } else{
        console.log(`This Username ${new_one_user} is available`)
    }
})