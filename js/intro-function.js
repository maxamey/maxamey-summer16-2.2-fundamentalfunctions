var myObject = {
  superPower: "som text",
  anotherProperty: "something"

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    // YOUR CODE HERE
    if(a > b){
      return a;
    }else{
      return b;
    }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    // YOUR CODE HERE
    if(a > b && a > c){
      return a;
    }else if(b > c && b > a){
      return b;
    }else{
      return c;
    }
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    // YOUR CODE HERE
    if(char == "A" || char == "a" || char == "E" || char == "e" || char == "I" || char == "i" || char == "O" || char == "o" || char == "U" || char == "u"){
      return true;
    }else if(char == [0-9]){
      return "0";
    }else{
      return false;
    }
}


console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */
function rovarspraket(text){
    // YOUR CODE HERE
    var textToReturn = "";
    for (var i = 0; i < text.length; i++){
      var currentLetter = text[i];
      if(!isVowel(currentLetter)){
        textToReturn += currentLetter + "o" + currentLetter;
      }else{
        textToReturn += currentLetter;
      }
    }
//passes through another if statement if the output is " ".
    if(textToReturn === ""){
      return "0";
    }else{
    return textToReturn
    }
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    // YOUR CODE HERE
    /*    http://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
    */
    // - splits the input string into an array
    // - reverses it
    // - "joins" it back together
    // ONLY WORKS WITH SRTINGS OF ASCII CHARACTERS

    return str.split("").reverse().join("");
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE
    //https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#.20mdxoulc
    var longestWord
    //split the string into an array
    var stringSplit = sentence.split(" ");

    // var srtingNoPunc = stringSplit.replace(/\'/, "");

    //set up variable to hold the longest word
    var longestWord = "";
    //set up variable for largest value of words for compairing
    var largestValue = 0;
    //if the length of the current iteration of the function is greater than the largest value, then the largest value will be set to that length and the current word will be redefined as the new longest word
    for (var i = 0; i < stringSplit.length; i++){
      if(stringSplit[i].length > largestValue){
        longestWord = stringSplit[i];
        largestValue = stringSplit[i].length;
      }
    }
    return longestWord;
}

// spent hours trying to figure this out
//couldn't find a good example of how I would apply in this instance




console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
