import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

//The createRoot API is used to initiate the rendering of React components in the newer version of React (v18 and beyond).
//ReactDOM.createRoot(entryPoint) creates a root DOM node where React components will be mounted.
