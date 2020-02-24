//Simple Encryption #1 - Alternating Split

function encrypt(text, n) {
    if(text != null) {
    let appoggio = text;
  
    for(let i = 0; i < n; i++){
    let even = [];
    let odd = [];
  
    [...appoggio].map((e,i) => {
     if(i%2) odd.push(e)
     else even.push(e)
    });
    appoggio =  odd.join('') + even.join('');
    }
    return appoggio;
    }
    return null;
  }
  
  function decrypt(encryptedText, n) {
    
    let appoggioStr = encryptedText;
    for(let i = 0; i < n; i++){
      let appoggio = [];
      let evens =  appoggioStr.slice(appoggioStr.length / 2);
      let odds = appoggioStr.slice(0, appoggioStr.length / 2);
    
      for(let i = 0; i < evens.length; i++){
        appoggio.push(evens[i]);
        appoggio.push(odds[i]);
        console.log(appoggio.join(''));
      appoggioStr = appoggio.join('');
      }
    }
    return appoggioStr;
  
  }
  
  
  // T  h  i  s     i  s     a     t  e  s  t  !
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14
  
  
  // h  s  i        e  t  T  i     s  a  t  s  !
  // 1  3  5  7  9 11 13  0  2  4  6  8 10 12 14