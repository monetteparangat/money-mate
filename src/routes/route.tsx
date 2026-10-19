import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import TransactionForm from "../pages/TransactionForm";
import Transaction from "../pages/Transaction"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/add-transaction" element={<TransactionForm />} />
    </Routes>
  );
};
