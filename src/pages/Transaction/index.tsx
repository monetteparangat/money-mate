import type React from "react";
import FilterSearch from "./components/FilterSearch";
import { Button, Space, Table, Row } from "antd";
import type { TableProps, MenuProps } from "antd";
import type { Transaction } from "@interfaces/Dashboard";
import { PlusOutlined } from "@ant-design/icons";

const App: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  const transactions: Transaction[] = [
    {
      title: "Salary",
      amount: "$2,000.00",
      date: "April 5, 2024",
      description: "Monthly salary",
      category: "Income",
      type: "Income",
    },
    {
      title: "Groceries",
      amount: "$50.00",
      date: "April 4, 2024",
      description: "Supermarket shopping",
      category: "Food",
      type: "Expense",
    },
    {
      title: "Gym Membership",
      amount: "$40.00",
      date: "April 3, 2024",
      description: "Monthly gym fee",
      category: "Fitness",
      type: "Expense",
    },
    {
      title: "Rent Payment",
      amount: "$1,200.00",
      date: "April 1, 2024",
      description: "Apartment rent",
      category: "Housing",
      type: "Expense",
    },
    {
      title: "Coffee Shop",
      amount: "$5.00",
      date: "March 28, 2024",
      description: "Latte and snack",
      category: "Dining",
      type: "Expense",
    },
  ];

  const transColumns: TableProps<Transaction>["columns"] = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="medium">
          <a>Edit </a>
          <a>Delete </a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space orientation="vertical" size="medium" className="container">
        <Row gutter={[16, 16]}>
          <Row className="w-100" justify="space-between" align="middle">
            <FilterSearch items={items} />
            <Button color="cyan" variant="outlined" icon={<PlusOutlined />}>
              Add Transaction
            </Button>
          </Row>

          <Row className="w-100">
            <Table<Transaction>
              className="w-100"
              dataSource={transactions}
              columns={transColumns}
            />
          </Row>
        </Row>
      </Space>
    </div>
  );
};

export default App;
