import {Route, Routes} from 'react-router-dom';
import ProductListPage from './pages/ProductListPage.jsx';
import Navbar from './components/Navbar.jsx';
import CartPage from './pages/CartPage.jsx';

function App(){
  return (
    <div className='min-h-screen bg-gray-100 font-sans'>
      <Navbar/>
      <main className='p-8'>
          <Routes>
            <Route path="/" element={<ProductListPage/>}/>
            <Route path="/cart" element={<CartPage />}/>
          </Routes>
      </main>
    </div>
  );
}

export default App;

