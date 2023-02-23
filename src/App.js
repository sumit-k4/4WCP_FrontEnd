import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import SignUp from './components/ClientSignup';
import ClientLogin from './components/ClientLogin';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import SignUp from './components/AdvisorSignup';
import AdvisorLogin from './components/AdvisorLogin';
import ClientForgotPassword from './components/ClientForgotPassword';
import AdvisorForgotPassword from './components/AdvisorForgotPassword';
import"./components/Background.css";
import Dashboard from './components/Dashboard';
import { AddNewClient } from './components/AddNewClient';
import EditClient from './components/EditClient';


function App() {
  return (
  <>
    {/* <Header /> */}
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login/advisor' element={<AdvisorLogin />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
      <Route path='/login/client' element={<ClientLogin/>}/>
      <Route path='/login/client/forgotpassword' element={<ClientForgotPassword/>}/>
      <Route path='/login/advisor/forgotpassword' element={<AdvisorForgotPassword/>}/>
      <Route path='/login/advisor/dashboard' element={<Dashboard/>}/>
      <Route path='/login/advisor/dashboard/addnewclient' element={<AddNewClient/>}/>
      <Route path='/login/advisor/dashboard/editclient' element={<EditClient/>}/>


    </Routes>
  </>
  );
}

export default App;
