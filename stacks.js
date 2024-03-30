/* Stacks */

// functions: push, pop, peek, length

const letters = [];

let word = 'racecar'

let rword = '';

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + ' is a palindrome.');
} else {
  console.log(word + ' is not a palindrome.');
}

function isPalindrome(word) {
  const letters = [];
  let rword = '';

  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  

  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }
  
  if (rword === word) {
    return true;
  } else {
    return false;
  }
}