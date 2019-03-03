// this allows us to use 'dispatch' actions for synchronous requests
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

/* 
	-  reducer
	- initial state
	- enhancers
*/
// const store = createStore(() => [], {}, applyMiddleware());
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        // this is for redux devtools
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
