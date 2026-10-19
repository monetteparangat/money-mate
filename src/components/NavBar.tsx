import React from "react";
import { Button, Layout, theme, Flex, Menu } from "antd";
import type { MenuProps } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

type NavBarItem = Required<MenuProps>["items"][number];
type Props = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  navbarMenuItems?: NavBarItem[];
};


const { Header } = Layout;

const App: React.FC<Props> = ({ collapsed, setCollapsed, navbarMenuItems }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Flex>

        <Flex align="center">
          <Menu mode="horizontal" items={navbarMenuItems} disabledOverflow />
        </Flex>
      </Flex>
    </Header>
  );
};

export default App;
