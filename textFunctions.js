// Format lines to n characters
export const formatTextToColumns = function(string,columnLength) {
    var formattedString = "";
    for(var i = 0; i < string.length; i++) {
        formattedString += string[i];
        if(!((i+1) % columnLength)) {
            formattedString += "\n";
        }
    }
    //console.log(formattedString)
    return formattedString
}

// Split on space
// Format lines to n characters
/// Split space if possible
/// Shorter than width - close as possible to n characters length
/// Never end with space
/// Never just whitespac
export const formatTextsByColumnWithSpace = function(string,columnLength) {
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
                let startPosition = lastIndex ? lastIndex : (i+1)-columnLength;
                let endPosition = lastIndex ? (lastIndex+columnLength) :(i+1);
				//console.log("startPosition ",startPosition,endPosition);				
                var currentLine = helperFunctions.createCurrentline(string,startPosition,endPosition);
                //console.log(currentLine);
				var lastIndexSpace = currentLine.lastIndexOf(" ");
				lastIndex = lastIndexSpace+startPosition;
				var l = helperFunctions.createCurrentline(currentLine,0,lastIndexSpace);

                //console.log(l);
                
                formattedString += (helperFunctions.addNewLine(l.trim()));

        }
    }
    //console.log(formattedString)
    return formattedString
}

// Split with hyphen