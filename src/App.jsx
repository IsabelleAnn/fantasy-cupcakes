
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About'
import { OrderNow } from './pages/OrderNow';
import { ShoppingCart } from './pages/ShopppingCart';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/order-now' element={<OrderNow/>}></Route>
        <Route path='/shopping-cart' element={<ShoppingCart/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;