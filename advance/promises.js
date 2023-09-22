//Imagine you want to perform a task, like loading an image from the internet. In JavaScript, some tasks may take time to complete, and you don't want your entire program to wait for that task to finish. Instead, you'd like to continue doing other things while waiting for the image to load. This is where Promises come in.

//A Promise is like a special JavaScript object that represents a task that may take some time to finish. It promises to give you the result of that task once it's done.

// *You place an order (this is like starting a Promise).

// *The waiter gives you a token or a receipt (this is like the Promise object).

// *While you wait, you can do other things like talking with friends (this is like continuing with your code).

// *When the food is ready, the waiter brings it to your table (this is like resolving the Promise).

// *If there's a problem in the kitchen (like the chef is busy), you might wait a bit longer, or they might tell you they can't serve that dish (this is like rejecting the Promise).

//So, a Promise is a way to handle asynchronous tasks in JavaScript. It allows you to start a task, continue with other things, and then react when the task is done or if it encounters an error. It makes your code more efficient and responsive when dealing with tasks that may take some time.

const projectOne = new Promise(function (resolve, reject) {
  //Do async task
  //Db calls, cryptography, network
  setTimeout(() => {
    console.log(`Async task is completed`);
    resolve();
  }, 1000);
});

//resolve is connected to .then
projectOne.then(function () {
  console.log(`Promise consumed!`);
});

//2nd
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(`Async task 2`);
    resolve();
  }, 1000);
}).then(() => {
  console.log("async2 resolved");
});

//3rd
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Emir", email: "emir@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

//4th
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "Patrick", password: "videoTapes" });
    } else {
      reject(`ERROR: Something went wrong!`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(`The promise is either resolved or rejected!`);
  });

//5th
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "JavaScript", password: "123abc" });
    } else {
      reject(`ERROR: JS went wrong!`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//********FETCH*****//
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR : ", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
