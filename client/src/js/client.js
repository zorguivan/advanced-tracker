import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/AppStore';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';
import './Reducers/Projects';
import './Reducers/Todos';

class App extends React.Component{
    componentDidMount(){
        console.log("Main did mount");
    }

    render(){
        window.store = Store;
        return (
          <Provider store={Store}>
            <Router history={hashHistory}>
                <Route path="/" component={Home} />
            </Router>
          </Provider>
        )
    }
}


ReactDOM.render(<App></App>, document.getElementById('app'));
