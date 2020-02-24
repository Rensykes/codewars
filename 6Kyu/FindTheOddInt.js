//Given an array, find the integer that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    var countDict = {};
    A.map(e=>{
        countDict[e] = 0;
    })
    A.map(e=>{
        countDict[e] += 1;
    })
    for(var i in countDict){
        if(countDict[i]%2 !== 0) return parseInt(i)
    }
  }


//TEST

function doTest(a, n) {
    console.log("A = ", a);
    console.log("n = ", n);
    console.log(findOdd(a) === n);
  };

    doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    /*
    doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    doTest([10], 10);
    doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
    doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
    */
