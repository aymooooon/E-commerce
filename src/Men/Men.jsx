import React, { useContext } from 'react'


import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../Context/Context'

export default function People() {


  let{clickedItemdata,trendingproducts} =  useContext(MediaContext)  


  // let [pnum,setpnum]=useState([])
  

    

    useEffect(() => {


          }, [])




  return (
    <>  <div className="container mt-5">

    <div className="row mt-5">
    
    
    {trendingproducts.map((product)=>{
  return <div key={product.id} className='col-md-2 gy-5 overflow-hidden'>
  
 {product.category==="men's clothing"?<div  >
  <Link className='  text-decoration-none text-white ' to={`/Movisdetails/${product.id}`}>
  <div className=' mt-5 position-relative  overflow-hidden pp'>
  
  
    <img src={`${product.image}`} className='  w-100' alt="" />
  
    <div className=' position-absolute top-0   end-0 bg-danger '> {product.rating.rate}</div>
  
  

    <div className=' position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
      
      <p>{product.price}</p>
       </div>
      
  
  </div>
  </Link>


  <div>
  <Link className='  text-decoration-none text-white ' to={`/Movisdetails/${product.id}`}>

  <p> {product.title?product.title:"movie"}</p>
  <p> {product.price}$</p>
  </Link>


  <button className='btn btn-info '  onClick={()=>{clickedItemdata(product)}} >BUYNOW</button>


  

  </div>

  </div>:"" } 
  </div>



})}
    
    
    </div>
    
      </div>
      
      </>
  )
}
