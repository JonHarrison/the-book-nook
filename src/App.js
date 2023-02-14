import { Routes, Route } from 'react-router-dom'
import { Container, Header, Row, Col } from 'react-bootstrap'

import { UserAuthContextProvider } from './context/userAuthContext';

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <p>The Book Nook</p>
      </div>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
