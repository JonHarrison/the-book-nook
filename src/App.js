import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Library from './pages/Library'
import SearchArea from './pages/SearchArea'

// Style
import './App.css'

const App = () => {
  return (
    <>
      <Header />
  
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/library" element={<Library />} />
        <Route path="/searcharea" element={<SearchArea />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
