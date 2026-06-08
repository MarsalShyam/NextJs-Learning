"use client"

import { useState } from "react";
// import ServerSideRendOne from "./serverSideRendOne";
export const ClintSideRendOne=({children}:{children:React.ReactNode})=>{
    const [name, setName] = useState("")
    return (
        <div>
            <h1>ClienSideRendering One</h1>
            {/* <ServerSideRendOne /> */}
            {children}
        </div>

    );
}