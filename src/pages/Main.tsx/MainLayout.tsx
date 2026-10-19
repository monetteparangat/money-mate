import React, { useState } from "react";
import { Layout } from "antd";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { useMenuItems, useNavbarMenuItems } from "./utils/constants";
import { AppRoutes } from "../../routes/route";
import "./main.css";

const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const menuItems = useMenuItems();
  const navbarMenuItems = useNavbarMenuItems();

  return (
    <Layout>
      <SideBar collapsed={collapsed} menuItems={menuItems} />
      <Layout>
        <NavBar
          collapsed={collapsed}
          setCollapsed={handleCollapse}
          navbarMenuItems={navbarMenuItems}
        />
        <Content className="content">
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
