import React from 'react'

function MessageBox({name , color , age}) {
  return (
   <>
   <h1 style={{color :color}}>Hello my name is, {name} and my age is {age}</h1>
   </>
  )
}

// export default MessageBox


// example of default props
// function MessageBox({name="kritanshu" , color= "blue"}) {
//   return (
//    <h1 style={{color: color}}>Hy ,{name}</h1>
//   )
// }

export default MessageBox

