import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        // incrementBy : incrementBy
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const store = createStore((state = { count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof(action.incrementBy) === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof(action.decrementBy) === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
});



const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy : 5}));

store.dispatch(incrementCount({incrementBy : 99}));

store.dispatch(decrementCount({decrementBy: 100}))

unsubscribe();


store.dispatch(
    {
        type: 'INCREMENT'
    }
)



store.dispatch(
    {
        type: 'RESET'
    }
)

console.log(store.getState());


