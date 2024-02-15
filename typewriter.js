const sentence = "hello there from lighthouse labs";
let delay = 0; // initialize delay counter

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char + "\n");
  }, delay);

  delay += 50; // increment delay for each character
};