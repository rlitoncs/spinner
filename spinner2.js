const spinner = "|/-\\|/-\\"
let ms = 0;
for (const char of spinner){
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, ms);
  ms += 200;
}