import axios from "axios";

const useDataService = () => {

  const fetchData = async (path) => {
    try {
      const response = await axios.get(path);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      throw error;
    }
  }

  const deleteData = (id) => {
     axios.delete(`http://localhost:4000/orders/${id}`) 
    .then((response) => {
      if (response.status === 200) {
        console.log('Element deleted successfully.');
      }
    })
    .catch((error) => {
      console.error('Failed to delete element:', error);
    });
  }

  return {
    fetchData,
    deleteData
  }
}

export default useDataService;