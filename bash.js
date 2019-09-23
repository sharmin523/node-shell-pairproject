process.stdout.write("prompt > ");
const printWorkingDirectory = require("./pwd");
const list = require("./ls")
const cat = require("./cat")
const curl = require("./curl")

process.stdin.on('data', (data) => {
  const inputs = data.toString().trim().split(' ');
  const cmd = inputs[0]
  const additionalInput = inputs.slice(1)

  switch (cmd) {
    case 'pwd':
      printWorkingDirectory();
      break;
    case 'ls':
      list();
      break;
    case 'cat':
      cat(additionalInput)
      break;
    case 'curl':
      curl(additionalInput)
      break;
    default:
      process.stdout.write('Not a valid command\nprompt > ')
  }

  setTimeout(() => {
    process.stdout.write('\nprompt > ');
  }, 500) 
})
