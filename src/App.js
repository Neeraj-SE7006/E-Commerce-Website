import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
//import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
//import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png'
//import LoginPage from './Pages/LoginPage';
import Accordian from './Components/Accordian/Accordian';
import ContactApp from './Components/ContactUs/ContactApp';
import ErrorPage from './Pages/ErrorPage';
import { Signin } from './Routes/Signin';
import { Signup } from './Routes/Signup';
import { Protected } from './Routes/Protected';
import { AuthContext } from './Context/AuthContext';
function App() {
  return (
    <div>
      <AuthContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' catname='Men' />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' catname='Women' />} />
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' catname='Kid' />} />
            <Route path='/product' element={<Product />} >
              <Route path=':productID' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Protected><Cart /></Protected>} />
            <Route path='/signUp' element={<Signup />} />
            <Route path='/login' element={<Signin />} />
            <Route path='/faqs' element={<Accordian />} />
            <Route path='/contact' element={<ContactApp />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      </AuthContext>

    </div>
  );
}

export default App;
