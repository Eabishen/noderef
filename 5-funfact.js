// we can directly invoke an function directly to another file without exporting

const num1 = 66;
const num2 = 88;

const addNum = () => {
  console.log(`The sum is ${num1 + num2}`);
};

addNum();
