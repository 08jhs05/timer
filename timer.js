let args = process.argv.slice(2);

for(arg of args){
  let convertToNum = Number(arg);
  if(!Number.isInteger(convertToNum) || convertToNum < 0) {continue};
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000);
}
