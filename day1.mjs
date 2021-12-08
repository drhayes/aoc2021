import fs from 'fs/promises';

const depthsStr = await fs.readFile('./data/day1.txt', 'utf8');
const depths = depthsStr.split('\n').filter(Boolean);

let current = null;
let increases = 0;

depths.forEach(depth => {
  depth = parseInt(depth, 10);
  if (current !== null && depth > current) {
    increases++;
  }
  current = depth;
});

console.log(increases);
