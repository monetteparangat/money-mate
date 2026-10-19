import { useTranslation } from "react-i18next";
import { Col, Row, Card, Space, Progress, Listy, Flex, Typography } from "antd";
import "./index.css";
import {
  ShoppingCartOutlined,
  DollarCircleOutlined,
  CoffeeOutlined,
  HomeOutlined,
  CalendarOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import type {
  Budget,
  RemindersAlert,
  Item,
  Transaction,
} from "@interfaces/Dashboard";

const Page: React.FC = () => {
  const { t } = useTranslation();

  const transactions: Transaction[] = [
    {
      title: "Groceries",
      amount: "$50.00",
      date: "Today",
      icon: <ShoppingCartOutlined />,
    },
    {
      title: "Salary",
      amount: "$2,000.00",
      date: "3 days ago",
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Coffee",
      amount: "$56.00",
      date: "3 days ago",
      icon: <CoffeeOutlined />,
    },
    {
      title: "Rent",
      amount: "$1,200.00",
      date: "April 1",
      icon: <HomeOutlined />,
    },
  ];

  const budgets: Budget[] = [
    {
      title: "Food",
      total: "$300",
      balance: "$500",
    },
    {
      title: "Entertainment",
      total: "$100",
      balance: "$200",
    },
  ];

  const reminders: RemindersAlert[] = [
    {
      title: "Rent Due Tomorrow",
      icon: <CalendarOutlined />,
    },
    {
      title: "Update: Over budget on Food",
      icon: <ExclamationCircleOutlined />,
    },
  ];

  const transactionItems: Item<Transaction>[] = transactions.map(
    (content, id) => ({ id, content }),
  );

  const budgetItems: Item<Budget>[] = budgets.map((content, id) => ({
    id,
    content,
  }));

  const reminderItems: Item<RemindersAlert>[] = reminders.map(
    (content, id) => ({ id, content }),
  );

  return (
    <div>
      <Space orientation="vertical" size="medium" className="container">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title={t("dashboard.card.total.balance")} variant="outlined">
              <h1>$12,345</h1>
            </Card>
          </Col>
          <Col lg={12} xs={24}>
            <Card
              size="small"
              title={t("dashbord.card.monthly.income")}
              variant="outlined"
            >
              <h3>$4,500</h3>
            </Card>
          </Col>
          <Col lg={12} xs={24}>
            <Card
              size="small"
              title={t("dashbord.card.monthly.expense")}
              variant="outlined"
            >
              <h3>$3,200</h3>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col lg={12} xs={24}>
            <Space orientation="vertical" size="medium" className="w-100">
              <Card
                size="small"
                title={t("dashboard.card.savings.goal")}
                variant="outlined"
              >
                <Progress percent={50} />
              </Card>

              <Card
                size="small"
                title={t("dashboard.card.recent.transaction")}
                variant="outlined"
              >
                <Listy<Item<Transaction>>
                  rowKey="id"
                  items={transactionItems}
                  itemRender={(item) => (
                    <Flex gap="middle">
                      {item.content?.icon}
                      <Flex vertical flex="auto">
                        <Flex justify="space-between" gap="small">
                          <Typography.Text strong>
                            {item.content?.title}
                          </Typography.Text>
                          <Typography.Text type="secondary">
                            {item.content?.amount}
                          </Typography.Text>
                        </Flex>
                        <Typography.Text type="secondary">
                          {item.content?.date}
                        </Typography.Text>
                      </Flex>
                    </Flex>
                  )}
                />
              </Card>
            </Space>
          </Col>

          <Col lg={12} xs={24}>
            <Space orientation="vertical" size="medium" className="w-100">
              <Card
                size="small"
                title={t("dashboard.card.budget.overview")}
                variant="outlined"
              >
                <Listy<Item<Budget>>
                  rowKey="id"
                  items={budgetItems}
                  itemRender={(item) => (
                    <Flex gap="middle" align="flex-start">
                      <Flex vertical flex="auto">
                        <Flex justify="space-between" gap="small">
                          <Typography.Text strong>
                            {item.content?.title}
                          </Typography.Text>
                          <Typography.Text type="secondary">
                            {item.content?.total} / {item.content?.balance}
                          </Typography.Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  )}
                />
              </Card>
              <Card
                size="small"
                title={t("dashboard.card.reminder.alerts")}
                variant="outlined"
              >
                <Listy<Item<RemindersAlert>>
                  rowKey="id"
                  items={reminderItems}
                  itemRender={(item) => (
                    <Flex gap="middle">
                      {item.content?.icon}
                      <Flex vertical flex="auto">
                        <Flex justify="space-between" gap="small">
                          <Typography.Text strong>
                            {item.content?.title}
                          </Typography.Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  )}
                />
              </Card>
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Page;
