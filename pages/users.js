import Link from "next/link";
import { useState } from "react";
const Users = ({users}) => {

  return (
    <div>
      <ul className="navbar">
        <li>
          <Link href="/">
            <a>Главная</a>
          </Link>
        </li>
      </ul>
      <h1>User page</h1>
      <ul>
        {users.map((user) => {
            return (
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
        })}
      </ul>
      <style jsx>
        {`
          .navbar {
            background-color: grey;
          }
        `}
      </style>
    </div>
  );
};
export default Users;



export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users },  
  };
}