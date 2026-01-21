const i = Number(process.argv[2]);

if (Number.isNaN(i) || i < 0 || i > 100) {
  console.log("Invalid input");

} else if (i >= 80) {
  console.log("Grade is A");
} else if (i >= 70) {
  console.log("Grade is B");
} else if (i >= 60) {
  console.log("Grade is C");
} else if (i >= 50) {
  console.log("Grade is D");
} else if(i >= 0 ) {
  console.log("Grade is F");
}