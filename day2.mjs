import fs from 'fs/promises';

const instructionsStr = await fs.readFile('./data/day2.txt', 'utf8');
const instructionLines = instructionsStr.split('\n').filter(Boolean);

let horizontal = 0;
let depth = 0;

instructionLines.map(line => line.split(' '))
  .map(([instruction, value]) => [instruction, parseInt(value, 10)])
  .forEach(([instruction, value]) => {
    console.log(instruction, value);
    if (instruction === 'forward') {
      horizontal += value;
    } else if (instruction === 'down') {
      depth += value;
    } else if (instruction === 'up') {
      depth -= value;
    }
  });

console.log(horizontal, depth);
console.log(horizontal * depth);

