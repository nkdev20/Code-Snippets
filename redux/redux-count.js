import {createStore} from 'redux';

const add = ({a, b}) =>  a + b;
console.log(add({a:2,b:5}));

// const incrementCount = (payload = {}) => ({
//     type : 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy
})

const reset = () => ({
    type: 'RESET'
});

const set = ({count} = {}) => ({
    type: 'SET',
    count
});

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return{
                count:state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count- action.decrementBy
            };
        case 'RESET':
            return{
                count:0
            };
        case 'SET':
            return{
                count:action.count
            };
        default: 
            return state;
    }
}; 

const store = createStore(countReducer);

//Actions object that gets sent to store
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
//increement a count
// store.dispatch({
//     incrementCount(),
//     incrementBy: 5
// });

// unsubscribe();
store.dispatch(
    incrementCount()
);

console.log("hello");
console.log(incrementCount({incrementBy: 5}));
// store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch(reset());

store.dispatch(set({count:101}));
// console.log(store.getState());

