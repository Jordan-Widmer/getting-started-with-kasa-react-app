import "./App.css";
import router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return <BrowserRouter>{router}</BrowserRouter>;
}

export default App;
