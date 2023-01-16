import React, { useEffect, useState } from 'react'
 import axios from 'axios';

import './Chats.css'
 const Chats = () => {
    const [name,setName]=useState('')
    const [imgUrl,setImg]=useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const url = 'http://localhost:8001/tinder/cards';
        const res = await axios.post(url,{name,imgUrl})
        console.log(res.data)
    }
  return (
         <div className='main' >
                <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input value={name} onChange={e=> setName(e.target.value)} type="String" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please Enter your Name" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your Name with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Image URL</label>
                <input   value={imgUrl} onChange={e=>setImg(e.target.value)}  type="String" className="form-control" id="exampleInputPassword1" placeholder="Please provide your Image" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>

            <button type="submit"   className="btn btn-primary">Submit</button> 
        </form>
         </div>
        
     
  )
}

export default Chats