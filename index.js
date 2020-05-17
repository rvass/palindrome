

// Returns true for a palindrome, false otherwise
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

// Returns an array of the username and domain for a standard email address
function emailParts(email) {
    return email.toLowerCase().split("@");
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
  }
  
  
// Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    
    this.processor = function(string) {
        return this.content.toLowerCase();
    }

    // Returns content processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }

    // add a louder method to the Phrase object that returns a LOUDER (all-caps) version of the content.
    this.louder = function() {
        return this.content.toUpperCase();
    }
}

// Defines a translated phrase object
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}



TranslatedPhrase.prototype = new Phrase();


// Exercises 7.3.1 
String.prototype.blank = function() {
    if (this.length === 0) {
      return true;
    } 
    return false;
  }


Array.prototype.last = function() {
    return this[this.length-1];
}

