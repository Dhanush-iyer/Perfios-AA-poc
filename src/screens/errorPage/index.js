import React from "react";

const ErrorPage = () => {
    return (
        <div>
            <div style={{ height: "100vh", backgroundColor: "red", display: "flex", justifyContent: 'center', alignItems: "center", margin: "30px 30px 30px 30px", borderRadius: "16px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                <div>Something went wrong!!</div>
            </div>
        </div>
    )
}

export default ErrorPage;