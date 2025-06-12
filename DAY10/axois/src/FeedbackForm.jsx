import React, { useState } from 'react'
import axios from 'axios'

function FeedbackForm() {
    const[username,setUsername] = useState('');
    const[message,setMessage] = useState('');
    const[status,setStatus] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();

         try {
          const response =await axios.post('https://your-api.com/api/feedback', {
            username,
            message,
          });
          console.log(response.data);
          setStatus("feedback submitted successfully")
       

    } catch (error) {
          console.log(error);
          setStatus("failed to submit feedback form")
    }

    }

   
  return (
    <>
       <h2>Send feedback</h2>
       <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} />


        <br />
        <textarea placeholder='Your message' value={message} onChange={(e)=>setMessage(e.target.value)} required/>

        <br />

        <button type='submit'>Submit</button>
       </form>
       <p>{status}</p>
    </>
  )
}

export default FeedbackForm