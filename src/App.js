import { Routes, Route } from 'react-router-dom'

import { Container, Header, Footer, Row, Col } from 'react-bootstrap'

// Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

// Containers
import Main from './containers/Main'

// Style
import './App.css';

const App = () => {
  return (
      <AppHeader className="App-header" />
      <Main className="App-main">
              <Routes>
              </Routes>
      </Main>
      <AppFooter className="App-footer" />
    </div>
  );
}

export default App;
