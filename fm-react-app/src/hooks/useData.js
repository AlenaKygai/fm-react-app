import {useEffect, useState} from 'react';

export default function useData(getData){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch((error) => setError(error.message))
      .finally(() => setFetching(false))
  }, [])

  return{
    data,
    error,
    isFetching,
  }
}
