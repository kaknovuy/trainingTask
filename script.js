var binArray = [[1,1,0],[0,1,0,1,0,6],[1,1,1,0,1]];

var row = 0;
for (let i = 0; i < binArray.length; i++) {
   if(binArray[i].length >= row)
        row = binArray[i].length;    
}

var col = binArray.length;

var a = searchMaxSum(binArray);
var b = foo(binArray);

function searchMaxSum(array) {    
    var sumOfRow = [0], maxRow = [0];    
   
    for (let i = 0; i < array.length; i++) {
         maxRow[i] = array[i].reduce(function(sum, current) {
            return sum + current;
          }, 0);
          sumOfRow[i] = maxRow[i];   
    }  
   return  sumOfRow;
}

function foo(array){
    var maxColumn=new Array(col);    
    for (var k = 0; k < binArray.length; k++) {
        maxColumn[k]=new Array(row);
        maxColumn[k]=0;        
    }
   var sumOfColumn = [0];
   
    for (var i = 0; i < array.length; i++) {   
       for (var j = 0; j < array.length; j++) { 
            if(array[j][i] == 0)
                continue;   
             
            maxColumn[i] = +maxColumn[i] + array[j][i];           
       }
       sumOfColumn[i] = maxColumn[i];   
    }
    return sumOfColumn;
}
console.log(2);

// for (let index = 0; index < sumOfRow.length; index++) {
//     console.log(`sumOfRow${index}`, sumOfRow[index]);      
// }
// for (let index = 0; index < sumOfColumn.length; index++) {
//       console.log(`sumOfColumn${index}`, sumOfColumn[index]);        
// }
    

    // array[j].reduce(function(sum, current) {
    //     return sum + current;
    //   }, 0);
    //   sumOfColumn[j] = maxColumn[j];
    //   j+=2;    
// if(maxRow[i] >= sumOfRow[i])
//     sumOfRow[i] = maxRow[i];
// a.reduce(function(a, b) { return a + b; }, 0);
// for (let i = 0; i < array.length; i++) {

//     sumOfRow[i] =  sumOfRow[i] + array[i];
//     sumOfColumn[i] = new Array(array[i].length);

//      for (let j = 0; j < array.length; j++) {
//          if(array[j] != NaN)
//              sumOfColumn[i][j] += array[i][j];       
//          else
//              break;         
//      }
//  }