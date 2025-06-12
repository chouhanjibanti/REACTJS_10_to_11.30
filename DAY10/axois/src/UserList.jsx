// fetching the data from the API
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {
  const[users,setUsers] = useState([]);

  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
        setUsers(response.data)
      })
      .catch(error =>{
        console.log(`Error fetching data: `,error);
      })
  },[])// first tme render

  return (
    <>
     <h2>User List</h2>
     <ul>
        {users.map(user => (<li key={user.id}>{user.name} , {user.username}</li>))}
     </ul>
    </>
  )
}

export default UserList