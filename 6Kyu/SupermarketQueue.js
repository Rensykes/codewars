function queueTime(customers, n) {
    if(customers.length === 0) return 0;
    if(n === 1) return customers.reduce(
      (total, num) => total + num
    );
    if(n >= customers.length) return customers.reduce(
      (a, b) =>  Math.max(a, b)
    )
    
    var tills = [];
    //console.log(customers);
    for(var i = 0; i < n; i ++){
      tills.push(customers[i]);
      console.log('Till ' + (i+1) + ': ' + tills[i]);
    }
    
    for(; i<customers.length; i++){
       var isMin = (e) => e == tills.reduce(
        (a, b) =>  Math.min(a, b)
      )
      var minPos = tills.findIndex(isMin);
      tills[minPos] += customers[i];
    }
    
    return tills.reduce(
      (a,b) => Math.max(a,b)
    )
  }