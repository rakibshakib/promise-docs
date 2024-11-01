

const asyncFn = async () => {
  console.log("calling promise in asyncFn");
  console.log("Getting Data in asyncFn");
};

console.log(asyncFn())

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolved data");
  }, 1500);
});

const run = async () => {
  console.log("calling promise");
  const data = await promise;
  console.log(data);
  console.log("Getting Data");
};

run();
console.log("Bottom Of the code");

