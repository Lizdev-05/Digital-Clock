import React, { useState } from 'react'
import "../App.css"

function Counter() {
  
    const [count, setCount] = useState(0)
     
    function increase (){
        setCount(count + 1)
    }

    function decrease (){
        setCount(count - 1)
    }



    return (
        <div className="blessing">
            <h1 className='cyb'>Count Your Blessings</h1>
           <div className='count'>
               <h1>{count}</h1>
           <button onClick={increase}>+</button>
           <button onClick={decrease}>-</button> 
           </div>
           
        </div>
    )
}

export default Counter
