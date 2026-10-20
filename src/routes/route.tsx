import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import TransactionForm from "../pages/TransactionForm";
import Transaction from "../pages/Transaction";
import BudgetGoal from "../pages/BudgetGoal";
import Notification from "../pages/Notification";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/add-transaction" element={<TransactionForm />} />
      <Route path="/budget-goal" element={<BudgetGoal />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
};
