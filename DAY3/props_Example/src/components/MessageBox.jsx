import React from 'react'

function MessageBox({name,color1,age}) {
  return (
       <>
       <h1 style={{color : color1}}>my name is {name} and my age is {age}</h1>
       </>
  )
}
export default MessageBox


// import React from 'react'

// function MessageBox({name="diksha",color1="blue"}) {
//   return (
//           <h1 style={{color : color1}}>my name is {name} </h1>

//   )
// }

// export default MessageBox