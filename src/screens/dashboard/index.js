import React, {useEffect} from "react";
import useErrorContextData from "../../hooks/useErrorContext";


const DashBoard = () => {
    const errorDetails = useErrorContextData();

    useEffect(()=>{
        errorDetails.fetchurl("https://jsonplaceholder.typicode2.com/todos")
    },[])
 
    return(
        <div>
            Welcome to DashBoard! 
        </div>
    )
}

export default DashBoard;