process.stdout.write("prompt > ");
const printWorkingDirectory = require("./pwd");
const list = require("./ls")

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  printWorkingDirectory(cmd);
  list(cmd)
})
