const formatText = {
    helperFunctions: {
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
            const currentLine = formatText.helperFunctions.createCurrentline(string,position.start,position.end);
            const lastIndexSpace = currentLine.lastIndexOf(" ");
            const lastIndex =  lastIndexSpace+position.start;
            return {
                line: formatText.helperFunctions.createCurrentline(currentLine,0,lastIndexSpace),
                lastIndex: lastIndex
            }
        }
    },
    // Format lines to n characters
    toColumns:(string,columnLength) => {
        var formattedString = "";
        for(var i = 0; i < string.length; i++) {
            formattedString += string[i];
            if(!((i+1) % columnLength)) {
                formattedString += "\n";
            }
        }
        return formattedString
    },
    // Split on space
    withSpace:(string,columnLength) => {
        var formattedString = "";
        var lastIndex = null;
        for(var i = 0; i < string.length; i++) {
            const iCalculable = (i+1);
            const lastCharInColumn = !((iCalculable) % columnLength);
            if(lastCharInColumn) {
                    // Check current line 
                    let position = formatText.helperFunctions.createPosition(lastIndex,iCalculable,columnLength);
                    const lineAndIndex = formatText.helperFunctions.generateLineAndIndex(string,position);
                    lastIndex = lineAndIndex.lastIndex;
     
                    formattedString += (formatText.helperFunctions.addNewLine(lineAndIndex.line.trim()));
                    
                    // Last line add 
                    if(string.length - i < columnLength) {
                        formattedString += string.substring(iCalculable).trim();
                    }
    
            }
        }
        return formattedString
    },
    // Split with hyphen
    withHyphen:(string,columnLength) => {
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
                    let currentLine = formatText.helperFunctions.createCurrentline(string,position.start,position.end);
                    let checkLine = formatText.helperFunctions.createCurrentline(string,position.start,position.end+1);
    
                    let lastIndexSpace = checkLine.lastIndexOf(" ");
                    if(lastIndexSpace) {
                        lastIndex = lastIndexSpace+position.start;
                        line = formatText.helperFunctions.createCurrentline(currentLine,0,lastIndexSpace);
                    } else {
                        lastIndex = 10+position.start;
                        line = currentLine+'-';
                    }
     
                    formattedString += (formatText.helperFunctions.addNewLine(line.trim()));
                    
                    // Last line add 
                    if(string.length - i < columnLength) {
                        formattedString += string.substring(i+1).trim();
                    }
    
            }
        }
    
        return formattedString    
    }
}

module.exports = {formatText};