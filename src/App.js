import "App.css";

import { useJsonFetch } from "hooks/useJsonFetch";
import { useEffect } from "react";
import { logDOM } from "@testing-library/react";

function App() {
  const urlData = "http://localhost:7070/data";
  const urlError = "http://localhost:7070/error";
  const urlLoading = "http://localhost:7070/loading";

  const [data, error, loading] = useJsonFetch(urlData);
  console.log(data, error, loading);
  return <div className="App"></div>;
}

export default App;
