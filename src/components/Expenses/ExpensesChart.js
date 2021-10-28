import React from 'react';
import Chart from '../Chart/Chart';

// prettier-ignore
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ExpensesChart = (props) => {
  const chartDataPoints = months.map((month) => ({
    label: month,
    value: 0,
  }));
  let totalExpenses = 0;

  props.expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
    totalExpenses += expense.amount;
  });

  return <Chart dataPoints={chartDataPoints} total={totalExpenses} />;
};

export default ExpensesChart;
