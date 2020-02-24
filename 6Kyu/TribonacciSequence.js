function tribonacci(signature,n){
    let newArray = signature;
    while(newArray.length - 1 < n){
    
        newArray.push(sumArray(signature));
        signature = newArray.slice(newArray.length-3, newArray.length);
      }
      return newArray.slice(0, n);
    }
    
    const sumArray = (signature) => {
      return signature.reduce((total, toAdd) => { 
          //console.log(total); each iteration total contains the sum of the elements of the array
          return total + toAdd
        }
      );
    }