import { CREATE_CONTACT, GET_CONTACT,
   UPDATE_CONTACT
   ,DELETE_CONTACT,
   SELECT_CONTACT
   ,CLEAR_CONTACT
   ,DELETE_SELECYED_CONTACTS 
  } from "../constant/types"
// action 
export const addContact =(contact) =>({
  type:CREATE_CONTACT,
  payload:contact,
})
// get a contact
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
  })

  // 
  export const UpdateContact= (contact) => ({
   type:UPDATE_CONTACT,
    payload:contact
  })

  // action  a contactrax
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
  })

  // select contact
  export const selectAllcontacts = (id) => ({
    type: SELECT_CONTACT,
    payload:id,
  })

  // clear selected contact
  export const clearAllContact = () => ({
    type:CLEAR_CONTACT,
  
  })
   // DELECT selected contact
   export const deleteAllContact = () => ({
    type:DELETE_SELECYED_CONTACTS,
  
  })
  
  
  
  
  
  