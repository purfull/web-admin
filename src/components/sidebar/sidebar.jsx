import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideNavBar = ({ expand, toggleexpanded }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 600 && window.innerWidth < 992
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 600);
      setIsTablet(width > 600 && width < 992);
      setIsDesktop(width >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: <Link to="/dashboard/reports">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <ContainerOutlined />,
      label: "Template",
      children: [
        {
          key: "2-1",
          label: <Link to="/dashboard/new-template">Add Template</Link>,
        },
        {
          key: "2-2",
          label: <Link to="/dashboard/my-template">My Template</Link>,
        },
      ],
    },
    {
      key: "3",
      icon: <DesktopOutlined />,
      label: "Channels",
      children: [
        {
          key: "3-1",
          label: <Link to="/dashboard/contact">WhatsApp</Link>,
        },
      ],
    },
    {
      key: "4",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard/settings">Settings</Link>,
    },
    {
      key: "5",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard/support">Support</Link>,
    },
    {
      key: "6",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard/support">Home</Link>,
    },
  ];

  return (
    //     <div className={ "side-nav-bar-container"   style={{ width: expand ? "20%" : "50%", transition: "width 0.3s ease" }}
    // }><div
    //   <div className={`side-nav-bar-container ${expand? "collapsed" : "expand"}`}
    //   // style={{ width: expand ? "20%" : "50%", transition: "width 0.3s ease",  }}
    // >
    // <div className={`side-nav-bar-container`}>
    <div
      className={`side-nav-bar-container ${
        isMobile || isTablet ? (expand ? "expand" : "collapsed") : ""
      }`}
    >
      {/*  <div
      className={`side-nav-bar-container ${expand ? "expand" : "collapsed"}`}
     > */}
      <div className="side-nav-logo-container">
        <div className="logo-row">
          <span className="logo-icon">{/* icon */} </span>
          {!collapsed && <div className="logo-title">Botho Admin</div>}
          {(isMobile || isTablet) && (
            <div className="hamburger-menu">
              <MenuOutlined onClick={toggleexpanded} />
            </div>
          )}
        </div>
      </div>

      <div className="side-nav-menu-wrapper">
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          inlineCollapsed={isMobile || isTablet ? !expand : false}
          // inlineCollapsed={!expand}
          // inlineCollapsed={collapsed}
          items={items}
          className="menu-bar"
        />
      </div>
    </div>
  );
};

export default SideNavBar;
