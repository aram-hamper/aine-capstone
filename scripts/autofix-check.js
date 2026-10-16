const fs = require("fs");
const text = fs.readFileSync("greeting.txt", "utf8").trim();
if (text !== "Hello, world") {
  console.error(`expected greeting.txt to say "Hello, world", got "${text}"`);
  process.exit(1);
}
console.log("greeting.txt is right");
