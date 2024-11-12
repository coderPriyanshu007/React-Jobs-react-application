import React from 'react';
import Homepage from './pages/Homepage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';



import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'



const App = () => {

  //Add a new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
  }

  //Delete a job

  const reqDeleteJob = async (jobID) => {
    await fetch(`/api/jobs/${jobID}`, {
      method: 'DELETE'
    });
    return;
  }

  //Update a job
  const reqUpdateJob = async (updatedjob) => {
    const res = await fetch(`/api/jobs/${updatedjob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedjob)
    });
  }



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={reqDeleteJob} />} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJob={reqUpdateJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage submitJob={addJob} />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )



  return <RouterProvider router={router} />;
};

export default App;
