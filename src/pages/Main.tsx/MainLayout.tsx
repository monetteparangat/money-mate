import React, { useState } from "react";
import { Layout, theme } from "antd";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { useMenuItems } from "./utils/constants";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import TransactionForm from "../TransactionForm";

const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  }
  const menuItems = useMenuItems();

  return (
    <Layout>
      <SideBar collapsed={collapsed} menuItems={menuItems} />
      <Layout>
        <NavBar collapsed={collapsed} setCollapsed={handleCollapse} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
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
