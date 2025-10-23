import React, { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    console.log(userData);
    setUsers(userData);
  };

  return (
    <>
      {users.map((user) => (
       <>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h3>{user.phone}</h3>
       </>
      ))}
      
    </>
  );
}

export default Fetch;
