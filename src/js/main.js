import makeUsersList from "../templates/users.hbs";
import makeSortedUsersList from "../templates/sorted-users.hbs";

const users = [
  {
    username: "Maksym",
    email: "asdf@gmail.com",
    password: "qwerty",
  },
  {
    username: "User777",
    email: "testmail@gmail.com",
    password: 12345678,
  },
  {
    username: "Abc123",
    email: "thisismail@outlook.com",
    password: 1111,
  },
];

const main = document.querySelector("main");
const sortBtn = document.querySelector("#sort");
const userHTML = makeUsersList({ users });

main.insertAdjacentHTML("beforeend", userHTML);

const usersList = document.querySelector(".users");

const renderUsersList = (e) => {
  usersList.remove();

  const sortedUsers = users.sort((a, b) =>
    a.username.localeCompare(b.username)
  );
  const sortedUsersHTML = makeSortedUsersList({ sortedUsers });
  main.insertAdjacentHTML("beforeend", sortedUsersHTML);

  sortBtn.removeEventListener("click", renderUsersList);
};

sortBtn.addEventListener("click", renderUsersList);
