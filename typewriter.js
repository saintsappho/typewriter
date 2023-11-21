const sentence = (process.argv.slice(2).join());

for (let i = 0; i < sentence.length; i++) {
  ((index) => {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, (index * '50'))
  })(i)
};
setTimeout(() => {
      process.stdout.write('\n');
    }, (sentence.length * '50'))