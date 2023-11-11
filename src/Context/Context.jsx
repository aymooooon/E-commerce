import axios from "axios";
import { createContext,  } from "react";
import { useEffect,useState } from "react";




export let MediaContext=createContext("")



function  MediaContextProvider(props){

  let [itemdata,setitemdata]=useState([])
  let [reload,setreload]=useState(0)
  let cartPrice='$'+itemdata.reduce((x,y)=>x+y.price*y.qty,0).toFixed(2);

  // let ggg=JSON.parse(localStorage.getItem("clickedItemdata"))



//  let clickedItemdata=  (product)=>{
  
//   let exist =itemdata.find((e)=>{return e.id===product.id})
//   if(exist){
//     let x =itemdata.map((ele)=>{return ele.id===product.id?{...exist,qty:exist.qty+1} :ele})
//   // console.log(x)

//   localStorage.setItem("clickedItemdata",JSON.stringify(itemdata))
//   setitemdata(x)
//    console.log( itemdata)
//   }else{

    
// let mydata=[...itemdata,{...product,qty:1}]

//   console.log(itemdata)
//   localStorage.setItem("clickedItemdata",JSON.stringify(itemdata))
//   setitemdata(mydata)

  

// }

// }


let clickedItemdata = (product) => {
  setitemdata((prevItemData) => {
    let exist = prevItemData.find((e) => e.id === product.id);
    if (exist) {
      let updatedItemData = prevItemData.map((ele) =>
        ele.id === product.id ? { ...exist, qty: exist.qty + 1 } : ele
      );
      localStorage.setItem("clickedItemdata", JSON.stringify(updatedItemData));
      console.log(updatedItemData);
      return updatedItemData;
    } else {
      let updatedItemData = [...prevItemData, { ...product, qty: 1 }];
      localStorage.setItem("clickedItemdata", JSON.stringify(updatedItemData));
      return updatedItemData;
    }
  });
};
let cartCount=itemdata.reduce((x,y)=>x+y.qty,0)


//  let removedata=(product)=>{

//   let exist =itemdata.find((e)=>{return e.id===product.id})
//   if(exist.qty>=1){
//     let x =itemdata.map((ele)=>{return ele.id===product.id?{...exist,qty:exist.qty-1} :ele})
//     setitemdata(x)
//     localStorage.setItem("clickedItemdata",JSON.stringify(itemdata))



//   }



//  }

let removedata = (product) => {
  setitemdata((prevItemData) => {
    let exist = prevItemData.find((e) => e.id === product.id);
    if (exist && exist.qty >= 1) {
      let updatedItemData = prevItemData.map((ele) =>
        ele.id === product.id ? { ...exist, qty: exist.qty - 1 } : ele
      );
      localStorage.setItem("clickedItemdata", JSON.stringify(updatedItemData));
      return updatedItemData;
    } else {
      removeitem(product)
      return prevItemData;
    }
  });
};

//  function removeitem(product){
//   let exist =itemdata.filter((e)=>{return e.id!==product.id})
//   setitemdata(exist)
//   console.log(itemdata)
//   localStorage.setItem("clickedItemdata",JSON.stringify(itemdata))



//  }



  

 function removeitem(product) {
  setitemdata((prevItemData) => {
    const updatedItemData = prevItemData.filter((e) => e.id !== product.id);
    localStorage.setItem("clickedItemdata", JSON.stringify(updatedItemData));
    return updatedItemData;
  });
}



    let [trendingproducts,settrendingproducts]=useState([])


      async function  trending(){
      



        
        
        let {data}= await axios.get(`https://fakestoreapi.com/products`)
        console.log(data)
        settrendingproducts(data)

        
          
        }
    
        






           
    // useLayoutEffect
        
    useEffect(() => {

      trending()
  let x=JSON.parse( localStorage.getItem("clickedItemdata"))

  if(x!=null){
setitemdata(x)

  }

   

return()=>{


}

        


        // console.log(trendingmovis)
            },[])


            
       






    return <MediaContext.Provider value={{cartPrice,trendingproducts,trending,clickedItemdata  ,reload,setreload,itemdata,removedata,removeitem,cartCount,setitemdata}}>



{props.children}


</MediaContext.Provider>


} 
export default MediaContextProvider