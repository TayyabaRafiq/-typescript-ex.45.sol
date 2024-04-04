//Q15:Changing Guest LIst:

let guest_list : string [] = [ "shazia" ,  "shafia" , "saima"];
for(let i=0; i<guest_list.length; i++){
    console.log( `Respected Sir/madam` + guest_list[i] + `,\n I invite you on a dinner at my house \n, Thank you.`);
    }
    let not_coming : string = "shafia";
    let new_guest : string ="Areeba memon";
    guest_list[1] = new_guest ;
    for(let i=0; i<guest_list.length; i++){
        console.log(`Respected Sir/madam` + guest_list[i] + `,\n I invite you on a dinner at my house \n, Thank you.`);
    }
    console.log(` Ms., ${not_coming}, will not coming on a dinner`);