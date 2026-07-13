import React, { useEffect, useState } from 'react'
export default function UseState () {
    //
    let bookTitle ="ikigai"
    let [price,setPrice] = useState(300)
    let [qn,setQn] = useState(1)
    let pr = 300

  return (
    <div className="card">
        <h2>Book Title:{bookTitle}</h2>
        <h2>Book Price:{price}</h2>
        <h2>Book Quantity:{qn}</h2>

        <button onClick={()=>{ setQn(qn++)}}>+</button>
        <button onClick={()=>{ 
            if(qn==0){
                alert("Quantity Must to be 1")
            }
            else{
                setQn(qn--)
            }
    
        }}>-</button>

    </div>
  )
}