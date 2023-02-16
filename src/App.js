import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Library from './Pages/Library'
import SearchArea from './Pages/SearchArea'

// Style
import './App.css'

const App = () => {
  return (
    <>
      <Header />
  
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/SearchArea" element={<SearchArea />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
