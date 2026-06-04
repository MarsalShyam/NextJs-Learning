import { NextResponse } from "next/server";
import type {NextRequest} from "next/server";

export function middleware(request:NextRequest){

    const response=NextResponse.next();
    const themePreference=request.cookies.get("theme");
    if(!themePreference){
        response.cookies.set("theme","dark");
    }

    response.headers.set("custome-hader","custome-value");

    // // return NextResponse.redirect(new URL("/",request.url));
    // if(request.nextUrl.pathname==="/profile"){   //Conditional statement
    //     return NextResponse.redirect(new URL("/hello",request.nextUrl));
    //     //redirect/ rewrite/
    // }

}

// export const config={  //Custome matcher config
//     matcher:"/profile",
// };