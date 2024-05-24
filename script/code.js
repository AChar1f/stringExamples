let sentence = 'I love programming'
// String size
let numOfChars = sentence.length
console.log(`Number of characters: ${numOfChars}`)
//First Character
console.log(`First character: ${sentence[0]}`)
//Last character
console.log(`Last character: ${sentence[numOfChars - 1]}`)
//Check if the character starts with I vs i
console.log(`Start with I? ${sentence.startsWith('I')}`)
//String Method EG sentence.(name of method) which is used ot perform a a preset functionality.
//Replace love with Hate
console.log(`Replace love with hate: ${sentence.replace('love', 'hate')}`)
//Check what string ends with
console.log(`Does it end with programming? 
    ${sentence.endsWith('programming')}`);
    console.log(`includes: ${sentence.includes('love')

}`)

/* 
Activity: Make use of the following methods-
split()
slice()
charAt()
concat()
indexOf()
lastIndexOf()
subtring()
toUpperCase()
trim()
trimStart()
trimEnd()
*/

// console.log(`split: ${sentence.split('')}`)

// console.log(`slice: ${sentence.slice(2)}`) without end specified

// console.log(`charAt: ${sentence.charAt(7)}`)

// console.log(`concat: ${sentence.concat( ' theres so many things it can be used to do')}`)

// console.log(`indexOf: ${sentence.indexOf('r')}`)

// console.log(`lastIndexOf: ${sentence.lastIndexOf('i')}`)

// console.log(`substring: ${sentence.substring(2)}`) //performs similiar to .slice(). However it will swap the arguements if the initial arguement is greater than the ending arguement. EG(18, 7). Slice cannot do this.

// console.log(`toUpperCase: ${sentence.toUpperCase(sentence)}`)

// console.log(`trim: ${sentence.trim()}`)

// console.log(`trimStart: ${sentence.trimStart()}`)

// console.log(`trimEnd: ${sentence.trimEnd()}`)


//Solution
// console.log(`split(''): `, sentence.split(''))
// console.log("split(' '): ", sentence.split(' '))

// console.log(`slice(): ${sentence.slice(2, 6)}`)

// console.log(`substring(): ${sentence.substring(7, 18)}`)

// console.log(`trim: ${sentence.trim().length}`)

//Post incrument: Access the same value initially and incrument it later.
// let numb1 = 2
// console.log(`Numb1: ${numb1}`) 

// let numb2 = numb1++  //the operator sign position indicates that this is post incrument
// console.log(`Numb2: ${numb2}`)// initial assignment grabs the value of numb1 and it stores this value. 
//incrument changes are available to numb1 post the incrument assignment

// console.log(`Current value of Numb1: ${numb1}`) 


//Preincrument incruments the value immediately when value is accessed.
// let numb3 = 4
// console.log(`Numb3: ${numb3}`)
// let numb4 = ++numb3  // position of operation indicates preincrument
// console.log(`Numb4: ${numb4}`);

console.log(Math.random()) // gives a random number between 0 and 1. Changes on refresh

console.log(Math.random() * 10) // gives a random number between 0 and 10. Changes on refresh

// let numb5 = -8
// console.log(Math.abs(numb5)) always returns a number in and it makes it positive.

// Rest operator vs Spread operator
/*
Rest Operator Example: three dots is precedes the parameters in the funnction
function(...numb1) {

}

Spread Operator Example:  
let numbers = [ 2, 8, 9, 5, 7, 15, 16, 24]
console.log(`Highest number: ${Math.max(...numbers)})
*/

let numbers = [2, 8, 10, 1, 4, 11]
console.log(`Highest number: ${Math.max(...numbers)}`)
console.log(`Lowest number: ${Math.min(...numbers)}`)