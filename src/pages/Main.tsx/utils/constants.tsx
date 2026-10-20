import type { MenuItem } from "@interfaces/Menu";
import { PlusCircleOutlined, DashboardOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { MenuProps } from "antd";
import {
  UserOutlined,
  GlobalOutlined,
  TranslationOutlined,
  WalletOutlined,
  BellOutlined,
} from "@ant-design/icons";

type NavBarItem = Required<MenuProps>["items"][number];

export const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();

  return [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: t("menu.dashboard.title"),
      path: "/",
    },
    {
      key: "2",
      icon: <PlusCircleOutlined />,
      label: t("menu.transaction.title"),
      path: "/transaction",
    },
    {
      key: "3",
      icon: <WalletOutlined />,
      label: t("menu.budget.goal"),
      path: "/budget-goal",
    },
    {
      key: "4",
      icon: <BellOutlined />,
      label: t("menu.notification"),
      path: "/notification",
    },
  ];
};

export const useNavbarMenuItems = (): NavBarItem[] => {
  const { t, i18n } = useTranslation();

  return [
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
};
