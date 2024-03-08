let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Step 1: Remove the last string
secretMessage.pop();

// Step 2: Check the length of the array
console.log(secretMessage.length);

// Step 3: Add 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');

// Step 4: Change 'easily' to 'right'
secretMessage[secretMessage.indexOf('easily')] = 'right';

// Step 5: Remove the first string
secretMessage.shift();

// Step 6: Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');

// Step 7: Replace multiple strings with 'know'
secretMessage.splice(secretMessage.indexOf('get'), 5, 'know');

// Step 8: Print the secret message as a sentence
console.log(secretMessage.join(' '));