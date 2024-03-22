import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Logo Not Found!!" />
            <p>SHOPSY</p>
        </div>
        <div className="footer-social-icon">
        <a href="https://www.google.com/" target="_blank" className="items">
            <MailOutlineIcon />
          </a>
          <a href="https://www.google.com/" target="_blank" className="items">
            <InstagramIcon/>
          </a>
          <Link to='/faqs'><LiveHelpIcon /></Link>
          
          
        </div>
        <div className='support'>
       <span style={{fontSize:'18px', color:'black'}}>Have any queries??<Link to='/contact' style={{textDecoration:'none'}}>Contact Us</Link> </span> 
        </div>
        
        <div className='footer-copyright'>
        <hr/>
        <p>Copyright @2023 All Rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer