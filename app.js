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
console.log("Bottom Of the code")


// calling promise
// Bottom Of the code
// This is my resolved data
// Getting Data