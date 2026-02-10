// 1. Get the elements from the screen
var msgInput = document.getElementById('message');
var shiftInput = document.getElementById('shift');
var outputDiv = document.getElementById('output');

// 2. This function runs every time you type
function updateCipher() {
    var text = msgInput.value;
    var k = parseInt(shiftInput.value); // Turn the shift string into a number
    
    // If the shift box is empty, treat it as 0
    if (isNaN(k)) {
        k = 0;
    }

    var result = "";

    // 3. Loop through the message character by character
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        var code = text.charCodeAt(i);

        // Check for Uppercase Letter (A-Z) 65-90
        if (code >= 65 && code <= 90) {
            var p = code - 65;          // Map A to 0, B to 1... (0-25)
            var c = (p + k) % 26;       // The Shift Formula
            if (c < 0) c += 26;         // Fix negative results
            result += String.fromCharCode(c + 65); // Map back to Letter
        }
         
        // check for Lowercase Letter (a-z) 97-122
        else if (code >= 97 && code <= 122) {
            var p = code - 97;          // Map a to 0, b to 1...
            var c = (p + k) % 26;       // The Shift Formula (c=p+k mod 26)
            if (c < 0) c += 26;         // Fix negative results
            result += String.fromCharCode(c + 97); // Map back to Letter
        }

        // check Number (0-9) 48-57
        else if (code >= 48 && code <= 57) {
            var p = code - 48;          // Map "0" to 0, "1" to 1...
            var c = (p + k) % 10;       // The Shift Formula (mod 10)
            if (c < 0) c += 10;         // Fix negative results
            result += String.fromCharCode(c + 48); // Map back to Number
        }

        // If it's a space or symbol, just add it as is
        else {
            result += char;
        }
    }

    // Output result in in the blue box
    outputDiv.innerText = result;
}

// Tell the browser to run the function when things change
msgInput.oninput = updateCipher;
shiftInput.oninput = updateCipher;
