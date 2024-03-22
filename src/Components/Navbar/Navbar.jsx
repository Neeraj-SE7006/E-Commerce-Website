import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import { useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { signOut,getAuth } from "firebase/auth";
import { Context } from '../../Context/AuthContext';
const Navbar = () => {

        const auth = getAuth();
        const {user} = useContext(Context);

        const {getTotalCartItem} = useContext(ShopContext);

   
        const[menu, setmenu] = useState('');
        const navRef = useRef();
          
        const showNavbar = () => {
              navRef.current.classList.toggle('responsive_nav');
            }

            async function handleSignOut(){
              try {
                  await signOut(auth);
              } catch (error) {
                  console.log(error)
              }
          }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo not found!" />
            <p>Shopsy</p>
        </div>

        <nav className='nav-menu' ref={navRef}>
            <li onClick={()=>{setmenu('shop')}}> <  Link style={{textDecoration:'none', color
          :'black'}} to='/'>Shop</Link> {menu === 'shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('mens')}}> <Link style={{textDecoration:'none', color
          :'black'}} to='/mens'> Men </Link> {menu === 'mens'?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('womens')}}> <Link style={{textDecoration:'none', color
          :'black'}} to='/womens'> Women </Link> {menu === 'womens'?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('kids')}}> <Link style={{textDecoration:'none', color
          :'black'}} to='/kids'> Kids </Link> {menu === 'kids'?<hr/>:<></>}</li>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <CloseIcon />
        </button>
        </nav>

        <button className='nav-btn' onClick={showNavbar}>
        <MenuIcon />
      </button>

        <div className='nav-login-cart'>
           <Link style={{textDecoration:'none', color
          :'black'}} to='/login'> {user?<button onClick={() => {handleSignOut()}}>Sign Out</button>:<button >Signin</button>}</Link>
          {user && (
              <p className='profile'>
                  {user.email.substring(0, user.email.indexOf('@'))}
              </p>
          )}
          <Link style={{textDecoration:'none', color
        :'black'}} to='/cart'> <AddShoppingCartIcon style={{cursor:'pointer'}} /></Link>
           <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>

    </div>
  )
}

export default Navbar