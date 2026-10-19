import type React from "react";
import {
  Space,
  Row,
  Col,
  Card,
  Table,
  Button,
  Progress,
  Flex,
  Typography,
  Divider,
} from "antd";
import { useTranslation } from "react-i18next";
import type { Budget } from "@interfaces/Dashboard";
import type { TableProps, ProgressProps } from "antd";
import {
  PlusOutlined,
  FlagOutlined,
  EditOutlined,
  DeleteOutlined,
  SmileTwoTone,
} from "@ant-design/icons";
import "./index.css";

type Saving = {
  title: string;
  progress: string;
  saved: string;
};

type Props<T> = {
  data: T;
};

type MonthlyOverview = {
  totalIncome: string;
  totalExpense: string;
};

const MonthlyOverviewCard: React.FC<Props<MonthlyOverview>> = ({ data }) => {
  const { t } = useTranslation();
  const { totalIncome, totalExpense } = data;

  return (
    <Card title={t("budget.goal.monthly.overview")} variant="outlined">
      <Row align="middle">
        <Col xs={24} md={11}>
          <Flex justify="space-between">
            <Typography>Total Income</Typography>
            <Typography>{totalIncome}</Typography>
          </Flex>
        </Col>

        <Col xs={24} md={2}>
          <Divider orientation="vertical" />
        </Col>

        <Col xs={24} md={11}>
          <Flex justify="space-between">
            <Typography>Total Expense</Typography>
            <Typography>{totalExpense}</Typography>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
};

const SavingsGoalCard: React.FC<Props<Saving>> = ({ data }) => {
  const { Text } = Typography;
  const { title, progress, saved } = data;

  return (
    <div className="savings-card-box">
      <Row>
        <Col span={24}>
          <Text type="success">{title}</Text>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={20}>
          <Progress percent={50} showInfo={false} />
        </Col>
        <Col lg={4}>
          <Space>
            <Button icon={<EditOutlined />} type="default" />
            <Button icon={<DeleteOutlined />} danger />
          </Space>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={20}>
          <Flex justify="space-between" align="flex-start">
            <Typography>{progress}</Typography>
            <Typography>{saved}</Typography>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

const Page: React.FC = () => {
  const { t } = useTranslation();
  const budgetColumn: TableProps<Budget>["columns"] = [
    {
      title: "Category",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Total Budget",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Remaining Balance",
      dataIndex: "balance",
      key: "balance",
    },
  ];

  const budgets: Budget[] = [
    {
      title: "Food",
      total: "$500.00",
      balance: "$80.00",
    },
    {
      title: "Housing",
      total: "$1,200.00",
      balance: "$0.00",
    },
    {
      title: "Fitness",
      total: "$100.00",
      balance: "$60.00",
    },
    {
      title: "Dining",
      total: "$150.00",
      balance: "$95.00",
    },
  ];

  const savings: Saving[] = [
    {
      title: "Emergency Fund",
      progress: "Progress: 60%",
      saved: "Saved: 50%",
    },
    {
      title: "Trip to Japan",
      progress: "Progress: 40%",
      saved: "Saved: 40%",
    },
    {
      title: "New Laptop",
      progress: "Progress: 25%",
      saved: "Saved: 25%",
    },
    {
      title: "Vacation",
      progress: "Progress: 70%",
      saved: "Saved: 70%",
    },
    {
      title: "Car Down Payment",
      progress: "Progress: 15%",
      saved: "Saved: 15%",
    },
  ];

  const monthly: MonthlyOverview = {
    totalExpense: "$4500",
    totalIncome: "$5000",
  };

  const twoColors: ProgressProps["strokeColor"] = {
    "0%": "#108ee9",
    "100%": "#87d068",
  };

  return (
    <div>
      <Space orientation="vertical" size="medium" className="container">
        <Row gutter={[16, 16]}>
          {/* MONTHLY BUDGET */}
          <Col lg={12} sm={24}>
            <Space orientation="vertical" size="middle" className="w-100">
              {/* MONTHLY OVERVIEW */}
              <MonthlyOverviewCard data={monthly} />

              {/* BUDGET AND GOAL */}
              <Card
                title={t("budget.goal.monthly.budget")}
                variant="outlined"
                extra={
                  <Button
                    color="cyan"
                    variant="outlined"
                    icon={<PlusOutlined />}
                  >
                    Add Budget
                  </Button>
                }
              >
                <Table<Budget>
                  className="w-100"
                  dataSource={budgets}
                  columns={budgetColumn}
                  pagination={false}
                />
              </Card>
            </Space>
          </Col>

          <Col lg={12} sm={24}>
            <Space orientation="vertical" size="middle" className="w-100">
              {/* BUDGET HEALTH */}
              <Card title={t("budget.goal.budget.health")} variant="outlined">
                <Flex justify="space-between" align="center">
                  <Typography>Budget Utilization</Typography>
                  <Progress
                    type="circle"
                    percent={90}
                    strokeColor={twoColors}
                  />
                  <Space>
                    <SmileTwoTone style={{ fontSize: 32 }} />
                    <Typography>Good</Typography>
                  </Space>
                </Flex>
              </Card>

              {/* SAVINGS GOALS */}
              <Card
                title={t("budget.goal.savings.goal")}
                variant="outlined"
                extra={
                  <Button
                    color="cyan"
                    variant="outlined"
                    icon={<FlagOutlined />}
                  >
                    Set Savings Goals
                  </Button>
                }
              >
                <Space orientation="vertical" size="middle" className="w-100  ">
                  {savings?.map((item, i) => (
                    <SavingsGoalCard key={i} data={item} />
                  ))}
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Page;
