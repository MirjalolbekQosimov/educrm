import React from "react";
import "./adminbody.css";
import LeftSideBar from "./leftSideBar/LeftSideBar";
import { Outlet } from "react-router-dom";
import AdminHeader from "../adminHeader/AdminHeader";
import { useTheme } from "../../context/ThemeContext";
import { useModal } from "../../context/Addmodal";



function AdminBody() {

  const {isNightMode} = useTheme();
  const {isModalOpen} = useModal();
  
  return (
    <div>
    <AdminHeader/>
      <div className="adminBody">
        <LeftSideBar/>
        <div className={isNightMode ? 'mainBody' : 'mainBody dark'}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default AdminBody;
