import React from 'react';
import Homepage from './pages/Homepage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';
import JobPage, {jobLoader} from './pages/JobPage';


import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;