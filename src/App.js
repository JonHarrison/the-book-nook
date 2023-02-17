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
import SearchArea from "./pages/SearchArea"

// Style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppHeader className="App-header" />
      <Main className="App-main">
        <UserAuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} /> {/* Login */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} /> {/* replace with library */}
            <Route path="/library" element={<Library />} />
            <Route path="/searcharea" element={<SearchArea />} />
          </Routes>
        </UserAuthContextProvider>
      </Main>
      <AppFooter className="App-footer" />
    </div>
  )
}

export default App
