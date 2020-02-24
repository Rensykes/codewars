var f1 = [
  [1, 2, 6, 3, 4, 7, 5, 9, 8],
  [7, 3, 5, 8, 1, 9, 6, 4, 2],
  [1, 9, 4, 2, 7, 5, 8, 6, 3],
  [3, 1, 7, 5, 8, 4, 2, 6, 9],
  [7, 5, 9, 1, 6, 2, 4, 3, 8],
  [4, 8, 2, 9, 3, 6, 7, 1, 5],
  [1, 4, 8, 7, 5, 9, 3, 2, 6],
  [5, 6, 1, 4, 2, 3, 9, 8, 7],
  [2, 7, 3, 6, 9, 1, 8, 5, 4]
];

var f2 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]
];

var f3 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

var t1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var f4 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ];

function validateArr(arr) {
  var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var results = [];
  arr.map(e => {
    results.push(e.every(i => values.includes(i)));
  });
  var found = results.reduce((acc, itm) => acc && itm, true);
  return found;
}

function validateArr2(a){

    var values = [1,2,3,4,5,6,7,8,9].join('');
    var results = [];
    a.map(e=>{
  var temp = [...e];
  var estr = temp.sort((a,b)=>a-b).join('');
  results.push(estr.indexOf(values) != -1);
  
  });
    var found = results.reduce((acc,itm) => acc&&itm, true);
    return found;
  }

function mountRows(a) {
  return a[0].map((_, i) => a.map(row => row[i]));
}

function extract(a) {
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
    newArr.push([]);
  }

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
      if (i < 3) {
        if (j < 3) {
          newArr[0].push(a[i][j]);
        } else if (j < 6) {
          newArr[1].push(a[i][j]);
        } else if (j < 9) {
          newArr[2].push(a[i][j]);
        }
      } else if (i < 6) {
        if (j < 3) {
          newArr[3].push(a[i][j]);
        } else if (j < 6) {
          newArr[4].push(a[i][j]);
        } else if (j < 9) {
          newArr[5].push(a[i][j]);
        }
      } else if (i < 9) {
        if (j < 3) {
          newArr[6].push(a[i][j]);
        } else if (j < 6) {
          newArr[7].push(a[i][j]);
        } else if (j < 9) {
          newArr[8].push(a[i][j]);
        }
      }
    }
  }
  return newArr;
}

function count(arr){
    arr.map(e=>{
        console.log(e.reduce((acc, itm) => acc + itm, 0));
    })
}


function validSolution(board) {
    //TODO
    var val1 = validateArr2(board);
    if (val1) {
      var val2 = validateArr2(mountRows(board));
      if (val2) {
        var val3 = validateArr2(extract(board));
        if (val3) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

console.log('f1', validSolution(f1));
console.log('f2', validSolution(f2));
console.log('f3', validSolution(f3));
console.log('f4', validSolution(f4));
console.log('t1', validSolution(t1));


//solution based on codewarss

function equals45(n){
    return n == 45;
  }
  
  function validSolution(board){
    var sumh = [0,0,0,0,0,0,0,0,0];
    var sumv = [0,0,0,0,0,0,0,0,0];
    osums = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        sumh[i] += board[i][j];
        sumv[j] += board[i][j];
        osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
      }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
  }

