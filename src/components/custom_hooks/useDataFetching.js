import { useState, useEffect } from 'react';
import axios from 'axios';
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
    results
  };
}
export default useDataFetching;

//     try {
//       const data = await fetch(dataSource);
//       const json = await data.json();

//       if (json) {
//         setLoading(false);
//         setResults(json);
//       }
//     } catch (error) {
//       setLoading(false);
//     }

//     setLoading(false);
//   }

//   fetchData();
// }, [dataSource]);

// return {
//   loading,
//   results
// };
