import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'
const Homepage = () => {
  return (
    <>
      < Hero 
      title ='Become a React Dev' 
      subtitle='Find a react job that fits your skills and needs' 
      />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />
    </>
  )
}

export default Homepage
