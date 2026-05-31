// import UserAnalytics from "path/to/UserAnalytics";
// import RevenueMetrics from "path/to/RevenueMetrics";
// import Notifications from "path/to/Notifications";


export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}:{
    children:React.ReactNode;
    users:React.ReactNode;
    revenue:React.ReactNode;
    notifications:React.ReactNode;
    login:React.ReactNode;
}){
    let isLoggedIn=true;
    return isLoggedIn?(
        <>
        <div>{children}</div>  {/*Content from page.tsx */}
        <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
                
            </div>
            <div style={{display:"flex", flex:1}}>{notifications}</div>
        </div>
        </>
    ):(
        <div>{login} <button>Click for login</button></div>
    )
}