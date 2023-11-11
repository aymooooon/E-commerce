
import { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MediaContext } from '../Context/Context';


export default function Navbar(props) {

  let {cartCount,setitemdata,cartPrice} =useContext(MediaContext)
  

let navigateTo=useNavigate()

function logout(){
  localStorage.removeItem("token")
  
  props.setisLogin(false)  
  navigateTo("/Login")
  localStorage.removeItem('clickedItemdata')
  setitemdata([])
  }






console.log(props.tokendata.first_name  )

  return (

<>
<nav className="navbar navbar-expand-sm navbar-dark  fixed-top bg-info bg-opacity-10">
    <div className="container">

    <NavLink className=" nav-link pe-1"  > { props.isLogin?  props.tokendata.first_name:""}</NavLink>






    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse  " id="collapsibleNavId">
      <ul className="navbar-nav me-auto  mt-lg-0">
   


{!props.isLogin ?<>
      <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Login">login</NavLink>
        </li>

        
        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="">Registr</NavLink>
        </li>
        </>:""  }
    

     
  {props.isLogin ? <>
  
  <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Home">home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Men">men cloths</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Jewel">jewelery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Womens">Womens</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Cart">Cart</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Search">Search</NavLink>
        </li>
        </>:""  } 
  
      </ul>

      <ul className='ms-auto navbar-nav mt-2'>

      <li className="nav-item">
          {/* <NavLink className=" nav-link" > { props.isLogin?  props.tokendata.first_name:""}</NavLink> */}
        </li>
  
        
      </ul>
  
    </div>

      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input > */}
      <button className="btn btn-outline-success my-2 my-sm-0"onClick={logout} type="submit">logout</button>
       
<ul className=' text-decoration-none '>
{props.isLogin?<li className="nav-item text-white text-decoration-none">
      <span> {cartCount?cartCount:"" }</span>
      <span> </span>
      <span className=' fas fa-shopping-cart'></span>

      <div>
      </div>
        </li> :<></>}
{props.isLogin?<li className="nav-item text-white text-decoration-none">
      
      <span className=' fas fa-shopping-cart'>{cartPrice}</span>

      <div>
      </div>
        </li> :<></>}
      
        </ul>
  </div>
</nav>

</>
  )
}
