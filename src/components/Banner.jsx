import React from "react";
import '../components/Banner.css'

function Banner() {
  return (
    <div>
        <div className="Banner-section">
      <div className="section">
        <div className="container">
          <div className="col-12">
            <h1>Hi, welcome to the study material.</h1>
            <p>On this webpage, you can find your study notes and more.
            For now, this is how you can use it</p>
            <p>
              1. Select your grade, like 1st MCA.
              <br />
              2. Select your preferences like notes,videos,modal paper ext.
              <br />
              3. Select the subject and continue your study.
            </p>
            <p>Enjoy and all the best!</p>
            <br/>
            
          </div>
          {/* Hi, welcome to the study material.

On this webpage, you can find your study notes and more.

For now, this is how you can use it.

1. Select your grade, like 1st MCA.
2. Select your preferences like notes,videos,modal paper ext.
3. Select the subject and continue your study.

Enjoy and all the best! */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Banner;
