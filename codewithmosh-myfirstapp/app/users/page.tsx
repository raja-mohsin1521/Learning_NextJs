// app/user/page.tsx
import React from 'react'

interface User {
  id: number;
  title: string;
  url: string;
}

const UserPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
const users: User[] = await res.json();

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.title}</h2>
          <img src={user.url} alt={user.title} width={200} />
        </div>
      ))}
    </div>
  );
};

export default UserPage;
