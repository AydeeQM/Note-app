import createStore from 'redux-zero';

const listbox = [];

const initialState = {
    initialItems: listbox,
    items: []
};

const store = createStore(initialState);
export default store;