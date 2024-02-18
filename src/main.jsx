import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/api/quiz">
      <App />
    <ToastContainer autoClose={1000} theme="dark" />
  </BrowserRouter>
  // </React.StrictMode>
);
