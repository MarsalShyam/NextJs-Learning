import { ClintSideRendOne } from "@/components/Interleaving/clientSideRendOne";
import ServerSideRendOne from "@/components/Interleaving/serverSideRendOne";



export default function InterLeavingPage(){
    return(
        <>
        <h1>Interleaving page</h1>
        
        <ClintSideRendOne>
            <ServerSideRendOne/>
        </ClintSideRendOne>
        </>
        
    );
}