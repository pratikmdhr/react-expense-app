import React, { useState, useEffect } from 'react';
import NewExpense from './components/Expenses/new expense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// const INITIAL_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 499.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 3, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

const App = () => {
  let storedList = JSON.parse(localStorage.getItem('storedList'));
  const initialExpenses = () => {
    if (storedList) {
      // To parse date(in string format) stored in localstorage
      storedList.forEach((listItem) => {
        listItem.date = new Date(listItem.date);
      });
      return storedList;
    } else return [];
  };

  const [expenses, setExpenses] = useState(initialExpenses);

  useEffect(
    () => localStorage.setItem('storedList', JSON.stringify(expenses)),
    [expenses]
  );

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => [expense, ...previousExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
