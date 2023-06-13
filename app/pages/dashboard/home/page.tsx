'use client';

import Sidebar from "@/components/dashboard/Sidebar"
import Footer from "@/components/dashboard/Footer";

import { useState } from "react"
const DashboardHome = () => {
    const [online, setOnline] = useState(true);
    return (<>
        {/* <Sidebar online={online}/>
        <Footer/> */}
    </>)
}

export default DashboardHome;