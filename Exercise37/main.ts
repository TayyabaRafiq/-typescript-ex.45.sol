//Q37: Large Shirts:

function make_shirt (size : string = "large", printMessage : string = "I love TypeScript."){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt.`)
}

//Calling a function with by-default values:
make_shirt();

//Calling a function with Medium size and default message:
make_shirt("Medium");

//Calling a function with Small size and different print Message:
make_shirt("Small" , "I love Pakistan");