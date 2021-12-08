import fs from 'fs/promises';

const depthsStr = await fs.readFile('./data/day1.txt', 'utf8');
const depths = depthsStr.split('\n').filter(Boolean);

let windows = [];
depths.forEach(depth => {
  windows.push([]);
  windows.forEach(window => {
    if (window.length < 3) {
      window.push(depth);
    }
  });
});

windows = windows.filter(window => window.length === 3);

const windowDepths = windows.map(window => {
  return window.reduce((acc, curr) => parseInt(acc, 10) + parseInt(curr, 10));
});

let current = null;
let increases = 0;

windowDepths.forEach(depth => {
  if (current !== null && depth > current) {
    increases++;
  }
  current = depth;
});

console.log(increases)
