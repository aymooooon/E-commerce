import React, { useLayoutEffect, } from 'react'
import { useContext } from 'react'
import { MediaContext } from '../Context/Context'
import { Link, } from 'react-router-dom'


           

export default function Cart() {

  let {clickedItemdata,removedata,removeitem} =useContext(MediaContext)

let hhh=JSON.parse( localStorage.getItem("clickedItemdata")  )



  useLayoutEffect(() => {
    // getproduct()
console.log(hhh)



  },)
  
  return   <> 
  <div className='container'>

<div className='row'>  


  {hhh? hhh.map((pro)=>{
return<>

<div className='col-md-2    gy-5 overflow-hidden  ' >
  <Link className='  text-decoration-none text-white ' to={`/Movisdetails/${pro.id}`}>
  <div className=' mt-5 position-relative  overflow-hidden pp'>
  
  
    <img src={`${pro.image}`} className='  w-100' alt="" />
  
    <div className=' position-absolute top-0   end-0 bg-danger '> {pro.rating.rate}</div>
  
  

    <div className=' position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
      
      <p>{pro.price}</p>
      <p>{pro.qty}</p>
       </div>
      
  
  </div>
  </Link>


  <div>
  <Link className='  text-decoration-none text-white ' to={`/Movisdetails/${pro.id}`}>

  <p> {pro.title}</p>
  <p> {(pro.price*pro.qty).toFixed(2)}$</p>
  <p> amount: {pro.qty }</p>

  </Link>


  <button className='btn btn-info '  onClick={()=>{clickedItemdata(pro)}}>increment</button>

  {/* <button className='btn btn-info ' >decrement</button> */}
  <button className='btn btn-info '  onClick={()=>{removedata(pro)}} >decrement</button>
  <button className='btn btn-info '  onClick={()=>{removeitem(pro)}} >delete</button>




  

  </div>

  </div>


</>
    
 
 
  })

  :""}





</div>
</div>
    </>
  
}
