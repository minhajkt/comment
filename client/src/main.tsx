import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
import { CommentProvider } from "./context/CommentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <CommentProvider>
    <App />
  </CommentProvider>
);
