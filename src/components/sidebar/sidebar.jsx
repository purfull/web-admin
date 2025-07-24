import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: <Link to="/dashboard/reports">Dashboard</Link>
    },
    {
      key: "2",
      icon: <ContainerOutlined />,
      label: "Template",
      children: [
        {
          key: "2-1",
          label: <Link to="/dashboard/new-template">Add Template</Link>
        },
        {
          key: "2-2",
          label: <Link to="/dashboard/my-template">My Template</Link>
        }
      ]
    },
    {
      key: "3",
      icon: <DesktopOutlined />,
      label: "Channels",
      children: [
        {
          key: "3-1",
          label: <Link to="/dashboard/contact">WhatsApp</Link>
        }
      ]
    },
    {
      key: "4",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard/settings">Settings</Link>
    },
    {
      key: "5",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard/support">Support</Link>
    },
       {
      key: "6",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard/support">Home</Link>
    }
  ];
  return (
    <div className="side-nav-bar-container">
      <div className="side-nav-logo-container">
        <div className="logo-row">
          <span className="logo-icon">{/* icon */}</span>
          {!collapsed && <div className="logo-title">Botho Admin</div>}
        </div>
      </div>

      <div className="side-nav-menu-wrapper">
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          className="menu-bar"
        />
      </div>
    </div>
  );
};

export default SideNavBar;
