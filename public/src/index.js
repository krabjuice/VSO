import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/Index';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Telegram from './components/Telegram/Telegram';
import Submissions from './components/Submission/Submissions';

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/telegram' component={Telegram} />
                    <Route exact path='/submission' component={Submissions} />
                    <Route path='/api/' />
                    <Route path='*' component={Handle404} />
                </Switch>
            </div>
        )
    }
}

const page404 = {
    color: "black",
}

class Handle404 extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center font-weight-bold' style={page404}>
                    Sorry, but the page you tried visiting doesn't exist!
                </h1>
            </div>
        )
    }
}

ReactDOM.render(
    (<BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('VSO')
);

registerServiceWorker();