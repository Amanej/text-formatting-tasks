const assert = require('assert');
const textFunctions = require('./textFunctions.js');

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const newsPaperParagraph = 'Du har kanskje sett reklame for dem rundtom på nettet der folk tar dem på seg og blir «mindblown» av lyden. Nuraphone er definitivt ikke som andre hodetelefoner, med særdeles fiffig teknologi innabords, bass ut av en annen verden (om du vil) og et veldig spesiell design.For to år siden samlet skaperne inn over 15 millioner kroner på folkefinanseringstjenesten Kickstarter, og med det var Nuraphone Australias mest innbringende Kickstarter-produkt noensinne.Året senere, altså i 2017, var de i salg i enkelte land, og først nå i høst har de kommet i offisielt salg her i Norge.';
const texts = [{string: loremIpsum, name: 'Lorem Ipsum'},{string: newsPaperParagraph, name: 'Newspaper paragraph 1'}];
const maxWidths = [20,30,40];

describe('Test text formatting functions', () => {
    describe('Max width new line', function() {
        texts.forEach(t => {
            describe('Testing width '+t.name, () => {
                maxWidths.forEach(w => {
                    let formattedText = textFunctions.formatText.toColumns(t.string,w);
                    it('Check that no lines is longer than '+w, function() {
                        let maxLetters = formattedText.split('\n').filter(e => e.length > w);
                        assert.equal(maxLetters.length, 0)
                    });
                });           
            })
        });
    });
    describe('Function: New line after space', () => {
        texts.forEach(t => {
            describe('Testing width '+t.name, () => {
                maxWidths.forEach(w => {
                    let formattedText = textFunctions.formatText.withSpace(t.string,w);
                    it('Check that no lines is longer than '+w, function() {
                        let maxLetters = formattedText.split('\n').filter(e => e.length > w);
                        assert.equal(maxLetters.length, 0)
                    });
                    // Line never start or end with a space
                    it('Whitespace checks', () => {
                        let unTrimmedLines = formattedText.split('\n').filter(e => {
                            return (e.endsWith(' ') || e.startsWith(' '));
                        });
                        assert.equal(unTrimmedLines,false);
                        // Line should never contain just whitespace
                        let linesWithNoSpace = formattedText.split('\n').filter(e => {
                            return false
                        });
                        assert.equal(linesWithNoSpace.length,0);
                    });
                });
            });
        });
    });
    describe('Add hyphen function', () => {
        texts.forEach(t => {
            describe('Testing width '+t.name, () => {
                maxWidths.forEach(w => {
                    let formattedText = textFunctions.formatText.withHyphen(t.string,w);
                    it('Check that no lines is longer than '+w, function() {
                        let maxLetters = formattedText.split('\n').filter(e => e.length > w);
                        assert.equal(maxLetters.length, 0)
                    });
                    // Line should never contain just whitespace
                    it('Whitespace checks', () => {
                        let unTrimmedLines = formattedText.split('\n').filter(e => {
                            return (e.endsWith(' ') || e.startsWith(' '));
                        });
                        assert.equal(unTrimmedLines,false);
                        // Line should never contain just whitespace
                        let linesWithNoSpace = formattedText.split('\n').filter(e => {
                            return false
                        });
                        assert.equal(linesWithNoSpace.length,0);
                    });
                });
            });
        });
    });
});