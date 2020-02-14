import { createStore, combineReducers } from 'redux';










store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 50, createdAt: 3000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate());
// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id: 'fsdfsdfsdf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}