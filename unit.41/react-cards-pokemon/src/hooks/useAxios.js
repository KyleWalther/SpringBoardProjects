import React,{ useState } from "react";
import axios from "axios";

const useAxios = (baseURL) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addData = async (endpoint = "") => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseURL}${endpoint}`);
      setData(data => [...data, { ...response.data, id: uuid() }]); // append new data
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  return { data, addData, error, isLoading };
};

export default useAxios;
