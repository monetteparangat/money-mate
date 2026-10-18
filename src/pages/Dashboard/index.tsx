import { useTranslation } from "react-i18next";

const Page: React.FC = () => {
  const { t } = useTranslation();

  return <div>{t("dashboard.title")}</div>;
};

export default Page;
