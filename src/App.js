import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Header/Navbar'

// Style
import './App.css'
import { NavbarBootstrap } from './components/Header/Navbar'

const App = () => {
  return (
    <>
      <Header />
      <NavbarBootstrap />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
