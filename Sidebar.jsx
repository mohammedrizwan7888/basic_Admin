import React from "react";
import {BsCart3,BsGridFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
   BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs';
function Sidebar({openSidebarToggle, openSidebar})  {
    // Your component logic here
    return( 
      <aside id= "sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <BsCart3 className='icon_header'/> WORKEZY
            </div>
            <span className='icon close_icon'onClick={openSidebar}> </span>
          </div>

          <ul className="sidebar-list">
            <li className="sidebar-list-item">
                <a href="">
                  <BsGridFill className='icon'/> Dashboard
                </a>

            </li>
            <li className="sidebar-list-item">
                <a href="">
                  <BsFillArchiveFill className='icon'/> Serivce Seekers
                </a>

            </li>
            <li className="sidebar-list-item">
                <a href="">
                  <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>

            </li>
            <li className="sidebar-list-item">
                <a href="">
                  <BsPeopleFill className='icon'/> Customers
                </a>

            </li>
            <li className="sidebar-list-item">
                <a href="">
                  <BsListCheck className='icon'/> Inventory
                </a>

            </li>
            <li className="sidebar-list-item">
                <a href="">
                  <BsMenuButtonWideFill className='icon'/> Reports
                </a>

            </li>
            <li className="sidebar-list-item">
                <a href="">
                  <BsFillGearFill className='icon'/> Setting
                </a>

            </li>
          </ul>
    </aside>
    )
  };
  
  export default Sidebar;
  