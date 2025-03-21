"use client"
import React from "react";
import { useState } from "react";
import { Button } from "@headlessui/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table";
import jobsData from "../../../../mock-data/jobs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../@/components/ui/dialog"



const page = () => {
  // const [selectedJob, setSelectedJob] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const userSkills = ["JavaScript", "React"]; 

  const [jobs, setJobs] = useState(jobsData);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    matchScore: "N/A",
  })

  const [searchJob, setSearchJob] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);



  const handleChange =(e)=> {
    setNewJob({
      ...newJob,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newJob.title && newJob.company && newJob.location && newJob.salary) {
      const updatedJobs = [
        ...jobs,
        {
          ...newJob,
          id: jobs.length + 1,
        },
      ];
      setJobs(updatedJobs);
      setFilteredJobs(updatedJobs); // Update filtered jobs to include the new job
      setNewJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        matchScore: "N/A",
      });
      console.log("Jobs updated:", updatedJobs.length);
    } else {
      alert("Please complete form fields");
    }
  };
  
  
  const handleSearch = async (e) => {
    const search = e.target.value;
    setSearchJob(search);

    if (search) {
      const filtered = jobsData.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredJobs(filtered); // Update the filtered jobs state
    } else {
      setFilteredJobs(jobsData); // Reset to the full list if search is cleared
      alert
    }

    // if (search) {
    //   const filteredJobs = jobsData.filter((job) => {
    //     return job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase());
    //   }
    
    // )
    // }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6"> Job Recommendations</h1>

        <Dialog>
          <DialogTrigger asChild>
            <span className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
              Add a Job
            </span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a Job</DialogTitle>
              <DialogDescription>
                Please fill in the job details below to add a new job.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={newJob.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter Job Title"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={newJob.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={newJob.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter job location"
                />
              </div>
              <div>
                <label htmlFor="salary" className="block text-sm font-medium">
                  Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  value={newJob.salary}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter salary range"
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="rounded bg-green-600 py-2 px-4 text-sm text-white data-[hover]:bg-green-500 data-[active]:bg-green-700">
                  Submit
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>


        {/* <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
          Add a Job
        </Button> */}
      </div>
      <div className="flex m-4 gap-4">
        <input
          type="text"
          id="example"
          placeholder="Search by Email, Company Name or Job"
          value={searchJob}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg p-2 w-2/5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="text"
          id="example"
          placeholder="Filter by"
          className="border border-gray-300 rounded-lg p-2 w-1/5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <Table>
          <TableCaption>A list of Recent Jobs.</TableCaption>
          <TableHeader>
            <TableRow >
              <TableHead className="w-[100px]">Job Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead className="">Match Score</TableHead>
              {/* <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-right">Status</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job)=>(
              <TableRow key={job.id} >
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.salary}</TableCell>
              <TableCell>{job.matchScore}</TableCell>
              {/* <TableCell className="text-right">Status</TableCell>
              <TableCell className="text-right">Apply Now</TableCell> */}

            </TableRow> 
            ))}
            
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
