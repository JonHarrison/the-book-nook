import { Routes, Route } from 'react-router-dom'

import { Container, Header, Footer, Row, Col } from 'react-bootstrap'

import { UserAuthContextProvider } from './context/userAuthContext'

// Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

// Containers
import Main from './containers/Main'

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Library from "./pages/Library"
import Search from "./pages/Search"
import Contact from "./pages/Contact"

// Style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <AppHeader className="App-header" />
      <Main className="App-main">
          <Routes>
            <Route exact path="/" element={<Home />} /> {/* Login */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} /> {/* replace with library */}
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Main>
      <AppFooter className="App-footer" />
      </UserAuthContextProvider>
    </div>
  )
}

export default App
