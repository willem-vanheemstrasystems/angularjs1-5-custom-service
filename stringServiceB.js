myApp.factory("stringService", function() {
    // Return a JavaScript object
    return {
        processString: function(input) {
            // Check for empty input or null
            if(!input) {
                // Don't do any processing
                return input;
            }
            var output = "";
            // Loop through each character within the input string
            for(var i=0; i < input.length; i++) {
                // Look for Uppercase character, but skip the first character
                if(i > 0 && input[i] == input[i].toUpperCase(input[i])) {
                    // We have found an Uppercase character
                    // Append a single space character to output
                    output = output + " ";
                }
                // Append the current input character to output
                output = output + input[i];
            }
            return output;
        }
    };
});
