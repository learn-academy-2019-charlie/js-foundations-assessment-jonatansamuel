Javascript Foundations Assessments
// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not.
// If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

var divisibleBy3 = function
  (number){
    if ( number % 3 === 0 )
    {console.log( number + " is divisible by three.")
  }
    else {console.log( number + " is not divisible by three.")
  }
}

divisibleBy3(10)

// 2. Write an object called helloMe. Include your first_name, last_name
//and at least two other properties of you. Write a function that returns a description of you.
hellome = {

}
class helloMe{
    constructor(nombre, apellido){
        this.firstName = nombre
        this.lastName = apellido
    }

    description(){
        return this.firstName + this.lastName + " is 27 years old and is a Gemini."
    }
}
var jonah = new helloMe('Jonatan', ' Cruz')
console.log(jonah.description())




// 3. Create an array of 5 grocery items. Write a function that returns the first, middle,
//and last item as a string.

//return first, middle, and last. Should see: eggs, Cheese, pasta.
var arr1 = ["eggs", "bread", "cheese", "sauce", "pasta"]


const Num = (array) => {
  return arr.map()
}
console.log(arr1[0]);

console.log(arr1[2]);

console.log(arr1[4]);
//write a function that takes an array
// function every_other (array){
//     let newArr = []
//     for( let i = 0; i <array.length; i++ ){
// // make the array push 0,2, and 4.
//     newArr.push(array[i] % 2 === 0 )s
//     }
//     return newArr
// }
//
// console.log(every_other(arr1))

// 4. Write a function called alphabetSoup that takes an argument of "str"
//and return a string with the letters in alphabetical order (ie. learn becomes aelnr).
//Assume numbers and punctuation symbols will not be included in the parameter.

function alphabetSoup (array){

    for(let i=0; i<names.size(); i++){

    }

}

// 5. Given the arrays below, write a function animalNums
//that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
