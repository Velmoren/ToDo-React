import { createStore } from 'redux';
import reducer from './reducers'

const saveToLocalStorage = (state) => {
    try {
        const appState = JSON.stringify(state);
        localStorage.setItem("appState", appState);
    } catch (e) {
        console.warn(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const appState = localStorage.getItem("appState");

        if (appState === null) return undefined;
        return JSON.parse(appState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = createStore(reducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;