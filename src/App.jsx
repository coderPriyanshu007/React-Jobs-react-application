import React from 'react';
import Homepage from './pages/Homepage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage'


import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'



const App = () => {

  
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
        <Route path='/add-job'   element={<AddJobPage   submitJob={addJob} />} />  
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )



  return <RouterProvider router={router} />;
};

export default App;
