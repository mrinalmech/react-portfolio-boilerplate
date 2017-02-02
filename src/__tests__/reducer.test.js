import {fromJS} from 'immutable';

import pages from '../redux/reducers/pages'

const testState = {
    blogPage: 2,
    worksPage: 2
}

describe('pages',  function() {

    it('should return the initial state', function() {
        expect(pages(undefined, {})).toEqual(fromJS({blogPage: 1, worksPage: 1}));
    });

    it('should react to an action with the type BLOG_PAGE_INCREMENT', function() {
        expect(pages(testState, {type: 'BLOG_PAGE_INCREMENT'})).toEqual(fromJS({blogPage: 3, worksPage: 2}));
    });

    it('should react to an action with the type BLOG_PAGE_DECREMENT', function() {
        expect(pages(testState, {type: 'BLOG_PAGE_DECREMENT'})).toEqual(fromJS({blogPage: 1, worksPage: 2}));
    });

    it('should react to an action with the type WORKS_PAGE_INCREMENT', function() {
        expect(pages(testState, {type: 'WORKS_PAGE_INCREMENT'})).toEqual(fromJS({blogPage: 2, worksPage: 3}));
    });

    it('should react to an action with the type WORKS_PAGE_DECREMENT', function() {
        expect(pages(testState, {type: 'WORKS_PAGE_DECREMENT'})).toEqual(fromJS({blogPage: 2, worksPage: 1}));
    });

});
