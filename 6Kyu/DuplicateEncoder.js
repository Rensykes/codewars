function duplicateEncode(word){
    let wordLower = word.toLowerCase();
    let newArray = [];
    [...word].map( (e,i) => {
        if( wordLower.substring(wordLower.indexOf(e.toLowerCase()) + 1, wordLower.length).indexOf(e.toLowerCase()) != -1)
        newArray.push(")");
        else 
         newArray.push("(");
      });
      return newArray.join('');
    }