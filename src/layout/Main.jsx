import React from 'react'
import Navbar from '../shared/Navbar/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'

export default function Main() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    )
}
