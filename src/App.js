import "App.css";

import { useJsonFetch } from "hooks/useJsonFetch";

function App() {
  const urlData = "http://localhost:7070/data";
  const urlError = "http://localhost:7070/error";
  const urlLoading = "http://localhost:7070/loading";

  const [data, error, loading] = useJsonFetch(urlLoading);
  console.log(data, error, loading);
  return <div className="App"></div>;
}

export default App;
