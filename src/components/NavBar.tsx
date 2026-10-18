import React from "react";
import { Button, Layout, theme, Flex, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { UserOutlined, GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

type Props = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
type MenuItem = Required<MenuProps>["items"][number];

const { Header } = Layout;

const App: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  const { t } = useTranslation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuItem[] = [
    {
      label: t("navbar.menu.language"),
      key: "mail",
      icon: <GlobalOutlined />,
      children: [
        {
          key: "5",
          label: t("navbar.menu.language.english"),
          icon: <TranslationOutlined />,
          onClick: () => i18n.changeLanguage("en"),
        },
        {
          key: "6",
          label: t("navbar.menu.language.filipino"),
          icon: <TranslationOutlined />,
          onClick: () => i18n.changeLanguage("fil"),
        },
      ],
    },
    {
      label: t("navbar.menu.profile"),
      key: "app",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            { label: "Option 1", key: "setting:1" },
            { label: "Option 2", key: "setting:2" },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            { label: "Option 3", key: "setting:3" },
            { label: "Option 4", key: "setting:4" },
          ],
        },
      ],
    },
  ];

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
          <Menu mode="horizontal" items={items} disabledOverflow />
        </Flex>
      </Flex>
    </Header>
  );
};

export default App;
