import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux'; 
import {logger} from 'redux-logger';

const feelingReducer = (state='1', action) => {
    if(action.type === 'ADD_FEELING_RATING') {
        return action.payload;
    }
    return state;
}
const contentReducer = (state='1', action) => {
    if(action.type === 'ADD_CONTENT_RATING') {
        return action.payload;
    }
    return state;
}
const supportReducer = (state='1', action) => {
    if(action.type === 'ADD_SUPPORT_RATING') {
        console.log('in support', action.payload);
        
        return action.payload;
    }
    return state;
}

const thankYouReducer = (state='', action) => {
    if(action.type === 'SUBMIT_THANKYOU_RATING') {
        return action.payload;
    }
    return state;
}

const commentReducer = (state='', action) => {
    if(action.type === 'ADD_COMMENT_RATING') {
        return action.payload;
    }
    return state;
}
const reviewReducer = (state='', action) => {
    if(action.type === 'ADD_REVIEW_RATING') {
        return action.payload;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        contentReducer,
        supportReducer,
        thankYouReducer,
        commentReducer,
        reviewReducer
    }),

    applyMiddleware(logger)
)

ReactDOM.render(< Provider store={storeInstance}><App /></ Provider>, document.getElementById('root'));
registerServiceWorker();

