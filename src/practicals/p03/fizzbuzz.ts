const x = Number(process.argv[2]);
const m = Number(x);


for (let j = 1; j <= m; j++) {

    if (j % 3 == 0 && j % 5 ==0 ) {
        console.log("FizzBuzz");
      } else if (j % 3 == 0) {
        console.log("Fizz");
      } else if (j % 5 == 0) {
        console.log("Buzz");
      } else  {
        console.log(j);
      }
  
}
