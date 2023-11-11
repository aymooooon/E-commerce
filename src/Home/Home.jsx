import React, { useContext,  } from 'react'

import { Link } from 'react-router-dom'
import { MediaContext } from '../Context/Context'





export default function  Home() {

  let{trendingproducts,clickedItemdata} =  useContext(MediaContext)  


 
        
    
        // useLayoutEffect(()=>{

        //   return ()=>{
        //     if(itemdata.length>0){
        //       return storedata()
            
        //     }
          
        //   }
          
          
        //        },[])
          

  
  return (
    <>
<div className='container'>

<div className='row mt-5'>  


<div className='row mt-5'>  
<div className=' col-md-4'> 
<div>
  <hr />
  <h1>trendingMencloths <br /> to buy <br /> now</h1>
</div>
</div>

{trendingproducts.map((product)=>{
  return <div   key={product.id} className='col-md-2  overflow-hidden'>
  
  
 {product.category==="men's clothing"?<div >
  <Link className='  text-decoration-none text-white ' to={`/Movisdetails/${product.id}`}>

  <div className=' mt-5 position-relative  overflow-hidden pp'>
  
  
    <img src={`${product.image}`} className='  w-100' alt="" />
  
    <div className=' position-absolute top-0   end-0 bg-danger '> {product.rating.rate}</div>
  
  
  <Link to={`/Movisdetails/${product.id}`}>
    <div className=' position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
      
      <p>{product.price}</p>
       </div>
       </Link>
  
  </div>
  <p> {product.title?product.title:"title"}</p>
  <p> {product.price}$</p>
  </Link>
  <button  className='btn btn-info ' onClick={()=>{clickedItemdata(product)}}>BUYNOW</button>

  

  
  </div>:""} 
  </div>


})}
</div>

<div className='row mt-5'> 
<div className=' col-md-4'> 
<div>
  <hr />
  <h1>trending  womens cloths <br /> to buy <br /> now</h1>
</div>
</div>


{trendingproducts.map((product)=>{  
  return <>
 {product.category==="women's clothing"?<div key={product.id} className='col-md-2    gy-5 overflow-hidden  ' >
  <Link className='  text-decoration-none text-white ' to={`/Movisdetails/${product.id}`}>
  <div className=' mt-5 position-relative   overflow-hidden pp'>
  
  
    <img src={`${product.image}`} className=' min w-100' alt="" />
  
    <div className=' position-absolute top-0   end-0 bg-danger '> {product.rating.rate}</div>
  
  

    <div className=' position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
      
      <p>{product.price}</p>
       </div>
      
  
  </div>
  </Link>


  <div className=' min'>
  <Link className='  text-decoration-none text-white min ' to={`/Movisdetails/${product.id}`}>

  <p> {product.title?product.title:"title"}</p>
  <p> {product.price}$</p>
  </Link>


  <button className='btn btn-info '  onClick={()=>{clickedItemdata(product)}} >BUYNOW</button>


  

  </div>

  </div>:"" } 

</>

})}
</div>
<div className=' col-md-4'> 
<div>
  <hr />
  <h1>trending jewelery cloths <br /> to buy now <br /> now</h1>
</div>
</div>

{trendingproducts.map((product)=>{
  return <>
 {product.category==="jewelery"?<div key={product.id} className='col-md-2    gy-5 overflow-hidden ' >
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

  <p> {product.title?product.title:"title"}</p>
  <p> {product.price}$</p>
  </Link>


  <button className='btn btn-info '  onClick={()=>{clickedItemdata(product)}} >BUYNOW</button>


  

  </div>

  </div>:"" } 

</>

})}
<div className=' col-md-4'> 
<div>
  <hr />
  <br /> <h1>trending electronics <br /> to buy now <br /> now</h1>
</div>
</div>



{trendingproducts.map((product)=>{
  return <>
 {product.category==="electronics"?<div key={product.id} className='col-md-2    gy-5 overflow-hidden  ' >
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

  <p> {product.title?product.title:"title"}</p>
  <p> {product.price}$</p>
  </Link>


  <button className='btn btn-info '  onClick={()=>{clickedItemdata(product)}} >BUYNOW</button>


  

  </div>

  </div>:"" } 

</>

})}



</div>

</div>
    </>
  
  )
  }