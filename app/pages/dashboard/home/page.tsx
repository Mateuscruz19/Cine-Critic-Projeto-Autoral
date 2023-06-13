'use client';

import Sidebar from "@/components/dashboard/Sidebar"
import Footer from "@/components/dashboard/Footer";
import { getCookie } from 'cookies-next';

import { useEffect, useState } from "react"
export default function DashboardHome () {

    const [online, setOnline] = useState(true);
    return (<>
        {/* <Sidebar online={online}/>
        <Footer/> */}
    </>)
}
