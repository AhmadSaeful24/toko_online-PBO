import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Keranjang from './pages/Keranjang'
import Login from './pages/login-register/Login'
import Register from './pages/login-register/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/keranjang" element={<Keranjang />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
