import "App.css";

import { useJsonFetch } from "hooks/useJsonFetch";
import { useEffect } from "react";
import { logDOM } from "@testing-library/react";

function App() {
  const urlData = "http://localhost:7070/data";
  const urlError = "http://localhost:7070/error";
  const urlLoading = "http://localhost:7070/loading";
  const opts = { method: "GET" };

  const [{ data, error, loading, responseFetch }] = useJsonFetch(
    urlLoading,
    opts,
    4000
  );
  console.log(data, error, loading, responseFetch());
  return <div className="App">{responseFetch()}</div>;
}

export default App;
