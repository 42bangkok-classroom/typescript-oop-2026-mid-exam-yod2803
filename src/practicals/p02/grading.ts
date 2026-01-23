const input = Number(process.argv[2]);

if (Number.isNaN(input) || input < 0 || input > 100) {
  console.log("Invalid input");

} else if (input >= 80) {
  console.log("Grade is A");
} else if (input >= 70) {
  console.log("Grade is B");
} else if (input >= 60) {
  console.log("Grade is C");
} else if (input >= 50) {
  console.log("Grade is D");
} else if(input >= 0 ) {
  console.log("Grade is F");
}
