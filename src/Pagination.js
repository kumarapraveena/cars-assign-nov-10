import React from 'react'

const Pagination = ({data,pageHandler}) => {
    let pageNumbers=[]
    for(let i=1;i<Math.ceil(data.length/4)+1;i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        {pageNumbers.map(page=><button  style={{width:"50px",margin:"10px",marginTop:"20px"}}className='pagebutton' onClick={()=>pageHandler(page)}>{page}</button>)}
    </div>
  )
}

export default Pagination