import axios from 'axios';
import { useEffect, useState } from 'react';
function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(dataSource);
        setResults(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      }
    }
    fetchData();
  }, [dataSource]);
  return {
    loading,
    results,
  };
}
export default useDataFetching;
