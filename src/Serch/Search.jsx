import React, { useContext, useState } from 'react'




import { Link } from 'react-router-dom'
import { MediaContext } from '../Context/Context'

export default function People() {

let[serchitem,setsearchitem]=useState([])
  let{clickedItemdata,trendingproducts} =  useContext(MediaContext)  

 let x;

//  list_product[i].pname.toLowerCase().includes(searchh.value.toLowerCase())
 const Search = (e) => {
    if (e.target.value) {

         x= trendingproducts.filter((item )=> {
   return  item.title.toLowerCase().includes(e.target.value.toLowerCase())
});
        console.log(x);

       setsearchitem(x)



    }
    else{

       setsearchitem([])

    }
};




  return (
    <>  <div className='  MR'>
    <input  className='form-control  m-auto w-50' placeholder='search..'  onKeyUp={Search}  type="text" />
    </div>
     <div className="container">
  
    <div className="row mt-5">



    
    
    {serchitem.map((product)=>{
  return <>
  
 {<div className='col-md-2    gy-5 overflow-hidden  ' >
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

  </div>} 

</>

})}
    
    
    </div>
    
      </div></>
  )
}
