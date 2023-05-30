import React from 'react';
import './App.css';
import MainComponent from './MainComponent/MainComponent';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import DoctorList from './components/Admin/DoctorsList/DoctorsList';
import PatintList from './components/Admin/PatientsList/PatinetsList';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainComponent />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/doctor',
          element: <DoctorList />
        },
        {
          path: '/patint',
          element: <PatintList />
        },
      ]
    }
    
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
