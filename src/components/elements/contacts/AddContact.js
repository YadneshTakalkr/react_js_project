import React from 'react';
import { useState,} from 'react';
import { useDispatch } from 'react-redux';
// import store from '../../store'
import {addContact} from "../../../actions/contactAction"
import shortid from 'shortid';
// import { useHistory } from 'react-router-dom';   
// import { useEffect } from 'react';     


const AddContact = () =>{
  // useEffect((e) => {
  //   setData((e))
  // },[""]);
  const dispatch =useDispatch()
  const[name, setName]= useState("")
  const[phone, setPhone]= useState("")
  const[email, setEmail]= useState("")

   const createContact= (e) =>{
    e.preventDefault()

    const new_contact={
      id:shortid.generate(),
      name: name,
      phone:phone,
      email:email
    }
    dispatch(addContact(new_contact))
    // history.push("/")
    
    }
  

  return (
    <div className="card border-0 shadow" >
     <div className="crad-header" >Add a Contact</div>
     <div className="card-body" >

      <form onSubmit={(e) => createContact(e)} >
        <div className="form-group" >
          <input
          type="text"
          name='name'
          className="form-control"
          placeholder="Enter Your Nmae..."
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          /> 
           </div>
         <div className="form-group" >
           <input
          type="text"
          name="phone"
          className="form-control"
          placeholder="Enter Your Phone Number..."
          autoComplete="off"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />  
          </div>
         <div className="form-group" >
           <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Enter Your E-mail Address..."
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
            </div>
        <button className="btn btn-primary" type="submit">Creact Contact</button>
      </form>
    </div>
    </div>
  )
}

export default AddContact
