export const Card=({children}:{children:React.ReactNode})=>{

    const cardStyle={
        padding:"100px",
        margin:"10px",
        boxShadow:"0 4px 8px rgpa(0,0,0,0.2)",
        border:"1px solid #ddd",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    };
    return <div style={cardStyle}>{children}</div>
}