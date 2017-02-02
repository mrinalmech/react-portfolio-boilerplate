import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import portfolioApp from './redux/reducers/index'

import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Redirect
} from 'react-router';

//Components
import Layout from './layout/layout'

import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import WorkSingle from './pages/work-single'
import BlogSingle from './pages/blog-single'

//Containers
import WorksContainer from './containerPages/worksContainer'
import BlogContainer from './containerPages/blogContainer'

let store = createStore(portfolioApp);

const app = (
    <Provider store={store}>
        <Router history={browserHistory} onUpdate={() => {
            window.scrollTo(0, 0)
        }}>
            <Redirect from="/" to="/works"/>
            <Route path="/" component={Layout}>
                <Route path="services" component={ServicesPage}/>
                <Route path="about" component={AboutPage}/>
                <Route path="works">
                    <IndexRoute component={WorksContainer}/>
                    <Route path=":id" component={WorkSingle}/>
                </Route>
                <Route path="blog">
                    <IndexRoute component={BlogContainer}/>
                    <Route path=":id" component={BlogSingle}/>
                </Route>
            </Route>
        </Router>
    </Provider>
)

jQuery(function() {
    ReactDOM.render(app, document.getElementById('main'), function() {
        console.timeEnd('react-app');
    });
})
