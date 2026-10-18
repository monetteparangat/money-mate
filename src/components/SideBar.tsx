import React from "react";
import { Layout, Menu } from "antd";
import type { MenuItem } from "@interfaces/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

const { Sider } = Layout;
type MenuClickInfo = Parameters<NonNullable<MenuProps["onClick"]>>[0];
type Props = {
  collapsed: boolean;
  menuItems: MenuItem[];
};


const App: React.FC<Props> = ({ collapsed, menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick: MenuProps["onClick"] = ({ key }: MenuClickInfo) => {
    navigate(key);
    
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={handleMenuClick}
        selectedKeys={[location.pathname]}
        items={menuItems.map((item) => ({
          key: item.path,
          icon: item.icon,
          label: item.label,
        }))}
      />
    </Sider>
  );
};

export default App;
