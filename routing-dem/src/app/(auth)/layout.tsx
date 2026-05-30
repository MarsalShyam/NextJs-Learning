'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useState} from 'react'

const navLinks=[
  {name:"Register", href:"/register"},
  {name:"Login",href:"/login"},
  {name:"Forgot Password", href:"/forgot-password"},
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname();
  const [input,setInput]=useState("");
  return (
    <html
      lang="en"
    >
      <body className="">
        {/* <header style={{backgroundColor:"lightblue",padding:"1rem"}}>
          <p>Auth Header</p>
        </header> */}
        <div>
          <input value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
        {navLinks.map((link)=>{
          const isActive= pathname===link.href||(pathname.startsWith(link.href) && link.href!="/");
          return(
            <Link
            className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}
            key={link.href} href={link.href}>{link.name}</Link>
          )
        })}
        {children}
        <footer style={{backgroundColor:"ghostwhite",padding:"1rem"}}>
          <p>Auth Footer</p>
        </footer>
        </body>
        
    </html>
  );
}
