function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register here ");
      resolve();
    }, 4000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login here");
      resolve();
    }, 4000);
  });
}

function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetch data ");
      resolve();
    }, 5000);
  });
}

function DisplayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("displayData");
      resolve();
    }, 6000);
  });
}

// register()
//     .then(login)
//     .then(getdata)
//     .then(DisplayData)
//     .catch((err) => {
//         console.log("error:err")
//    })
async function test() {
  try {
    await register();
    await login();
    await getdata();
    DisplayData();
  } catch (err) {
    console.log("error:", err);
  }
}
test();

console.log("call another application");
