const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "UTF8" })
  .trim()
  .split("\n");

let depth = 0;
let hzPos = 0;
let aim = 0;

// part 1
input.map((i) => {
  const n = +i.substr(i.indexOf(" ") + 1);
  if (i[0] === "f") {
    hzPos += n;
  } else {
    depth += i[0] === "d" ? n : n * -1;
  }
});

console.log("Horizontal Position", hzPos);
console.log("Depth", depth);
console.log("Total", hzPos * depth);

// part 2:
depth = 0;
hzPos = 0;
aim = 0;
input.map((i) => {
  const n = +i.substr(i.indexOf(" ") + 1);
  if (i[0] === "f") {
    hzPos += n;
    depth += aim * n;
  } else {
    aim += i[0] === "d" ? n : n * -1;
  }
});

console.log("Horizontal Position", hzPos);
console.log("Depth", depth);
console.log("Total", hzPos * depth);
