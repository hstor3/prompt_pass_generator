// Assignment Code
let generateBtn = document.querySelector("#generate");


// strings for the prompt to randomize and display
let sym = "'`~!@#$%^&*()-_=+][{}'/.,<>?";
let symArr = sym.split("");
console.log(symArr);

let nums = "0123456789";
let numsArray = nums.split("");
console.log(numsArray);

let low = "abcdefghijklmnopqrstuvwxyz";
let upArray = low.toUpperCase().split("");
console.log(upArray)

let lowArr = low.split("")


// function that has the prompt ask the user questions
function options() {
    let characters = parseInt(prompt("How many characters would you like?"));

    if (characters < 8 || characters > 128) {
        alert("Please select a number between 8 and 128.")
        return;
    }
    if (isNaN(characters) === true) {
        alert("Please use a number.")
        return;
    }
    console.log(characters)

    let includeSym = confirm("Would you like to include symbols?");
    let includeNums = confirm("Would you like to include numbers?");
    let includeLow = confirm("Would you like to include lowercase letters?");
    let includeUp = confirm("Would you like to include uppercase letters?");

    if (includeSym === false && includeNums === false && includeLow === false && includeUp === false) {
        alert("Must select one character type");
        return; 
    }
    let optionsObj = {
        characters,
        includeNums,
        includeLow,
        includeSym,
        includeUp
    }
    return optionsObj;
    }

// function that randomizes and displays the string of numbers, letters and symbols
function generatePassword() {
    var options2 = options();
    console.log(options2);
    let superArray = [];
    let results = [];


    if (options2.includeLow === true) {
        superArray = superArray.concat(lowArr);
    }

    if (options2.includeUp === true) {
        superArray = superArray.concat(upArray);
    }

    if (options2.includeNums === true) {
        superArray = superArray.concat(numsArray);
    }

    if (options2.includeSym === true) {
        superArray = superArray.concat(symArr);
    }
    
    console.log(superArray);


    for (let i = 0; i < options2.characters; i++) {
        let index  = Math.floor(Math.random() * superArray.length);
        console.log(index);
        let digit = superArray[index];
        results.push(digit)
    }
    return results.join("")
}


// Write password to the #password input
function writePassword() {

    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
