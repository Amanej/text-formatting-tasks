// Format lines to n characters
const formatTextToColumns = function(string,columnLength) {
    var formattedString = "";
    for(var i = 0; i < string.length; i++) {
        formattedString += string[i];
        if(!((i+1) % columnLength)) {
            formattedString += "\n";
        }
    }
    return formattedString
}

// Split on space
// Format lines to n characters
    /// Conditions
    /// Split space if possible
    /// Shorter than width - close as possible to n characters length
    /// Never end with space
    /// Never just whitespace
const formatTextsByColumnWithSpace = function(string,columnLength) {
    const helperFunctions = {
        // Check each line has no additional characters behind
        lineEndsWithSpace:(line) => {
            return line.endsWith(' ');
        },
        // Adds newline
        addNewLine:(string) => {
            return string += "\n";
        },
        // Create currentline
        createCurrentline:(string,startPosition,endPosition) => {
            return currentLine = string.substring(startPosition,endPosition);
        },
        createPosition:(lastIndex,iCalculable,columnLength) => {
            return position = {
                start: lastIndex ? lastIndex : (iCalculable)-columnLength,
                end: lastIndex ? (lastIndex+columnLength) :(iCalculable)
            };            
        },
        generateLineAndIndex:(string,position) => {
            const currentLine = helperFunctions.createCurrentline(string,position.start,position.end);
            const lastIndexSpace = currentLine.lastIndexOf(" ");
            const lastIndex =  lastIndexSpace+position.start;
            return {
                line: helperFunctions.createCurrentline(currentLine,0,lastIndexSpace),
                lastIndex: lastIndex
            }
        }
    };

    var formattedString = "";
	var lastIndex = null;

    for(var i = 0; i < string.length; i++) {
        const iCalculable = (i+1);
        const lastCharInColumn = !((iCalculable) % columnLength);
        if(lastCharInColumn) {
                // Check current line 
                let position = helperFunctions.createPosition(lastIndex,iCalculable,columnLength);
                const lineAndIndex = helperFunctions.generateLineAndIndex(string,position);
                lastIndex = lineAndIndex.lastIndex;
 
                formattedString += (helperFunctions.addNewLine(lineAndIndex.line.trim()));
                
                // Last line add 
                if(string.length - i < columnLength) {
                    formattedString += string.substring(iCalculable).trim();
                }

        }
    }

    return formattedString
}

// Split with hyphen
const formatTextWithHyphen = function(string,columnLength) {
    const helperFunctions = {
        // Check each line has no additional characters behind
        lineEndsWithSpace:(line) => {
            return line.endsWith(' ');
        },
        // Adds newline
        addNewLine:(string) => {
            return string += "\n";
        },
        // Create currentline
        createCurrentline:(string,startPosition,endPosition) => {
            return currentLine = string.substring(startPosition,endPosition);
        },
        checkWordLength:(string, maxLength) => {
            return string <= maxLength;
        }
    };

    var formattedString = "";
	var lastIndex = null;

    for(var i = 0; i < string.length; i++) {
        if(!((i+1) % columnLength)) {
                let line = '';
                // Check current line 
                let position = {
                    start: lastIndex ? lastIndex : (i+1)-columnLength,
                    end: lastIndex ? (lastIndex+columnLength) :(i+1)
                }
                let currentLine = helperFunctions.createCurrentline(string,position.start,position.end);
                let checkLine = helperFunctions.createCurrentline(string,position.start,position.end+1);

                let lastIndexSpace = checkLine.lastIndexOf(" ");
                if(lastIndexSpace) {
                    lastIndex = lastIndexSpace+position.start;
                    line = helperFunctions.createCurrentline(currentLine,0,lastIndexSpace);
                } else {
                    lastIndex = 10+position.start;
                    line = currentLine+'-';
                }
 
                formattedString += (helperFunctions.addNewLine(line.trim()));
                
                // Last line add 
                if(string.length - i < columnLength) {
                    formattedString += string.substring(i+1).trim();
                }

        }
    }

    return formattedString    
};

module.exports = {formatTextToColumns,formatTextsByColumnWithSpace,formatTextWithHyphen};