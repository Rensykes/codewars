var moveZeros = function (arr) {
    // TODO: Program me
    var newArr = [];
    var zeroArr = [];
    arr.map(e => {
      if(e === 0) {
        zeroArr.push(e) 
        } else {
        newArr.push(e);
        }
    });
    return newArr.concat(zeroArr);
  }