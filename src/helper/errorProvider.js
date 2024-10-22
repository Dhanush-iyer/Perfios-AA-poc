import React, { useState, createContext } from "react";
import axios from "axios";

const ErrorContext = createContext(null);

const ErrorProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchurl(url) {
    var response = axios.get(url);
    response
      .then((res) => {
        setLoading(true);
        if (res.status === 200) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <ErrorContext.Provider value={{ data, loading, error, fetchurl }}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
