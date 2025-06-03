import React from 'react'

function LisWithKey() {

      const items = ["India", "Bangaldesh", "pakistan", "srilanka", "US"];

        const listItems = items.map((item,index) => <li key={index}>{item}</li>)

  return (
    <>
        <ul type="circle">
            <p>{listItems}</p>
        </ul>
    </>
  )
}

export default LisWithKey