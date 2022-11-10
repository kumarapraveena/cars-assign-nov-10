// import React, { useEffect, useState } from 'react'
// import Records from "../public1/api/cars.json"
// import "./Component1.css"
// const Component1 = () => {
//   return (
//     <div className='inner'>
//       {
//         Records&&Records.map(record=>{
//           return(
//             <div key={record.id} className='box'>
//               <p>{record.bodyType}</p>
//               <p className='modal-para'>{record.modelName}</p>
//               <p >{record.modelType}</p>
//              <img src={record.imageUrl}/>
             
//             </div>
//           )
//         }).slice(0,4)
//       }
       
//     </div>
//   )
// }

// export default Component1
import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
// import { useNavigation } from 'react-router-dom'
import Records from "../public1/api/cars.json"
import Pagination from '../Pagination'

import "./Component1.css"
const Component1 = () => {
  const [data,setData]=useState([])
  const[perpage,setPerpage]=useState([])
  // const navigate=useNavigation()
  useEffect(()=>{
    setData(Records)
    setPerpage(Records.slice(0,4))
  },[])
  const pageHandler=(pageNumber)=>{
    setPerpage(data.slice((pageNumber*4)-4,pageNumber*4))
  }
  return (
    <div >
     {data.length>=1?
     <div className='inner'>
{console.log(data)}
{/* {perpage.map(data=><div className='post'>{data}</div>)} */}

{perpage.map((item)=>{
  return <div key={item.id} className='box'>
                 <p>{item.bodyType}</p>
                 <div className='paramain'>
                 <p className='modal-para'>{item.modelName}</p>
               <p className='modal-para1'>{item.modelType}</p>
               </div>
               <img src={item.imageUrl}/><br/>
               <div className='bottom'>
            
          <a href="/post"><p>LEARN</p></a>
           <a href="/postview"><p>SHOP</p></a>
              
               {/* <p>SHOP</p> */}
               </div>
               {/* <Pagination/> */}
               
             </div>
             
})}
     </div>
     :
     <p>Not Loaded</p>
     }
     <Pagination data={data} pageHandler={pageHandler}/>
    </div>
  )
}

export default Component1