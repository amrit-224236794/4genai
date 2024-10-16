import './App.css';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Genaicontextprovider from './context/Genaicontextprovider';

function App() {
  const backgroundStyle = {
    backgroundImage: `url('https://i.ibb.co/MCqjGzV/istockphoto-1776689269-1024x10')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
<Genaicontextprovider>
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <div className="hidden sm:block sticky top-0 h-screen">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 h-screen overflow-auto">
        <div className="relative flex flex-col h-full">
          {/* Navbar */}
          <div className="sm:hidden">
            <Nav />
          </div>

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-[#FFFFFF] bg-no-repeat opacity-10"
            style={{
              backgroundImage: "url('')",
            }}
          ></div>

          <div className="relative z-10 flex-1 flex flex-col overflow-auto">
            {/* User Profile Dropdown */}
            <div className="hidden sm:block absolute top-4 right-8 cursor-pointer">
              
            </div>

            {/* Page Content */}
            <div style={backgroundStyle} className="flex-1 flex justify-center items-start pt-4 pb-4">
              
              <Outlet />
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
</Genaicontextprovider>
  );
}

export default App;
