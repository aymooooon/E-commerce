import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom' 
import { useEffect } from 'react'
import { MediaContext } from '../Context/Context'
export default function Movisdetails() {

let {productid}=useParams()

let[productdet,setproductdet]=useState({})
let{clickedItemdata}=  useContext(MediaContext)


  async function getproduct(id){

  let {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
  

  setproductdet(data)
  console.log(data)
  }


useEffect(() => {
  
  getproduct(productid)

  console.log(productdet)
},[])




  return (
    <div className='container mt-5'>
     <div className='row'>
      
      <div className='col-md-4 mt-5'>          
      
      
      
        <div className=' position-relative'>

<div className='position-absolute bg-danger top-0 end-0'></div>
        <img className=' w-100  position-absolute ' src={`${productdet.image}`} alt="" />

      
        
        </div>
        </div>
      <div className='col-md-8 mt-5'><div>
        
        <p className=''><span className='bg-info'> product cat:</span>{productdet.title}</p>
        <p className='mt-4'><span className='bg-info'>product description:</span> {productdet.description}</p>


<p className='mt-2'>price: {productdet.price}</p>

<button className='btn btn-info ' id='addtocart'onClick={()=>{clickedItemdata(productdet)}} >addtocart</button>









        </div> </div>
      </div> 
    
    
    
    </div>
  )
}
