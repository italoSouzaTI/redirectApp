import { Route, Routes } from "react-router-dom";

import { AppMotorista, AppGestaoMotorista, Home } from "../page/index";
import { AppImobilizado } from "../page/AppImobilizado/AppImobilizado";
export function DefaultRoutes() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<AppMotorista />} path="/AppMotorista" />
            <Route element={<AppGestaoMotorista />} path="/AppGestãoMotorista" />
            <Route element={<AppImobilizado />} path="/appImobilizado" />
            {/*<Route Component={} path="/appColetor" />
            <Route Component={} path="/appAuditoria" /> */}
        </Routes>
    );
}
