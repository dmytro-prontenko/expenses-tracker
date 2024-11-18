import { FlatList, StyleSheet, View } from 'react-native';
import ExpensesListItem from './ExpensesListItem';

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={ExpensesOutput}
        renderItem={ExpensesListItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesList;
