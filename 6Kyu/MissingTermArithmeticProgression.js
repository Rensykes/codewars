//Find the missing term in an Arithmetic Progression
var findMissing = function (list) {  
    var difference = ( list[list.length - 1] - list[0] ) / list.length;
  
    for(var i = 0; i < list.length; i++){
      if(list.indexOf(list[i] + difference) == -1) return list[i] + difference;
    }
   
  }