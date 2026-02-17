// Grab all the new wrappers
var cipherSelect = document.getElementById('cipherSelect');
var inputsWrapper = document.getElementById('inputs-wrapper');
var resultWrapper = document.getElementById('result-wrapper');

// Original inputs
var msgInput = document.getElementById('message');
var shiftInput = document.getElementById('shift');
var outputDiv = document.getElementById('output');

// STEP 1: Reveal inputs when a cipher is selected
cipherSelect.onchange = function() {
    if (cipherSelect.value === "ceasar") {
        inputsWrapper.style.display = "block";
    } else {
        inputsWrapper.style.display = "none";
        resultWrapper.style.display = "none"; // Hide everything if reset
    }
};

// STEP 2: The Math & Reveal Result
function updateCipher() {
    var text = msgInput.value;
    var k = parseInt(shiftInput.value) || 0;
    
    // Only show the result box if there is actually text to encrypt
    if (text.length > 0) {
        resultWrapper.style.display = "block";
    } else {
        resultWrapper.style.display = "none";
    }

    var result = "";

    for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i);

        // Uppercase A-Z
        if (code >= 65 && code <= 90) {
            var p = code - 65;
            var c = (p + k) % 26;
            if (c < 0) c += 26;
            result += String.fromCharCode(c + 65);
        }
        // Lowercase a-z
        else if (code >= 97 && code <= 122) {
            var p = code - 97;
            var c = (p + k) % 26;
            if (c < 0) c += 26;
            result += String.fromCharCode(c + 97);
        }
        // Numbers 0-9
        else if (code >= 48 && code <= 57) {
            var p = code - 48;
            var c = (p + k) % 10;
            if (c < 0) c += 10;
            result += String.fromCharCode(c + 48);
        }
        else {
            result += text[i];
        }
    }
    outputDiv.innerText = result;
}

// Event Listeners
msgInput.oninput = updateCipher;
shiftInput.oninput = updateCipher;
