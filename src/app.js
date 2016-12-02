import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import pages from './redux/reducers/pages'

import {
    hashHistory,
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Redirect
} from 'react-router';

import Layout from './layout/layout'

import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import ReduxWorksPage from './redux-pages/redux-works'
import WorkSingle from './pages/work-single'
import ReduxBlogPage from './redux-pages/redux-blog'
import BlogSingle from './pages/blog-single'

let store = createStore(pages);

const app = (
    <Provider store={store}>
        <Router history={hashHistory} onUpdate={() => {
            window.scrollTo(0, 0)
        }}>
            <Redirect from="/" to="/works"/>
            <Route path="/" component={Layout}>
                <Route path="services" component={ServicesPage}/>
                <Route path="about" component={AboutPage}/>
                <Route path="works">
                    <IndexRoute component={ReduxWorksPage}/>
                    <Route path=":id" component={WorkSingle}/>
                </Route>
                <Route path="blog">
                    <IndexRoute component={ReduxBlogPage}/>
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
