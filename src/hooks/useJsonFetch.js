import { useEffect, useState } from "react";

const useJsonFetch = (url, opts) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return [data, error, loading];
};

export { useJsonFetch };
