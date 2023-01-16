import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'
import TinderCards from './TinderCards'

import Navbar from './Navbar'
const Header = () => {
    return (
        
        <>
        <Navbar />
       
         <TinderCards />
        </>
        
    )
}

export default Header