import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='app-wraper'>
          <Header />
          <div className='app-wraper-content'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/contacts' element={<Contact />} />
              <Route exact path='/blog' element={<Blog />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
