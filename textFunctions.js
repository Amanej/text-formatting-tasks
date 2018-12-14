// Format lines to n characters
const formatTextToColumns = function(string,columnLength) {
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
        // Check current line 
        let startPosition = lastIndex ? lastIndex : (i+1)-columnLength;
        let endPosition = lastIndex ? (lastIndex+columnLength) :(i+1);
        if(!((i+1) % columnLength)) {

				//console.log("startPosition ",startPosition,endPosition);				
                var currentLine = helperFunctions.createCurrentline(string,startPosition,endPosition);
                //console.log(currentLine);
				var lastIndexSpace = currentLine.lastIndexOf(" ");
				lastIndex = lastIndexSpace+startPosition;
				var l = helperFunctions.createCurrentline(currentLine,0,lastIndexSpace);

                //console.log(l);
                
                formattedString += (helperFunctions.addNewLine(l.trim()));
                
                // Last line add 
                if(string.length - i < columnLength) {
                    console.log("Adding line ",i,l);
                }

        } else if((string.length-i) === (columnLength-1)) { //(string.length - i) < columnLength
            /*
                console.log("Last string",i,((string.length-i)-columnLength));
                //console.log(string.substring((i+1)-columnLength));
                var _newString = string.substring((i+1)-columnLength);
                console.log(_newString,_newString.length);
                console.log("String length ",string.length," Current index ",i," ColumnLength ",columnLength);
                //console.log(string.length - i);
                //console.log(i,string[i],columnLength, ((i+1) % columnLength));
            
           let fullRemainderString = string.substring((i+1)-columnLength);
           let currentLine = fullRemainderString.substring(0,columnLength);
           let lastIndex = currentLine.lastIndexOf(' ');
           //console.log("lastIndex ",lastIndex);
           let secondLastString = currentLine.substring(0,lastIndex);
           console.log("fullRemainderString ",fullRemainderString);
           console.log("secondLastString",secondLastString);
           console.log(formattedString);
           //formattedString += ('\n'+secondLastString+'\n').trim();
           // Split last line
           //formattedString += fullRemainderString.substring(lastIndex);

           /*
           let currentLine = helperFunctions.createCurrentline(string,startPosition,endPosition);
           let lastIndexSpace = currentLine.lastIndexOf(" ");
           let lastIndex = lastIndexSpace+startPosition;
           let l = helperFunctions.createCurrentline(currentLine,0,lastIndexSpace);
           let almostLastString = (helperFunctions.addNewLine(l.trim()));
           //console.log('almostLastString ',almostLastString);
           console.log(lastIndex);
           let remainderString = string.substring(lastIndex);
           formattedString += remainderString;
           */
            //console.log('remainderString ',remainderString);
            
        }
        /*
        console.log("Line! ",i);
        if(!(i+1 < string.length)) {
            console.log("Last!")
        }
        */
    }
    //console.log(formattedString)
    return formattedString
}

// Split with hyphen

module.exports = {formatTextToColumns,formatTextsByColumnWithSpace};