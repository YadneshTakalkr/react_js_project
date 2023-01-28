import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import store from '../../store'
import { getContact,UpdateContact} from '../../../actions/contactAction'
// import shortid from 'shortid';
import { useNavigate} from 'react-router-dom';   
import { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';    
// import { object } from 'yup';
const EditContact = () =>{
    let history =useNavigate()
    let {id} = useParams()

  const dispatch =useDispatch()
  const contact = useSelector(state=>state.contact.contact)
  const[name, setName]= useState("")
  const[phone, setPhone]= useState("")
  const[email, setEmail]= useState("")

   useEffect(() => {
    if (contact != null){
      setName((contact.name))
      setPhone((contact.phone))
      setEmail((contact.email))
    }
    dispatch(getContact(id))
    },[contact] )
const  onUpdatecontact= (e) => {
  e.preventDefault()

  const update_contact = Object.assign(contact,{  
    name: name,phone:phone,email:email
  })

  dispatch(UpdateContact(update_contact))
    history("/");
}
  return ( 
    <div className="card border-0 shadow" >
     <div className="crad-header" >Add a Contact</div>
     <div className="card-body" >

      <form onSubmit={e => onUpdatecontact(e)} >
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
        <button className="btn btn-warning" type="submit">Update Contact</button>
        {/* <button className='btn btn-wrning ' type='submit' onclick=>Click me</button> */}

      </form>
    </div>
    </div>
  )
}

export default EditContact
