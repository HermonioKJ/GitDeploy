'use client'

import Image from "next/image";
import { useState } from "react";

const username = [
  'Kevin',
  'Carter'
];

function addUsers (newUsers: string){
  username.push(newUsers);
}

export default function Home() {
  const  [newUsername, setNewAddUsers] = useState('')
  const [username, setAddUsers] = useState( 
  ['Kevin',
  'Carter',]
);

  function AddUsers(){
    setAddUsers([...username, newUsername]);
    setNewAddUsers('');
  }

  return (
    <main>
      <h1>Testing</h1>
      <h2>Sign in</h2>
      <input placeholder="Username"
      value={newUsername}
      onChange={(event) =>setNewAddUsers(event.target.value)}></input><br></br>
      <input placeholder="Password"></input><br></br>
      <button onClick={AddUsers}>Sign in</button><br></br>
      <ul>
        {username.map(function(users){
          return <li key = {users}> {users}</li>
        })}
      </ul>
    </main>
  );
}
