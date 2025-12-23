//array in proper order

// const user:(string | number)[]= [1,"Nikhil",2,"varghese"];
let user:[string,number,boolean]= ["Nikhil",1234,true,];
let rgb: [number,number,number]= [255,255,255];
type User2 = [number,string];
const newUser: User2 = [112,"Nikhil"];
newUser[1]="Varghese";
//tuple is bad in typescript because we cannot change the order of elements
newUser.push(1234); // can push but cannot change the order