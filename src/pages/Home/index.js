import { Container, Row, Col } from 'react-bootstrap'

import logo from '../../assets/logo.png'

import './style.css'

const Home = () => {

  return (
    <div className="App-Home">
      <Container className="App-home-container">
        <Row>
          <Col>
            <img className="App-home-img img-fluid rounded" src={logo} alt="the book nook logo" />
            <div className="App-home-text">
              <h1>The Book Nook</h1>
              <h2>Your personal book library</h2>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
