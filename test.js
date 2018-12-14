const assert = require('assert');
const textFunctions  = require('./textFunctions.js');

const loremIpsumString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const newsPaperParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


describe('Test text formatting functions', function() {
    describe('Max width new line', function() {
        // Test Max Width of New Line
            // No max width
            var formattedLoremIpsum = textFunctions.formatTextToColumns(loremIpsumString);
                //console.log(formattedLoremIpsum);
            // 10 characters - max width
            var formatTextTo10 = textFunctions.formatTextToColumns(loremIpsumString,10);
                //console.log(formatTextTo10);
            // 20 characters - max width
            var formatTextTo20 = textFunctions.formatTextToColumns(loremIpsumString,20);
                //console.log(formatTextTo20);
        it('format lorem ipsum', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
    describe('New line after space', function() {
        // Cant deal with more than 10 characters
        var formatTextTo10 = textFunctions.formatTextsByColumnWithSpace(loremIpsumString,10);
            //console.log(formatTextTo10);
        // 20 characters - max width
        var formatTextTo20 = textFunctions.formatTextsByColumnWithSpace(loremIpsumString,20);
            //console.log(formatTextTo20);
        // 30 characters - max width
        var formatTextTo30 = textFunctions.formatTextsByColumnWithSpace(loremIpsumString,30);
        console.log(formatTextTo30);
        // 40 characters - max width
        var formatTextTo40 = textFunctions.formatTextsByColumnWithSpace(loremIpsumString,40);
        console.log(formatTextTo40);
        it('format lorem ipsum', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
    describe('Add hyphen function', function() {
        it('format lorem ipsum', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});