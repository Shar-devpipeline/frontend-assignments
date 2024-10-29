const users = [
  {
    uid: "1",
    name: "Jill Johnson",
    email: "jill@johnson.com",
    password: "password",
  },
  {
    uid: "2",
    name: "Jack Johnson",
    email: "jack@johnson.com",
    password: "Jackpassword",
  },
  {
    uid: "3",
    name: "James Johnson",
    email: "james@johnson.com",
    password: "Jamespassword",
  },
];

console.log(`Hello ${users[1].name} your email is ${users[1].email}`);

//  SECOND ASSIGNMENT

const requestObject = new XMLHttpRequest();
function planets() {
  return new Promise((resolve, reject) => {
    requestObject.open("GET", "https://www.swapi.tech/api/planets");
    requestObject.responseType = "json";

    requestObject.onerror = () => {
      reject("Error");
    };
    requestObject.send();

    requestObject.onload = () => {
      console.log(requestObject);
      if (requestObject.response == null) {
        reject();
      } else if (requestObject.status == 200) {
        resolve(requestObject.response);
      } else {
        reject("network error");
      }
    };
  });
}

planets()
  .then((data) => {
    console.log("data: ", data);
    return data;
  })
  .then((moredata) => {
    console.log("detailed info: ", moredata);
  })
  .catch((error) => {
    console.error(`Error: `, error);
  });
