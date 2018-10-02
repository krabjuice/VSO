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
                    <Route exact path='/sellers' component={Telegram} />
                    <Route exact path='/submission' component={Submissions} />
                    <Route path='/api/' />
                    <Route path='/apple-icon-57x57.png' />
                    <Route path='/apple-icon-60x60.png' />
                    <Route path='/apple-icon-72x72.png' />
                    <Route path='/apple-icon-76x76.png' />
                    <Route path='/apple-icon-114x114.png' />
                    <Route path='/apple-icon-120x120.png' />
                    <Route path='/apple-icon-144x144.png' />
                    <Route path='/apple-icon-152x152.png' />
                    <Route path='/apple-icon-180x180.png' />
                    <Route path='/android-icon-192x192.png' />
                    <Route path='/favicon-32x32.png' />
                    <Route path='/favicon-96x96.png' />
                    <Route path='/favicon-16x16.png' />
                    <Route path='/ms-icon-144x144.png' />
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