import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/Index';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Telegram from './components/Telegram/Telegram';
import Submissions from './components/Submission/Submissions';
import VSOWhite from './assests/images/VSOWhite.png';

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/sellers' component={Telegram} />
                    <Route exact path='/submission' component={Submissions} />
                    <Route path='/api/' />
                    <Route path='*' component={Handle404} />
                </Switch>
            </div>
        )
    }
}

const page404 = {
    color: "white",
}

class Handle404 extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <img src={VSOWhite} alt='VSO Logo' width='300px' height='300px'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center font-weight-bold' style={page404}>
                            Sorry, but the page you tried visiting doesn't exist!
                        </h1>
                    </div>
                </div>
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