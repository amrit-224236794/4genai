import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import Dashboard from './pages/Dashboard.jsx';
import Test from './components/sidebar/Test.jsx'
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Documents from './pages/Documents.jsx';
import Web from './pages/Web.jsx'
import Docr from './pages/docr.jsx';
import DocumentManager from './pages/Alld.jsx';
import DocumentEditorPage from './pages/Write.jsx';
import Profile from './pages/Profile.jsx';
import UploadPage from './pages/UploadPage.jsx';
import PersonaPage from './pages/PersonaPage.jsx';
import Tdocs from './pages/Tdocs.jsx';
import DropdownBar from './pages/DropdownBar.jsx';
import LandingPage from './pages/Landing.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },{
        path:'login',
        element:<Login/>
      },{
        path:'signup',
        element:<SignUp/>
      },{
        path:'documents',
        element:<Documents/>
      },{
        path:'web',
        element:<Web/>
      },{
        path:'docr',
        element:<Docr/> 
      },{
        path:'alld',
        element:<Tdocs/>
      },
      {
        path:'upload',
        element:<UploadPage/>

      },
      {
        path:'tdocs',
        element:<Tdocs/>
      },
      {
        path:'profile',
        element:<Profile/>
      },
        {
          path:'write',
          element:<DocumentEditorPage/>
        },{
          path:'persona',
          element:<PersonaPage/>
        },{
          path:'testo',
          element:<DropdownBar/>
        }
      
    ]
  },
  {
    path:'/test',
    element:<Test/>
  },
  {
    path:'/landing',
    element:<LandingPage/>
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
   
      <RouterProvider router={router} />

    </NextUIProvider>
  </React.StrictMode>,
);
