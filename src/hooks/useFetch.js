import React,{useEffect, useState} from "react";
import axios from "axios";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null)

    function fetchurl(url) {
        var response = axios.get(url)
        response.then((res)=>{
            setLoading(true)
            if(res.status === 200){
                setData(res.data)
                setLoading(false)
            }
        }).catch((err)=>{
            setError(err.message)
            setLoading(false)
        })
    }

    useEffect(()=>{        
         fetchurl(url)
    },[url])

    return [data, loading, error];

}

;