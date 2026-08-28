import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from "./pages/Home.jsx";
import App from './App.jsx';
import Workouts from "./pages/Workouts.jsx";
import Progress from './pages/Progress.jsx';
import Profile from './pages/Profile.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <App /> }>
      <Route index element={ < Home />} />
      <Route path="workouts" element={ <Workouts />} />
      <Route path="progress" element={ <Progress />} />
      <Route path="profile" element={ <Profile /> } />
  </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
