import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./providers/react-query-provider.ts";
import { Toaster } from "sonner";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
        <Toaster position="top-right" className="text-lg font-mono" />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
