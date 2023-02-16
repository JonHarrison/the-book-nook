import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// Style
import './App.css'

const App = () => {
  return (
    <>
      <Header />
  
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
