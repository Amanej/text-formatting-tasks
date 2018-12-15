const assert = require('assert');
const textFunctions  = require('./textFunctions.js');

const loremIpsumString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const newsPaperParagraph = 'Du har kanskje sett reklame for dem rundtom på nettet der folk tar dem på seg og blir «mindblown» av lyden. Nuraphone er definitivt ikke som andre hodetelefoner, med særdeles fiffig teknologi innabords, bass ut av en annen verden (om du vil) og et veldig spesiell design.For to år siden samlet skaperne inn over 15 millioner kroner på folkefinanseringstjenesten Kickstarter, og med det var Nuraphone Australias mest innbringende Kickstarter-produkt noensinne.Året senere, altså i 2017, var de i salg i enkelte land, og først nå i høst har de kommet i offisielt salg her i Norge.';


describe('Test text formatting functions', function() {
    const maxWidths = [10,20,30,40];
    describe('Max width new line', function() {
        // Test Max Width of New Line
            maxWidths.forEach(w => {
                console.log('Width ',w);
                var formatTextTo10 = textFunctions.formatTextToColumns(loremIpsumString,w);
                it('Check that no lines is longer than '+w, function() {
                    var maxLetter10 = formatTextTo10.split('\n').filter(e => e.length > w);
                    assert.equal(maxLetter10.length, 0)
                });
            });           
    });
    describe('New line after space', function() {
        maxWidths.forEach(w => {
            var formattedText = textFunctions.formatTextsByColumnWithSpace(newsPaperParagraph,w);
            it('Check that no lines is longer than '+w, function() {
                var maxLetters = formattedText.split('\n').filter(e => e.length > w);
                assert.equal(maxLetters.length, 0)
            });
        });
    });
    describe('Add hyphen function', function() {
        maxWidths.forEach(w => {
            var formattedText = textFunctions.formatTextWithHyphen(newsPaperParagraph,w);
            it('Check that no lines is longer than '+w, function() {
                var maxLetters = formattedText.split('\n').filter(e => e.length > w);
                assert.equal(maxLetters.length, 0)
            });
        });

    });
});