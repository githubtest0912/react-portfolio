import React from "react";
import data from "./EducationDetails";
import './Resume.css'

const Resume = () => {
  return (
    <div className='bg-info'>
      <div className="container">
        <div className="row py-4 mb-4">
          <div className="col-12">
            <h1 className="text-center">Resume</h1>
            <hr />
          </div>
        </div>

        {/* //cards */}
        <div className="row">
          <div className="col-12">
            <h1 className="py-3">Education</h1>

            {data.map((item, index) => {
              return (
                <>
                  <div className="card mb-5">
                    <div className="card-body">
                      <h5 className="card-title mb-3">{item.year}</h5>
                      <h3>{item.course}</h3>
                      <h6 className="card-subtitle mb-2 text-muted mb-3">
                        {item.college}
                      </h6>
                      <p className="card-text">{item.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
