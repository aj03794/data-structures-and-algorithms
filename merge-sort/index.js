// Split the array into halves and merge them recursively 
function mergeSort (arr) {

    console.log({ arr })

    if (arr.length === 1) {
      // return once we hit an array with a single item
      console.log('asdfas')
      return arr
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    console.log({ middle, left, right })

    console.log('=====================================')
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  // compare the arrays item by item and return the concatenated result
  function merge(left, right) {

    console.log('-------------------------------------')
    console.log({ left, right })

    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
        console.log(left[indexLeft], right[indexRight])
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    //   console.log({ result })
    }
  
    console.log({ result, indexRight, indexLeft })
    console.log('left slice',left.slice(indexLeft))
    console.log('right slice', right.slice(indexRight))
    console.log(result.concat(left.slice(indexLeft)).concat(right.slice(indexRight)))
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
  
  const list = [2, 5, 1, 4, 7, 8]
  console.log('aasdfasf', mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]