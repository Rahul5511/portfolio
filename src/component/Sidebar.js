import React from "react";
import { IMAGE_DATA } from "../utils/ImageData";
import { Link, NavLink } from "react-router-dom";
import '../css/sidebar.css'

const Sidebar = () => {
    return (
        <div className="bg-gray-900 h-screen w-64 fixed left-0 top-0 overflow-y-auto">
            <div className="flex items-center justify-center h-72 border-b border-gray-800">
                {/* Circular image placeholder */}
                <div className="h-44 w-44 bg-white rounded-full flex items-center justify-center">
    <img src={IMAGE_DATA.userAvtar} alt="Profile" className="h-full w-full rounded-full object-cover" />
                    {/*<span className="text-gray-900 text-xl">👤</span>*/}
                </div>
                
            </div>
            <ul className="pl-0">
            <NavLink exact to='/' activeClassName="active bg-blue-500" className="block text-gray-400 transition duration-300 no-underline relative z-10">
            <li className="px-6 py-3 border-b border-gray-800 flex justify-center relative overflow-hidden sidebar-link">
              Home
              <div className="absolute inset-y-0 left-0 w-full bg-transparent transition-all duration-300 origin-left scale-x-0 hover:scale-x-100"></div>
            </li>
          </NavLink>
          
                <Link to='/about' activeClassName="active bg-blue-500" className="block text-gray-400 transition duration-300 no-underline relative z-10 ">
                <li className="px-6 py-3 border-b border-gray-800 flex justify-center relative overflow-hidden sidebar-link">
                  About
                  <div className="absolute inset-y-0 left-0 w-full bg-transparent transition-all duration-300 origin-left scale-x-0 hover:scale-x-100"></div>
                </li>
              </Link>
              

              <Link to='/resume' activeClassName="active bg-blue-500" className="block text-gray-400 transition duration-300 no-underline relative z-10 ">
              <li className="px-6 py-3 border-b border-gray-800 flex justify-center relative overflow-hidden sidebar-link">
                Resume
                <div className="absolute inset-y-0 left-0 w-full bg-transparent transition-all duration-300 origin-left scale-x-0 hover:scale-x-100"></div>
              </li>
            </Link>
            
                <li className="px-6 py-3 border-b border-gray-800 flex justify-center relative overflow-hidden">
                    <a href="#" className="block text-gray-400 transition duration-300 no-underline relative z-10">
                        Services
                    </a>
                    <div className="absolute inset-y-0 left-0 w-full bg-transparent transition-all duration-300 origin-left scale-x-0 hover:scale-x-100"></div>
                </li>
                <Link to='/contact' activeClassName="active bg-blue-500" className="block text-gray-400 transition duration-300 no-underline relative z-10 ">
                <li className="px-6 py-3 border-b border-gray-800 flex justify-center relative overflow-hidden sidebar-link">
                   Contact
                  <div className="absolute inset-y-0 left-0 w-full bg-transparent transition-all duration-300 origin-left scale-x-0 hover:scale-x-100"></div>
                </li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar;
