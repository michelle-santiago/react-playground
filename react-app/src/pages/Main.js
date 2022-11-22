import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from '../components/common/Sidebar';
const Main = () => {
  return (
    <div>Main
        <div className='flex flex-row'>
        <Sidebar/>
        <Outlet/>
        </div>
        
        
    </div>
  )
}

export default Main