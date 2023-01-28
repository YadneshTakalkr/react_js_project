import React from 'react'
import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Contacts from './components/elements/contacts/Contacts';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AddContact from './components/elements/contacts/AddContact';
import EditContact from './components/elements/contacts/EditContact';



const App = () => {
  return (
    <Provider store={store}>
      
      <Router>
      <div className="App" >
        <Navbar/>
        <div className="container" >
          <div className="py-3" >
          <Routes>
          <Route  path="/" element={<Contacts/>} />
          <Route  path="/contacts/add" element={<AddContact/>} />
          <Route  path="/contacts/edit/:id" element={<EditContact/>} />
          </Routes>
         </div>
        </div>
      </div>
     </Router>
  
    </Provider>
 )
}
export default App


// import React from "react";
// import Home from "./Home";
// import Header from "./Header";
// import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// const Layout = () => (
//   <>
//     <Header />
//     <Outlet />
//   </>
// );

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route element={<Layout />}>
//             {/* checkout page */}
//             <Route
//               path="/checkout"
//               element={<h1>I am a Checkout, Smash the like button</h1>}
//             />
//             <Route path="/" element={<Home />} />
//           </Route>
//         </Routs>
//       </div>
//     </Router>
//   );
// };