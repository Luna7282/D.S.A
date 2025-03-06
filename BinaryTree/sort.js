arr =[1,334,34523,3234,234,32,434,1232,]

function bubbleSort(array){
    let isSwap;
  
    do {
      isSwap = false
      for(let i = 0; i < array.length; i++){
        if(array[i] && array[i+1] && array[i] > array[i+1]){
          const temp = array[i]
          array[i] = array[i+1]
          array[i+1] = temp
          isSwap = true
        }
      }
  
    } while (isSwap);
    return array
  }
  
  console.log(bubbleSort(arr))