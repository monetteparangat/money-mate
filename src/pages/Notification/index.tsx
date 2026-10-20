import type React from "react";
import { Space, Row, Col, Table, Button, Card, Badge, Flex } from "antd";
import type { TableProps } from "antd";
import Filter from "./components/Filter";
import type { MenuProps } from "antd";
import {
  BellOutlined,
  CalendarOutlined,
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

type Notification = {
  title: string;
  type: string;
  date: string;
};

const Page: React.FC = () => {
  const notifications: Notification[] = [
    {
      title: "Your monthly budget is almost reached",
      type: "Budget",
      date: "October 19, 2026",
    },
    {
      title: "Electricity bill payment is due soon",
      type: "Reminder",
      date: "October 18, 2026",
    },
    {
      title: "Salary deposit received",
      type: "Transaction",
      date: "October 15, 2026",
    },
    {
      title: "Weekly spending summary is ready",
      type: "Summary",
      date: "October 12, 2026",
    },
  ];

  const notificationColumns: TableProps<Notification>["columns"] = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (_, notification) => (
        <Space size="small" wrap>
          <Button
            type="primary"
            ghost
            size="small"
            icon={<CheckOutlined />}
            aria-label={`Mark "${notification.title}" as read`}
          >
            Mark as read
          </Button>
          <Button
            type="text"
            size="small"
            icon={<EditOutlined />}
            aria-label={`Edit "${notification.title}"`}
          >
            Edit
          </Button>
          <Button
            type="text"
            size="small"
            danger
            icon={<DeleteOutlined />}
            aria-label={`Delete "${notification.title}"`}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const readUnread: MenuProps["items"] = [
    {
      key: "1",
      label: "Read Only",
    },
    {
      key: "2",
      label: "Unread Only",
    },
  ];

  const sort: MenuProps["items"] = [
    {
      key: "1",
      label: "Sort by: Newest First",
    },
    {
      key: "2",
      label: "Sort by: Oldest First",
    },
  ];

  return (
    <div>
      <Space orientation="vertical" size="medium" className="container">
        <Row gutter={[16, 16]}>
          <Col>
            <Filter read={readUnread} sort={sort} />
          </Col>
          <Col span={24}>
            <Table<Notification>
              className="w-100"
              dataSource={notifications}
              columns={notificationColumns}
              rowKey="title"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          {/* Alerts */}
          <Col span={8}>
            <Card>
              <Flex align="center" gap="medium">
                <Badge count={2} color="red">
                  <BellOutlined className="font-20 color-red" />
                </Badge>
                <span>Unread Alerts: 2</span>
              </Flex>
            </Card>
          </Col>

          {/* Reminders */}
          <Col span={8}>
            <Card>
              <Flex align="center" gap="medium">
                <CalendarOutlined className="font-20 color-green" />
                <span>Upcoming Reminders: 3</span>
              </Flex>
            </Card>
          </Col>

          {/* Summary */}
          <Col span={8}>
            <Card>
              <Flex align="center" gap="medium">
                <FileTextOutlined className="font-20 color-blue" />
                <span>Last Summary Generated: Oct 1, 2026</span>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Page;
