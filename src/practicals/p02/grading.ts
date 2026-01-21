const i = Number(process.argv[2]);

if (Number.isNaN(i) || i < 0 || i > 100) {
  console.log("Invalid Input");

} else if (i >= 80) {
  console.log("A");
} else if (i >= 70) {
  console.log("B");
} else if (i >= 60) {
  console.log("C");
} else if (i >= 50) {
  console.log("D");
} else if(i >= 0 ) {
  console.log("F");
}