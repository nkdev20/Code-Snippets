import {createStore , combineReducers} from 'redux';
import uuid from 'uuid';


//Add expense
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//Edit expense
//Remove expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//SET text Filter
//Sort by date
//sort by amount
//set start date
//set end date


//expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ] 
            
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id;
             });
            
        default: 
            return state;
    }
};

//Filter reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};


//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({description : 'rent', amount : 600}));
const expense2 = store.dispatch(addExpense({description : 'cofee', amount : 200}));

console.log(expense1);
const re = store.dispatch(removeExpense({id: expense1.expense.id}))
// console.log(re);
console.log(expense1);


const demoState = {
    expenses:[{
        id:'test',
        description: 'This sissf  fsefsf',
        note: 'This jusefsis id final note',
        amount: 5335,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const obj1 = {
    name:'jen',
    age:24
};

console.log({...obj1, rest:"sefsef", age:27});


