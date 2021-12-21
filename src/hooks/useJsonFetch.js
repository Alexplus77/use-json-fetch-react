import { useEffect, useState } from "react";

const useJsonFetch = (url, opts, timeout = 10000) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responseTimeout, setResponseTimout] = useState(null);

  useEffect(() => {
    const timeOutRes = new Promise((resolve, reject) => {
      setTimeout(reject, timeout, "Превышено время ожидания...");
    });

    Promise.race([fetch(url, opts).then((res) => res.json()), timeOutRes])
      .then((dataRace) => {
        dataRace.status === "ok" ? setData(dataRace) : setError(dataRace);
      })
      .catch((err) => setResponseTimout(err))
      .finally(() => setLoading(false));
  }, []);

  const responseFetch = () => {
    if (data) {
      return `data status: ${data.status}`;
    }
    if (responseTimeout) {
      return responseTimeout;
    }
    if (error) {
      return "Произошла ошибка";
    }
    if (loading) {
      return "Loading...";
    }
  };

  return [{ data, error, loading, responseFetch }];
};

export { useJsonFetch };
