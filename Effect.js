import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Effector() {

   
     const [resourceType, setResourceType] = useState('posts')
     const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

     const handleSize = () =>{
      setWindowWidth(window.innerWidth)
     }
    //  const [items,setItems] = useState([]) 

    //  console.log('render1')

    //  useEffect(()=>{

    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))
    //     // console.log('OnMount')
    //  },[resourceType])
  
       useEffect(()=> {
        window.addEventListener('resize',handleSize)
       })
    
  return (
<>
<div>
        {/* <button onClick={()=>setResourceType('Posts')}>Posts</button>
        <button onClick={()=>setResourceType('Users')}>Users</button>    
        <button onClick={()=>setResourceType('Comments')}>Comments</button> */}
        {windowWidth}
   
    </div>

    {/* <h1>{resourceType}</h1>
    
    {items.map((item,index)=>{
        return <pre>
            {JSON.stringify(item)}
        </pre>
    })} */}
</>
    
    
  )





}

export default Effector
 