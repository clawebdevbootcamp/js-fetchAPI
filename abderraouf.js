// 1 - Request the list of users from the API endpoint:
// https://reqres.in/api/users

// 2 - Stor the response in a variable

// 3 - Convert the json response and store the returned value in a a variable

// 4 - Iterate through the list of users and print out each user

exampleUsers = [
  {
    first_name: "Michael",
    lasr_name: "Lawson",
    email: "michael.lawson@reqres.in",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    first_name: "Michael",
    lasr_name: "Lawson",
    email: "michael.lawson@reqres.in",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    first_name: "Michael",
    lasr_name: "Lawson",
    email: "michael.lawson@reqres.in",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    first_name: "Michael",
    lasr_name: "Lawson",
    email: "michael.lawson@reqres.in",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
];

exampleUsers.forEach((user) => {
  //Create a div
  let div = document.createElement("div");
  //Add 'user' class to div
  div.className = "user";
  //Add innerHTML to div
  div.innerHTML = `
    <img src="${user.avatar}" alt="" />
    <div>
        <span class="name">${user.first_name} ${user.last_name}</span>
        <span class="email">george.bluth@reqres.in</span>
    </div>
    `;
  //Add div as a child for 'users-list' using appnedChild(node)
  document.getElementById("users-list").appendChild(div);
});

// Solution starts here:

//Usinng .then and .catch method
const fetchUser = () => {
    //
}

//Usinng async/await
const fetchUserAsync = () => {
    //
}

