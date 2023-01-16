import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import ForumIcon from '@material-ui/icons/Forum'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className='header'>
             
             <IconButton>
                 {/* <PersonIcon fontSize='large' className='header__icon' /> */}
                 <img src='profile.png' alt="" />

             </IconButton>
             <img src="Tinder_logo_PNG1.png" alt="header" className='header__logo' />
              
             
             <Link to='/chat'>
             <IconButton>
                 {/* <ForumIcon fontSize='large' className='header__icon' /> */}
                 <img src='chat-icon2.png' className='icon2' alt="" />
             </IconButton> 
              </Link>
             
             
         </div>
              
    </div>
   
  )
}

export default Navbar