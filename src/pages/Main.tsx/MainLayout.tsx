import React, { useState } from "react";
import { Layout } from "antd";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { useMenuItems, useNavbarMenuItems } from "./utils/constants";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import TransactionForm from "../TransactionForm";
import "./main.css"

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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-transaction" element={<TransactionForm />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
