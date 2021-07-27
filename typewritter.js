const sentence = "hello there from lighthouse labs";
let n = 0;

for(let i = 0; i < sentence.length; i++){
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, n);
  n += 50;
}

