import {blogPageIncrement, blogPageDecrement, worksPageIncrement, worksPageDecrement} from '../redux/actions/index'

describe('actions', function() {

    describe('blogPageIncrement', function() {
        it('should have a type of "BLOG_PAGE_INCREMENT"', function() {
            expect(blogPageIncrement().type).toEqual('BLOG_PAGE_INCREMENT');
        });
    });

    describe('blogPageDecrement', function() {
        it('should have a type of "BLOG_PAGE_DECREMENT"', function() {
            expect(blogPageDecrement().type).toEqual('BLOG_PAGE_DECREMENT');
        });
    });

    describe('worksPageIncrement', function() {
        it('should have a type of "WORKS_PAGE_INCREMENT"', function() {
            expect(worksPageIncrement().type).toEqual('WORKS_PAGE_INCREMENT');
        });
    });

    describe('worksPageDecrement', function() {
        it('should have a type of "WORKS_PAGE_DECREMENT"', function() {
            expect(worksPageDecrement().type).toEqual('WORKS_PAGE_DECREMENT');
        });
    });

});
