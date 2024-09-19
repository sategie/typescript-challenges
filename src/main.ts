// Step 1: Declare a variable named 'age' of type 'number' and assign a value to it.
const age:number = 50;

//     Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'.
for(let i=1; i < age; i++){
    console.log("Step 2 Result: " + i);
}


// Step 3: Use an 'if-else' statement to check if 'age' is greater than 18.
// Display appropriate messages depending on whether the condition is met or not.

if(age>18){
    console.log("Step 3 Result: " + "You are older than 18!");
}
else{
    console.log("You are younger than 18");
}

//     Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.
const score:number = 0;


// Step 5: Use an 'if' statement to check if 'score' has a value.
//     Display 'Score is available.' if 'score' has a value other than 0.

if(true){
    console.log("Step 5 Result: " + "Score is available.");
}

// Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
//     Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.

if(score===0){
    console.log("Step 6 Result: " + "Score is evaluated to truthy")
}
else{
    console.log("Score is evaluated to falsy")
}


//     Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).
const username:string = "";

// Step 8: Use an 'if' statement to check if 'username' has a value.
//     Display 'Username is available.' if 'username' has a value.

/*Step 8 can also be written this way*/

// if(username!==null){
//     console.log("Step 8 Result: " + "Username is available");
// }

console.log("-----------------------")
if(username===""){
    console.log("Step 8 Result: " + "Username is available");
}

//     Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
//     Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.

if(username==""){
    console.log("Step 9 Result: " + "Username is evaluated to falsy.");
}
else{
    console.log("Username is evaluated to truthy")
}


//
//     Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.

const isAdmin:boolean = false;
//
//     Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
//     Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.

if(isAdmin==false){
    console.log("Step 11 Result: " + "isAdmin is evaluated as truthy")
}
else{
    console.log("isAdmin is evaluated as falsy")
}

//     Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
//     Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.

if(isAdmin===false){
    console.log("Step 12 Result: " + "isAdmin is false.")
}
else{
    console.log("isAdmin is true.")
}
console.log("\n---------------------------------------------------------")

// Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
const numberArray: number[] = [5,3,3,5,6,7,10];

let mappedNumberArray : number[] = numberArray.map(x => x*2);
console.log(mappedNumberArray);

// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const wordsArray: string[] = ["dog", "walk", "train", "eat", "guitar"];

let filteredWordsArray: string[] = wordsArray.filter(x => x.length>5);
console.log(filteredWordsArray);

// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const numArray: number[] = [5,10,15,20,30,50];

/*acc is the value from the previous iteration
* curr is the array item in the current iteration
* 0 is the initial value which we want to start with*/
let reducedNum: number = numArray.reduce((acc, curr) => acc+curr,0);
console.log(reducedNum);

// Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const numsArray: number[] = [12,45,32,56,787,23,12];

/*The some() method checks if at least one element in the array passes a criteria defined by the function*/
let someNumsArray: boolean = numsArray.some(x => x>10);
console.log(someNumsArray);

