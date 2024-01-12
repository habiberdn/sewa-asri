import { RouterProvider } from "@tanstack/react-router";
import { router } from "./pages/router";

import { AuthContext } from "./context/UserContext";
import { useState } from "react";

function App() {
    const [auth, setAuth] = useState<{
        token: string | null,
        authenticated: boolean
    }>({
        token: "MJ!)E.*#Efia[4{p@Y;3?%P9b8k6bAG}Xzmnhh?CPtpPx}fhS=0X*eZUTgzJpy4aWA$BPF567G1x-XTb2#Edw0SUXH",
        authenticated: true
    });

    return (
        <>
            <AuthContext.Provider value={{ auth, setAuth }}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        </>
    );
}

export default App;