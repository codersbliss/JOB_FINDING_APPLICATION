import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              {/* <FaUserPlus />
              <p>Create Account</p> */}
              <p>
              JobZee is an innovative platform designed to streamline the job search process for both job seekers and employers. At its core, JobZee leverages advanced algorithms and AI technology to match candidates with job openings that best fit their skills, experience, and career aspirations. Job seekers can create detailed profiles, upload their resumes, and apply for jobs with just a few clicks. Meanwhile, employers can post job listings, search for candidates, and manage applications all in one place
              </p>
            </div>
            <div className="card">
              
              <p>
                
JobZee provides a streamlined, efficient experience for both job seekers and employers. For job seekers, JobZee offers a comprehensive platform where they can create detailed profiles, upload resumes, and search for jobs that align with their skills, experience, and career goals. The platform's advanced algorithms and personalized job alerts ensure that candidates are matched with the most relevant opportunities, while additional resources like career advice and interview tips support them throughout their job search journey
              </p>
            </div>
            <div className="card">
             
              <p>
              Employers benefit from JobZee's easy-to-use job posting system, which allows them to attract and find suitable candidates quickly. With powerful search tools and application management features, employers can efficiently review resumes and communicate with potential hires. Moreover, JobZee's analytics and insights help employers optimize their recruitment strategies. Overall, JobZee bridges the gap between job seekers and employers, making the recruitment process more effective and less time-consuming for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
