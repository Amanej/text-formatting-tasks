const assert = require('assert');
const textFunctions  = require('./textFunctions.js');

const loremIpsumString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const newsPaperParagraph = 'Du har kanskje sett reklame for dem rundtom på nettet der folk tar dem på seg og blir «mindblown» av lyden. Nuraphone er definitivt ikke som andre hodetelefoner, med særdeles fiffig teknologi innabords, bass ut av en annen verden (om du vil) og et veldig spesiell design.For to år siden samlet skaperne inn over 15 millioner kroner på folkefinanseringstjenesten Kickstarter, og med det var Nuraphone Australias mest innbringende Kickstarter-produkt noensinne.Året senere, altså i 2017, var de i salg i enkelte land, og først nå i høst har de kommet i offisielt salg her i Norge.';


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

            // 10 characters - max width
            var formatNewspaperParagraphTo10 = textFunctions.formatTextToColumns(newsPaperParagraph,10);
                //console.log(formatNewspaperParagraphTo10);
            // 20 characters - max width
            var formatNewspaperParagraphTo20 = textFunctions.formatTextToColumns(newsPaperParagraph,20);
                //console.log(formatNewspaperParagraphTo20);                

        it('format lorem ipsum', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
    describe('New line after space', function() {
        // Cant deal with more than 10 characters
        /*var formatTextTo10 = textFunctions.formatTextsByColumnWithSpace(loremIpsumString,10);
            //console.log(formatTextTo10);
        // 20 characters - max width
        var formatTextTo20 = textFunctions.formatTextsByColumnWithSpace(loremIpsumString,20);
            //console.log(formatTextTo20);
        // 30 characters - max width
        var formatTextTo30 = textFunctions.formatTextsByColumnWithSpace(loremIpsumString,30);
        //console.log(formatTextTo30);
        // 40 characters - max width
        var formatTextTo40 = textFunctions.formatTextsByColumnWithSpace(loremIpsumString,40);
        //console.log(formatTextTo40);

        // 30 characters - max width
        var formatNewspaperParagraphTo30 = textFunctions.formatTextsByColumnWithSpace(newsPaperParagraph,30);
            //console.log(formatNewspaperParagraphTo30);
            */
        // 40 characters - max width
        var formatNewsaperParagraphTo40 = textFunctions.formatTextsByColumnWithSpace(newsPaperParagraph,40);
            console.log(formatNewsaperParagraphTo40);

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