import { useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/SIdebar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
