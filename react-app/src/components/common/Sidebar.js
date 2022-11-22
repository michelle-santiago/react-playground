import React from 'react'
import { menu } from '../../constants/menu';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    const menuItem = menu;
    return (
        <div>Sidebar
            <ul className="menu  text-s">
                {menuItem.map((item, index) => (
                    <li key={index} className="no-underline flex flex-row">
                    <NavLink to={item.path} className="w-60 text-center">
                        <div className="flex gap-4 pt-2 pb-2">
                        <span>{item.name}</span>
                        </div>
                    </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar