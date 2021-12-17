import { useEffect, useState } from "react";
import axios from "axios";

const useJsonFetch = (url) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return [data, error, loading];
};

export { useJsonFetch };
