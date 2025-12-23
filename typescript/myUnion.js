var score = "dd";
score = 44;
score = "55";
var Nikhil = { name: "Nikhil", id: 1234 };
Nikhil = { username: "Nikhil", id: 1234 };
function getDbId(id) {
    if (typeof id == "string") {
        id.toLowerCase();
    }
    else {
        id += 2;
    }
    console.log("Db id is : ".concat(id));
}
getDbId(3);
getDbId("55");
//aray of union types
var data = [1, 2, 3, "Nikhil"];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"; /// error
