i = Number(process.argv[2]);

const n = Number(i);

if (Number.isNaN(i) || i <= 0 ) 
    console.log("Invalid input");

for (let i = 1; i <= n; i++) {

    if (i % 3 == 0 && i % 5 ==0 ) {
        console.log("FizzBuzz");
      } else if (i % 3 == 0) {
        console.log("Fizz");
      } else if (i % 5 == 0) {
        console.log("Buzz");
      } else  {
        console.log(i);
      }
  
}
