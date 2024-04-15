//Q45: Cars:

function create_car(manufacturer: any , model: any, ...options: any[]){

    //initialize a car object with manufacturer and model:
    let car = {
        manufacturer : manufacturer,
        model : model,
    };

    // Add additional options to the car object:
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}

//Call the function to create a car object:
let my_car = create_car("Toyota", "Corolla", "Color: Black", "Sunroof: True");

console.log(my_car);