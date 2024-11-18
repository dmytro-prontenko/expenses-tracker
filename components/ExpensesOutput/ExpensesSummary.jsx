import { StyleSheet, Text, View } from 'react-native';

const ExpensesSummary = ({ expenses, periodName }) => {
  const expenseSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesSummary;
