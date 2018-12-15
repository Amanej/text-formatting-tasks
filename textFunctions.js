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
/// Split space if possible
/// Shorter than width - close as possible to n characters length
/// Never end with space
/// Never just whitespac
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
        }
    };

    var formattedString = "";
	var lastIndex = null;

    for(var i = 0; i < string.length; i++) {
        if(!((i+1) % columnLength)) {
                // Check current line 
                let position = {
                    start: lastIndex ? lastIndex : (i+1)-columnLength,
                    end: lastIndex ? (lastIndex+columnLength) :(i+1)
                }
                let currentLine = helperFunctions.createCurrentline(string,position.start,position.end);
				let lastIndexSpace = currentLine.lastIndexOf(" ");
				lastIndex = lastIndexSpace+position.start;
				let l = helperFunctions.createCurrentline(currentLine,0,lastIndexSpace);
 
                formattedString += (helperFunctions.addNewLine(l.trim()));
                
                // Last line add 
                if(string.length - i < columnLength) {
                    formattedString += string.substring(i+1).trim();
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
                console.log(currentLine);
                let lastIndexSpace = currentLine.lastIndexOf(" ");
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