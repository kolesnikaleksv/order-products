import { useState, useEffect } from "react";
import axios from "axios";

const ServiceApi = (path) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(path) 
      .then((data) => setData(data.data))
      .catch((error) => console.error('Error:', error))
  }, [path]);
  
  return data;
}

export default ServiceApi;