import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DefaultRoutes, Routes } from "./route/route";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <DefaultRoutes />
        </BrowserRouter>
    </React.StrictMode>
);
