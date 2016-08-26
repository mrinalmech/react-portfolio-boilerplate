import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {hashHistory, Router, Route, IndexRoute, Redirect} from 'react-router';

import Layout from './layout/layout'

import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import WorksPage from './pages/works'
import WorkSingle from './pages/work-single'
import BlogPage from './pages/blog'
import BlogSingle from './pages/blog-single'

const app = (
    <Router history={hashHistory} onUpdate={() => {window.scrollTo(0, 0)}}>
        <Redirect from="/" to="/works"/>
        <Route path="/" component={Layout}>
            <Route path="services" component={ServicesPage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="works">
                <IndexRoute component={WorksPage}/>
                <Route path=":id" component={WorkSingle}/>
            </Route>
            <Route path="blog">
                <IndexRoute component={BlogPage}/>
                <Route path=":id" component={BlogSingle}/>
            </Route>
        </Route>
    </Router>
)

jQuery(function() {
    ReactDOM.render(app, document.getElementById('main'), function() {
        console.timeEnd('react-app');
    });
})
