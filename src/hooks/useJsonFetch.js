import { useEffect, useState } from "react";

const useJsonFetch = (url, opts, timeout) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responseTimeout, setResponseTimout] = useState(null);

  useEffect(() => {
    !timeout && (timeout = 10000);

    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    const idTimer = setTimeout(() => {
      loading && setResponseTimout("Превышено время ожидания");
    }, timeout);
    return () => clearTimeout(idTimer);
  }, []);

  const responseFetch = () => {
    if (responseTimeout) {
      return "Превышено время ожидания";
    }
    if (data) {
      return `data status: ${data.status}`;
    }
    if (error) {
      return "Произошла ошибка";
    }
    if (loading && !responseTimeout) {
      return "Loading...";
    }
  };

  return [{ data, error, loading, responseFetch }];
};

export { useJsonFetch };
