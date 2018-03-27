import {VAL99, VAL2, VAL3, VAL98} from "./JavaScript";

let showMessage = function () { alert("Hey! Its Me !!") };
showMessage();

let myObject = { account: "1234", branch: "aurora" };
let myObject1 = {account: "1234", name:"Hello"};
let myObject4 = {address: "12 as", name:"HiThere", type:"saving"};

let objMap = Object.assign(myObject, myObject1, myObject4);

console.log(myObject.account);
console.log(objMap);

let mySetObject = new Set();
mySetObject.add(VAL99);
mySetObject.add(VAL98);
mySetObject.add(VAL2);
mySetObject.add(VAL3);

console.log(mySetObject);

let string = "Its the Sum !!";
let [first, second, ...rest] = mySetObject;

let finalResult = returnIt("of", addMe(rest));

console.log(finalResult);

function returnIt(str, strRet){
    return ("Here is the total " + str + " " + strRet);
}

function addMe(setArr){
    let total = 0;
    for (let arr of setArr)
    {
        total += arr;
    }
    return (total);
}


let objClass = new subClass("Class JavaScript", "ECMA");
console.log(objClass.showName());
console.log(objClass.showAddress());