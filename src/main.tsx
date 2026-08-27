import { createRoot } from "react-dom/client";
import AppRouter from "../src/routes/AppRouter";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found");
}

createRoot(rootElement).render(<AppRouter />);
