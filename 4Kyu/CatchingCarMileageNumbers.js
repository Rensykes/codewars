function checkZeros(number) {
    var plusOne = number + 1;
    var plusTwo = number + 2;
  if (
    number
      .toString()
      .substring(1)
      .split("")
      .every(e => e == 0) && number > 99
  ) {
    return 2;
  } else if (
    plusOne
      .toString()
      .substring(1)
      .split("")
      .every(e => e == 0) && plusOne > 99
  ) {
    return 1;
  } else if (
    plusTwo
      .toString()
      .substring(1)
      .split("")
      .every(e => e == 0) && plusTwo > 99 
  ) {
    return 1;
  } else {
    return 0;
  }
}

function checkSame(number){
    var plusOne = number + 1;
    var plusTwo = number + 2;
    var first = number.toString().substring(0,1);
    var firstPlusOne = plusOne.toString().substring(0,1);
    var firstPlusTwo = plusTwo.toString().substring(0,1);


    if (
        number.toString().split('').every(e => e==first) && number> 99
      ) {
        return 2;
      } else if (
        plusOne
        .toString().split('').every(e => e==firstPlusOne) && plusOne > 99
      ) {
        return 1;
      } else if (
        plusTwo
        .toString().split('').every(e => e==firstPlusTwo) && plusTwo > 99
      ) {
        return 1;
      } else {
        return 0;
      }
}

function checkSeqIncr(number){
    var numbers = "1234567890";
    var plusOne = number + 1;
    var plusTwo = number + 2;

    if(numbers.indexOf(String(number)) !== -1 && number > 99){
        return 2
    } else if (numbers.indexOf(String(plusOne)) !== -1 && plusOne > 99){
        return 1
    } else if (numbers.indexOf(String(plusTwo)) !== -1 && plusTwo > 99 ){
        return 1
    } else {
        return 0
    }
}

function checkSeqDecr(number){
    var numbers = "9876543210";
    var plusOne = number + 1;
    var plusTwo = number + 2;

    if(numbers.indexOf(String(number)) !== -1 && number > 99){
        return 2
    } else if (numbers.indexOf(String(plusOne)) !== -1 && plusOne > 99){
        return 1
    } else if (numbers.indexOf(String(plusTwo)) !== -1 && plusTwo > 99){
        return 1
    } else {
        return 0
    }
}

function getMiddleStr(number){
    var plusOne = String(number + 1);
    var plusTwo = String(number + 2);
    var str = String(number);

    var obj =  {
        middleStr: str.substr(0, str.length/2),
        middleStrReversed : str.substr(str.length/2).split('').reverse().join(''),
        middleStrPlusOne: plusOne.substr(0, plusOne.length/2),
        middleStrReversedPlusOne : plusOne.substr(plusOne.length/2).split('').reverse().join(''),
        middleStrPlusTwo: plusTwo.substr(0, plusTwo.length/2),
        middleStrReversedPlusTwo : plusTwo.substr(plusTwo.length/2).split('').reverse().join('')
    }

    return obj;
}

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }

function checkPalindrome(number){
    var plusOne = String(number + 1);
    var plusTwo = String(number + 2);
    var str = String(number);

    if(palindrome(str)) return 2;
    if(palindrome(plusOne) || palindrome(plusTwo)) return 1;
    return 0;
}

function matchingAwesomePhrases(number, awesomePhrases){
    if (awesomePhrases.length > 0){
        var plusOne = number + 1;
        var plusTwo = number + 2;
        //console.log(number, plusOne, plusTwo);

        for (var i=0; i<awesomePhrases.length; i++) {
            if (number === awesomePhrases[i]) return 2;
          }
        for (var i=0; i<awesomePhrases.length; i++) {
            if (plusOne === awesomePhrases[i] || plusTwo === awesomePhrases[i]) return 1;
          }
        return 0;
    } else {
        return 0;
    }

}

function isInteresting(number, awesomePhrases) {
    //A number is only interesting if it is greater than 99!
    //Input will always be an integer greater than 0, and less than 1,000,000,000.
    if(number + 2> 99 && number <= 1000000000){
        var res = checkSame(number);
        if(res > 0 ) return res;
        var res =  checkZeros(number);
        if(res  > 0 ) return res;
        var res = checkSeqIncr(number);
        if(res > 0 ) return res;
        var res = checkSeqDecr(number);
        if(res > 0 ) return res;
        var res = checkPalindrome(number);
        if(res > 0 ) return res;
        var res =  matchingAwesomePhrases(number, awesomePhrases);
        if(res > 0 ) return res;
        return 0;
    } else {
        return 0;
    }
}

/*
2 if the number is "interesting" (see below),
1 if an interesting number occurs within the next two miles,
0 if the number is not interesting.

Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000 OK
Every digit is the same number: 1111 OK
The digits are sequential, incementing†: 1234 OK
The digits are sequential, decrementing‡: 4321 OK
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

Error Checking

A number is only interesting if it is greater than 99!
Input will always be an integer greater than 0, and less than 1,000,000,000.
The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
You should only ever output 0, 1, or 2.

Test.assertEquals(isInteresting(3, [1337, 256]),     0);
Test.assertEquals(isInteresting(1336, [1337, 256]),  1);
Test.assertEquals(isInteresting(1337, [1337, 256]),  2);
Test.assertEquals(isInteresting(11208, [1337, 256]), 0);
Test.assertEquals(isInteresting(11209, [1337, 256]), 1);
Test.assertEquals(isInteresting(11211, [1337, 256]), 2);
*/


/**
* The sequential number would always be a subset to "0123456789".
* For instance, 1234, 4567, 2345, etc are all subset of "0123456789".
* To validate, this function uses 'indexOf' method present on String Object.
* you can read more about 'indexOf' at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/
function checkSeq(number){
    var numbers = "1234567890";
    //If reverse sequence is also needed to be checked
    var numbersRev = "9876543210";
    //Returns false, if the number is in sequence
    return numbers.indexOf(String(number)) === -1 && numbersRev.indexOf(String(number)) === -1;    
}

/*
//solution from other warriors using mostly regexp
function isInteresting(number, awesomePhrases) {
    var tests = [
      function(n) { return /^\d00+$/.test(n); },
      function(n) { return /^(\d)\1+$/.test(n); },
      function(n) { return RegExp(n).test(1234567890); },
      function(n) { return RegExp(n).test(9876543210); },
      function(n) { return n + '' == (n + '').split('').reverse().join(''); },
      function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
    ];
    
    var interesting = 0;
    tests.some(function(test) {
      if (number > 99 && test(number))
        return interesting = 2;
      else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
        interesting = 1;
    });
    return interesting;
  }
  */