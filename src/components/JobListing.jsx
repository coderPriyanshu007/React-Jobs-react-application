import React from 'react';
import { useState, useEffect } from 'react';
import JobListingComp from './JobListingComp';
import Spinner from './Spinner';

const JobListing = ({ viewAll = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = viewAll ? "/api/jobs" : "/api/jobs?_limit=3"
  useEffect(() => {
    const fetchJobs = async () => {
     
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
        } catch (error) {
          console.error("error fetching the data ", error);
        } finally {
          setLoading(false);
        }

      
    }
    fetchJobs();
  }, []);



  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {viewAll ? 'Browse Jobs' : 'Recent Jobs'}
        </h2>

        {loading ? (<Spinner loading={loading} />) :
          (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) =>
              <JobListingComp key={job.id} job={job} />
            )}
          </div>)
        }


      </div>
    </section>
  )
}

export default JobListing
