import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './containers/Home';
import Releases from './containers/Releases/index.js';
import ReleaseSlide from './containers/ReleaseSlide/index.js';
import Artists from './containers/Artists/index.js';
import ArtistSlide from './containers/ArtistSlide/index.js';
import News from './containers/News/index.js';
import About from './containers/About/index.js';
import Sidebar from './containers/Sidebar/index.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <Switch>
            <Sidebar className="layout">
                <Route exact path='/' component={Home} />
                <Route exact path='/news' component={News} />
                <Route exact path='/releases' component={Releases} />
                <Route 
                    exact path='/releases/:cat_num' 
                    component={ReleaseSlide}
                />
                <Route exact path='/artists' component={Artists} />
                <Route 
                    exact path='/artists/:artist_nice_name' 
                    component={ArtistSlide}
                />
                <Route exact path='/about' component={About} />
            </Sidebar>
        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
