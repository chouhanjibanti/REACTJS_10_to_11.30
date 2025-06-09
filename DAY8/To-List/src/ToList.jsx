// import React, { useState } from 'react'

// function ToList() {
//    const[activity,setActivity] = useState("");  // diskha , goutam , 
//    const[listData , setListData]  = useState([]);

//    function addActivity(){
//       setListData((listData)  =>{
//          const updatedList = [...listData , activity];  
//          setActivity("");
//          return updatedList;
//       })
//    }

//    function removeActivity(i){
//       const updatedListData = listData.filter((ele,id)=> i !== id)
//       setListData(updatedListData)
//    }

//   function removeAll(){
//     setListData([]);
//   }

//   return (
//     <>
//         <div className='container'>
//              <div className='header'>TODO LIST</div>

//              <input type="text" placeholder='Add Your Task' value={activity} onChange={(e) => setActivity(e.target.value)}/>

//              <button className='btn1' onClick={addActivity}> Add</button>

//              <p className='list-heading'>Your List : </p>

//              {listData.length !==0 &&
//              listData.map((data,i)=>(
//                  <div className='task-item' key={i}>
//                     <div className='task-text'>{data}</div>
//                     <button className='btn-position' onClick={()=> removeActivity(i)}>
                        
//                     </button>
//                  </div>
//              ))}

//              {listData.length >=1 && (
//                 <button className='btn-position1' onClick={removeAll}>Remove All</button>
//              )}


//         </div>
//     </>
//   )
// }

// export default ToList



import React, { useState } from 'react';

function ToList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    if (activity.trim() === "") return; // Prevent empty tasks
    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((_, id) => i !== id);
    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>

        <input
          type="text"
          placeholder="Add Your Task"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <button className="btn1" onClick={addActivity}>Add</button>

        <p className="list-heading">Your List:</p>

        {listData.length !== 0 &&
          listData.map((data, i) => (
            <div className="task-item" key={i}>
              <div className="task-text">{data}</div>
              <button className="btn-position" onClick={() => removeActivity(i)}>
                Delete
              </button>
            </div>
          ))}

        {listData.length >= 1 && (
          <button className="btn-position1" onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>
    </>
  );
}

export default ToList;
