

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="">
        <header style={{backgroundColor:"lightblue",padding:"1rem"}}>
          <p>Marketing Header</p>
        </header>
        {children}
        <footer style={{backgroundColor:"ghostwhite",padding:"1rem"}}>
          <p>Marketing Footer</p>
        </footer>
        </body>
        
    </html>
  );
}
