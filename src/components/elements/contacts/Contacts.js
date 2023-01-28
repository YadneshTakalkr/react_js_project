import { useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import Contact from "./Contact"
import { selectedContact, clearAllContact,deleteAllContact} from '../../../actions/contactAction'
// import {clearAllContact,deleteAllContact,selectedContact} from '../../../actions/contactAction'+
// import { Button } from 'bootstrap'


const Contacts = () => {
  const dispatch= useDispatch();
  const [selecatAll,setSelectAll] = useState(false)
  const contacts = useSelector((state) => state.contact.contacts);
  const selectAllcontact =  useSelector((state) => state.contact.selectedContact);
  
  useEffect(() => {
     if(selecatAll){
       dispatch(selectAllcontact(contacts.map((contact) => contact.id)))
     }else{
      dispatch(clearAllContact())
     }
  },[selecatAll])
  return (
    <div>
       
     {
      
        //  selectedContact. length > 0 ?(
          <button className='byn btn-danger mb-3' onClick={() => dispatch(deleteAllContact())}>Delet All</button>
        //  ):null
        
         } 
     
        <table className="table shadow ">
  <thead>
    <tr>
      <th>
        <div className='custom-control custom-checbox' >
          <input 
          id='selectAll' 
          type="checkbox"
          value={selecatAll} 
          className="custom-control-input" 
          onClick={() => setSelectAll(!selecatAll)}
          /> 
          <label htmlFor='selectAll' className="custom-control-label"></label>
        </div>
      </th>
      <th >Name</th>
      <th >phone</th>
      <th >E-mail</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>

    {contacts.map((contact) => (
     <Contact contact={contact} key={contact.id} selecatAll={selecatAll} />
    ))}
   </tbody>
</table>
</div>
  )
}

export default Contacts
