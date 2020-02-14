import uuid from 'uuid';


//add expenses
export const addExpense = ({description = '', notes = '', amount = 0, createdAt = 0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            notes,
            amount,
            createdAt
        }
        
    }
}

//remove expense

export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

//edit expense

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

