

// let myArray = ["15", "11", "33", "98"];

// myArray[2] = "44";

// console.log(myArray);


// let myArray = ["15", "11", "33", "98"];
// myArray[5] = "44";

// console.log(myArray);


// ? push() 

// let myFavoritePlayers = ["Messi", "Neymar", "Halland"];

// myFavoritePlayers.push("Mbappe");

// console.log(myFavoritePlayers);


// ? pop() 

// let myFavoritePlayers = ["Messi", "Neymar","Mbappe", "Halland"];

// myFavoritePlayers.pop();

// console.log(myFavoritePlayers);

// ? shift() 

// let myFavoritePlayers = ["Messi", "Neymar","Mbappe", "Halland"];

// myFavoritePlayers.shift();

// console.log(myFavoritePlayers);


// ? reverse() 

//* reverse

// let myFavoritePlayers = ["Messi", "Neymar","Mbappe", "Halland"];
// myFavoritePlayers.reverse();

// console.log(myFavoritePlayers);

// //* sort and reverse

// let myFavoritePlayers1 = ["Messi", "Neymar","Mbappe", "Halland"];
// console.log(myFavoritePlayers1.sort());
// console.log(myFavoritePlayers1.reverse());



// ? concat() 

// let myFavoritePlayers1 = ["Messi", "Neymar"];
// let myFavoritePlayers2 = ["Mbappe", "Halland"];
// let myFavoritePlayers3 = ["De Bruyne", "De Jong"];


// let myResult = myFavoritePlayers1.concat(myFavoritePlayers2,myFavoritePlayers3);

// console.log(myResult);



// ? indexOf() 

// let myFavoritePlayers = ["Messi", "Neymar","Mbappe", "Halland"];

// let myResult = myFavoritePlayers.indexOf("Halland");
// console.log(myResult);

// let myResult1 = myFavoritePlayers.indexOf("De Bruyne");
// console.log(myResult1);


// ? includes() 

// let myFavoritePlayers = ["Messi", "Neymar","Mbappe", "Halland", "Messi"];

// let myResult = myFavoritePlayers.includes("Halland");
// console.log(myResult);

// let myResult1 = myFavoritePlayers.includes("De Bruyne");
// console.log(myResult1);


// let myResult2 = myFavoritePlayers.includes("Messi", 2);
// console.log(myResult2);




// ? splice() 

// let myFavoritePlayers = ["Messi", "Neymar","Mbappe", "Halland"];

// // * at position 1(index 0) add two elements

// myFavoritePlayers.splice(0, 0, "De Bruyne", "Mustafa");
// console.log(myFavoritePlayers);


// let myFavoritePlayers1 = ["Messi", "Neymar","Mbappe", "Halland"];

// // * at position 2(index 1) add two elements and remove 2

// myFavoritePlayers1.splice(1, 2, "Pedri", "Gavi");
// console.log(myFavoritePlayers1);

// let myFavoritePlayers2 = ["Messi", "Neymar","Mbappe", "Halland"];

// // * at position 2(index) remove 3 elements

// myFavoritePlayers2.splice(1, 3);
// console.log(myFavoritePlayers2);



// ? slice() 

let myFavoritePlayers = ["Messi", "Neymar","Mbappe", "Halland"];

console.log(myFavoritePlayers.slice(0,1));


let myFavoritePlayers1 = ["Messi", "Lwandowski", "Neymar","Mbappe", "Halland"];

console.log(myFavoritePlayers1.slice(-5,-3));
