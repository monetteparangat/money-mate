import type React from "react";
import { Input, Space, Col, Dropdown, Button } from "antd";
import type { GetProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useTranslation } from "react-i18next";

type SearchProps = GetProps<typeof Input.Search>;

type Props = {
  items: MenuProps["items"]
};

const Component: React.FC<Props> = ({ items }) => {
  const { t } = useTranslation();
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <Space>
      <Col xs={24}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Col>
      <Col xs={24}>
        <Dropdown trigger={["click"]} menu={{ items }}>
          <Button>
            <Space>
              {t("transaction.filter.by")}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Col>
      <Col xs={24}>
        <Dropdown trigger={["click"]} menu={{ items }}>
          <Button>
            <Space>
              {t("transaction.filter.by")}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Col>
    </Space>
  );
};

export default Component;
