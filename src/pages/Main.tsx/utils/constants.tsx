import type { MenuItem } from "@interfaces/Menu";
import { PlusCircleOutlined, DashboardOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

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
      path: "/add-transaction",
    },
  ];
};