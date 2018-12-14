// Format lines to n characters
function formatTextToColumns(string,columnLength) {
    var formattedString = "";
    for(var i = 0; i < string.length; i++) {
        formattedString += string[i];
        if(!((i+1) % columnLength)) {
            formattedString += "\n";
        }
    }
    console.log(formattedString)
    return formattedString
}

//formatTextToColumns("Heisann",2);


// Split on space

// Format lines to n characters
/// Split space if possible
/// Shorter than width - close as possible to n characters length
/// Never end with space
/// Never just whitespac
function columnTextBySpace(string,columnLength) {
    let formattedString = "";
    for(var i = 0; i < string.length; i++) {
        formattedString += string[i];
        if(!((i+1) % columnLength)) {
            // Find space
            let startPosition = (i+1);
            let endPosition = (i+1)+columnLength;
            var currentLine = string.slice(endPosition-columnLength,endPosition);

            console.log(startPosition,endPosition);
            console.log(currentLine);

            /*currentLine.lastIndexOf(" ");

            formattedString += currentLine.slice(currentLine.lastIndexOf(" "), 0, "\n")*/

        }
    }
    return formattedString
}

function formatTextToColumnsWithSpace(string,columnLength) {
    var formattedString = "";
    for(var i = 0; i < string.length; i++) {
        formattedString += string[i];
        if(!((i+1) % columnLength)) {
            if(formattedString.length && (formattedString.lastIndexOf(' ') === i)) {
                formattedString += "\n";
            } else {
                // Check current line 
                let startPosition = (i+1)-columnLength;
                let endPosition = (i+1);
                var currentLine = formattedString.substring(startPosition,endPosition)
                console.log(currentLine);
            }
        }
    }
    //console.log(formattedString)
    return formattedString
}

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
//console.log(columnTextBySpace(loremIpsum,12))

formatTextToColumnsWithSpace(loremIpsum,30);
//columnTextBySpace(loremIpsum,12)
//formatTextToColumns(loremIpsum,2);



// Check each line has no additional characters behind
function lineEndsWithSpace(line) {
	return line.endsWith(' ');
}

// Adds newline
function addNewLine(string) {
	return string += "\n";
}

// Create currentline
function createCurrentline(string,startPosition,endPosition) {
    return currentLine = string.substring(startPosition,endPosition);
}

function formatTextsByColumn(string,columnLength) {
    var formattedString = "";
	var lastIndex = null;

    for(var i = 0; i < string.length; i++) {
        if(!((i+1) % columnLength)) {
			

                // Check current line 
                let startPosition = lastIndex ? lastIndex : (i+1)-columnLength;
                let endPosition = lastIndex ? (lastIndex+columnLength) :(i+1);

				console.log("startPosition ",startPosition,endPosition);

				
                var currentLine = createCurrentline(string,startPosition,endPosition);

                //console.log(currentLine);
				var lastIndexSpace = currentLine.lastIndexOf(" ");
				lastIndex = lastIndexSpace+startPosition;
				var l = createCurrentline(currentLine,0,lastIndexSpace);

                console.log(l);
                
                formattedString += (addNewLine(l.trim()));

        }
    }
    //console.log(formattedString)
    return formattedString
}

/* 
function columnTextBySpace(string,columnLength) {
    let formattedString = "";
	let lastIndex = 0;
    for(var i = 0; i < string.length; i++) {
        formattedString += string[i];
        if(!((i+1) % columnLength)) {
            // Find space
            let endPosition = (i+1);
			let currentLine = "";
			if(lastIndex) {
            	let currentLine = string.slice(endPosition-columnLength,endPosition);
			} else {
            	let currentLine = string.slice(lastIndex,endPosition);
			}
            let lastSpace = currentLine.lastIndexOf(" ");
			lastIndex = lastSpace+i;

			let newLine = currentLine.slice(0,lastSpace)
            formattedString += (newLine += "\n");
        }
    }
    return formattedString
}
*/



/*
function formatTextToColumnsSpace(string,columnLength) {
    var formattedString = "";
    for(var i = 0; i < string.length; i++) {
        formattedString += string[i];
        if(!((i+1) % columnLength)) {
			let arr = formattedString.split('');
			arr.splice(formattedString.lastIndexOf(" "),0,"\n");

			formattedString += arr.join('');
        }
    }
    return formattedString
}
*/

// Split with hyphen