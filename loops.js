/*
function forLoop(array){
  for (let i=0; i<25;i++){
  if (i===1){
    array.push(`I am ${i} strange loop.`);
  } else {
    array.push(`I am ${i} strange loops.`);
  }
  }
  return array;
}


function forLoop(array){
  for (let i=0; i<25;i++){
      array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
   return array;
}

function whileLoop(n){
  while (n>=-1){
    n>=0 ? console.log(n) : return "done";
    n--;
  } 
}

*/

function whileLoop(n){
  while (n>=0){
    if (n===0){
      console.log(n);
      console.log("done");
    } else{
      console.log(n);
    }
    n--;
  }
}













