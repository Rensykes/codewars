function inArray(array1,array2){
    let newArr = [];
      array1.map(e => {
        array2.map(el => {
          if(el.includes(e) && !newArr.includes(e)){
            newArr.push(e);
          }//newArr.push(e);
        })
      });
      return newArr.sort();
    }