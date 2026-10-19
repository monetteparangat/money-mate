export type Budget = {
  title: string;
  total: string;
  balance: string;
};

export type RemindersAlert = {
  title: string;
  icon: React.ReactElement;
};

export interface Item<T> {
  id: number;
  content: T;
}

export type Transaction = {
  title: string;
  amount: string;
  date: string;
  icon?: React.ReactElement;
  description?: string;
  category?: string;
  type?: string;

};
