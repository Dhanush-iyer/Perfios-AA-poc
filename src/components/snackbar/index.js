import React, { useState } from "react";
// import useErrorContextData from "../../hooks/useErrorContext";
import "./style.css";

const Snackbar = (props) => {
  const { handleClose} = props;
  // const errorDetails = useErrorContextData();

  return (
    <div>
      {/* {errorDetails && errorDetails.error? ( */}
        <div className="snackbar_container">
          <div className="snackbar_wrapper">
            <div className="errMessage">Something went wrong</div>
            <div className="closeIcon" onClick={handleClose}>
              Close
            </div>
          </div>
        </div>
      {/* ) : null} */}
    </div>
  );
};

export default Snackbar;
