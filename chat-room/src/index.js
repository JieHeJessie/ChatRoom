import React from 'react';
import ReactDOM from 'react-dom';


import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'

import 'antd-mobile/dist/antd-mobile.css';

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

function Boss(){
    return <p>Boss Page</p>
}

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>        
        </BrowserRouter>     
     </Provider>),    
    document.getElementById('root')
)

