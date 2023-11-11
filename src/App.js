





import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Layout from "./Layout/Layout";

import Men from './Men/Men';
import Login from './Login/Login';
import Jewel from './Jewel/Jewel';
import Womens from './Womens/Womens'

import Register from './Register/Register'
import Home from './Home/Home';
import Cart from './Cart/Cart';
import jwtDecode from 'jwt-decode';
import Productdetails from './Productdetails/Productdetails';
import Search from './Serch/Search';
import { useState } from 'react';
import Protectedroute from './Protectedroute/Protectedroute';





  


function App() {
  

  let [isLogin,setisLogin]=useState(null)
let [tokendata,setTokendata]=useState("")


useEffect(() => {
   
  if(localStorage.getItem("token") ){
 
 let token=localStorage.getItem("token") 
 let userdata=jwtDecode(token) 
 setTokendata(userdata)
 console.log(userdata)
 setisLogin(true)

 
  }
 
 
   }, [isLogin])
   

const routs=createBrowserRouter([
  {path: '/', element:<Layout   isLogin={isLogin} setisLogin={setisLogin}  tokendata={tokendata} />,children:[
   
  {path:'Men',element: <Protectedroute><Men/> </Protectedroute> },
  {path:'Home', element: <Protectedroute> <Home /></Protectedroute>  },
  {index:true,element:<Register/> },  
  {path:'Jewel',element:<Protectedroute><Jewel/></Protectedroute> },
  {path:'Cart',element:<Protectedroute><Cart/></Protectedroute> },
  {path:'Womens',element:<Protectedroute><Womens/></Protectedroute> },
  {path:'Search',element:<Protectedroute><Search/></Protectedroute> },



  

  {path:'Login',element:<Login  setisLogin={setisLogin} />},

  {path:'Movisdetails/:productid',element:<Protectedroute><Productdetails/></Protectedroute>},
  // {path:'Peopldetails/:Personid',element:<Peopledetails/>},


 
  {path:'*',element:<h1>rr</h1>},


  
  
  ]}
  
  
  ]
  
  
  )
  useEffect(() => {
   
 if(localStorage.getItem("token") ){

let token=localStorage.getItem("token") 

setTokendata(token)

 }


  }, [])
  

  
  return (
    



<RouterProvider  router={routs} />








  
  )
  }

export default App;