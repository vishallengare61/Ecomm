import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

import Layout from './Components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import WishList from './Components/WishList/WishList';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishList" element={<WishList />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
