import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AxiosInterceptor } from "./providers/AxiosInterceptor.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <AxiosInterceptor>
      <App />
    </AxiosInterceptor>
  // </React.StrictMode>
);
