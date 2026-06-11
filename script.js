function stringChop(str, size) {
  // your code here
	stringChop("Hello, world!", 5);
// ["Hello", ", wor", "ld!"]

stringChop("12345", 2);
// ["12", "34", "5"]

stringChop("abc", 5);
// ["abc"]

stringChop(null, 3);
	
// []
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
