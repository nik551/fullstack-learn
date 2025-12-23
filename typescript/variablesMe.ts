type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return user;
}
createUser({name:"Nikhil",email:"nik@gma",isActive:true});

export {}

type User2 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credDetails?:number;
}
let myUser2: User2 = {
    _id: "1234",
    name: "Nikhil",
    email: "nik@gma",
    isActive: true
}
type cardNumber ={
    cardNumber: string;
}
type cardDetails = User2 & cardNumber & {
    cvv: number;
};
console.log(myUser2._id)