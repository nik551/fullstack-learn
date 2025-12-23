let score: number | string = "dd";

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: String;
  id: number;
};

let Nikhil: User | Admin = { name: "Nikhil", id: 1234 };

Nikhil = { username: "Nikhil", id: 1234 };

function getDbId(id: number | string) {
  if (typeof id == "string") {
    id.toLowerCase();
  } else {
    id += 2;
  }
  console.log(`Db id is : ${id}`);
}

getDbId(3);

getDbId("55");

//aray of union types

const data :(number | string | boolean) [] =[1,2,3,"Nikhil"]

let seatAllotment : "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew"; /// error