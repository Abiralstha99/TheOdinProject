console.log("Hello World")
let name = "Superman";
let surname = "DC";
console.log(name);
console.log(surname);

const PI = 22/7;
console.log(PI);

console.log('%c I am  some great text', 'font-size:50px; background:blue');

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string


console.warn("Ohh no")
console.error ("Error")
console.info("Today is thursday")
console.assert(1===1, 'this is correct')
// console.clear()
console.dir

function add7(number) {
    return number + 7;
}

console.log(add7(5));

function capitalize(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}

console.log("Hello")

function lastLetter(word) {
    return word.slice(word.length-1)
}
console.log(lastLetter("Soikat"))
function showMessage() {
    alert( 'Hello everyone!' );
  }

  showMessage()