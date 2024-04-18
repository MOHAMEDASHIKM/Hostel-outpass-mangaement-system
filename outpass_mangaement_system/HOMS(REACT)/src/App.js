// OUTPASS MANGEMENT SYSTEM (HOMS) program===================================================

import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





// import place

import Home from "./home";
import Login from './login';
import Wardenlogin from './wardenlogin';
import Stafflogin from "./stafflogin";
import Signup from './Signup';
import Signupstd from './signupstd';
import PreLogin from "./preloginpg";
import Nav2 from "./nav";
import Footer from './footer';
import Adminlogin from './admin_login';



import Preapp from "./preaplpage";
import NoteForm from "./NoteForm";
import NoteList from './NoteList';
import StdList from './stdlist';
import Staffapp from "./staff_page";
import News from './news';
import Adminnews from './adminnews';
import Adminpage from './adminpage';
import Wardenapp from './wardenhome';


import Slide from './slide';
import Gallery from './GALLERY';
import Contact from './contact';
// import EmailForm from './qr';
import Profile from './profile';


export default function App() {

    return (
        <>
            <HashRouter>
                <Nav2 />

                {/* <Home /> */}
                {/* <p><center><h1 id="wlco">WELCOME</h1></center></p> */}

                <Routes>

                    {/* route for all pages  */}

                   




                    <Route path='/Home' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/wardenlogin' element={<Wardenlogin />} />
                    <Route path='/adminlogin' element={<Adminlogin />} />
                    <Route path='/stafflogin' element={<Stafflogin />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/signupstd' element={<Signupstd />} />




                    <Route path='/notes' element={<NoteList />} />
                    <Route path='/stdlist' element={<StdList />} />
                    <Route path='/Noteform' element={<NoteForm />} />
                   
                   
                   
                    <Route path='/prelogin' element={<PreLogin />} />
                    <Route path='/preapply' element={<Preapp />} />
                    <Route path='/staff' element={<Staffapp />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/adminnews' element={<Adminnews />} />
                    <Route path='/adminhome' element={<Adminpage />} />
                    <Route path='/Wardenhome' element={<Wardenapp />} />



                    <Route path='/slide' element={<Slide />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/profile' element={<Profile />} />
                    {/* <Route path='/qr' element={<EmailForm />} /> */}
                    


                </Routes>

                <Footer />

            </HashRouter>

        </>
    )
}

