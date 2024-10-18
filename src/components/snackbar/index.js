import React, { useState } from "react";
import useContextData from "../../hooks/useContextData";
import "./style.css";

const Snackbar = (props) => {
  const { handleClose, handleOpen } = props;
  const userDetails = useContextData();

  console.log(userDetails);

  return (
    <div>
      {userDetails && userDetails?.error ? (
        <div className="snackbar_container">
          <div className="snackbar_wrapper">
            <div className="errMessage">{userDetails.error}</div>
            <div className="closeIcon" onClick={handleClose}>
              Close
            </div>
          </div>
        </div>
      ) : (
        <div className="content">Hello Welcome to Perfios AA</div>
      )}
    </div>
  );
};

export default Snackbar;
