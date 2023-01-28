// import { contactReducer } from "./contactReduser";
import { combineReducers} from 'redux'
// import Contacts from "../components/elements/contacts/Contacts";
import { ContactReducer } from "./ContactReducer";

export default combineReducers({
   contact: ContactReducer
})