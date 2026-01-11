import React, { useState } from 'react'
import DMS from '../assets/DMSnotes.pdf';
import CO from '../assets/coNotes.pdf';
function Sub3() {
    const [activePdf, setActivePdf] = useState(null)
    
  return (
    <div>
        <div className="container">
               {/* Cards */}
               <div className="row">
                  <Card title="CO" onView={() => setActivePdf(CO)} />
                     <Card title="DMS" onView={() => setActivePdf(DMS)} />
               </div>
                {/* PDF Viewer */}
                {activePdf && (
        <div className="mt-4">
          <iframe
            src={`${activePdf}#toolbar=0&navpanes=0`}
            width="100%"
            height="1000px"
            style={{ border: "none" }}
            title="PDF Viewer"
          />
        </div>
      )}
        </div>
    </div>
  )
}
function Card({ title, onView }) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">
            Click below to view notes.
          </p>
          <button className="btn btn-primary" onClick={onView}>
            View PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sub3